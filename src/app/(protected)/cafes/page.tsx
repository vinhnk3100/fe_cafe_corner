"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useCafes } from "@/hooks/useCafes";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { Coffee, FilterX, GridIcon, List, Star, TableIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cafe } from "@/schemas/cafe.schema";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import skeleton loaders
import CafesGridViewSkeleton from "@/components/cafe/cafe-view-mode/CafesGridViewSkeleton";
import CafesTableViewSkeleton from "@/components/cafe/cafe-view-mode/CafesTableViewSkeleton";
import CafeNewArrivals from "@/components/cafe/cafe-new-arrivals/CafeNewArrivals";

const CafesGridView = dynamic(
  () => import("@/components/cafe/cafe-view-mode/CafesGridView"),
  {
    ssr: false,
    loading: () => <CafesGridViewSkeleton />,
  }
);

const CafesTableView = dynamic(
  () => import("@/components/cafe/cafe-view-mode/CafesTableView"),
  {
    ssr: false,
    loading: () => <CafesTableViewSkeleton />,
  }
);

export default function CafesPage() {
  const { cafes, isLoading, error } = useCafes();
  const [filteredCafes, setFilteredCafes] = useState<Cafe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [availableDistricts, setAvailableDistricts] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleViewChange = useCallback((mode: string) => {
    setViewMode(mode);
  }, []);

  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  // Get unique cities from cafes
  const cities = useMemo(() => {
    if (!cafes || cafes.length === 0) return [];
    const uniqueCities = Array.from(
      new Set(cafes.map((cafe: Cafe) => cafe.cafeDetails.cafeLocation.city))
    );
    return uniqueCities.sort() as string[];
  }, [cafes]);

  // Update available districts when city changes
  useEffect(() => {
    if (!cafes || cafes.length === 0 || !selectedCity) {
      setAvailableDistricts([]);
      return;
    }

    const districts = cafes
      .filter(
        (cafe: Cafe) => cafe.cafeDetails.cafeLocation.city === selectedCity
      )
      .map((cafe: Cafe) => cafe.cafeDetails.cafeLocation.district);

    const uniqueDistricts = Array.from(new Set(districts)).sort((a, b) => {
      // Check if both districts are numbers
      if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) - Number(b);
      }
      // If a is a number and b is text, a comes first
      if (!isNaN(Number(a)) && isNaN(Number(b))) {
        return -1;
      }
      // If a is text and b is a number, b comes first
      if (isNaN(Number(a)) && !isNaN(Number(b))) {
        return 1;
      }
      // If both are text, use alphabetical sorting
      return (a as string).localeCompare(b as string);
    }) as string[];
    setAvailableDistricts(uniqueDistricts);
    setSelectedDistrict("");
  }, [selectedCity, cafes]);

  useEffect(() => {
    if (!cafes || cafes.length === 0) return;

    let filtered = cafes;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((cafe: Cafe) =>
        cafe.cafeDetails.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by city
    if (selectedCity) {
      if (selectedCity === "All Cities") {
        filtered = cafes;
      } else {
        filtered = filtered.filter(
          (cafe: Cafe) => cafe.cafeDetails.cafeLocation.city === selectedCity
        );
      }
    }

    // Filter by district
    if (selectedDistrict) {
      if (selectedDistrict === "All Districts") {
        filtered = filtered.filter(
          (cafe: Cafe) => cafe.cafeDetails.cafeLocation.city === selectedCity
        );
      } else {
        filtered = filtered.filter(
          (cafe: Cafe) =>
            cafe.cafeDetails.cafeLocation.district === selectedDistrict
        );
      }
    }

    setFilteredCafes(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCity, selectedDistrict, cafes]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setViewMode("grid");
    }
  }, []);

  const indexOfLastCafe = currentPage * itemsPerPage;
  const indexOfFirstCafe = indexOfLastCafe - itemsPerPage;
  const currentCafes = filteredCafes.slice(indexOfFirstCafe, indexOfLastCafe);

  if (isLoading) {
    return (
      <div className="p-4 container mx-auto">
        <div className="flex gap-2 items-center justify-center my-8 h-full">
          <Coffee className="w-12 h-12 bg-buttonColor rounded-full p-2 text-primaryColor" />
          <span className="flex items-center justify-center text-4xl font-bold text-textPrimaryColor">
            Discover Cafes
          </span>
        </div>
        {viewMode === "grid" ? (
          <CafesGridViewSkeleton />
        ) : (
          <CafesTableViewSkeleton />
        )}
      </div>
    );
  }

  if (error) return <p>Error loading cafes.</p>;
  if (!cafes || !Array.isArray(cafes)) {
    return <p>No cafes available.</p>;
  }

  return (
    <div className="p-4 container mx-auto">
      <div className="flex gap-2 items-center justify-center my-8 h-full">
        <Coffee className="w-12 h-12 bg-buttonColor rounded-full p-2 text-primaryColor" />
        <span className="flex items-center justify-center text-4xl font-bold text-textPrimaryColor">
          Discover Cafes
        </span>
      </div>
      <div className="flex gap-2 items-center justify-start my-8 h-full">
        <Star className="w-10 h-10 bg-buttonColor rounded-full p-2 text-primaryColor" />
        <span className="flex items-center justify-center text-3xl font-medium text-buttonHoverTextLightColor">
          New Cafes Arrivals
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <CafeNewArrivals cafes={cafes} />
      </div>
      <div className="flex gap-2 items-center justify-start my-8 h-full">
        <List className="w-10 h-10 bg-buttonColor rounded-full p-2 text-primaryColor" />
        <span className="flex items-center justify-center text-3xl font-medium text-buttonHoverTextLightColor">
          Cafes List
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 my-4 w-full justify-between items-center">
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-2/3">
          <div className="w-full flex items-center justify-center relative group">
            <Input
              type="text"
              placeholder="Search cafe name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-buttonColor border rounded-md p-2 mb-4 w-full focus:border-buttonHoverColor focus:ring-buttonborder-buttonHoverColor"
            />
            <div
              onClick={() => setSearchTerm("")}
              className={`absolute right-2 top-[12%] z-50 text-buttonColor flex items-center justify-center hover:text-white cursor-pointer ${
                searchTerm ? "opacity-100" : "opacity-50 pointer-events-none"
              }`}
            >
              <X className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative group">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="border-buttonColor border rounded-md p-2 mb-4 w-full group-hover:border-buttonHoverColor focus:border-buttonHoverColor data-[state=open]:border-buttonHoverColor">
                <SelectValue className="w-full" placeholder="Select City" />
              </SelectTrigger>
              <div
                onClick={() => {
                  setSelectedCity("");
                  setSelectedDistrict("");
                }}
                className={`absolute right-8 top-[12%] z-50 text-buttonColor flex items-center justify-center hover:text-white cursor-pointer ${
                  selectedCity
                    ? "opacity-100"
                    : "opacity-50 pointer-events-none"
                }`}
              >
                <FilterX className="w-6 h-6" />
              </div>
              <SelectContent>
                {cities.map((city: string) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Select
            value={selectedDistrict}
            onValueChange={setSelectedDistrict}
            disabled={!selectedCity || availableDistricts.length === 0}
          >
            <SelectTrigger className="border-buttonColor border rounded-md p-2 mb-4 w-full focus:border-buttonHoverColor">
              <SelectValue placeholder="Select District" />
            </SelectTrigger>
            <SelectContent>
              {availableDistricts.map((district: string) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4 flex flex-row gap-2">
          <Button
            onClick={() => handleViewChange("grid")}
            className={`mr-2 p-2 rounded-md md:block hidden ${
              viewMode === "grid"
                ? "bg-buttonColor text-primaryColor hover:bg-buttonHoverColor"
                : "bg-primaryColor text-textPrimaryColor hover:bg-coffeeBeanColor"
            }`}
          >
            <GridIcon className="w-12 h-12 scale-150" />
          </Button>
          <Button
            onClick={() => handleViewChange("table")}
            className={`p-2 rounded-md md:block hidden ${
              viewMode === "table"
                ? "bg-buttonColor text-primaryColor hover:bg-buttonHoverColor"
                : "bg-primaryColor text-textPrimaryColor hover:bg-coffeeBeanColor"
            }`}
          >
            <TableIcon className="w-12 h-12 scale-150" />
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <CafesGridView cafes={currentCafes} viewMode={viewMode} />
      ) : (
        <CafesTableView cafes={currentCafes} viewMode={viewMode} />
      )}

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className="text-textPrimaryColor hover:text-buttonColor"
              />
            </PaginationItem>
            {Array.from(
              { length: Math.ceil(filteredCafes.length / itemsPerPage) },
              (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                    className={
                      i + 1 === currentPage
                        ? "bg-buttonColor text-primaryColor"
                        : "text-textPrimaryColor hover:text-buttonColor"
                    }
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(
                    Math.min(
                      currentPage + 1,
                      Math.ceil(filteredCafes.length / itemsPerPage)
                    )
                  )
                }
                className="text-textPrimaryColor hover:text-buttonColor"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
