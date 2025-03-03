"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CafesGridViewSkeleton() {
  // Create an array of 8 items to represent loading cards
  const skeletonItems = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletonItems.map((item) => (
        <Card
          key={item}
          className="w-full max-w-sm border shadow-lg border-buttonColor/30 overflow-hidden"
        >
          {/* Image skeleton */}
          <Skeleton className="w-full h-48" />
          
          <CardContent className="p-4 bg-primaryColor flex flex-col h-[140px]">
            <div className="flex flex-col flex-grow space-y-2">
              {/* Title skeleton */}
              <Skeleton className="h-6 w-3/4" />
              
              {/* Location skeleton - two lines */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            
            {/* Rating skeleton */}
            <div className="flex items-center gap-2 mt-auto">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-12" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 