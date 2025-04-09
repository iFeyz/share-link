import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Get all ambassadors
export async function GET() {
  try {
    const ambassadors = await prisma.ambassador.findMany({
      include: {
        qrCodes: true,
        purchases: {
          select: {
            id: true,
            amount: true,
            status: true,
            customerEmail: true,
            customerName: true,
            createdAt: true,
          },
        },
      },
    });

    return NextResponse.json({ ambassadors });
  } catch (error: any) {
    console.error('Error fetching ambassadors:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
}

// Create a new ambassador
export async function POST(req: NextRequest) {
  try {
    const { name, email, phoneNumber } = await req.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if ambassador already exists
    const existingAmbassador = await prisma.ambassador.findUnique({
      where: { email },
    });

    if (existingAmbassador) {
      return NextResponse.json(
        { error: 'Ambassador with this email already exists', ambassador: existingAmbassador },
        { status: 400 }
      );
    }

    // Create new ambassador
    const ambassador = await prisma.ambassador.create({
      data: {
        name,
        email,
        phoneNumber,
      },
    });

    return NextResponse.json({ ambassador }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating ambassador:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
} 