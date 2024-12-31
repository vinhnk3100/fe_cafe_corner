"use client";

import { dataCafe, mockDataCafeBrands } from "@/constants/Mockdata.constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaThLarge, FaThList } from "react-icons/fa";

const CafeBrandDetail = ({ brandId }: { brandId: string }) => {
  console.log(brandId)
  const [toggleGrid, setToggleGrid] = useState<boolean>(false);
  const cafeBrandData = mockDataCafeBrands.find((item) => {
    return item.cafeBrandName
      .normalize("NFD") // Decompose accented characters
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
      .toLowerCase()
      .replace(/\s+/g, "-")
      .includes(decodeURIComponent(brandId));
  });

  if (cafeBrandData) {
    return (
      <div className="w-full container mx-auto py-6">
        {/* Cafe Chain Logo and Description */}
        <div className="flex flex-row items-start gap-8 mb-8">
          {/* Logo */}
          <Image
            alt="Cafe Chain Logo"
            src={cafeBrandData?.cafeBrandLogo}
            width={440}
            height={440}
            className="object-contain aspect-square bg-no-repeat bg-center bg-slate-600 p-4 rounded-md shadow-lg"
          />
          {/* Description */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-50 mb-4">
              {cafeBrandData?.cafeBrandName} Chain
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              This cafe chain has been a favorite spot for coffee lovers, known
              for its quality brews and cozy ambiance. With a rich history and a
              strong brand presence, it serves as a go-to destination for coffee
              aficionados.
            </p>
          </div>
        </div>

        {/* Cafe Locations */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-slate-50">
              Locations Using {cafeBrandData?.cafeBrandName}
            </h2>
            {/* Toggle Button */}
            <div className="flex gap-2">
              <button
                className={`${
                  toggleGrid ? "bg-slate-700" : "bg-slate-400"
                } p-2  rounded-sm shadow hover:bg-slate-600 transition`}
                onClick={() => setToggleGrid(false)}
              >
                <FaThList size={20} color="white" />
              </button>
              <button
                className={`${
                  toggleGrid ? "bg-slate-400" : "bg-slate-700"
                } p-2  rounded-sm shadow hover:bg-slate-600 transition`}
                onClick={() => setToggleGrid(true)}
              >
                <FaThLarge size={20} color="white" />
              </button>
            </div>
          </div>

          {/* Animated Grid */}
          <motion.div
            layout
            className={`w-full h-full grid gap-6 ${
              toggleGrid ? "grid-cols-2" : "grid-cols-1"
            }`}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              layout: { duration: 0.5, ease: "easeInOut" }, // Smooth layout transition
            }}
          >
            {dataCafe.map((cafe) => (
              <motion.div
                key={cafe.id}
                layout
                className="group flex w-full h-full min-h-[200px] shadow hover:shadow-slate-600 relative overflow-hidden transition-all"
                initial={{ opacity: 0, y: toggleGrid ? -20 : 20, scale: 1 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: toggleGrid ? 20 : -20, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex w-full max-w-[480px] max-h-[280px]">
                  <Image
                    alt="Cafe Thumbnail"
                    src={cafe.cafeDetails.thumbnail}
                    width={500}
                    height={400}
                    className="object-cover rounded-tl-md rounded-bl-sm"
                  />
                </div>
                <div className="flex flex-col w-full items-start p-4 bg-slate-700 rounded-tr-md rounded-br-sm">
                  <h3 className="text-sm lg:text-2xl font-bold text-slate-50 mb-2">
                    {cafe.cafeDetails.title}
                  </h3>
                  <p className="text-gray- 300">
                    <span className="font-bold">Address: </span>
                    {cafe.cafeDetails.cafeLocation.houseNumber}{" "}
                    {cafe.cafeDetails.cafeLocation.street}
                    {cafe.cafeDetails.cafeLocation.district &&
                      `, ${cafe.cafeDetails.cafeLocation.district}`}
                    {cafe.cafeDetails.cafeLocation.ward &&
                      `, Phường ${cafe.cafeDetails.cafeLocation.ward}`}
                    {cafe.cafeDetails.cafeLocation.city &&
                      `, ${cafe.cafeDetails.cafeLocation.city}`}
                  </p>
                  <p className="text-slate-300 text-sm line-clamp-3 mt-2">
                    {cafe.cafeDetails.content ||
                      "Known for its warm ambiance and excellent service, this location is a gem."}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  } else <>Loading</>;
};

export default CafeBrandDetail;
