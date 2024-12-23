import { dataCafe } from "@/constants/Mockdata.constants";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { motion } from "motion/react";
import { FaCrown, FaStar } from "react-icons/fa";
import Link from "next/link";

const CafeRank = () => {
  const [cafeCOTYData, setCafeCOTYData] = useState<CafeProps>();

  useEffect(() => {
    const fetchCafeData = async () => {
      const cafeCOTY = dataCafe.find((item) => item.isCOTY === true);
      setCafeCOTYData(cafeCOTY);
    };

    fetchCafeData();
  }, []);
  if (cafeCOTYData) {
    return (
      <div className="flex flex-row gap-4">
        {/* Cafe of the Year */}
        <div className="relative w-full">
          <Link href={`cafes/${cafeCOTYData.id}`}>
            <motion.div
              className="relative py-6 lg:py-4 flex flex-col lg:flex-row justify-between gap-6 w-full h-full lg:rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg group hover:shadow-[0_0_30px_15px_rgba(252,211,77,0.5)] transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Rotating Background Accent */}
              <motion.div className="absolute inset-0 scale-150 rotate-[45deg] bg-gradient-to-r from-yellow-600 to-transparent opacity-20 transition-all group-hover:rotate-[135deg] ease-in-out duration-1000"></motion.div>

              {/* Content */}
              <motion.div
                className="relative flex flex-col w-full px-6 z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Title and Icon */}
                <div className="text-sm md:text-5xl flex items-center gap-4 text-yellow-500 mb-4">
                  <span className="font-bold">
                    {cafeCOTYData.cafeDetails.title}
                  </span>
                  <FaCrown className="text-yellow-400 drop-shadow-md scale-110 animate-pulse" />
                </div>

                {/* Opening Hours */}
                <div className="text-md text-gray-300 flex gap-2">
                  <span className="font-bold">Opening hour:</span>
                  <span>
                    From {cafeCOTYData.cafeDetails.cafeOperation.openingTime} to{" "}
                    {cafeCOTYData.cafeDetails.cafeOperation.closingTime}
                  </span>
                </div>

                {/* Address */}
                <div className="text-md text-gray-200 my-2">
                  <span className="font-bold">Address:</span>{" "}
                  {cafeCOTYData.cafeDetails.cafeLocation.street}
                  {cafeCOTYData.cafeDetails.cafeLocation.district && (
                    <span>
                      , {cafeCOTYData.cafeDetails.cafeLocation.district}
                    </span>
                  )}
                  {cafeCOTYData.cafeDetails.cafeLocation.ward && (
                    <span>
                      , Phường {cafeCOTYData.cafeDetails.cafeLocation.ward}
                    </span>
                  )}
                  {cafeCOTYData.cafeDetails.cafeLocation.city && (
                    <span>, {cafeCOTYData.cafeDetails.cafeLocation.city}</span>
                  )}
                </div>

                {/* Content */}
                <div className="text-md font-light text-gray-300 my-4 line-clamp-3">
                  {cafeCOTYData.cafeDetails.content}
                </div>

                {/* Stats */}
                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <BiSolidLike className="text-green-500 text-2xl" />
                    <span className="text-gray-200 text-lg">
                      {cafeCOTYData.totalLike}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500 text-2xl" />
                    <span className="text-gray-200 text-lg">
                      {Math.floor(
                        (cafeCOTYData.totalLike /
                          (cafeCOTYData.totalLike +
                            cafeCOTYData.totalDislike)) *
                          100
                      )}
                      %
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <div className="w-full lg:w-[600px] mx-auto rounded-r-lg z-20">
                <Image
                  alt="Cafe thumbnail"
                  height={900}
                  width={1600}
                  layout="responsive"
                  sizes="(max-width: 650px) 100vw, 1600px"
                  src={cafeCOTYData.cafeDetails.thumbnail}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    );
  } else return <></>;
};

export default CafeRank;
