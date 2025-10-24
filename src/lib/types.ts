import type { LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  likes: number;
  stock: string;
  badge?: string;
  imageIds: string[];
  specs: string[];
  warranty: string;
  delivery: string;
};
