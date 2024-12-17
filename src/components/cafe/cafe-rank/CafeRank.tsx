import { dataCafe } from "@/constants/Mockdata.constants";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { motion } from "motion/react";
import { FaCrown, FaStar } from "react-icons/fa";

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
      <motion.div
        className="relative items-center flex flex-row justify-between gap-6 w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg group"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500"></div>

        {/* Rotating Background Accent */}
        <motion.div
          className="absolute h-full w-full left-[-30%] scale-150 rotate-[45deg] bg-gradient-to-r from-yellow-500 to-transparent opacity-20 transition-all group-hover:rotate-[135deg]"
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Content */}
        <motion.div
          className="relative flex flex-col w-full px-6 py-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title and Icon */}
          <div className="text-5xl flex items-center gap-4 text-yellow-500 mb-4">
            <span>{cafeCOTYData.cafeDetails.title}</span>
            <FaCrown className="text-yellow-300 drop-shadow-md" />
          </div>

          {/* Opening Hours */}
          <div className="text-md text-gray-300 flex gap-2">
            <span className="font-semibold">Opening hour:</span>
            <span>
              From {cafeCOTYData.cafeDetails.cafeOperation.openingTime} to{" "}
              {cafeCOTYData.cafeDetails.cafeOperation.closingTime}
            </span>
          </div>

          {/* Address */}
          <div className="text-md text-gray-200 my-2">
            Address: {cafeCOTYData.cafeDetails.cafeLocation.street}
            {cafeCOTYData.cafeDetails.cafeLocation.district && (
              <span>, {cafeCOTYData.cafeDetails.cafeLocation.district}</span>
            )}
            {cafeCOTYData.cafeDetails.cafeLocation.ward && (
              <span>, Phường {cafeCOTYData.cafeDetails.cafeLocation.ward}</span>
            )}
            {cafeCOTYData.cafeDetails.cafeLocation.city && (
              <span>, {cafeCOTYData.cafeDetails.cafeLocation.city}</span>
            )}
          </div>

          {/* Content */}
          <div className="text-md font-light text-gray-300 my-4 line-clamp-2">
            {cafeCOTYData.cafeDetails.content}
          </div>

          {/* Stats */}
          <div className="flex justify-around mt-4">
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
                    (cafeCOTYData.totalLike + cafeCOTYData.totalDislike)) *
                    100
                )}
                %
              </span>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <div className="mx-auto w-1/2 rounded-r-lg justify-center">
          <Image
            alt="Cafe thumbnail"
            height={900}
            width={1600}
            layout="responsive"
            sizes="(max-width: 650px) 100vw, 1600px"
            src={cafeCOTYData.cafeDetails.thumbnail}
            className="h-full w-full object-cover bg-no-repeat"
          />
        </div>
      </motion.div>
    );
  } else return <></>;
};

export default CafeRank;
