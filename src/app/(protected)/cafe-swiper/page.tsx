"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, X, Coffee, Star } from "lucide-react";
import { useCafes } from "@/hooks/useCafes";

export default function CafeSwiper() {
  const { cafes, isLoading, error } = useCafes();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [_, setDirection] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const nextCardRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const currentX = useRef(0);

  // Shuffle cafes once when loaded
  useEffect(() => {
    if (cafes) {
      cafes.sort(() => Math.random() - 0.5);
    }
  }, [cafes]);

  // Update next index whenever current index changes
  useEffect(() => {
    setNextIndex((currentIndex + 1) % (cafes?.length || 1));
  }, [currentIndex, cafes]);

  // Initialize the next card with GSAP
  useGSAP(() => {
    if (nextCardRef.current) {
      gsap.set(nextCardRef.current, {
        scale: 0.9,
        y: 20,
        opacity: 0.6,
        rotationY: 0,
        force3D: true,
      });
    }
  }, [currentIndex]);

  // Handle card swipe animation
  const handleSwipe = useCallback((dir: string) => {
    if (isDragging) return;

    setDirection(dir);
    setIsDragging(true);

    const xMove = dir === "right" ? 400 : -400;

    // Animate next card to come forward
    if (nextCardRef.current) {
      gsap.to(nextCardRef.current, {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.5,
        force3D: true,
      });
    }

    // Animate current card off screen
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        x: xMove,
        rotation: dir === "right" ? 30 : -30,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === cafes.length - 1 ? 0 : prevIndex + 1
          );
          setDirection(null);
          setIsDragging(false);
        },
      });
    }
  }, [isDragging, cafes?.length]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isDragging) return;
    setIsDraggable(true);
    startX.current = e.clientX;
    currentX.current = 0;

    if (cardRef.current) {
      gsap.set(cardRef.current, { cursor: "pointer" });
    }
  }, [isDragging]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggable) return;

    const deltaX = e.clientX - startX.current;
    currentX.current = deltaX;

    if (cardRef.current) {
      // Calculate rotation based on drag distance (max 30 degrees)
      const rotation = Math.min(Math.max(deltaX / 20, -30), 30);

      gsap.to(cardRef.current, {
        x: deltaX,
        rotation: rotation,
        duration: 0.1,
        force3D: true,
      });

      // Gradually bring the next card forward as current card moves
      if (nextCardRef.current) {
        const progress = Math.min(Math.abs(deltaX) / 200, 1);
        gsap.to(nextCardRef.current, {
          scale: 0.9 + 0.1 * progress,
          y: 20 - 20 * progress,
          opacity: 0.6 + 0.4 * progress,
          duration: 0.1,
        });
      }
    }
  }, [isDraggable]);

  const handleMouseUp = useCallback(() => {
    if (!isDraggable) return;
    setIsDraggable(false);

    if (cardRef.current) {
      gsap.set(cardRef.current, { cursor: "grab" });

      if (Math.abs(currentX.current) < 100) {
        // If not dragged far enough, return to center
        gsap.to(cardRef.current, {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.4,
          ease: "bounce.out(1.5)",
          force3D: true,
        });

        // Return next card to its initial position
        if (nextCardRef.current) {
          gsap.to(nextCardRef.current, {
            scale: 0.9,
            y: 20,
            opacity: 0.6,
            duration: 0.4,
          });
        }
      } else {
        // Determine direction based on drag
        const direction = currentX.current > 0 ? "right" : "left";
        handleSwipe(direction);
      }
    }
  }, [isDraggable, handleSwipe]);

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (isDragging) return;
    setIsDraggable(true);
    startX.current = e.touches[0].clientX;
    currentX.current = 0;
  }, [isDragging]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDraggable) return;

    const deltaX = e.touches[0].clientX - startX.current;
    currentX.current = deltaX;

    if (cardRef.current) {
      // Calculate rotation based on drag distance (max 30 degrees)
      const rotation = Math.min(Math.max(deltaX / 20, -30), 30);

      gsap.to(cardRef.current, {
        x: deltaX,
        rotation: rotation,
        duration: 0.1,
      });

      // Gradually bring the next card forward as current card moves
      if (nextCardRef.current) {
        const progress = Math.min(Math.abs(deltaX) / 200, 1);
        gsap.to(nextCardRef.current, {
          scale: 0.9 + 0.1 * progress,
          y: 20 - 20 * progress,
          opacity: 0.6 + 0.4 * progress,
          duration: 0.1,
        });
      }
    }
  }, [isDraggable]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <Coffee className="w-12 h-12 animate-spin text-buttonColor" />
        <p className="mt-4 text-xl">Loading cafes...</p>
      </div>
    );
  }

  // Error state
  if (error || !cafes || cafes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <p className="text-xl text-red-500">No cafes available to swipe</p>
      </div>
    );
  }

  const currentCafe = cafes[currentIndex];
  const nextCafe = cafes[nextIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-2 items-center justify-center mb-8">
        <Star className="w-12 h-12 bg-buttonColor rounded-full p-2 text-primaryColor" />
        <span className="flex items-center justify-center text-4xl font-bold text-textPrimaryColor">
          Cafe Swiper
        </span>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[60vh] relative overflow-hidden">
        {/* Next card (behind) */}
        <div ref={nextCardRef} className="w-[360px] absolute z-0">
          <Card className="overflow-hidden border-2 border-buttonColor shadow-xl">
            <CardContent className="p-0">
              <div className="relative w-full h-[500px]">
                <Image
                  src={
                    nextCafe.cafeDetails.thumbnail ||
                    "https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg"
                  }
                  alt={nextCafe.cafeDetails.title}
                  fill
                  className="object-cover"
                  draggable={false}
                  priority={false}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-2xl font-bold text-white">
                    {nextCafe.cafeDetails.title}
                  </h2>
                  <p className="text-white text-sm mt-1">
                    {nextCafe.cafeDetails.cafeLocation.district},{" "}
                    {nextCafe.cafeDetails.cafeLocation.city}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 line-clamp-3">
                  {nextCafe.cafeDetails.description ||
                    "No description available"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current card (front) */}
        <div
          key={currentIndex}
          ref={cardRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className="w-[360px] cursor-grab z-10"
        >
          <Card className="overflow-hidden border-2 border-buttonColor shadow-xl">
            <CardContent className="p-0">
              <div className="relative w-full h-[500px]">
                <Image
                  src={
                    currentCafe.cafeDetails.thumbnail ||
                    "https://source.unsplash.com/random/?cafe"
                  }
                  alt={currentCafe.cafeDetails.title}
                  fill
                  className="object-cover"
                  draggable={false}
                  priority={true}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-2xl font-bold text-white">
                    {currentCafe.cafeDetails.title}
                  </h2>
                  <p className="text-white text-sm mt-1">
                    {currentCafe.cafeDetails.cafeLocation.district},{" "}
                    {currentCafe.cafeDetails.cafeLocation.city}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 line-clamp-3">
                  {currentCafe.cafeDetails.description ||
                    "No description available"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
