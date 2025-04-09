"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { Eye, ArrowUpRight, Smartphone, Link as LinkIcon } from "lucide-react";
import DeleteQRCodeButton from "./DeleteQRCodeButton";
import { QRCodeImage } from "./QRCodeImage";
import { Badge } from "@/components/ui/badge";

interface QRCodeTableProps {
  qrCodes: any[];
}

export function QRCodeTable({ qrCodes }: QRCodeTableProps) {
  if (qrCodes.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center py-12"
      >
        <p className="text-muted-foreground text-lg">Aucun QR code créé.</p>
        <p className="mt-2">Cliquez sur le bouton "Créer un QR Code" pour commencer.</p>
      </motion.div>
    );
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Fonction pour générer un badge en fonction du type de QR code
  const getQRTypeBadge = (qrCode: any) => {
    if (qrCode.isSubscriptionOffer) {
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200">
          Abonnement
        </Badge>
      );
    } else if (qrCode.isMobileApp) {
      // Vérifier s'il s'agit d'un deeplink ou d'un store
      if (qrCode.iosDeeplink || qrCode.androidDeeplink || qrCode.universalDeeplink) {
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200">
            <Smartphone className="mr-1 h-3 w-3" /> Deeplink
          </Badge>
        );
      } else {
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
            <Smartphone className="mr-1 h-3 w-3" /> App Store
          </Badge>
        );
      }
    } else {
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
          <LinkIcon className="mr-1 h-3 w-3" /> URL
        </Badge>
      );
    }
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>QR Code</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Créé le</TableHead>
            <TableHead>Visites</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {qrCodes.map((qrCode, index) => {
            const analytics = qrCode.analytics[0] || { visitCount: 0 };
            
            // Déterminer l'URL de destination à afficher
            const displayUrl = (() => {
              if (qrCode.isSubscriptionOffer) {
                return qrCode.subscriptionWebUrl || "Paiement interne";
              } else if (qrCode.isMobileApp) {
                if (qrCode.iosDeeplink || qrCode.androidDeeplink || qrCode.universalDeeplink) {
                  return qrCode.universalDeeplink || qrCode.iosDeeplink || qrCode.androidDeeplink;
                } else {
                  return qrCode.iosAppUrl || qrCode.androidAppUrl;
                }
              } else {
                return qrCode.targetUrl;
              }
            })();
            
            return (
              <motion.tr
                key={qrCode.id}
                variants={item}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.05 }}
                className="data-[state=selected]:bg-muted"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
              >
                <TableCell className="font-medium">{qrCode.name}</TableCell>
                <TableCell>
                  <div className="w-16 h-16 relative">
                    <motion.div
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-full h-full"
                    >
                      <QRCodeImage 
                        qrCodeId={qrCode.id} 
                        proxyUrl={qrCode.proxyUrl}
                        name={qrCode.name} 
                        size={64}
                      />
                    </motion.div>
                  </div>
                </TableCell>
                <TableCell>{getQRTypeBadge(qrCode)}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {displayUrl && displayUrl !== "Paiement interne" ? (
                    <a 
                      href={displayUrl.startsWith("http") ? displayUrl : `https://${displayUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="truncate">{displayUrl}</span>
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{displayUrl}</span>
                  )}
                </TableCell>
                <TableCell>{formatDate(qrCode.createdAt)}</TableCell>
                <TableCell>
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="font-semibold"
                  >
                    {analytics.visitCount}
                  </motion.span>
                </TableCell>
                <TableCell>
                  <Badge variant={qrCode.isActive ? "success" : "destructive"} className="font-normal">
                    {qrCode.isActive ? 'Actif' : 'Inactif'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/qr/${qrCode.id}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm">
                          <Eye className="mr-1 h-4 w-4" />
                          Voir
                        </Button>
                      </motion.div>
                    </Link>
                    <DeleteQRCodeButton id={qrCode.id} name={qrCode.name} />
                  </div>
                </TableCell>
              </motion.tr>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
} 