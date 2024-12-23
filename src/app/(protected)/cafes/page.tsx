"use client";

import {
  CafeCard,
  CafeCarousel,
  CafeCategory,
  CafeSearch,
  CafeBrand,
  CafeRank,
  CafeView,
} from "@/components/cafe";

export default function CafesPage() {
  return (
    <div className="w-full mx-auto">
      <div className="container mx-auto rounded-md flex flex-col text-slate-200 font-semibold items-center justify-center lg:gap-6">
        <CafeCarousel />
      </div>

      <div className="container mx-auto w-full flex flex-col text-slate-200 items-center h-full lg:h-[400px] gap-6 py-4 lg:py-8">
        <span className="text-sm md:text-3xl text-slate-50 font-semibold">
          Cafe of The Year 2024
        </span>
        <CafeRank />
      </div>

      <div className="container mx-auto flex flex-col w-full font-semibold items-center justify-center h-full lg:h-[400px] gap-6 py-4 lg:py-8">
        <div className="text-sm md:text-3xl text-slate-300 text-center">
          Popular Cafe Brand
        </div>
        <CafeBrand />
      </div>

      <div className="bg-slate-950 shadow-xl flex flex-col text-slate-200 w-full mx-auto font-semibold items-center justify-center h-full lg:h-auto gap-6 py-4 lg:py-8">
        <span className="text-sm md:text-3xl text-slate-50 text-center">
          Quick Explore Popular View
        </span>
        <div className="container gap-4 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-x-3">
          <CafeView />
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row py-5 justify-between w-full gap-2">
        <CafeSearch />
      </div> */}
      <div className="container mx-auto w-full justify-items-center flex flex-col gap-6 py-4 lg:py-8">
        <span className="text-sm md:text-3xl font-bold text-slate-50 text-center">
          Exploring By Trending Cafe
        </span>
        <div className="grid gap-y-5 lg:gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <CafeCard />
        </div>
      </div>
      <div className="bg-slate-950 shadow-xl flex flex-col text-slate-200 w-full font-semibold items-center justify-center h-full lg:h-[300px] gap-6 py-4 lg:py-8">
        <span className="text-sm md:text-3xl text-slate-50 text-center">
          Exploring By Trending Category
        </span>
        <div className="container mx-auto">
          <CafeCategory />
        </div>
      </div>
    </div>
  );
}
