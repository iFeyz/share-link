import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b py-4">
        <div className="container flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">QR Code Generator</h1>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 container py-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
        <p className="text-xl mb-8 max-w-md">The QR code you're looking for doesn't exist or has been deactivated.</p>
        
        <Link href="/">
          <Button size="lg">Go Home</Button>
        </Link>
      </main>
      
      <footer className="border-t py-6">
        <div className="container text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} QR Code Generator. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 