"use client"

import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Headphones,
  Cable,
  Palette,
  Speaker,
  Laptop,
  Refrigerator,
  Monitor,
  Gamepad2,
  Tv,
  Camera,
  Watch,
  Home,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from 'next/link';
import { cn, slugify } from "@/lib/utils";
import { Button } from './ui/button';
import { products } from '@/lib/products';

const iconMap: Record<string, LucideIcon> = {
    "Téléphonie": Smartphone,
    "Airpod": Headphones,
    "Câble": Cable,
    "Coque de téléphone": Smartphone,
    "Coque personnalisée": Palette,
    "Enceinte": Speaker,
    "PC": Laptop,
    "Electroménager": Refrigerator,
    "Informatique": Monitor,
    "Gaming": Gamepad2,
    "Image & Son": Tv,
    "Photo & Vidéo": Camera,
    "Wearables": Watch,
    "Maison connectée": Home,
};

const categoryGradients: Record<string, string> = {
    "Téléphonie": "from-sky-400 to-sky-600",
    "Airpod": "from-blue-400 to-blue-600",
    "Câble": "from-yellow-400 to-yellow-600",
    "Coque de téléphone": "from-red-400 to-red-600",
    "Coque personnalisée": "from-pink-400 to-pink-600",
    "Enceinte": "from-purple-400 to-purple-600",
    "PC": "from-indigo-400 to-indigo-600",
    "Electroménager": "from-gray-400 to-gray-600",
    "Informatique": "from-green-400 to-green-600",
    "Gaming": "from-red-500 to-red-700",
    "Image & Son": "from-orange-400 to-orange-600",
    "Wearables": "from-teal-400 to-teal-600",
    "default": "from-gray-400 to-gray-600",
};


export function CategoryCarousel() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const categories = React.useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return uniqueCategories.map(name => ({
      name,
      icon: iconMap[name] || Smartphone,
      gradient: categoryGradients[name] || categoryGradients.default
    }));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline text-center text-foreground mb-8">
          Nos Catégories
        </h2>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 bg-card/80 hover:bg-card"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-4 lg:px-0"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.name} href={`/category/${slugify(category.name)}`} className="flex-shrink-0 snap-center">
                  <div className="flex flex-col items-center group">
                    <div
                      className={cn(
                        "w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br shadow-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl",
                        category.gradient
                      )}
                    >
                      <Icon className="text-white h-12 w-12" />
                    </div>
                    <span className="text-foreground text-sm font-semibold mt-4 text-center w-28">
                      {category.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <Button
             variant="outline"
             size="icon"
             className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 bg-card/80 hover:bg-card"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
