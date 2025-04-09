"use client";

import { useState } from "react";
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  Music, 
  MessageCircle, 
  Smartphone,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Structure des données pour les applications populaires et leurs formats de deeplink
const popularApps = [
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    formats: [
      { id: "profile", name: "Profil", pattern: "instagram://user?username={username}" },
      { id: "post", name: "Publication", pattern: "instagram://media?id={postId}" },
    ]
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    formats: [
      { id: "video", name: "Vidéo", pattern: "youtube://watch?v={videoId}" },
      { id: "channel", name: "Chaîne", pattern: "youtube://channel/{channelId}" }
    ]
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    formats: [
      { id: "profile", name: "Profil", pattern: "fb://profile/{profileId}" },
      { id: "page", name: "Page", pattern: "fb://page/{pageId}" }
    ]
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    formats: [
      { id: "profile", name: "Profil", pattern: "twitter://user?screen_name={username}" },
      { id: "tweet", name: "Tweet", pattern: "twitter://status?id={tweetId}" }
    ]
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: <Music className="w-5 h-5" />,
    formats: [
      { id: "profile", name: "Profil", pattern: "tiktok://user/@{username}" },
      { id: "video", name: "Vidéo", pattern: "tiktok://video/{videoId}" }
    ]
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: <MessageCircle className="w-5 h-5" />,
    formats: [
      { id: "chat", name: "Chat", pattern: "whatsapp://send?phone={phoneNumber}" },
      { id: "share", name: "Partager", pattern: "whatsapp://send?text={text}" }
    ]
  }
];

interface PopularAppDeeplinksProps {
  onSelectDeeplink: (universalDeeplink: string, iosDeeplink: string, androidDeeplink: string) => void;
}

export function PopularAppDeeplinks({ onSelectDeeplink }: PopularAppDeeplinksProps) {
  const [selectedApp, setSelectedApp] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState<string>("");
  const [paramValue, setParamValue] = useState<string>("");
  const [generatedDeeplink, setGeneratedDeeplink] = useState<string>("");
  
  // Trouver l'application et le format sélectionnés
  const app = popularApps.find(a => a.id === selectedApp);
  const format = app?.formats.find(f => f.id === selectedFormat);
  
  // Extraire le paramètre du modèle
  const getParamName = () => {
    if (!format) return "";
    const match = format.pattern.match(/{([^}]+)}/);
    return match ? match[1] : "";
  };
  
  // Générer le deeplink
  const generateDeeplink = () => {
    if (!format || !paramValue) return;
    
    const deeplink = format.pattern.replace(/{([^}]+)}/, paramValue);
    setGeneratedDeeplink(deeplink);
    
    // Retourner le même deeplink pour iOS, Android et universel
    // Dans un cas réel, on pourrait générer différents formats spécifiques à la plateforme
    onSelectDeeplink(deeplink, deeplink, deeplink);
  };
  
  return (
    <div className="space-y-4">
      <div className="bg-muted/30 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-2">Applications populaires</h3>
        
        <div className="grid gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {popularApps.map(app => (
              <div
                key={app.id}
                onClick={() => {
                  setSelectedApp(app.id);
                  setSelectedFormat("");
                  setParamValue("");
                  setGeneratedDeeplink("");
                }}
                className={`flex items-center justify-start gap-2 px-3 py-2 rounded-md border-2 cursor-pointer transition-colors ${
                  selectedApp === app.id 
                    ? "border-primary bg-primary/5 text-primary" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                {app.icon}
                <span className="text-sm font-medium">{app.name}</span>
              </div>
            ))}
          </div>
          
          {app && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-2">
                {app.formats.map(format => (
                  <div
                    key={format.id}
                    onClick={() => {
                      setSelectedFormat(format.id);
                      setParamValue("");
                      setGeneratedDeeplink("");
                    }}
                    className={`flex items-center justify-center px-3 py-2 rounded-md border-2 cursor-pointer transition-colors ${
                      selectedFormat === format.id 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-sm font-medium">{format.name}</span>
                  </div>
                ))}
              </div>
              
              {format && (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder={`Entrez ${getParamName()}`}
                      value={paramValue}
                      onChange={(e) => setParamValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && paramValue) {
                          generateDeeplink();
                        }
                      }}
                    />
                    <Button 
                      onClick={generateDeeplink}
                      disabled={!paramValue}
                      size="sm"
                      className="px-4"
                    >
                      Générer
                    </Button>
                  </div>
                  
                  {generatedDeeplink && (
                    <div className="mt-2 p-2 bg-muted rounded-md flex items-center justify-between">
                      <code className="text-sm break-all">{generatedDeeplink}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedDeeplink);
                        }}
                        className="ml-2 whitespace-nowrap"
                      >
                        Copier
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 