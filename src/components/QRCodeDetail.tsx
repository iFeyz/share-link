"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DeleteQRCodeButton from "./DeleteQRCodeButton";
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus, Download } from 'lucide-react';
import { useRouter } from "next/navigation";

interface QRCodeDetailProps {
  qrCode: any;
}

export default function QRCodeDetail({ qrCode }: QRCodeDetailProps) {
  const [imageError, setImageError] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAmbassadorId, setSelectedAmbassadorId] = useState('');
  const [isAssigning, setIsAssigning] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  
  const analytics = qrCode.analytics[0] || {
    visitCount: 0,
    uniqueVisitors: 0,
    lastVisited: null,
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Créer une URL avec un timestamp pour éviter le cache du navigateur
  const qrImageUrl = `/api/qrcode/${qrCode.id}/image?ts=${Date.now()}`;

  // Récupérer la liste des ambassadeurs
  const [ambassadors, setAmbassadors] = useState<Array<{ id: string, name?: string, firstName?: string, lastName?: string }>>([]);
  
  useEffect(() => {
    // Fetch ambassadors data
    const fetchAmbassadors = async () => {
      try {
        const response = await fetch('/api/ambassadors');
        const data = await response.json();
        if (response.ok) {
          setAmbassadors(data.ambassadors || []);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des ambassadeurs:", error);
      }
    };
    
    fetchAmbassadors();
  }, []);

  const assignQRCodeToAmbassador = async () => {
    if (!selectedAmbassadorId) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez sélectionner un ambassadeur.",
      });
      return;
    }

    setIsAssigning(true);
    
    try {
      const response = await fetch(`/api/ambassadors/${selectedAmbassadorId}/qrcodes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qrCodeId: qrCode.id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'assignation");
      }

      toast({
        title: "Succès",
        description: "QR code assigné avec succès",
      });
      
      setOpen(false);
      // Rafraîchir les données
      router.refresh();
    } catch (error) {
      console.error("Erreur lors de l'assignation du QR code:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue",
      });
    } finally {
      setIsAssigning(false);
    }
  };

  // Fonction pour télécharger le QR code
  const downloadQRCode = (format: 'png' | 'svg') => {
    const downloadUrl = `/api/qrcode/${qrCode.id}/download?format=${format}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `qrcode-${qrCode.id}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b py-4"
      >
        <div className="container flex justify-between items-center gap-4 pt-4">
          <Link href="/">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              QR Code Generator
            </motion.h1>
          </Link>
          <nav className="flex gap-4">
            <Link href="/admin">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline">Dashboard</Button>
              </motion.div>
            </Link>
          </nav>
        </div>
      </motion.header>

      <motion.main 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 container py-8"
      >
        <motion.div variants={item} className="mb-8 flex justify-between items-center">
          <Link href="/admin" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Dashboard
          </Link>
          
          <DeleteQRCodeButton id={qrCode.id} name={qrCode.name} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={item} className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>QR Code</CardTitle>
                <CardDescription>
                  Scan to visit your URL
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-48 h-48 relative"
                >
                  {!imageError ? (
                    <Image
                      src={qrImageUrl}
                      alt={qrCode.name}
                      fill
                      className="object-contain"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border rounded-lg bg-muted/30">
                      <p className="text-sm text-center text-muted-foreground px-4">
                        Impossible de charger le QR code. Veuillez réessayer.
                      </p>
                    </div>
                  )}
                </motion.div>
              </CardContent>
            </Card>

            <motion.div variants={item} className="mt-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="outline" className="w-full">
                  <a href={qrImageUrl} download={`${qrCode.name.replace(/\s+/g, '-').toLowerCase()}.svg`}>
                    Download QR Code
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>QR Code Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Name</dt>
                    <dd className="text-lg font-semibold">{qrCode.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Created</dt>
                    <dd className="text-lg">{formatDate(qrCode.createdAt)}</dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="text-sm font-medium text-muted-foreground">Target URL</dt>
                    <dd className="text-lg break-all">
                      <a
                        href={qrCode.targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {qrCode.targetUrl}
                      </a>
                    </dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="text-sm font-medium text-muted-foreground">Proxy URL</dt>
                    <dd className="text-lg break-all">
                      <a
                        href={qrCode.proxyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {qrCode.proxyUrl}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Status</dt>
                    <dd>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        qrCode.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {qrCode.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    Track usage of your QR code
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      className="p-4 bg-background border rounded-lg"
                    >
                      <p className="text-sm font-medium text-muted-foreground">Total Scans</p>
                      <motion.h3 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="text-3xl font-bold"
                      >
                        {analytics.visitCount}
                      </motion.h3>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      className="p-4 bg-background border rounded-lg"
                    >
                      <p className="text-sm font-medium text-muted-foreground">Unique Visitors</p>
                      <motion.h3 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="text-3xl font-bold"
                      >
                        {analytics.uniqueVisitors}
                      </motion.h3>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      className="p-4 bg-background border rounded-lg"
                    >
                      <p className="text-sm font-medium text-muted-foreground">Last Scanned</p>
                      <motion.h3 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="text-xl font-bold"
                      >
                        {analytics.lastVisited ? formatDate(analytics.lastVisited) : 'Never'}
                      </motion.h3>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Détails supplémentaires pour les applications mobiles */}
            {qrCode.isMobileApp && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium">Configuration Mobile</h3>
                
                {qrCode.iosAppUrl && (
                  <div className="grid grid-cols-1 gap-2">
                    <div className="font-medium">URL iOS App Store</div>
                    <div className="bg-muted p-2 rounded text-sm break-all">
                      <a href={qrCode.iosAppUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {qrCode.iosAppUrl}
                      </a>
                    </div>
                  </div>
                )}
                
                {qrCode.androidAppUrl && (
                  <div className="grid grid-cols-1 gap-2">
                    <div className="font-medium">URL Google Play Store</div>
                    <div className="bg-muted p-2 rounded text-sm break-all">
                      <a href={qrCode.androidAppUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {qrCode.androidAppUrl}
                      </a>
                    </div>
                  </div>
                )}
                
                {/* Deeplinks */}
                {qrCode.universalDeeplink && (
                  <div className="grid grid-cols-1 gap-2">
                    <div className="font-medium">Universal Deeplink</div>
                    <div className="bg-muted p-2 rounded text-sm break-all">
                      {qrCode.universalDeeplink}
                    </div>
                  </div>
                )}
                
                {qrCode.iosDeeplink && (
                  <div className="grid grid-cols-1 gap-2">
                    <div className="font-medium">iOS Deeplink</div>
                    <div className="bg-muted p-2 rounded text-sm break-all">
                      {qrCode.iosDeeplink}
                    </div>
                  </div>
                )}
                
                {qrCode.androidDeeplink && (
                  <div className="grid grid-cols-1 gap-2">
                    <div className="font-medium">Android Deeplink</div>
                    <div className="bg-muted p-2 rounded text-sm break-all">
                      {qrCode.androidDeeplink}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        <div className="flex justify-end  items-center mt-4 gap-4 ">
          <h1 className="text-2xl font-bold">Détails du QR code</h1>
          <div className="flex space-x-2">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Assigner à un ambassadeur
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Assigner ce QR code à un ambassadeur</DialogTitle>
                  <DialogDescription>
                    Sélectionnez un ambassadeur pour lui assigner ce QR code.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <Label htmlFor="ambassador">Ambassadeur</Label>
                  <Select value={selectedAmbassadorId} onValueChange={setSelectedAmbassadorId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un ambassadeur" />
                    </SelectTrigger>
                    <SelectContent>
                      {ambassadors && Array.isArray(ambassadors) && ambassadors.map((ambassador) => (
                        <SelectItem key={ambassador.id} value={ambassador.id}>
                          {ambassador.name || `${ambassador.firstName || ''} ${ambassador.lastName || ''}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter>
                  <Button 
                    onClick={assignQRCodeToAmbassador} 
                    disabled={isAssigning || !selectedAmbassadorId}
                  >
                    {isAssigning ? "Assignation..." : "Assigner"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              onClick={() => downloadQRCode('png')}
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger PNG
            </Button>
            <Button
              variant="outline"
              onClick={() => downloadQRCode('svg')}
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger SVG
            </Button>
          </div>
        </div>
      </motion.main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t py-6"
      >
        <div className="container text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} QR Code Generator. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
} 