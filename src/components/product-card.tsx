import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { Star, StarHalf } from "lucide-react";
import { getImageById } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function Rating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="w-4 h-4 fill-current" />)}
      {halfStar && <StarHalf className="w-4 h-4 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)}
      <span className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}/5</span>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const image = getImageById(product.imageIds[0]);
  
  return (
    <Link href={`/products/${product.id}`} className="block bg-white border border-gray-200 rounded-md p-2 hover:shadow-lg transition-shadow duration-200">
      <div className="relative aspect-square w-full">
         {product.badge && (
          <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground">
            {product.badge}
          </Badge>
        )}
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-contain"
          data-ai-hint={image.imageHint}
        />
      </div>
      <div className="pt-2">
        <h3 className="text-sm text-gray-800 font-normal h-10 line-clamp-2 mb-1">
          {product.name}
        </h3>
        <Rating rating={product.rating} />
        <p className="text-lg font-normal text-gray-800 mt-1">
          {product.price.toLocaleString('fr-FR')} FCFA
        </p>
      </div>
    </Link>
  );
}
