"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (sessionId) {
      // Here you could verify the payment session with your backend
      // For simplicity, we'll just set verified to true after a delay
      const timer = setTimeout(() => {
        setIsVerified(true);
        setIsVerifying(false);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setIsVerifying(false);
    }
  }, [sessionId]);

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

  return (
    <div className="min-h-screen flex flex-col items-center pt-4">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b py-4"
      >
        <div className="container flex justify-between items-center">
          <Link href="/">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-2xl font-bold"
            >
              Wayfe Premium
            </motion.h1>
          </Link>
        </div>
      </motion.header>

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 container py-12 flex items-center justify-center"
      >
        <motion.div variants={item} className="max-w-md w-full text-center">
          {isVerifying ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
              <p className="text-lg">Vérification de votre paiement...</p>
            </div>
          ) : isVerified ? (
            <>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <CheckCircle className="h-24 w-24 text-green-500" />
              </motion.div>
              
              <motion.h2 variants={item} className="text-3xl font-bold mb-4">
                Paiement réussi !
              </motion.h2>
              
              <motion.p variants={item} className="text-lg mb-8">
                Votre abonnement premium Wayfe a été activé. Vous pouvez maintenant profiter de toutes les fonctionnalités premium.
              </motion.p>
              
              <motion.div variants={item}>
                <Link href="/">
                  <Button size="lg">Retour à l'accueil</Button>
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              <motion.h2 variants={item} className="text-3xl font-bold mb-4 text-destructive">
                Impossible de vérifier le paiement
              </motion.h2>
              
              <motion.p variants={item} className="text-lg mb-8">
                Nous n'avons pas pu vérifier votre paiement. Si vous pensez qu'il s'agit d'une erreur, veuillez contacter notre support.
              </motion.p>
              
              <motion.div variants={item} className="space-x-4">
                <Link href="/">
                  <Button size="lg" variant="outline">Retour à l'accueil</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg">Contacter le support</Button>
                </Link>
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.main>
      
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t py-6"
      >
        <div className="container text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Wayfe. Tous droits réservés.
        </div>
      </motion.footer>
    </div>
  );
} 