"use client";

import { Cafe } from "@/schemas/cafe.schema";
import { ClockIcon, Stars, ThumbsUpIcon } from "lucide-react";
import { CafeImage } from "..";
import { FaComments } from "react-icons/fa";

type CafesTableViewProps = {
  cafes: Cafe[];
  viewMode: string;
};

export default function CafesTableView({
  cafes,
  viewMode,
}: CafesTableViewProps) {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 items-center justify-center">
      {cafes.map((cafe: Cafe) => (
        <div
          key={cafe.id}
          className="group border border-buttonColor p-2 rounded-xl shadow-lg hover:shadow-xl transition-all bg-primaryColor w-full overflow-hidden hover:cursor-pointer hover:bg-buttonHoverColor"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="relative w-full md:w-[calc(100%-100px)] h-[240px] bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
              <CafeImage cafe={cafe} modeView={viewMode} />
            </div>
            <div className="flex flex-col justify-between flex-grow w-full">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-semibold text-textPrimaryColor group-hover:text-white leading-tight">
                  {cafe.cafeDetails.title}
                </div>
                <div className="text-md text-gray-200 group-hover:text-white line-clamp-2">
                  {cafe.cafeDetails.cafeLocation.houseNumber}{" "}
                  {cafe.cafeDetails.cafeLocation.street}, Quận{" "}
                  {cafe.cafeDetails.cafeLocation.district},{" "}
                  {cafe.cafeDetails.cafeLocation.ward},{" "}
                  {cafe.cafeDetails.cafeLocation.city}
                </div>
                <div className="text-md text-gray-200 group-hover:text-white line-clamp-2 flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-buttonColor group-hover:text-white" />
                  {cafe.cafeDetails.cafeOperation.openingTime} -{" "}
                  {cafe.cafeDetails.cafeOperation.closingTime}
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
                  {cafe.isCOTY ? (
                    <>
                      <Stars className="w-5 h-5 text-buttonColor group-hover:text-white" />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
