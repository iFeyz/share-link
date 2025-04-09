// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { getQRCodeImageSvg } from "@/lib/actions";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Await params pour Next.js 15+
  const paramsData = await params;
  const id = paramsData?.id;

  if (!id) {
    return NextResponse.json(
      { error: "QR code ID is required" },
      { status: 400 }
    );
  }

  try {
    const qrCodeSvg = await getQRCodeImageSvg(id);
    
    return new NextResponse(qrCodeSvg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    );
  }
} 