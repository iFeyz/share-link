"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function PaymentCancelPage() {
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
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <AlertTriangle className="h-24 w-24 text-amber-500" />
          </motion.div>
          
          <motion.h2 variants={item} className="text-3xl font-bold mb-4">
            Paiement annulé
          </motion.h2>
          
          <motion.p variants={item} className="text-lg mb-8">
            Votre paiement a été annulé. Aucun montant n'a été prélevé sur votre compte.
          </motion.p>

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