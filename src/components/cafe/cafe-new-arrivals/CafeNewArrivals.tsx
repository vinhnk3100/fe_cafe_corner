"use client";

import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Cafe } from "@/schemas/cafe.schema";

export default function CafeNewArrivals({ cafes }: { cafes: Cafe[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    // Start autoplay when component mounts
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 2000);
    };

    startAutoplay();

    // Pause autoplay on mouse enter
    const handleMouseEnter = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Resume autoplay on mouse leave
    const handleMouseLeave = () => {
      if (!intervalRef.current) {
        startAutoplay();
      }
    };

    // Get the DOM element from the carousel API
    const carouselElement = api.rootNode();
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', handleMouseEnter);
      carouselElement.addEventListener('mouseleave', handleMouseLeave);
    }

    // Clean up interval and event listeners on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', handleMouseEnter);
        carouselElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [api]);

  const sortedDescendingDateCreateCafes = [...cafes].sort(
    (a, b) =>
      new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
  );
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative max-xl:overflow-hidden"
      setApi={setApi}
    >
      <CarouselContent>
        {sortedDescendingDateCreateCafes.slice(0, 8).map((cafe, index) => {
          return (
            <CarouselItem key={cafe.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1 rounded-lg">
                <Card className="overflow-hidden border hover:border-buttonHoverColor">
                  <CardContent className="relative flex flex-col h-56 p-0">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={
                          cafe.cafeDetails.thumbnail ||
                          "https://source.unsplash.com/random/?cafe"
                        }
                        alt={cafe.cafeDetails.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                        width={1920}
                        height={1000}
                      />
                    </div>
                    <div className="p-3 min-h-24 max-h-24 text-white absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/40">
                      <div className="font-semibold text-xl truncate">
                        {cafe.cafeDetails.title}
                      </div>
                      <div className="text-md text-gray-200 group-hover:text-white line-clamp-2">
                        {cafe.cafeDetails.cafeLocation.houseNumber}{" "}
                        {cafe.cafeDetails.cafeLocation.street}, Quận{" "}
                        {cafe.cafeDetails.cafeLocation.district},{" "}
                        {cafe.cafeDetails.cafeLocation.ward},{" "}
                        {cafe.cafeDetails.cafeLocation.city}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute xl:-left-3 top-1/2 -translate-y-1/2 bg-buttonColor border-2 border-primaryColor text-primaryColor rounded-full p-2 scale-[180%]" />
      <CarouselNext className="absolute xl:-right-3 top-1/2 -translate-y-1/2 bg-buttonColor border-2 border-primaryColor text-primaryColor rounded-full p-2 scale-[180%]" />
    </Carousel>
  );
}
