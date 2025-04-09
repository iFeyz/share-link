import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

interface Params {
  params: {
    id: string;
  };
}

// Get a specific ambassador
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const ambassador = await prisma.ambassador.findUnique({
      where: { id: params.id },
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

    if (!ambassador) {
      return NextResponse.json({ error: 'Ambassador not found' }, { status: 404 });
    }

    return NextResponse.json({ ambassador });
  } catch (error: any) {
    console.error(`Error fetching ambassador ${params.id}:`, error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
}

// Update an ambassador
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { name, email, phoneNumber } = await req.json();
    
    // Find the ambassador
    const ambassador = await prisma.ambassador.findUnique({
      where: { id: params.id },
    });

    if (!ambassador) {
      return NextResponse.json({ error: 'Ambassador not found' }, { status: 404 });
    }

    // Update ambassador
    const updatedAmbassador = await prisma.ambassador.update({
      where: { id: params.id },
      data: {
        name: name ?? ambassador.name,
        email: email ?? ambassador.email,
        phoneNumber: phoneNumber ?? ambassador.phoneNumber,
      },
    });

    return NextResponse.json({ ambassador: updatedAmbassador });
  } catch (error: any) {
    console.error(`Error updating ambassador ${params.id}:`, error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
}

// Delete an ambassador
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    // Find the ambassador
    const ambassador = await prisma.ambassador.findUnique({
      where: { id: params.id },
      include: {
        qrCodes: true,
        purchases: true,
      },
    });

    if (!ambassador) {
      return NextResponse.json({ error: 'Ambassador not found' }, { status: 404 });
    }

    // Delete ambassador (will cascade delete related data due to Prisma relations)
    await prisma.ambassador.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Ambassador deleted successfully' });
  } catch (error: any) {
    console.error(`Error deleting ambassador ${params.id}:`, error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
} 