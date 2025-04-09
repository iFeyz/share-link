// @ts-nocheck
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import ClientRedirect from "@/components/ClientRedirect";

interface QRRedirectPageProps {
  params: {
    id: string;
  };
}

// Fonction pour détecter le système d'exploitation mobile
function detectMobileOS(userAgent: string | null): 'ios' | 'android' | 'other' {
  if (!userAgent) return 'other';
  
  const ua = userAgent.toLowerCase();
  
  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod') || ua.includes('mac')) {
    return 'ios';
  } else if (ua.includes('android')) {
    return 'android';
  }
  
  return 'other';
}

export default async function QRRedirectPage({ params }: QRRedirectPageProps) {
  // Attendre et extraire les paramètres
  const paramsData = await params;
  const id = paramsData?.id;
  
  // Vérifier que l'ID est défini
  if (!id) {
    console.error("ID manquant dans les paramètres");
    return redirect("/404");
  }

  try {
    // Pour le débug
    console.log(`Recherche du QR code pour l'ID: ${id}`);
    
    // Get user agent and referrer from request headers
    const headersList = await headers();
    const userAgent = headersList.get ? headersList.get("user-agent") : undefined;
    const referrer = headersList.get ? headersList.get("referer") : undefined;
    
    // Identifier le système d'exploitation de l'utilisateur
    const deviceOS = detectMobileOS(userAgent || null);
    console.log(`Système d'exploitation détecté: ${deviceOS}`);
    
    // Trouver le QR code - essayez d'abord avec un ID exact
    let qrCode = await prisma.qRCode.findFirst({
      where: { 
        id: id,
        isActive: true 
      },
      include: {
        analytics: true,
        ambassador: true
      }
    });

    // Si aucun QR code n'est trouvé, essayez avec l'URL du proxy contenant l'ID
    if (!qrCode) {
      qrCode = await prisma.qRCode.findFirst({
        where: { 
          proxyUrl: { contains: id },
          isActive: true 
        },
        include: {
          analytics: true,
          ambassador: true
        }
      });
    }
    
    if (!qrCode) {
      // Dernier essai: obtenez tous les QR codes et affichez leurs IDs et URLs
      const allQrCodes = await prisma.qRCode.findMany({
        select: { id: true, proxyUrl: true }
      });
      
      console.error(`QR code non trouvé pour l'ID: ${id}`);
      console.error("QR codes disponibles:", JSON.stringify(allQrCodes, null, 2));
      return redirect("/404");
    }
    
    // Log pour le débogage
    console.log(`QR code trouvé: ${qrCode.id}, URL cible: ${qrCode.targetUrl}`);
    
    // Sélection de l'URL à utiliser en fonction du type de QR code et du device
    let finalUrl = qrCode.targetUrl;
    
    // Si c'est une offre d'abonnement et qu'il est associé à un ambassadeur, rediriger vers la page de paiement
    if (qrCode.isSubscriptionOffer && qrCode.ambassador) {
      console.log("C'est une offre d'abonnement avec un ambassadeur");
      console.log("Ambassadeur:", JSON.stringify(qrCode.ambassador, null, 2));
      
      // Garantir que les IDs sont des chaînes valides
      const safeQrId = encodeURIComponent(qrCode.id);
      const safeAmbassadorId = encodeURIComponent(qrCode.ambassador.id);
      
      // Générer l'URL de paiement avec le bon format
      const paymentUrl = `/payment/${safeQrId}/${safeAmbassadorId}`;
      
      console.log(`IDs pour redirection: QR ID=${safeQrId}, Ambassador ID=${safeAmbassadorId}`);
      finalUrl = paymentUrl;
      console.log(`Redirection vers la page de paiement: ${finalUrl}`);
    }
    // Sinon, si c'est une offre d'abonnement hors application standard, rediriger vers l'URL d'abonnement web
    else if (qrCode.isSubscriptionOffer && qrCode.subscriptionWebUrl) {
      console.log("C'est une offre d'abonnement hors application");
      finalUrl = qrCode.subscriptionWebUrl;
      console.log(`Redirection vers la page d'abonnement web: ${finalUrl}`);
    }
    // Sinon, si c'est une application mobile standard, rediriger vers l'app store approprié ou le deeplink
    else if (qrCode.isMobileApp) {
      console.log("C'est un QR code pour une application mobile");
      
      // Vérifier d'abord s'il y a un universal deeplink à utiliser
      if (qrCode.universalDeeplink) {
        console.log(`Redirection vers le universal deeplink: ${qrCode.universalDeeplink}`);
        finalUrl = qrCode.universalDeeplink;
      }
      // Sinon, utiliser le deeplink spécifique à la plateforme ou l'URL de l'app store
      else if (deviceOS === 'ios') {
        if (qrCode.iosDeeplink) {
          finalUrl = qrCode.iosDeeplink;
          console.log(`Redirection vers le deeplink iOS: ${finalUrl}`);
        } else if (qrCode.iosAppUrl) {
          finalUrl = qrCode.iosAppUrl;
          console.log(`Redirection vers l'App Store iOS: ${finalUrl}`);
        }
      } else if (deviceOS === 'android') {
        if (qrCode.androidDeeplink) {
          finalUrl = qrCode.androidDeeplink;
          console.log(`Redirection vers le deeplink Android: ${finalUrl}`);
        } else if (qrCode.androidAppUrl) {
          finalUrl = qrCode.androidAppUrl;
          console.log(`Redirection vers Google Play Store: ${finalUrl}`);
        }
      } else {
        // Rediriger vers l'une des deux URL disponibles si le device n'est pas reconnu
        // Préférer d'abord les deeplinks puis les app stores
        finalUrl = qrCode.universalDeeplink || 
                  qrCode.iosDeeplink || 
                  qrCode.androidDeeplink || 
                  qrCode.iosAppUrl || 
                  qrCode.androidAppUrl || 
                  qrCode.targetUrl;
        console.log(`Redirection générique: ${finalUrl}`);
      }
    }
    
    try {
      // Try to track the visit but don't block redirection if it fails
      if (qrCode.analytics && qrCode.analytics.length > 0) {
        await prisma.analytics.update({
          where: { id: qrCode.analytics[0].id },
          data: {
            visitCount: { increment: 1 },
            uniqueVisitors: { increment: 1 },
            lastVisited: new Date(),
            userAgent: userAgent || null,
            referrer: referrer || null
          }
        });
        console.log("Analytics mis à jour avec succès");
      }
    } catch (trackError) {
      console.error("Erreur lors de la mise à jour des analytics:", trackError);
    }
    
    // Assurez-vous que l'URL cible est complète pour les URLs externes
    if (!finalUrl.startsWith('/') && !finalUrl.startsWith('http://') && !finalUrl.startsWith('https://') && !finalUrl.includes('://')) {
      finalUrl = `https://${finalUrl}`;
    }
    
    console.log(`Redirection vers: ${finalUrl}`);
    
    // Utiliser toujours ClientRedirect pour éviter les problèmes avec les redirections côté serveur
    // Cela garantit que le navigateur gère la redirection correctement
    return <ClientRedirect url={finalUrl} />;
  } catch (error) {
    console.error("Erreur dans la redirection QR:", error);
    return redirect("/404");
  }
} 