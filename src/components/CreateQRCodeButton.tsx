"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createQRCode } from "@/lib/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, ExternalLink, Smartphone, CreditCard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PopularAppDeeplinks } from "@/components/PopularAppDeeplinks";

// Types de QR code disponibles
type QRCodeType = "url" | "deeplink" | "store" | "subscription";

// Définir le schéma de validation Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Le nom est requis" }),
  qrCodeType: z.enum(["url", "deeplink", "store", "subscription"]),
  targetUrl: z.string().optional(),
  customProxyId: z.string().optional(),
  isMobileApp: z.boolean().default(false),
  iosAppUrl: z.string().optional(),
  androidAppUrl: z.string().optional(),
  iosDeeplink: z.string().optional(),
  androidDeeplink: z.string().optional(),
  universalDeeplink: z.string().optional(),
  isSubscriptionOffer: z.boolean().default(false),
  subscriptionWebUrl: z.string().optional(),
  ambassadorId: z.string().optional(),
}).refine(data => {
  // Validation pour le type URL
  if (data.qrCodeType === "url") {
    return !!data.targetUrl && data.targetUrl !== "https://";
  }
  // Validation pour le type Deeplink
  else if (data.qrCodeType === "deeplink") {
    return !!data.universalDeeplink || !!data.iosDeeplink || !!data.androidDeeplink;
  }
  // Validation pour le type Store
  else if (data.qrCodeType === "store") {
    return !!data.iosAppUrl || !!data.androidAppUrl;
  }
  // Validation pour le type Subscription
  else if (data.qrCodeType === "subscription") {
    return !!data.subscriptionWebUrl || !!data.ambassadorId;
  }
  
  return true;
}, {
  message: "Veuillez remplir les champs requis pour ce type de QR code",
  path: ["qrCodeType"]
});

// Type d'interface pour le formulaire
type FormValues = z.infer<typeof formSchema>;

// Interface pour les ambassadeurs
interface Ambassador {
  id: string;
  name: string;
}

export function CreateQRCodeButton() {
  const [open, setOpen] = useState(false);
  const [qrPreview, setQrPreview] = useState<string | null>(null);
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [isLoadingAmbassadors, setIsLoadingAmbassadors] = useState(false);
  const router = useRouter();
  
  // Utiliser une solution contournant les problèmes de typage
  // @ts-ignore - Ignorez les erreurs de typage pour ce composant
  const form = useForm({
    // @ts-ignore - Ignorer l'erreur liée au resolver
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      qrCodeType: "url" as QRCodeType,
      targetUrl: "https://",
      customProxyId: "",
      isMobileApp: false,
      iosAppUrl: "",
      androidAppUrl: "",
      iosDeeplink: "",
      androidDeeplink: "",
      universalDeeplink: "",
      isSubscriptionOffer: false,
      subscriptionWebUrl: "",
      ambassadorId: ""
    },
  });

  // Surveiller le type de QR code
  const qrCodeType = form.watch("qrCodeType");
  
  // Effet pour mettre à jour les flags en fonction du type de QR code
  useEffect(() => {
    const isStoreOrDeeplink = qrCodeType === "store" || qrCodeType === "deeplink";
    const isSubscription = qrCodeType === "subscription";
    
    form.setValue("isMobileApp", isStoreOrDeeplink);
    form.setValue("isSubscriptionOffer", isSubscription);
  }, [qrCodeType, form]);

  // Gérer les sélections de deeplinks d'applications populaires
  const handlePopularAppDeeplinkSelection = (universal: string, ios: string, android: string) => {
    form.setValue("universalDeeplink", universal);
    form.setValue("iosDeeplink", ios);
    form.setValue("androidDeeplink", android);
  };

  // Generate QR code preview
  useEffect(() => {
    let previewUrl = "";
    
    switch (qrCodeType) {
      case "url":
        previewUrl = form.watch("targetUrl") || "";
        break;
      case "deeplink":
        previewUrl = form.watch("universalDeeplink") || form.watch("iosDeeplink") || form.watch("androidDeeplink") || "";
        break;
      case "store":
        previewUrl = form.watch("iosAppUrl") || form.watch("androidAppUrl") || "";
        break;
      case "subscription":
        previewUrl = form.watch("subscriptionWebUrl") || "";
        break;
    }
    
    if (previewUrl && previewUrl !== "https://" && (previewUrl.startsWith("http") || previewUrl.includes("://"))) {
      try {
        QRCode.toDataURL(previewUrl, {
          margin: 1,
          errorCorrectionLevel: 'H'
        }).then(url => {
          setQrPreview(url);
        }).catch(error => {
          console.error("Error generating QR code:", error);
          setQrPreview(null);
        });
      } catch (error) {
        console.error("Error generating QR preview:", error);
        setQrPreview(null);
      }
    } else {
      setQrPreview(null);
    }
  }, [
    qrCodeType, 
    form.watch("targetUrl"), 
    form.watch("iosAppUrl"), 
    form.watch("androidAppUrl"), 
    form.watch("universalDeeplink"),
    form.watch("iosDeeplink"),
    form.watch("androidDeeplink"),
    form.watch("subscriptionWebUrl")
  ]);

  // Charger les ambassadeurs quand le dialogue s'ouvre
  useEffect(() => {
    if (open && qrCodeType === "subscription") {
      fetchAmbassadors();
    }
  }, [open, qrCodeType]);

  // Fonction pour récupérer les ambassadeurs
  const fetchAmbassadors = async () => {
    setIsLoadingAmbassadors(true);
    try {
      const response = await fetch('/api/ambassadors');
      const data = await response.json();
      if (data && data.ambassadors) {
        setAmbassadors(data.ambassadors);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des ambassadeurs:", error);
    } finally {
      setIsLoadingAmbassadors(false);
    }
  };

  // @ts-ignore - Ignorer les erreurs de typage pour la fonction onSubmit
  const onSubmit = async (values) => {
    try {
      // Préparer les données en fonction du type de QR code
      let formData = {
        ...values,
        targetUrl: values.targetUrl || "https://",
        isMobileApp: values.qrCodeType === "store" || values.qrCodeType === "deeplink",
        isSubscriptionOffer: values.qrCodeType === "subscription"
      };
      
      // Si c'est un deeplink ou store, assurer que targetUrl est défini
      if (formData.qrCodeType === "deeplink" || formData.qrCodeType === "store") {
        formData.targetUrl = formData.qrCodeType === "store" 
          ? (formData.iosAppUrl || formData.androidAppUrl)
          : (formData.universalDeeplink || formData.iosDeeplink || formData.androidDeeplink);
      }
      
      await createQRCode(formData);
      
      toast.success("QR code créé avec succès");
      form.reset();
      setOpen(false);
      router.refresh();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Échec de la création du QR code';
      toast.error(errorMessage);
      console.error(error);
    }
  };

  return (
    <div className="mx-auto">

    
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button>Créer un QR Code</Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Créer un nouveau QR Code</DialogTitle>
        </DialogHeader>
        
        {/* @ts-ignore - Ignorer les erreurs de typage pour le formulaire */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Ma campagne marketing" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="qrCodeType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Type de QR code</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "url", icon: <Link className="h-6 w-6" />, label: "URL classique" },
                        { value: "deeplink", icon: <ExternalLink className="h-6 w-6" />, label: "Deeplink" },
                        { value: "store", icon: <Smartphone className="h-6 w-6" />, label: "App Store" },
                        { value: "subscription", icon: <CreditCard className="h-6 w-6" />, label: "Abonnement" }
                      ].map((option) => (
                        <div
                          key={option.value}
                          onClick={() => field.onChange(option.value)}
                          className={`flex flex-col items-center justify-center space-y-2 rounded-md border-2 p-4 cursor-pointer hover:border-primary transition-colors ${
                            field.value === option.value 
                              ? "border-primary bg-primary/5" 
                              : "border-border"
                          }`}
                        >
                          {option.icon}
                          <span className="font-normal text-sm">{option.label}</span>
                          <input 
                            type="radio"
                            className="sr-only"
                            value={option.value}
                            checked={field.value === option.value}
                            onChange={() => field.onChange(option.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="customProxyId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID d'URL personnalisée (optionnel)</FormLabel>
                  <FormControl>
                    <div className="flex items-center group border rounded-md focus-within:ring-2 focus-within:ring-ring/50 focus-within:ring-offset-0 focus-within:border-ring hover:border-input overflow-hidden">
                      <span className="text-sm bg-muted/40 text-muted-foreground px-3 py-2 border-r h-9">
                        /q/
                      </span>
                      <Input 
                        placeholder="mon-url-personnalisee" 
                        {...field} 
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Personnalisez la partie finale de l'URL du QR code
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-medium mb-4">Configuration du QR code</h3>
              
              {/* Contenu spécifique au type URL */}
              {qrCodeType === "url" && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="targetUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL de destination</FormLabel>
                        <FormControl>
                          <Input placeholder="https://exemple.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          L'URL vers laquelle les utilisateurs seront redirigés en scannant le QR code
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              
              {/* Contenu spécifique au type Deeplink */}
              {qrCodeType === "deeplink" && (
                <div className="space-y-6">
                  {/* Sélecteur d'applications populaires */}
                  <div>
                    <Tabs defaultValue="popular" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 p-0">
                        <TabsTrigger 
                          value="popular" 
                          className="flex-1 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary font-medium"
                        >
                          Applications populaires
                        </TabsTrigger>
                        <TabsTrigger 
                          value="custom" 
                          className="flex-1 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary font-medium"
                        >
                          Liens personnalisés
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="popular">
                        <PopularAppDeeplinks
                          onSelectDeeplink={handlePopularAppDeeplinkSelection}
                        />
                      </TabsContent>
                      
                      <TabsContent value="custom">
                        <div className="space-y-4 pt-2">
                          <FormField
                            control={form.control}
                            name="universalDeeplink"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Deeplink universel</FormLabel>
                                <FormControl>
                                  <Input placeholder="myapp://ou https://app.exemple.com/..." {...field} />
                                </FormControl>
                                <FormDescription>
                                  Lien qui fonctionne sur toutes les plateformes
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="iosDeeplink"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Deeplink iOS</FormLabel>
                                  <FormControl>
                                    <Input placeholder="myapp://item/123" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    Format: scheme://chemin
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="androidDeeplink"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Deeplink Android</FormLabel>
                                  <FormControl>
                                    <Input placeholder="myapp://item/123" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    Format: scheme://chemin
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                    <FormField
                      control={form.control}
                      name="iosAppUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL App Store (iOS) de secours</FormLabel>
                          <FormControl>
                            <Input placeholder="https://apps.apple.com/app/..." {...field} />
                          </FormControl>
                          <FormDescription>
                            Utilisé si l'app n'est pas installée
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="androidAppUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL Play Store (Android) de secours</FormLabel>
                          <FormControl>
                            <Input placeholder="https://play.google.com/store/apps/..." {...field} />
                          </FormControl>
                          <FormDescription>
                            Utilisé si l'app n'est pas installée
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
              
              {/* Contenu spécifique au type Store */}
              {qrCodeType === "store" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="iosAppUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL App Store (iOS)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://apps.apple.com/app/..." {...field} />
                          </FormControl>
                          <FormDescription>
                            Lien vers l'App Store pour iOS
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="androidAppUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL Play Store (Android)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://play.google.com/store/apps/..." {...field} />
                          </FormControl>
                          <FormDescription>
                            Lien vers le Play Store pour Android
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
              
              {/* Contenu spécifique au type Subscription */}
              {qrCodeType === "subscription" && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="ambassadorId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ambassadeur</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            {...field}
                            disabled={isLoadingAmbassadors}
                          >
                            <option value="">-- Sélectionner un ambassadeur --</option>
                            {ambassadors.map(ambassador => (
                              <option key={ambassador.id} value={ambassador.id}>
                                {ambassador.name}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        {isLoadingAmbassadors && <p className="text-xs text-muted-foreground mt-1">Chargement des ambassadeurs...</p>}
                        <FormDescription>
                          Créer un lien de paiement personnalisé pour cet ambassadeur
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center my-2">
                    <div className="border-t w-full"></div>
                    <span className="text-xs text-muted-foreground mx-2 whitespace-nowrap">OU</span>
                    <div className="border-t w-full"></div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subscriptionWebUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL d'abonnement externe</FormLabel>
                        <FormControl>
                          <Input placeholder="https://monapp.com/abonnement" {...field} />
                        </FormControl>
                        <FormDescription>
                          {form.watch("ambassadorId") 
                            ? "Non requis si un ambassadeur est sélectionné" 
                            : "URL externe de votre système d'abonnement"}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
            
            <div className="flex flex-col items-center justify-center pt-4">
              <p className="text-sm text-muted-foreground mb-2">Aperçu</p>
              <AnimatePresence mode="wait">
                {qrPreview ? (
                  <motion.div 
                    key="preview"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="border p-4 rounded-lg bg-background"
                  >
                    <img 
                      src={qrPreview} 
                      alt="Aperçu du QR Code" 
                      className="w-36 h-36 object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border border-dashed rounded-lg flex items-center justify-center w-36 h-36 bg-muted/40"
                  >
                    <p className="text-xs text-muted-foreground text-center px-2">
                      Remplissez les champs pour voir l'aperçu du QR code
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                Annuler
              </Button>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button type="submit">Créer</Button>
              </motion.div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
    </div>
  );
}