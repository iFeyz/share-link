"use client";

import { useEffect, useState } from "react";

interface ClientRedirectProps {
  url: string;
}

export default function ClientRedirect({ url }: ClientRedirectProps) {
  const [secondsLeft, setSecondsLeft] = useState(2);
  const [isDeeplink, setIsDeeplink] = useState(false);
  
  useEffect(() => {
    console.log("ClientRedirect: redirection vers", url);
    
    // Vérifier si c'est un deeplink (scheme://path) mais pas http/https
    const isAppDeeplink = url.includes("://") && !url.startsWith("http");
    setIsDeeplink(isAppDeeplink);
    
    // Redirection immédiate pour les chemins internes
    if (url.startsWith('/')) {
      window.location.href = url;
      return;
    }
    
    // Redirection avec un court délai pour afficher le message pour les URLs externes
    const redirectTimeout = setTimeout(() => {
      window.location.href = url;
    }, isAppDeeplink ? 100 : 2000); // Redirection plus rapide pour les deeplinks
    
    // Compte à rebours (seulement pour les URLs normales)
    let countdownInterval: NodeJS.Timeout;
    if (!isAppDeeplink) {
      countdownInterval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    // Nettoyage
    return () => {
      clearTimeout(redirectTimeout);
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [url]);

  // Obtenir le nom de domaine pour l'affichage
  const getDomainFromUrl = (urlString: string) => {
    try {
      // Pour les URLs internes, afficher le chemin complet
      if (urlString.startsWith('/')) {
        return window.location.origin + urlString;
      }
      
      // Pour les deeplinks, afficher le lien tel quel
      if (urlString.includes("://") && !urlString.startsWith("http")) {
        return urlString;
      }
      
      // Pour les URLs externes, afficher le nom de domaine
      const url = new URL(urlString);
      return url.hostname;
    } catch (e) {
      return urlString;
    }
  };

  // Pas d'affichage pour les redirections internes
  if (url.startsWith('/')) {
    return null;
  }
  
  // Affichage spécial pour les deeplinks
  if (isDeeplink) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="text-center max-w-lg p-8 rounded-lg border shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Ouverture de l'application...</h1>
          <p className="mb-4">
            Tentative d'ouverture de l'application avec le lien <span className="font-medium">{getDomainFromUrl(url)}</span>
          </p>
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              Si l'application ne s'ouvre pas automatiquement, assurez-vous qu'elle est installée sur votre appareil.
            </p>
          </div>
          <div className="mt-4">
            <a 
              href={url} 
              className="text-primary hover:underline"
            >
              Cliquez ici pour réessayer
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Page de redirection avec animation pendant le chargement (pour les URLs standards)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-lg p-8 rounded-lg border shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Redirection en cours...</h1>
        <p className="mb-4">
          Vous allez être redirigé vers <span className="font-medium">{getDomainFromUrl(url)}</span> dans{" "}
          <span className="font-bold">{secondsLeft}</span> seconde
          {secondsLeft !== 1 ? "s" : ""}.
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-1000 ease-linear"
            style={{ width: `${(secondsLeft / 2) * 100}%` }}
          ></div>
        </div>
        <div className="mt-4">
          <a 
            href={url} 
            className="text-primary hover:underline"
          >
            Cliquez ici si vous n'êtes pas redirigé automatiquement
          </a>
        </div>
      </div>
    </div>
  );
} 