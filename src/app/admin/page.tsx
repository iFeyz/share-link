import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { QRCodeTable } from "@/components/QRCodeTable";
import { CreateQRCodeButton } from "@/components/CreateQRCodeButton";
import { Users, QrCode } from "lucide-react";

export default async function AdminPage() {
  const qrCodes = await prisma.qRCode.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      analytics: true
    }
  });

  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="border-b py-4">
        <div className="container flex justify-between items-center gap-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">QR Code Generator</h1>
          </Link>
          <nav>
            <Link href="/">
              <Button variant="outline">Home</Button>
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container py-8 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full">

          
          <Link href="/admin/ambassadors" className="block">
            <div className="bg-card rounded-lg border shadow-sm p-6 h-full hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 mr-3 text-primary" />
                <h2 className="text-2xl font-bold">Ambassador Management</h2>
              </div>
              <p className="text-muted-foreground">
                Manage ambassadors and track referrals through their unique QR codes.
              </p>
            </div>
          </Link>
        </div>
        
        <div className="flex md:justify-around justify-center items-center mb-8 md:flex-row  flex-col gap-4 w-full">
          <h2 className="text-3xl font-bold">QR Code Management</h2>
          <CreateQRCodeButton />
        </div>
        
        <div className="">
          <QRCodeTable qrCodes={qrCodes} />
        </div>
      </main>
      
      <footer className="border-t py-6">
        <div className="container text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} QR Code Generator. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 