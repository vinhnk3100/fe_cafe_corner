"use client";

import {
  CafeMainCarousel,
  CafeMainRank,
  CafeMainBrands,
  CafeMainView,
  CafeMainCard,
  CafeMainCategory,
} from "@/components/cafe";

export default function CafesPage() {
  return (
    <div className="w-full mx-auto">
      <div className="h-full rounded-md flex flex-col text-slate-200 font-semibold items-center justify-center lg:gap-6 pb-4 lg:pb-8">
        <CafeMainCarousel />
      </div>

      <div className="bg-slate-950 shadow-xl flex flex-col text-slate-200 w-full mx-auto font-semibold items-center justify-center h-full lg:h-auto gap-6 py-4 lg:py-12">
        <span className="text-sm md:text-3xl text-slate-50 font-semibold">
          Cafe of The Year 2024
        </span>
        <CafeMainRank />
      </div>

      <div className="container mx-auto flex flex-col w-full font-semibold items-center h-full gap-6 py-4 lg:py-12">
        <div className="text-sm md:text-3xl text-slate-300">
          Popular Cafe Brand
        </div>
        <CafeMainBrands />
      </div>

      <div className="bg-slate-950 shadow-xl flex flex-col text-slate-200 w-full mx-auto font-semibold items-center justify-center h-full lg:h-auto gap-6 py-4 lg:py-12">
        <span className="text-sm md:text-3xl text-slate-50 text-center">
          Quick Explore Popular View
        </span>
        <div className="container gap-4 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-x-3">
          <CafeMainView />
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row py-5 justify-between w-full gap-2">
        <CafeSearch />
      </div> */}
      <div className="container mx-auto w-full justify-items-center flex flex-col gap-6 py-4 lg:py-12">
        <span className="text-sm md:text-3xl font-bold text-slate-50 text-center">
          Exploring By Trending Cafe
        </span>
        <div className="grid gap-y-5 lg:gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <CafeMainCard />
        </div>
      </div>
      <div className="bg-slate-950 shadow-xl flex flex-col text-slate-200 w-full font-semibold items-center justify-center h-full gap-6 py-4 lg:py-12">
        <span className="text-sm md:text-3xl text-slate-50 text-center">
          Exploring By Trending Category
        </span>
        <div className="container mx-auto">
          <CafeMainCategory />
        </div>
      </div>
    </div>
  );
}
