"use client";

import Autoplay from "embla-carousel-autoplay";
import { ProductCardMain } from "@/components/foods";
import { Input } from "@/components/ui/input";
import { FaChevronRight, FaClock, FaComments, FaDollarSign, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { dataCafe } from "@/constants/Mockdata.constants";
import { Button } from "@/components/ui/button";
import { BiDislike, BiLike, BiSolidLike } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CafeProps } from "@/types/cafe/cafe.types";
import { formatLikeNumber } from "@/utils/format-number.utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type CafeDetailPageProps = {
  params: {
    cafeId: string;
  };
};

export default function CafeDetailPage({ params }: CafeDetailPageProps) {
  const { cafeId } = params;
  const [autoplay] = useState(() =>
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const [cafeprimaryColor, setCafeprimaryColor] = useState<string>();
  const [cafeData, setCafeData] = useState<CafeProps>();
  useEffect(() => {
    const fetchCafeById = async () => {
      setCafeData(dataCafe.find((item) => item.id === cafeId));
    };
    fetchCafeById();
  }, [cafeData, cafeId, cafeprimaryColor]);

  useLayoutEffect(() => {
    const fetchCafeById = async () => {
      setCafeprimaryColor(
        dataCafe.find((item) => item.id === cafeId)?.cafeDetails.cafeTheme
          .primaryColor
      );
    };
    fetchCafeById();
  }, [cafeData, cafeId, cafeprimaryColor]);

  if (!cafeData) {
    return <>Loading...</>;
  }
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
      {/* Left Sticky Section - Images */}
      <div className="lg:w-1/2 sticky top-0 self-start space-y-6">
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={cafeData.cafeDetails.thumbnail}
            alt="Cafe Thumbnail"
            layout="fill"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold">{cafeData.cafeDetails.title}</h1>
            <div className="flex gap-2 mt-2">
              {cafeData.cafeDetails.cafeCategory.map((category) => (
                <Badge
                  key={category.id}
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-300 hover:cursor-pointer"
                >
                  {category.cafeCategoryName}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel>
          <CarouselContent className="gap-4">
            {cafeData.cafeDetails.contentImg.map((imgSrc, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 rounded-lg shadow-md"
              >
                <Image
                  src={imgSrc}
                  alt={`Cafe Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 flex flex-col space-y-8">
        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <FaClock className="text-yellow-500 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-200">
              Opening Hours
            </h2>
            <p className="text-gray-400">
              From {cafeData.cafeDetails.cafeOperation.openingTime} to{" "}
              {cafeData.cafeDetails.cafeOperation.closingTime}
            </p>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-200">Address</h2>
            <p className="text-gray-400">
              {cafeData.cafeDetails.cafeLocation.street}
              {cafeData.cafeDetails.cafeLocation.district &&
                `, ${cafeData.cafeDetails.cafeLocation.district}`}
              {cafeData.cafeDetails.cafeLocation.ward &&
                `, Phường ${cafeData.cafeDetails.cafeLocation.ward}`}
              {cafeData.cafeDetails.cafeLocation.city &&
                `, ${cafeData.cafeDetails.cafeLocation.city}`}
            </p>
          </div>
        </motion.div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <FaDollarSign className="text-yellow-500 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-200">Price</h2>
            <p className="text-gray-400">
              From: 50000đ - 100000đ
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 leading-relaxed"
        >
          {cafeData.cafeDetails.content || "No additional content provided."}
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition">
            View Products <FaChevronRight className="inline ml-2" />
          </button>
          <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition">
            See Events
          </button>
        </div>
      </div>
    </div>
  );
}
