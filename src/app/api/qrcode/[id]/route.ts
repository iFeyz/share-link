import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const qrCodeId = params.id;

    if (!qrCodeId) {
      return NextResponse.json(
        { error: 'QR code ID is required' },
        { status: 400 }
      );
    }

    const qrCode = await prisma.qRCode.findUnique({
      where: { id: qrCodeId },
      include: {
        analytics: true,
        ambassador: true,
        purchases: {
          select: {
            id: true,
            status: true,
            amount: true,
            customerEmail: true,
            customerName: true,
            createdAt: true,
          },
        },
      },
    });

    if (!qrCode) {
      return NextResponse.json(
        { error: 'QR code not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ qrCode });
  } catch (error: any) {
    console.error('Error fetching QR code:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
} 