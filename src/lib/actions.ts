"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import QRCode from "qrcode";
import crypto from "crypto";

type QRCodeFormValues = {
  name: string;
  targetUrl?: string;
  customProxyId?: string;
  isMobileApp?: boolean;
  iosAppUrl?: string;
  androidAppUrl?: string;
  iosDeeplink?: string;
  androidDeeplink?: string;
  universalDeeplink?: string;
  isSubscriptionOffer?: boolean;
  subscriptionWebUrl?: string;
  ambassadorId?: string;
};

export async function createQRCode(formData: QRCodeFormValues) {
  try {
    // Si c'est une application mobile, l'URL cible peut être celle d'une des app stores
    let targetUrl = formData.targetUrl || '';
    if (formData.isMobileApp && (!targetUrl || targetUrl === 'https://')) {
      targetUrl = formData.iosAppUrl || formData.androidAppUrl || "https://app.redirect";
    }
    
    // Ensure target URL has http/https prefix
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = `https://${targetUrl}`;
    }
    
    // Pour les apps mobiles, s'assurer que les URL sont bien formatées
    let iosAppUrl = formData.iosAppUrl || '';
    let androidAppUrl = formData.androidAppUrl || '';
    let subscriptionWebUrl = formData.subscriptionWebUrl || '';
    
    // Traitement des deeplinks
    let iosDeeplink = formData.iosDeeplink || '';
    let androidDeeplink = formData.androidDeeplink || '';
    let universalDeeplink = formData.universalDeeplink || '';
    
    if (formData.isMobileApp) {
      if (!iosAppUrl && !androidAppUrl) {
        throw new Error('Pour une application mobile, vous devez fournir au moins un lien iOS ou Android.');
      }
      
      if (iosAppUrl && !iosAppUrl.startsWith('http')) {
        iosAppUrl = `https://${iosAppUrl}`;
      }
      
      if (androidAppUrl && !androidAppUrl.startsWith('http')) {
        androidAppUrl = `https://${androidAppUrl}`;
      }
      
      // Validation des deeplinks (pas besoin de préfixe http pour les deeplinks)
      // Les deeplinks peuvent être sous la forme myapp:// ou https:// pour les universal links
    }
    
    // Pour une offre d'abonnement, on doit avoir une URL web
    if (formData.isSubscriptionOffer) {
      // Si un ambassadeur est sélectionné, l'URL d'abonnement devient optionnelle
      // car on utilise le flux de paiement intégré
      if (!subscriptionWebUrl && !formData.ambassadorId) {
        throw new Error('Pour une offre d\'abonnement sans ambassadeur, vous devez fournir une URL web.');
      }
      
      if (subscriptionWebUrl && !subscriptionWebUrl.startsWith('http')) {
        subscriptionWebUrl = `https://${subscriptionWebUrl}`;
      }
    }
    
    // Generate a unique proxy ID or use custom one if provided
    const proxyId = formData.customProxyId && formData.customProxyId.trim() !== '' 
      ? formData.customProxyId.trim() 
      : crypto.randomBytes(6).toString('hex');
    
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    // Format correct de l'URL pour le QR code - sans slash à la fin de appUrl
    const baseUrl = appUrl.endsWith('/') ? appUrl.slice(0, -1) : appUrl;
    const proxyUrl = `${baseUrl}/q/${proxyId}`;
    
    console.log(`Création d'un QR code avec URL proxy: ${proxyUrl}`);
    
    // Vérifier si l'ID personnalisé existe déjà
    if (formData.customProxyId && formData.customProxyId.trim() !== '') {
      const existingQRCode = await prisma.qRCode.findFirst({
        where: {
          proxyUrl
        }
      });
      
      if (existingQRCode) {
        throw new Error('Cette URL personnalisée est déjà utilisée. Veuillez en choisir une autre.');
      }
    }
    
    // Create QR code in database
    const qrCode = await prisma.qRCode.create({
      data: {
        name: formData.name,
        targetUrl,
        proxyUrl,
        isMobileApp: formData.isMobileApp || false,
        iosAppUrl: formData.isMobileApp ? iosAppUrl : null,
        androidAppUrl: formData.isMobileApp ? androidAppUrl : null,
        iosDeeplink: formData.isMobileApp ? iosDeeplink : null,
        androidDeeplink: formData.isMobileApp ? androidDeeplink : null,
        universalDeeplink: formData.isMobileApp ? universalDeeplink : null,
        isSubscriptionOffer: formData.isSubscriptionOffer || false,
        subscriptionWebUrl: formData.isSubscriptionOffer ? subscriptionWebUrl : null,
        ambassadorId: formData.isSubscriptionOffer && formData.ambassadorId ? formData.ambassadorId : null,
        analytics: {
          create: {
            visitCount: 0,
            uniqueVisitors: 0,
          }
        }
      },
      include: {
        ambassador: true // Inclure les détails de l'ambassadeur dans le résultat
      }
    });
    
    // Log pour débogage
    if (formData.isSubscriptionOffer && formData.ambassadorId) {
      console.log("QR code d'offre d'abonnement créé avec ambassadeur:", formData.ambassadorId);
      console.log("Détails du QR code:", JSON.stringify(qrCode, null, 2));
    }
    
    // Revalidate the admin page
    revalidatePath('/admin');
    
    return qrCode;
  } catch (error) {
    console.error('Error creating QR code:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to create QR code');
  }
}

export async function deleteQRCode(qrCodeId: string) {
  try {
    // Vérifier si le QR code existe
    const qrCode = await prisma.qRCode.findUnique({
      where: { id: qrCodeId },
      include: { analytics: true }
    });
    
    if (!qrCode) {
      throw new Error('QR code not found');
    }
    
    // Supprimer d'abord les analytics associées
    if (qrCode.analytics && qrCode.analytics.length > 0) {
      await prisma.analytics.deleteMany({
        where: { qrCodeId: qrCodeId }
      });
    }
    
    // Puis supprimer le QR code lui-même
    await prisma.qRCode.delete({
      where: { id: qrCodeId }
    });
    
    // Revalidate the admin page
    revalidatePath('/admin');
    
    return { success: true, message: 'QR code supprimé avec succès' };
  } catch (error) {
    console.error('Erreur lors de la suppression du QR code:', error);
    throw new Error('Échec de la suppression du QR code');
  }
}

export async function trackQRCodeVisit(qrCodeId: string, userAgent?: string, referrer?: string) {
  try {
    const qrCode = await prisma.qRCode.findUnique({
      where: { id: qrCodeId },
      include: { analytics: true }
    });
    
    if (!qrCode) {
      throw new Error('QR code not found');
    }
    
    // Update analytics
    if (qrCode.analytics && qrCode.analytics.length > 0) {
      await prisma.analytics.update({
        where: { id: qrCode.analytics[0].id },
        data: {
          visitCount: { increment: 1 },
          uniqueVisitors: { increment: 1 }, // Simplification - ideally check for unique visitors with cookies
          lastVisited: new Date(),
          userAgent,
          referrer
        }
      });
    }
    
    return qrCode.targetUrl;
  } catch (error) {
    console.error('Error tracking QR code visit:', error);
    throw new Error('Failed to track QR code visit');
  }
}

export async function getQRCodeImageSvg(qrCodeId: string) {
  try {
    const qrCode = await prisma.qRCode.findUnique({
      where: { id: qrCodeId }
    });
    
    if (!qrCode) {
      throw new Error('QR code not found');
    }
    
    const svgString = await QRCode.toString(qrCode.proxyUrl, {
      type: 'svg',
      margin: 4,
      width: 300,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    
    return svgString;
  } catch (error) {
    console.error('Error generating QR code image:', error);
    throw new Error('Failed to generate QR code image');
  }
} 