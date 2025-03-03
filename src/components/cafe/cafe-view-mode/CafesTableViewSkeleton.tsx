"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CafesTableViewSkeleton() {
  // Create an array of 5 items to represent loading rows
  const skeletonItems = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 items-center justify-center">
      {skeletonItems.map((item) => (
        <div
          key={item}
          className="border border-buttonColor/30 p-5 rounded-xl shadow-lg bg-primaryColor w-full overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-5">
            {/* Image skeleton */}
            <Skeleton className="w-full md:w-[400px] h-[240px] rounded-lg" />

            <div className="flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-3">
                {/* Title skeleton */}
                <Skeleton className="h-7 w-3/4" />
                
                {/* Location skeleton */}
                <Skeleton className="h-4 w-1/3" />

                {/* Ratings skeleton */}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 