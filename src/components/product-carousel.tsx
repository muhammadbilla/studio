"use client"

import * as React from 'react';
import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductCarouselProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export function ProductCarousel({ id, title, description, products }: ProductCarouselProps) {
  return (
    <section id={id} className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-headline text-foreground">{title}</h2>
            <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
          </div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
