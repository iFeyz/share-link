// @ts-nocheck
import QRCodeDetailPage from '@/components/QRCodeDetail';
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

interface QRCodeDetailPageProps {
  params: {
    id: string;
  };
}

export default async function QRCodeDetailPageWrapper({ params }: QRCodeDetailPageProps) {
  // Await params pour Next.js 15+
  const paramsData = await params;
  const id = paramsData?.id;

  if (!id) {
    return notFound();
  }

  const qrCode = await prisma.qRCode.findUnique({
    where: { id: id },
    include: { analytics: true },
  });

  if (!qrCode) {
    notFound();
  }

  return <QRCodeDetailPage qrCode={qrCode} />;
} 