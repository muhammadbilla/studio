import Image from "next/image";
import type { Product } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Star, StarHalf, ShieldCheck, Truck } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import { getImageById } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

function Rating({ rating, likes }: { rating: number, likes: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="w-5 h-5 fill-current" />)}
        {halfStar && <StarHalf className="w-5 h-5 fill-current" />}
        {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-5 h-5" />)}
      </div>
      <span className="text-muted-foreground text-sm">({likes} avis)</span>
    </div>
  );
}

export function ProductDetails({ product }: { product: Product }) {
  const images = product.imageIds.map(id => getImageById(id));
  
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square relative bg-card rounded-lg overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-contain"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold font-headline text-foreground">
            {product.name}
          </h1>
          <div className="mt-2">
            <Rating rating={product.rating} likes={product.likes} />
          </div>
        </div>
        
        <div className="flex items-baseline gap-4">
          <span className="text-4xl font-bold text-primary">
            {product.price.toLocaleString('fr-FR')} FCFA
          </span>
          {product.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              {product.originalPrice.toLocaleString('fr-FR')} FCFA
            </span>
          )}
        </div>

        <p className="text-foreground/80 leading-relaxed">
          {product.fullDescription}
        </p>

        <div className="space-y-4">
          <WhatsAppButton product={product} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{product.warranty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{product.delivery}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
