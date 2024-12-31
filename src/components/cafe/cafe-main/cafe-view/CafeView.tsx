"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { mockDataCafeViews } from "@/constants/Mockdata.constants";

const CafeCard = () => {
  return (
    <>
      {mockDataCafeViews.map((data) => (
        <Card
          key={data.id}
          className="group w-full text-slate-200 border-none rounded-lg"
        >
          <CardContent className="w-full p-0 relative">
            {/* Centered bordered text container */}
            <div className="absolute w-full h-full bg-black opacity-60 group-hover:opacity-0 transition-all"></div>
            <div className="absolute border-2 border-slate-100 inset-4 flex items-center justify-center rounded-md bg-black/40">
              <div className="p-5 text-3xl text-slate-100">{data.type}</div>
            </div>
            <Image
              alt=""
              src={data.imageUrl}
              width={600}
              height={600}
              className="w-full h-full aspect-video rounded-lg"
            />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CafeCard;
