"use client"

import * as React from 'react';
import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

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
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Plus récents</SelectItem>
              <SelectItem value="price-asc">Prix croissant</SelectItem>
              <SelectItem value="price-desc">Prix décroissant</SelectItem>
              <SelectItem value="best-selling">Meilleures ventes</SelectItem>
              <SelectItem value="top-rated">Mieux notés</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
