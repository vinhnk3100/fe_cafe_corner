"use client";

import { Button } from "@/components/ui/button";
import {
  PiArrowFatUpFill,
  PiArrowFatDownFill,
  PiShareFatFill,
} from "react-icons/pi";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { FaComments, FaStar } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import {
  CafeLocationProps,
  CafeOperation,
  CafeProps,
} from "@/types/cafe/cafe.types";
import { formatLikeNumber } from "@/utils/format-number.utils";
import { BiSolidLike } from "react-icons/bi";
import { Clock1, MapPin } from "lucide-react";

export default function CafeCardItem({ data }: { data: CafeProps }) {
  const [cafeLocation, setCafeLocation] = useState<CafeLocationProps>();
  const [cafeOperation, setCafeOperation] = useState<CafeOperation>();

  useEffect(() => {
    setCafeLocation(data.cafeDetails.cafeLocation);
    setCafeOperation(data.cafeDetails.cafeOperation);
  }, [data.cafeDetails.cafeLocation, data.cafeDetails.cafeOperation]);

  return (
    <Card
      className={`group flex flex-col justify-between w-full h-full group hover:shadow-buttonColor shadow-[0_0px_12px_0px_rgba(0,0,0,0.1)] hover:border-buttonColor`}
    >
      <CardHeader className="relative w-full min-h-[200px] flex flex-col justify-between bg-opacity-80">
        <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300"
            alt=""
            src={data.cafeDetails.thumbnail}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-primaryColor opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
        </div>
        <div className="z-50">
          <CardTitle className="text-slate-50 flex justify-between">
            <div className="text-2xl line-clamp-1 text-ellipsis text-buttonColor">
              {data.cafeDetails.title}
            </div>
            <div className="flex flex-row gap-1 items-center">
              <span className="text-md animate-glow transition-all">
                <BiSolidLike className=" text-slate-200" />
              </span>
              <span className="text-green-500 text-md">
                {Math.floor(
                  (data.totalLike / (data.totalLike + data.totalDislike)) * 100
                )}
                %
              </span>
            </div>
          </CardTitle>
          <div className="space-y-1">
            <div className="flex items-start gap-2 text-md text-white line-clamp-2 my-2">
              <MapPin className="w-6 h-6 flex-shrink-0 text-buttonColor" />
              <span>
                {cafeLocation?.houseNumber} {cafeLocation?.street}
                {cafeLocation?.district && `, ${cafeLocation?.district}`}
                {cafeLocation?.ward && `, Phường ${cafeLocation?.ward}`}
                {cafeLocation?.city && `, ${cafeLocation?.city}`}
              </span>
            </div>

            <div className="flex items-center gap-2 text-md text-white line-clamp-2">
              <Clock1 className="w-6 h-6 flex-shrink-0 text-buttonColor" />
              <span>
                {cafeOperation?.openingTime} - {cafeOperation?.closingTime}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
