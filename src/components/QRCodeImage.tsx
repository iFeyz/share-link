"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";

interface QRCodeImageProps {
  qrCodeId: string;
  proxyUrl?: string;
  name: string;
  size?: number;
}

export function QRCodeImage({ qrCodeId, proxyUrl, name, size = 100 }: QRCodeImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadQRCode = async () => {
      setIsLoading(true);
      setImageError(false);
      
      try {
        // Si une proxyUrl est fournie, générer le QR code directement
        if (proxyUrl) {
          const dataUrl = await QRCode.toDataURL(proxyUrl, {
            margin: 1,
            width: size,
            errorCorrectionLevel: 'H',
            color: {
              dark: '#000000',
              light: '#FFFFFF'
            }
          });
          setImageUrl(dataUrl);
          setIsLoading(false);
          return;
        }
        
        // Sinon, charger depuis l'API
        const response = await fetch(`/api/qrcode/${qrCodeId}/image?ts=${Date.now()}`);
        
        if (!response.ok) {
          throw new Error('Failed to load QR code');
        }
        
        const svg = await response.text();
        // Convertir le SVG en Data URL pour affichage
        const dataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
        setImageUrl(dataUrl);
      } catch (error) {
        console.error('Error loading QR code:', error);
        setImageError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadQRCode();
  }, [qrCodeId, proxyUrl, size]);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full border rounded-lg bg-muted/20">
        <div className="w-6 h-6 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (imageError) {
    return (
      <div className="flex items-center justify-center w-full h-full border rounded-lg bg-muted/30">
        <p className="text-xs text-center text-muted-foreground">QR Code non disponible</p>
      </div>
    );
  }
  
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="overflow-hidden rounded-lg border"
    >
      <img
        src={imageUrl || ''}
        alt={`QR Code pour ${name}`}
        className="w-full h-full object-contain"
        style={{ width: size, height: size }}
        onError={() => setImageError(true)}
      />
    </motion.div>
  );
} 