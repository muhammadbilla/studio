export type Product = {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: 'Informatique' | 'Téléphonie' | 'Gaming' | 'Image & Son' | 'Photo & Vidéo' | 'Wearables' | 'Maison connectée' | 'Airpod' | 'Câble' | 'Coque de téléphone' | 'Coque personnalisée' | 'Enceinte' | 'PC' | 'Electroménager';
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

export type Category = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
};
