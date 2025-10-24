import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { Star, StarHalf, Heart, CheckCircle, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getImageById } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

function Rating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="w-4 h-4 fill-current" />)}
      {halfStar && <StarHalf className="w-4 h-4 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4" />)}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const image = getImageById(product.imageIds[0]);

  const getBadgeVariant = (badgeText?: string) => {
    if (!badgeText) return "default";
    if (badgeText.startsWith("-")) return "destructive";
    if (badgeText.toLowerCase() === "nouveau") return "default";
    return "secondary";
  };
  
  return (
    <Card className="w-full max-w-sm flex-shrink-0 snap-center overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative">
          <Link href={`/products/${product.id}`}>
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              data-ai-hint={image.imageHint}
            />
          </Link>
          {product.badge && (
            <Badge variant={getBadgeVariant(product.badge)} className="absolute top-2 left-2">
              {product.badge}
            </Badge>
          )}
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 w-8 h-8 bg-card/80 rounded-full shadow-md hover:bg-card">
            <Heart className="h-4 w-4 text-foreground/70" />
          </Button>
          {product.stock === "En stock" && (
            <Badge variant="secondary" className="absolute bottom-2 right-2 bg-green-600/90 text-white">
              <CheckCircle className="w-3 h-3 mr-1" />
              {product.stock}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`} className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground mb-2 h-10 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center text-xs text-muted-foreground mb-2">
            <Rating rating={product.rating} />
            <span className="ml-1">({product.likes} avis)</span>
          </div>
          <div>
            <p className="text-xl font-bold text-primary">{product.price.toLocaleString('fr-FR')} FCFA</p>
            {product.originalPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {product.originalPrice.toLocaleString('fr-FR')} FCFA
              </p>
            )}
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
         <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/products/${product.id}`}>
              <Eye className="mr-2 h-4 w-4" /> Voir détails
            </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
