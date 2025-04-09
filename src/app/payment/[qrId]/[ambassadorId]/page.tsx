"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import Link from "next/link";

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),

});

type FormValues = z.infer<typeof formSchema>;

interface PageProps {
  params: {
    qrId: string;
    ambassadorId: string;
  };
}

export default function PaymentPage({ params }: PageProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ambassador, setAmbassador] = useState<{ name: string, email: string } | null>(null);
  const { qrId, ambassadorId } = params;

  // Logs de débogage
  console.log("Page de paiement chargée");
  console.log("Paramètres reçus:", params);
  console.log("qrId:", qrId);
  console.log("ambassadorId:", ambassadorId);
  
  // Charger les informations de l'ambassadeur
  useEffect(() => {
    const fetchAmbassador = async () => {
      try {
        const response = await fetch(`/api/ambassadors/${ambassadorId}`);
        if (response.ok) {
          const data = await response.json();
          setAmbassador(data.ambassador);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des informations de l'ambassadeur:", error);
      }
    };
    
    if (ambassadorId) {
      fetchAmbassador();
    }
  }, [ambassadorId]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/payment/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qrCodeId: qrId,
          ambassadorId: ambassadorId,
          customerEmail: data.email,

          returnUrl: window.location.origin + "/payment",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.isUserSecured) {
          setError("Cette adresse email n'as pas encore de compte chez Wayfe ou n'est pas vérifiée, veuillez vous inscrire ou validé votre identité dans l'application ");
        } else {
          setError(result.error || "Une erreur est survenue lors de la création de la session de paiement.");
        }
        return;
      }

      // Redirect to Stripe Checkout
      if (result.sessionUrl) {
        window.location.href = result.sessionUrl;
      } else {
        setError("Une erreur est survenue lors de la redirection vers la page de paiement.");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer ultérieurement.");
      console.error("Payment error:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
        className="flex-1 container py-12"
      >
        <motion.div variants={item} className="max-w-md mx-auto">
          <motion.h2 variants={item} className="text-3xl font-bold mb-6">
            Souscrire à Wayfe Premium
          </motion.h2>
          
          <motion.div variants={item} className="mb-8">
            <p className="text-muted-foreground">
              Complétez le formulaire ci-dessous pour accéder à votre abonnement premium.
            </p>
          </motion.div>
          
          {ambassador && (
            <motion.div 
              variants={item} 
              className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm">
                  <span className="font-medium">Invitation par :</span> {ambassador.name}
                </p>
                <div className="mt-2 p-3 bg-white rounded border">
                  <h3 className="font-bold text-lg">Offre ambassadeur</h3>
                  <p className="text-xl font-bold text-primary">14,99 €</p>
                  <p className="text-xs text-muted-foreground mt-1">Abonnement premium pendant 1 an</p>
                </div>
              </div>
            </motion.div>
          )}
          
          {error && (
            <motion.div
              variants={item}
              className="bg-destructive/15 border border-destructive text-destructive p-4 rounded-md mb-6"
            >
              {error}
            </motion.div>
          )}
          
          <motion.form
            variants={item}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre.email@exemple.com"
                {...form.register("email")}
                disabled={isLoading}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            

            
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Chargement...
                </>
              ) : (
                "Payer 14,99 € avec Stripe"
              )}
            </Button>
          </motion.form>
          
          <motion.div variants={item} className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              En procédant au paiement, vous acceptez nos{" "}
              <Link href="/terms" className="underline hover:text-primary">
                Conditions Générales d'Utilisation
              </Link>{" "}
              et notre{" "}
              <Link href="/privacy" className="underline hover:text-primary">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </motion.div>
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