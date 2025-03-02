"use client";

import Link from "next/link";
import CafeCardItem from "./cafe-card-item";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useCafes } from "@/hooks/useCafes";
import { Coffee } from "lucide-react";

export default function CafeTrendingList() {
  const { cafes, isLoading, error } = useCafes();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading cafes.</p>;

  if (!cafes || !Array.isArray(cafes)) {
    return <p>No cafes available.</p>;
  }

  return (
    <>
      <span className="text-sm md:text-3xl font-bold text-buttonColor items-center text-center flex justify-center gap-2">
        <Coffee className="w-10 h-10" />
        <span>Trending Cafe</span>
      </span>
      <div className="grid gap-y-5 lg:gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {cafes.slice(0, 8).map((data: CafeProps) => (
          <Link key={data.id} href={`/cafes/${data.id}`}>
            <CafeCardItem data={data} />
          </Link>
        ))}
      </div>
    </>
  );
}
