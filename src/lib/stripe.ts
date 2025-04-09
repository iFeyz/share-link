import Stripe from 'stripe';
import { prisma } from './db';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-03-31.basil',
});

export interface CreateCheckoutOptions {
  ambassadorId: string;
  qrCodeId: string;
  customerEmail: string;
  customerName?: string;
  successUrl: string;
  cancelUrl: string;
  userId?: number;
}

export async function createCheckoutSession(options: CreateCheckoutOptions) {
  try {
    // Get ambassador and QR code details
    const ambassador = await prisma.ambassador.findUnique({
      where: { id: options.ambassadorId },
    });

    const qrCode = await prisma.qRCode.findUnique({
      where: { id: options.qrCodeId },
    });

    if (!ambassador || !qrCode) {
      throw new Error('Ambassador or QR code not found');
    }

    // Create a new checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: 'price_1RBvgkBDw26YDewvClauZIr7', // ID du prix pour "Offre ambassadeur" à 14,99 €
          quantity: 1,
        },
      ],
      customer_email: options.customerEmail,
      client_reference_id: `${options.ambassadorId}:${options.qrCodeId}`,
      metadata: {
        ambassadorId: options.ambassadorId,
        qrCodeId: options.qrCodeId,
        customerEmail: options.customerEmail,
        customerName: options.customerName || '',
        productName: 'Offre ambassadeur',
        productId: 'prod_S67w8HagtI7t8q',
        userId: options.userId?.toString() || ''
      },
      success_url: options.successUrl,
      cancel_url: options.cancelUrl,
    });

    // Create a purchase record in the database
    await prisma.purchase.create({
      data: {
        amount: 14.99, // €14.99
        currency: 'EUR',
        status: 'pending',
        customerEmail: options.customerEmail,
        customerName: options.customerName,
        stripeSessionId: session.id,
        qrCode: { connect: { id: options.qrCodeId } },
        ambassador: { connect: { id: options.ambassadorId } },
      },
    });

    return { sessionId: session.id, sessionUrl: session.url };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

export async function handleWebhookEvent(signature: string, payload: Buffer) {
  try {
    // Verify and construct the event
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || '',
    );

    // Handle specific events
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Update purchase status in the database
      await prisma.purchase.update({
        where: { stripeSessionId: session.id },
        data: { status: 'completed' },
      });

      // Get user information from metadata
      if (session.metadata) {
        try {
          // Import WayfeAPI dynamically to avoid circular dependencies
          const { WayfeApiService } = await import('./wayfe-api');
          const wayfeApi = new WayfeApiService();
          
          // Extract user ID from metadata
          const userId = parseInt(session.metadata.userId || '0', 10);
          
          if (userId > 0) {
            // Add subscription for the user
            console.log(`🔄 Adding subscription for user ID: ${userId}`);
            const result = await wayfeApi.addSubscription(userId);
            console.log(`📊 Subscription add result: ${result ? 'Success' : 'Failed'}`);
          } else {
            console.error('❌ Missing or invalid userId in session metadata', session.metadata);
          }
        } catch (subscriptionError) {
          console.error('❌ Error adding subscription:', subscriptionError);
          // Continue processing even if subscription add fails
        }
      }
      
      return { success: true, event };
    }

    return { success: true, event };
  } catch (error) {
    console.error('Error handling webhook event:', error);
    throw error;
  }
}

export default stripe; 