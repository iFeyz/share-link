"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
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
    <div className="flex flex-col min-h-screen items-center justify-center">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b py-4"
      >
        <div className="container flex justify-between gap-4 pt-4">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-2xl font-bold"
          >
            QR Code Generator
          </motion.h1>
          <nav>
            <Link href="/admin">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline">Admin Dashboard</Button>
              </motion.div>
            </Link>
          </nav>
        </div>
      </motion.header>
      
      <motion.main 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 container py-12"
      >
        <motion.div variants={item} className="max-w-3xl mx-auto text-center">
          <motion.h2 
            variants={item}
            className="text-4xl font-bold mb-4"
          >
            Track Your QR Code Performance
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-xl mb-8"
          >
            Generate, manage, and track QR codes that link to your desired URLs.
          </motion.p>

          <motion.div 
            variants={container}
            className="grid gap-8 my-12"
          >
            <motion.div 
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="p-6 border rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Create Custom QR Codes</h3>
              <p className="mb-4">Generate QR codes that redirect to any URL you want.</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="p-6 border rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Track Analytics</h3>
              <p className="mb-4">Monitor the performance of your QR codes with detailed analytics.</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="p-6 border rounded-lg"
          >
              <h3 className="text-2xl font-bold mb-2">Manage QR Codes</h3>
              <p className="mb-4">Easily manage all your QR codes in one place.</p>
            </motion.div>
          </motion.div>
          
          <Link href="/admin">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="mt-4">Get Started</Button>
            </motion.div>
          </Link>
        </motion.div>
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
