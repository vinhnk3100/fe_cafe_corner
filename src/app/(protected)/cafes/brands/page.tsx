"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel"; // Shadcn carousel component
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CafeBrandType } from "@/types/cafe/cafe.types";
import { mockDataCafeBrands } from "@/constants/Mockdata.constants";

export default function ChainsPage() {
    const dataCafeBrandList: CafeBrandType[] = mockDataCafeBrands;
  const [inputSearchCafeBrand, setInputSearchCafeBrand] = useState<string>("");
  const [cafeBrandList, setCafeBrandList] =
    useState<CafeBrandType[]>(dataCafeBrandList);

  useEffect(() => {
    if (inputSearchCafeBrand) {
      const newCafeBrandList = cafeBrandList.filter((item) => {
        return item.cafeBrandName
          .toLowerCase()
          .includes(inputSearchCafeBrand.toLowerCase());
      });
      setCafeBrandList(newCafeBrandList);

    } else setCafeBrandList(dataCafeBrandList);
  }, [cafeBrandList, dataCafeBrandList, inputSearchCafeBrand]);

  return (
    <>
      <section className="bg-slate-900 py-10">
        <div className="container mx-auto">
          <h1 className="text-center text-slate-50 text-3xl font-bold mb-8">
            Explore Popular Cafe Brands
          </h1>
          <Input
            placeholder="Filter brand name..."
            value={(inputSearchCafeBrand as string) ?? ""}
            onChange={(event) => setInputSearchCafeBrand(event.target.value)}
            className="max-w-sm mb-3"
          />
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full bg-slate-800 rounded-lg overflow-y-auto h-[500px] lg:h-[510px] xl:h-[580px] border border-slate-700"
          >
            <CarouselContent className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 m-0 p-0">
              {cafeBrandList?.map((cafe) => (
                <Link
                  key={cafe.id}
                  href={`brands/${
                    cafe.cafeBrandName
                      .normalize("NFD") // Decompose accented characters
                      .toLowerCase() // Convert to lowercase
                      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
                      .replace(/\s+/g, "-") // Replace spaces with hyphens
                  }`}
                >
                  <CarouselItem
                    key={cafe.id}
                    className="p-4 max-w-[230px] h-full flex"
                  >
                    <div className="select-none bg-slate-700 rounded-lg p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-slate-600 transition-shadow hover:cursor-pointer h-full">
                      <Image
                        src={cafe.cafeBrandLogo}
                        alt={cafe.cafeBrandName}
                        width={150}
                        height={150}
                        className="object-contain rounded-md h-auto select-none"
                      />
                      <h2 className="text-slate-50 text-lg font-medium mt-4 text-center select-none">
                        {cafe.cafeBrandName}
                      </h2>
                    </div>
                  </CarouselItem>
                </Link>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
}
