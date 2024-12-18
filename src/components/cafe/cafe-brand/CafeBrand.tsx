import { motion } from "motion/react";
import Image from "next/image";
import { dataCafe as data } from "@/constants/Mockdata.constants";
import React from "react";

const CafeBrand = () => {
  return (
    <>
      <div className="relative bg-slate-950 mx-auto">
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
          {[...data, ...data].map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 bg-slate-900"
              style={{ width: `${100 / data.length}%` }}
            >
              <div className="flex flex-col items-center justify-center h-full text-6x">
                <Image
                  alt="Cafe Logo"
                  width={800}
                  height={200}
                  src={item.cafeDetails.cafeLogo}
                  className="w-32 h-auto object-fill bg-no-repeat mx-auto transition-all grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
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
          {[...data, ...data].map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 bg-slate-900"
              style={{ width: `${100 / data.length}%` }}
            >
              <div className="flex flex-col items-center justify-center h-full text-6x">
                <Image
                  alt="Cafe Logo"
                  width={800}
                  height={200}
                  src={item.cafeDetails.cafeLogo}
                  className="w-32 h-auto object-fill bg-no-repeat mx-auto transition-all grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default CafeBrand;
