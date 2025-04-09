"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface AssignAmbassadorPageProps {
  params: {
    id: string;
  };
}

const formSchema = z.object({
  ambassadorId: z.string().min(1, { message: "Veuillez sélectionner un ambassadeur" }),
});

type FormValues = z.infer<typeof formSchema>;

interface Ambassador {
  id: string;
  name: string;
  email: string;
}

export default function AssignAmbassadorPage({ params }: AssignAmbassadorPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [isLoadingAmbassadors, setIsLoadingAmbassadors] = useState(true);
  const [qrCode, setQRCode] = useState<any>(null);

  // Initialiser le formulaire
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ambassadorId: "",
    },
  });

  // Récupérer la liste des ambassadeurs
  useEffect(() => {
    const fetchAmbassadors = async () => {
      try {
        const response = await fetch("/api/ambassadors");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch ambassadors");
        }

        setAmbassadors(data.ambassadors || []);
      } catch (error) {
        console.error("Error fetching ambassadors:", error);
        toast.error("Échec du chargement des ambassadeurs");
      } finally {
        setIsLoadingAmbassadors(false);
      }
    };

    // Récupérer les détails du QR code
    const fetchQRCode = async () => {
      try {
        const response = await fetch(`/api/qrcode/${params.id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch QR code");
        }

        setQRCode(data.qrCode);
      } catch (error) {
        console.error("Error fetching QR code:", error);
        toast.error("Échec du chargement du QR code");
      }
    };

    fetchAmbassadors();
    fetchQRCode();
  }, [params.id]);

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/ambassadors/${values.ambassadorId}/qrcodes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qrCodeId: params.id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to assign ambassador");
      }

      toast.success("Ambassadeur assigné avec succès au QR code");
      router.push(`/admin/qr/${params.id}`);
      router.refresh();
    } catch (error: any) {
      console.error("Error assigning ambassador:", error);
      toast.error(error.message || "Échec de l'assignation de l'ambassadeur");
    } finally {
      setIsLoading(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl mx-auto"
      >
        <motion.div variants={item} className="mb-6">
          <Link href={`/admin/qr/${params.id}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au QR Code
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Assigner un ambassadeur au QR Code</CardTitle>
            </CardHeader>
            <CardContent>
              {qrCode && (
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">QR Code:</p>
                  <p className="font-semibold">{qrCode.name}</p>
                </div>
              )}

              {isLoadingAmbassadors ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : ambassadors.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Aucun ambassadeur trouvé
                  </p>
                  <Link href="/admin/ambassadors">
                    <Button>Créer un ambassadeur</Button>
                  </Link>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="ambassadorId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sélectionner un ambassadeur</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionner un ambassadeur" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {ambassadors.map((ambassador) => (
                                <SelectItem
                                  key={ambassador.id}
                                  value={ambassador.id}
                                >
                                  {ambassador.name} ({ambassador.email})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.back()}
                      >
                        Annuler
                      </Button>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Assignation...
                          </>
                        ) : (
                          "Assigner l'ambassadeur"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
} 