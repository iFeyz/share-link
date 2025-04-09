import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';
import { wayfeApiService } from '@/lib/wayfe-api';

export async function POST(req: NextRequest) {
  try {
    const {
      ambassadorId,
      qrCodeId,
      customerEmail,
      customerName,
      returnUrl,
    } = await req.json();

    // Validate required fields
    if (!ambassadorId || !qrCodeId || !customerEmail || !returnUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user is eligible for subscription via Wayfe API
    const { eligible, user } = await wayfeApiService.checkUserEligibility(customerEmail);
    
    if (!eligible) {
      return NextResponse.json(
        { error: 'User is not eligible for subscription', isUserSecured: true },
        { status: 403 }
      );
    }

    // Create checkout session
    const successUrl = `${returnUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${returnUrl}/cancel`;

    const { sessionId, sessionUrl } = await createCheckoutSession({
      ambassadorId,
      qrCodeId,
      customerEmail,
      customerName,
      successUrl,
      cancelUrl,
    });

    return NextResponse.json({ sessionId, sessionUrl, wayfeUserId: user?.id });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
} 