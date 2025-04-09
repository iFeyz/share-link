import { prisma } from "../lib/db";

async function main() {
  try {
    // Créer un ambassadeur de test
    const ambassador = await prisma.ambassador.create({
      data: {
        name: "Arthur Jochum",
        email: "ajochum.pro@gmail.com",
        phoneNumber: "+33674276789",
      },
    });
    
    console.log(`Ambassadeur créé avec succès: ${ambassador.name} (ID: ${ambassador.id})`);
    
    // Créer un QR code associé à cet ambassadeur
    const qrCode = await prisma.qRCode.create({
      data: {
        name: "Offre Premium Wayfe",
        targetUrl: "https://wayfe.net/premium",
        proxyUrl: `/q/premium-${Date.now()}`,
        isActive: true,
        isSubscriptionOffer: true,
        subscriptionWebUrl: "/premium",
        ambassadorId: ambassador.id,
      },
    });
    
    console.log(`QR code créé avec succès: ${qrCode.name} (ID: ${qrCode.id})`);
    console.log(`URL de redirection: ${qrCode.proxyUrl}`);
    
  } catch (error) {
    console.error("Erreur lors de la création des données de test:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 