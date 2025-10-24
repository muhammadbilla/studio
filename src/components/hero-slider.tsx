"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getImageById } from "@/lib/placeholder-images";

const heroImageIds = ["hero-1", "hero-2", "hero-3", "hero-4"];

export function HeroSlider() {
  const heroImages = heroImageIds.map(id => getImageById(id));

  return (
    <div className="w-full bg-card">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[300px] md:h-[500px] lg:h-[600px]">
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="h-full w-full border-none rounded-none bg-black">
                <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-contain"
                    data-ai-hint={image.imageHint}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground w-10 h-10 md:w-12 md:h-12" />
        <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground w-10 h-10 md:w-12 md:h-12" />
      </Carousel>
    </div>
  );
}
