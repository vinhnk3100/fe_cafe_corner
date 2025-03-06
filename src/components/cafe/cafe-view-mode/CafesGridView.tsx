"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon, ThumbsUpIcon } from "lucide-react";
import { Cafe } from "@/schemas/cafe.schema";
import { CafeImage } from "..";
import { FaComments } from "react-icons/fa";
import Link from "next/link";

type CafesGridViewProps = {
  cafes: Cafe[];
  viewMode: string;
};

export default function CafesGridView({ cafes, viewMode }: CafesGridViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cafes.map((cafe: Cafe) => (
        <Link href={`/cafes/${cafe.id}`} key={cafe.id}>
          <Card className="group w-full max-w-sm border shadow-lg ease-in-out duration-300 border-buttonColor overflow-hidden hover:border-buttonHoverColor">
            <div className="w-full h-48 overflow-hidden">
              <CafeImage cafe={cafe} modeView={viewMode} />
            </div>
            <CardContent className="p-4 bg-primaryColor group-hover:bg-buttonHoverColor ease-in-out duration-300 flex flex-col h-[150px]">
              <div className="flex flex-col flex-grow gap-1">
                <div className="text-xl font-semibold text-textPrimaryColor group-hover:text-white line-clamp-1">
                  {cafe.cafeDetails.title}
                </div>
                <div className="text-md text-gray-200 group-hover:text-white line-clamp-2">
                  {cafe.cafeDetails.cafeLocation.houseNumber}{" "}
                  {cafe.cafeDetails.cafeLocation.street}, Quận{" "}
                  {cafe.cafeDetails.cafeLocation.district},{" "}
                  {cafe.cafeDetails.cafeLocation.ward},{" "}
                  {cafe.cafeDetails.cafeLocation.city}
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 mt-auto line-clamp-1 justify-between">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-row items-center gap-1">
                    <ThumbsUpIcon className="w-5 h-5 text-buttonColor group-hover:text-white" />
                    <span className="text-md font-medium text-gray-200 group-hover:text-white">
                      {Math.floor(
                        (cafe.totalLike /
                          (cafe.totalLike + cafe.totalDislike)) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <FaComments className="w-5 h-5 text-buttonColor group-hover:text-white" />
                    <span className="text-md font-medium text-gray-200 group-hover:text-white">
                      {cafe.totalComment}
                    </span>
                  </div>
                </div>
                <div className="text-md text-gray-200 group-hover:text-white line-clamp-2 flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-buttonColor group-hover:text-white" />
                  {cafe.cafeDetails.cafeOperation.openingTime} -{" "}
                  {cafe.cafeDetails.cafeOperation.closingTime}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
