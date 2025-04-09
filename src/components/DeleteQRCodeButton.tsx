"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { deleteQRCode } from "@/lib/actions";
import { useRouter } from "next/navigation";

interface DeleteQRCodeButtonProps {
  id: string;
  name: string;
}

export default function DeleteQRCodeButton({ id, name }: DeleteQRCodeButtonProps) {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    try {
      setIsDeleting(true);
      await deleteQRCode(id);
      setOpen(false);
      toast.success(`QR code "${name}" supprimé avec succès`);
      router.refresh();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast.error("Échec de la suppression du QR code");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="destructive" size="sm">
            Supprimer
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Supprimer le QR Code</DialogTitle>
          <DialogDescription>
            Êtes-vous sûr de vouloir supprimer le QR code "{name}"? Cette action est irréversible.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex gap-2 justify-end">
          <Button variant="outline" onClick={() => setOpen(false)} disabled={isDeleting}>
            Annuler
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleDelete} 
            disabled={isDeleting}
          >
            {isDeleting ? "Suppression..." : "Supprimer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 