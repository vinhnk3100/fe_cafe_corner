"use client";

import dynamic from "next/dynamic";
import { Coffee } from "lucide-react";
import Loading from "./loading";
import { useEffect, useState } from "react";
import { useIsFetching } from "@tanstack/react-query";

// Lazy load components with a single dynamic import to optimize performance
const HeroBanner = dynamic(() => import("@/components/home/hero-banner"), {
  ssr: false,
});
const CafeMainBrands = dynamic(() => import("@/components/home/cafe-brands"), {
  ssr: false,
});
const AboutUs = dynamic(() => import("@/components/home/about-us"), {
  ssr: false,
});
const CafeTestimonial = dynamic(
  () => import("@/components/home/cafe-testimonial"),
  { ssr: false }
);
const CafeTrendingList = dynamic(
  () => import("@/components/home/cafe-trending-list"),
  { ssr: false }
);
const CafeMainCarousel = dynamic(
  () => import("@/components/home/cafe-carousel"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="w-full mx-auto overflow-hidden relative">
      <HeroBanner />
      <div className="bg-buttonColor">
        <CafeMainBrands />
      </div>
      <div className="container mx-auto">
        <AboutUs />
      </div>
      <CafeTestimonial />
      <div className="container mx-auto w-full justify-items-center flex flex-col gap-6 py-4 lg:py-12">
        <CafeTrendingList />
      </div>
      <div className="h-full rounded-md flex flex-col text-slate-200 font-semibold items-center justify-center lg:gap-6 pb-4 lg:pb-8">
        <CafeMainCarousel />
      </div>
    </div>
  );
}
