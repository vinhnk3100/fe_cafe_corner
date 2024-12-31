import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { CafeBrandType } from "@/types/cafe/cafe.types";
import { mockDataCafeBrands } from "@/constants/Mockdata.constants";

const CafeBrands = () => {
  const dataCafeBrands: CafeBrandType[] = mockDataCafeBrands; // Import data from data.json
  return (
    <>
      <div className="relative bg-slate-900 mx-auto gap-4 flex flex-col overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {[...dataCafeBrands.slice(0, 7), ...dataCafeBrands.slice(0, 7)].map(
            (item, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-slate-900"
                style={{ width: `${100 / dataCafeBrands.slice(0, 7).length}%` }}
              >
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <Image
                    alt="Cafe Logo"
                    width={800}
                    height={200}
                    src={item.cafeBrandLogo}
                    className="w-10 md:w-20 lg:w-32 h-auto object-fill bg-no-repeat mx-auto transition-all grayscale hover:grayscale-0 rounded-sm"
                  />
                </div>
              </div>
            )
          )}
        </motion.div>
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {[...dataCafeBrands.slice(7, 14), ...dataCafeBrands.slice(7, 14)].map(
            (item, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-slate-900"
                style={{
                  width: `${100 / dataCafeBrands.slice(7, 14).length}%`,
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                    alt="Cafe Logo"
                    width={800}
                    height={200}
                    src={item.cafeBrandLogo}
                    className="w-10 md:w-20 lg:w-32 h-auto object-fill bg-no-repeat mx-auto transition-all grayscale hover:grayscale-0 rounded-sm"
                  />
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
};

export default CafeBrands;
