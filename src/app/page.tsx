"use client";

import dynamic from "next/dynamic";

// Lazy load components with a single dynamic import to optimize performance
const HeroBanner = dynamic(() => import("@/components/home/hero-banner"), {
  ssr: false,
});
const CafeMainBrands = dynamic(() => import("@/components/home/cafe-brands"), {
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

export default function Home() {
  return (
    <div className="w-full mx-auto overflow-hidden relative">
      <HeroBanner />
      <div className="bg-buttonColor">
        <CafeMainBrands />
      </div>
    </div>
  );
}
