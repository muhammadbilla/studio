'use client';

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton({ product }: { product: Product }) {
  const handlePurchase = () => {
    const message = `Bonjour,

Je souhaite commander :
- Produit : ${product.name}
- Prix : ${product.price.toLocaleString('fr-FR')} FCFA
- Quantité : 1

Merci de me confirmer la disponibilité et les options de livraison.
ID Produit: ${product.id}`;
    
    const whatsappNumber = "22607191068";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base font-bold" onClick={handlePurchase}>
      <MessageCircle className="mr-2 h-5 w-5" />
      Acheter via WhatsApp
    </Button>
  );
}
