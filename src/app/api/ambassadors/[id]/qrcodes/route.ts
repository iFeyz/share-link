import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

interface Params {
  params: {
    id: string;
  };
}

// Get QR codes for an ambassador
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const ambassador = await prisma.ambassador.findUnique({
      where: { id: params.id },
      include: {
        qrCodes: {
          include: {
            analytics: true,
          },
        },
      },
    });

    if (!ambassador) {
      return NextResponse.json({ error: 'Ambassador not found' }, { status: 404 });
    }

    return NextResponse.json({ qrCodes: ambassador.qrCodes });
  } catch (error: any) {
    console.error(`Error fetching QR codes for ambassador ${params.id}:`, error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
}

// Associate QR code with ambassador
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Extraire l'ID de l'ambassadeur des paramètres de l'URL
    const ambassadorId = params.id;
    
    // Valider l'ID de l'ambassadeur
    if (!ambassadorId) {
      return NextResponse.json(
        { error: 'Ambassador ID is required' },
        { status: 400 }
      );
    }

    // Extraire l'ID du QR code du corps de la requête
    const { qrCodeId } = await request.json();
    
    // Valider l'ID du QR code
    if (!qrCodeId) {
      return NextResponse.json(
        { error: 'QR Code ID is required' },
        { status: 400 }
      );
    }

    // Vérifier que l'ambassadeur existe
    const ambassador = await prisma.ambassador.findUnique({
      where: { id: ambassadorId },
    });

    if (!ambassador) {
      return NextResponse.json(
        { error: 'Ambassador not found' },
        { status: 404 }
      );
    }

    // Vérifier que le QR code existe
    const qrCode = await prisma.qRCode.findUnique({
      where: { id: qrCodeId },
    });

    if (!qrCode) {
      return NextResponse.json(
        { error: 'QR Code not found' },
        { status: 404 }
      );
    }

    // Mettre à jour le QR code pour l'associer à l'ambassadeur
    const updatedQRCode = await prisma.qRCode.update({
      where: { id: qrCodeId },
      data: {
        ambassadorId,
      },
    });

    return NextResponse.json(updatedQRCode);
  } catch (error) {
    console.error('Error assigning QR code to ambassador:', error);
    return NextResponse.json(
      { error: 'Failed to assign QR code to ambassador' },
      { status: 500 }
    );
  }
} 