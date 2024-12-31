"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CafeProps } from "@/types/cafe/cafe.types";
import Image from "next/image";
import Link from "next/link";
import { BiSolidLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const ExploreCafeCard = ({ cafeData }: { cafeData: CafeProps[] }) => {
  return (
    <>
      {cafeData.map((data: CafeProps) => (
        <Link key={data.id} href={`/cafes/${data.id}`}>
          <Card className="w-full h-60 relative overflow-hidden group transition-all">
            <div className="absolute bg-black w-full h-full z-10 opacity-60 group-hover:opacity-30 transition-all"></div>
            <Image
              alt="cafe img"
              src={data.cafeDetails.thumbnail}
              height={200}
              width={300}
              className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 transition-all bg-no-repeat"
            />
            <CardHeader className="flex flex-col text-slate-50 relative z-20 h-full">
              <div className="flex flex-row justify-between gap-1 items-center">
                <div className="flex flex-row w-full gap-1 items-center">
                  {data.isTodayMenu && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge className="w-auto bg-yellow-500 rounded text-slate-900 hover:bg-yellow-200">
                            Today pick
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="bg-yellow-500 font-bold text-slate-900">
                          <p>Currently chose by team for ordering</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {data.isOnPromotion && (
                    <Badge className="animate-pulse transition-all w-auto bg-orange-500 rounded text-slate-50 hover:bg-orange-200 hover:text-slate-900">
                      Promotions
                    </Badge>
                  )}
                  {data.isHoldingEvents && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge className="animate-pulse transition-all w-auto bg-red-500 rounded text-slate-50 hover:bg-red-200 hover:text-slate-900">
                            Event
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="bg-red-500 font-bold">
                          <p>
                            Cafe is holding an event. Click for more details.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="hover:text-yellow-100 text-yellow-300 animate-glow transition-all">
                        <FaStar />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-yellow-500 font-bold text-slate-900">
                      <p>Cafe of the Year</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardTitle className="text-slate-50 flex justify-between">
                <div className="text-xl line-clamp-1 text-ellipsis">
                  {data.cafeDetails.title}
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <span className="text-md animate-glow transition-all">
                    <BiSolidLike className=" text-slate-200" />
                  </span>
                  <span className="text-green-500 text-md">
                    {Math.floor(
                      (data.totalLike / (data.totalLike + data.totalDislike)) *
                        100
                    )}
                    %
                  </span>
                </div>
              </CardTitle>
              <div className="h-full flex flex-col">
                <div className="text-[12px] text-yellow-300 line-clamp-2">
                  <span>Đ/C: </span>
                  <span>{data.cafeDetails.cafeLocation.houseNumber} </span>
                  <span>{data.cafeDetails.cafeLocation.street}</span>
                  {data.cafeDetails.cafeLocation.district && (
                    <span>, {data.cafeDetails.cafeLocation.district}</span>
                  )}
                  {data.cafeDetails.cafeLocation.ward && (
                    <span>, Phường {data.cafeDetails.cafeLocation.ward}</span>
                  )}
                  {data.cafeDetails.cafeLocation.city && (
                    <span>, {data.cafeDetails.cafeLocation.city}</span>
                  )}
                </div>
                <div className="text-[12px] text-yellow-300 line-clamp-2">
                  Opening hour: {data.cafeDetails.cafeOperation.openingTime} -{" "}
                  {data.cafeDetails.cafeOperation.closingTime}
                </div>
              </div>
              <div className="flex mt-auto gap-1 text-slate-50">
                {data.cafeDetails.cafeCategory.map((item, index) => {
                  if (index > 2) return <div key={item.id}>.</div>;
                  return (
                    <Badge
                      key={item.id}
                      className="w-auto bg-orange-800 rounded-xl text-slate-50 hover:bg-orange-600"
                    >
                      {item.cafeCategoryName}
                    </Badge>
                  );
                })}
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ExploreCafeCard;
