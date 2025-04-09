"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader2, MoreVertical, Plus, Trash, Edit, QrCode } from "lucide-react";
import Link from "next/link";

// Ambassador interface
interface Ambassador {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
  qrCodes: any[];
  purchases: any[];
}

export default function AmbassadorsPage() {
  const router = useRouter();
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // New ambassador form state
  const [newAmbassador, setNewAmbassador] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  
  // Edit ambassador form state
  const [editAmbassador, setEditAmbassador] = useState<Ambassador | null>(null);
  
  // Dialog states
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAmbassador, setSelectedAmbassador] = useState<Ambassador | null>(null);
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch ambassadors on component mount
  useEffect(() => {
    fetchAmbassadors();
  }, []);

  // Fetch ambassadors
  const fetchAmbassadors = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/ambassadors");
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch ambassadors");
      }
      
      setAmbassadors(data.ambassadors || []);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching ambassadors");
      console.error("Error fetching ambassadors:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formType: "new" | "edit"
  ) => {
    const { name, value } = e.target;
    
    if (formType === "new") {
      setNewAmbassador((prev) => ({ ...prev, [name]: value }));
    } else if (formType === "edit" && editAmbassador) {
      setEditAmbassador((prev) => ({ ...prev!, [name]: value }));
    }
  };

  // Create ambassador
  const createAmbassador = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch("/api/ambassadors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAmbassador),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to create ambassador");
      }
      
      // Reset form and close dialog
      setNewAmbassador({ name: "", email: "", phoneNumber: "" });
      setShowAddDialog(false);
      
      // Refresh ambassadors list
      fetchAmbassadors();
    } catch (err: any) {
      setSubmitError(err.message || "An error occurred while creating ambassador");
      console.error("Error creating ambassador:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update ambassador
  const updateAmbassador = async () => {
    if (!editAmbassador) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch(`/api/ambassadors/${editAmbassador.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editAmbassador.name,
          email: editAmbassador.email,
          phoneNumber: editAmbassador.phoneNumber,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to update ambassador");
      }
      
      // Reset form and close dialog
      setEditAmbassador(null);
      setShowEditDialog(false);
      
      // Refresh ambassadors list
      fetchAmbassadors();
    } catch (err: any) {
      setSubmitError(err.message || "An error occurred while updating ambassador");
      console.error("Error updating ambassador:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete ambassador
  const deleteAmbassador = async () => {
    if (!selectedAmbassador) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch(`/api/ambassadors/${selectedAmbassador.id}`, {
        method: "DELETE",
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to delete ambassador");
      }
      
      // Reset and close dialog
      setSelectedAmbassador(null);
      setShowDeleteDialog(false);
      
      // Refresh ambassadors list
      fetchAmbassadors();
    } catch (err: any) {
      setSubmitError(err.message || "An error occurred while deleting ambassador");
      console.error("Error deleting ambassador:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={item} className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Ambassadeurs</h1>
          
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un ambassadeur
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un ambassadeur</DialogTitle>
                <DialogDescription>
                  Créez un nouvel ambassadeur pour générer des QR codes et suivre les ventes.
                </DialogDescription>
              </DialogHeader>
              
              {submitError && (
                <div className="bg-destructive/15 border border-destructive text-destructive p-3 rounded-md">
                  {submitError}
                </div>
              )}
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newAmbassador.name}
                    onChange={(e) => handleInputChange(e, "new")}
                    placeholder="Nom complet"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={newAmbassador.email}
                    onChange={(e) => handleInputChange(e, "new")}
                    placeholder="email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Téléphone (optionnel)</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={newAmbassador.phoneNumber}
                    onChange={(e) => handleInputChange(e, "new")}
                    placeholder="+33612345678"
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                  Annuler
                </Button>
                <Button onClick={createAmbassador} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Création...
                    </>
                  ) : (
                    "Créer"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <motion.div
            variants={item}
            className="bg-destructive/15 border border-destructive text-destructive p-4 rounded-md"
          >
            {error}
          </motion.div>
        ) : ambassadors.length === 0 ? (
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center h-64 border rounded-lg border-dashed p-8"
          >
            <p className="text-muted-foreground mb-4">Aucun ambassadeur trouvé</p>
            <Button onClick={() => setShowAddDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un ambassadeur
            </Button>
          </motion.div>
        ) : (
          <motion.div variants={item}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>QR Codes</TableHead>
                  <TableHead>Ventes</TableHead>
                  <TableHead>Date de création</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ambassadors.map((ambassador) => (
                  <TableRow key={ambassador.id}>
                    <TableCell className="font-medium">{ambassador.name}</TableCell>
                    <TableCell>{ambassador.email}</TableCell>
                    <TableCell>{ambassador.phoneNumber || "-"}</TableCell>
                    <TableCell>{ambassador.qrCodes.length}</TableCell>
                    <TableCell>{ambassador.purchases.length}</TableCell>
                    <TableCell>{new Date(ambassador.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => {
                              setEditAmbassador(ambassador);
                              setShowEditDialog(true);
                            }}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Modifier
                          </DropdownMenuItem>
     
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedAmbassador(ambassador);
                              setShowDeleteDialog(true);
                            }}
                            className="text-destructive"
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        )}
      </motion.div>
      
      {/* Edit Ambassador Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier l'ambassadeur</DialogTitle>
            <DialogDescription>
              Modifiez les informations de l'ambassadeur.
            </DialogDescription>
          </DialogHeader>
          
          {submitError && (
            <div className="bg-destructive/15 border border-destructive text-destructive p-3 rounded-md">
              {submitError}
            </div>
          )}
          
          {editAmbassador && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Nom</Label>
                <Input
                  id="edit-name"
                  name="name"
                  value={editAmbassador.name}
                  onChange={(e) => handleInputChange(e, "edit")}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  name="email"
                  type="email"
                  value={editAmbassador.email}
                  onChange={(e) => handleInputChange(e, "edit")}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-phoneNumber">Téléphone (optionnel)</Label>
                <Input
                  id="edit-phoneNumber"
                  name="phoneNumber"
                  value={editAmbassador.phoneNumber || ""}
                  onChange={(e) => handleInputChange(e, "edit")}
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditDialog(false)}>
              Annuler
            </Button>
            <Button onClick={updateAmbassador} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mise à jour...
                </>
              ) : (
                "Enregistrer"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Ambassador Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer l'ambassadeur</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer cet ambassadeur ? Cette action ne peut pas être annulée.
            </DialogDescription>
          </DialogHeader>
          
          {submitError && (
            <div className="bg-destructive/15 border border-destructive text-destructive p-3 rounded-md">
              {submitError}
            </div>
          )}
          
          {selectedAmbassador && (
            <div className="py-4">
              <p><strong>Nom:</strong> {selectedAmbassador.name}</p>
              <p><strong>Email:</strong> {selectedAmbassador.email}</p>
              <p><strong>QR Codes associés:</strong> {selectedAmbassador.qrCodes.length}</p>
              <p><strong>Ventes enregistrées:</strong> {selectedAmbassador.purchases.length}</p>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Annuler
            </Button>
            <Button
              variant="destructive"
              onClick={deleteAmbassador}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Suppression...
                </>
              ) : (
                "Supprimer"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 