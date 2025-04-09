import { NextRequest, NextResponse } from 'next/server';
import { handleWebhookEvent } from '@/lib/stripe';
import { wayfeApiService } from '@/lib/wayfe-api';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  console.log("🔔 Webhook reçu");
  
  try {
    const payload = await req.text();
    const signature = req.headers.get('stripe-signature') || '';
    
    console.log("📝 Signature Stripe:", signature ? "Présente" : "Absente");
    
    // Pour le développement local, on peut afficher le début du payload pour le débogage
    if (process.env.NODE_ENV === 'development') {
      console.log("📦 Début du payload:", payload.substring(0, 200) + "...");
    }

    try {
      // Vérification de la signature Stripe
      if (!signature) {
        console.error("❗ Signature Stripe manquante dans la requête");
        return NextResponse.json({ error: "Stripe signature is missing" }, { status: 400 });
      }

      const { event } = await handleWebhookEvent(signature, Buffer.from(payload));
      console.log("✅ Événement Stripe validé:", event.type);
      
      // Vérifier que l'événement contient des données
      if (!event.data || !event.data.object) {
        console.error("❗ Événement Stripe sans données");
        return NextResponse.json({ error: "Event data is missing" }, { status: 400 });
      }
      
      // Handle checkout.session.completed event
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        console.log("💰 Session de paiement complétée:", session.id);
        
        // Vérifier que la session contient l'ID
        if (!session.id) {
          console.error("❗ ID de session manquant dans l'événement");
          return NextResponse.json({ error: "Session ID is missing" }, { status: 400 });
        }
        
        try {
          // Get the purchase from the database
          const purchase = await prisma.purchase.findUnique({
            where: { stripeSessionId: session.id },
            include: {
              ambassador: true,
              qrCode: true
            }
          });

          if (!purchase) {
            console.error('❌ Achat non trouvé pour la session:', session.id);
            console.error('👉 Ceci peut être normal lors d\'un test avec un événement simulé.');
            
            // Créer un achat de test pour les événements simulés en dev
            if (process.env.NODE_ENV === 'development' && (session.id.startsWith('cs_test') || session.mode === 'subscription')) {
              console.log("🔧 Mode développement: création d'un achat de test");
              
              // Dans un environnement de développement, on peut créer un achat fictif pour tester
              const testPurchase = {
                id: 'test_purchase_id',
                customerEmail: session.customer_email || 'test@example.com',
                wayfeUserId: null,
                // Utiliser l'email comme ID utilisateur pour les tests
                userId: 29715, // ID de test pour Wayfe
              };
              
              console.log("🧪 Ajout d'abonnement de test pour:", testPurchase.userId);
              const result = await wayfeApiService.addSubscription(testPurchase.userId);
              console.log("🔑 Résultat de l'abonnement de test:", result ? "Succès" : "Échec");
              
              return NextResponse.json({ 
                received: true, 
                status: "success",
                mode: "test",
                testResult: result
              });
            }
            
            return NextResponse.json({ 
              received: true, 
              error: "Purchase not found",
              note: "This can be expected for test events" 
            });
          }
          
          console.log("🛒 Achat trouvé:", {
            id: purchase.id,
            email: purchase.customerEmail,
            amount: purchase.amount,
            ambassadorId: purchase.ambassadorId,
            qrCodeId: purchase.qrCodeId
          });

          // Update the Wayfe subscription
          if (purchase.wayfeUserId) {
            console.log("👤 Utilisateur Wayfe déjà identifié:", purchase.wayfeUserId);
            const userId = parseInt(purchase.wayfeUserId);
            const result = await wayfeApiService.addSubscription(userId);
            console.log("🔑 Abonnement ajouté à l'utilisateur existant:", result ? "Succès" : "Échec");
          } else {
            // Try to find the user ID from the customer email
            if (!purchase.customerEmail) {
              console.error('❗ Email client manquant dans l\'achat:', purchase.id);
              return NextResponse.json({ error: "Customer email is missing" }, { status: 400 });
            }
            
            console.log("🔍 Recherche de l'utilisateur Wayfe par email:", purchase.customerEmail);
            const { user, eligible } = await wayfeApiService.checkUserEligibility(purchase.customerEmail);
            console.log("👥 Résultat de la recherche:", user ? "Utilisateur trouvé" : "Utilisateur non trouvé", "Éligible:", eligible);
            
            if (user && user.id) {
              // Update the purchase record with the Wayfe user ID
              console.log("✏️ Mise à jour de l'achat avec l'ID utilisateur Wayfe:", user.id);
              await prisma.purchase.update({
                where: { id: purchase.id },
                data: { wayfeUserId: user.id.toString() },
              });

              // Add subscription
              console.log("🎁 Ajout de l'abonnement pour l'utilisateur:", user.id);
              const result = await wayfeApiService.addSubscription(user.id);
              console.log("🎯 Résultat de l'ajout d'abonnement:", result ? "Succès" : "Échec");
              
              if (!result) {
                console.error('❗ Échec de l\'ajout d\'abonnement pour l\'utilisateur:', user.id);
                return NextResponse.json({ 
                  received: true, 
                  status: "partial", 
                  error: "Failed to add subscription" 
                });
              }
            } else {
              console.error('❓ Utilisateur Wayfe non trouvé pour l\'email:', purchase.customerEmail);
              return NextResponse.json({ 
                received: true, 
                status: "partial", 
                error: "Wayfe user not found" 
              });
            }
          }
          
          console.log("✨ Traitement du webhook terminé avec succès");
          return NextResponse.json({ received: true, status: "success" });
          
        } catch (dbError) {
          console.error('💥 Erreur lors de l\'interaction avec la base de données:', dbError);
          return NextResponse.json(
            { error: dbError instanceof Error ? dbError.message : 'Database error', status: "error" },
            { status: 500 }
          );
        }
      } else {
        console.log("ℹ️ Événement ignoré (type non géré):", event.type);
        return NextResponse.json({ 
          received: true, 
          status: "ignored",
          eventType: event.type 
        });
      }
    } catch (webhookError) {
      console.error('🚫 Erreur de validation du webhook:', webhookError);
      return NextResponse.json(
        { error: webhookError instanceof Error ? webhookError.message : 'Invalid webhook payload' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('💥 Erreur générale lors du traitement du webhook:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred', status: "error" },
      { status: 500 }
    );
  }
}

// Disable Next.js body parsing for this route
export const config = {
  api: {
    bodyParser: false,
  },
}; 