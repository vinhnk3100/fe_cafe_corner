"use client";

import { CafeSearch, ExploreCafeCard } from "@/components/cafe";
import { dataCafe } from "@/constants/Mockdata.constants";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useEffect, useState } from "react";

export default function ExplorePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchCafeName, setSearchCafeName] = useState<string>("");
  const [cafeLocation, setCafeLocation] = useState<string>("");
  const [cafeDistrict, setCafeDistrict] = useState<string>("");
  const [cafeDataList, setCafeDataList] = useState<CafeProps[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchDataCafe = async () => {
      try {
        // const response = await fetch("https://api.example.com/cafes", {
        //   signal: controller.signal,
        // });
        setCafeDataList(dataCafe);
      } catch (e: unknown) {
        if (e instanceof Error) {
          // Check if the error is an instance of the Error object
          if (e.name !== "AbortError") {
            console.error(e.message); // Accessing properties is now safe
          }
        } else {
          console.error("An unknown error occurred:", e); // Handle non-Error types
        }
      } finally {
        setLoading(false); // Ensure loading state is cleared
      }
    };

    fetchDataCafe();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const filterSearchCafe = () => {
      const dataMatchesCafeList = dataCafe.filter((filterData) => {
        const cafeDistrictMatches = filterData.cafeDetails.cafeLocation.district
          .normalize("NFD") // Decompose accented characters
          .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
          .toLowerCase()
          .includes(
            cafeDistrict
              .normalize("NFD") // Decompose accented characters
              .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
              .toLowerCase()
          );
        const cafeNameMatches = filterData.cafeDetails.title
          .normalize("NFD") // Decompose accented characters
          .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
          .toLowerCase()
          .includes(
            searchCafeName
              .normalize("NFD") // Decompose accented characters
              .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
              .toLowerCase()
          );

        if (cafeDistrict) {
          return cafeDistrictMatches;
        }

        return (
          (cafeDistrict && cafeDistrictMatches) || // Match district if input exists
          (searchCafeName && cafeNameMatches) // Match name if input exists
        );
      });
      setCafeDataList(
        searchCafeName.length === 0 ? dataCafe : dataMatchesCafeList
      );
    };

    filterSearchCafe();
  }, [searchCafeName, cafeLocation, cafeDistrict]);

  return (
    <div className="w-full container mx-auto py-12">
      <h1 className="text-sm lg:text-5xl text-slate-200 text-center">
        Explore Cafes
      </h1>
      {/* Filter search */}
      <div className="w-full flex py-12">
        <CafeSearch
          {...{
            searchCafeName,
            setSearchCafeName,
            cafeLocation,
            setCafeLocation,
            cafeDistrict,
            setCafeDistrict,
          }}
        />
      </div>
      {/* Cafe List */}
      <div className="w-full grid lg:grid-cols-4 gap-4">
        <ExploreCafeCard cafeData={cafeDataList} />
      </div>
    </div>
  );
}
