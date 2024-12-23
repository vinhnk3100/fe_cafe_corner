import { motion } from "motion/react";
import Image from "next/image";
import { dataCafeChain1 as data1 } from "@/constants/Mockdata.constants";
import { dataCafeChain2 as data2 } from "@/constants/Mockdata.constants";
import React from "react";

const CafeBrand = () => {
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
          {[...data1, ...data1].map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 bg-slate-900"
              style={{ width: `${100 / data1.length}%` }}
            >
              <div className="flex flex-col items-center justify-center h-full w-full">
                <Image
                  alt="Cafe Logo"
                  width={800}
                  height={200}
                  src={item.cafeChainLogo}
                  className="w-10 md:w-20 lg:w-32 h-auto object-fill bg-no-repeat mx-auto transition-all grayscale hover:grayscale-0 rounded-sm"
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
          {[...data2, ...data2].map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 bg-slate-900"
              style={{ width: `${100 / data2.length}%` }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <Image
                  alt="Cafe Logo"
                  width={800}
                  height={200}
                  src={item.cafeChainLogo}
                  className="w-10 md:w-20 lg:w-32 h-auto object-fill bg-no-repeat mx-auto transition-all grayscale hover:grayscale-0 rounded-sm"
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
