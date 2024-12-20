import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CafeCard = () => {
  return (
    <>
      <Card className="group w-full text-slate-200 border-none rounded-sm">
        <CardContent className="w-full p-0 relative">
          {/* Centered bordered text container */}
          <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-60 transition-all"></div>
          <div className="absolute border-2 border-slate-100 inset-4 flex items-center justify-center rounded-md bg-black/40">
            <div className="p-5 text-3xl text-slate-100">Seaside View</div>
          </div>
          <Image
            alt=""
            src="https://vielimousine.com/wp-content/uploads/2022/04/soho-coffee.jpg"
            width={600}
            height={600}
            className="w-full h-full aspect-video"
          />
        </CardContent>
      </Card>
      <Card className="group w-full text-slate-200 border-none rounded-sm">
        <CardContent className="w-full p-0 relative">
          {/* Centered bordered text container */}
          <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-60 transition-all"></div>
          <div className="absolute border-2 border-slate-100 inset-4 flex items-center justify-center rounded-md bg-black/40">
            <div className="p-5 text-3xl text-slate-100">Rooftop View</div>
          </div>
          <Image
            alt=""
            src="https://bizweb.dktcdn.net/100/349/716/files/cafe-rooftop-quan-1-2.jpg?v=1719990006316"
            width={600}
            height={600}
            className="w-full h-full aspect-video"
          />
        </CardContent>
      </Card>
      <Card className="group w-full text-slate-200 border-none rounded-sm">
        <CardContent className="w-full p-0 relative">
          {/* Centered bordered text container */}
          <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-60 transition-all"></div>
          <div className="absolute border-2 border-slate-100 inset-4 flex items-center justify-center rounded-md bg-black/40">
            <div className="p-5 text-3xl text-slate-100">Sky View</div>
          </div>
          <Image
            alt=""
            src="https://naviday.vn/wp-content/uploads/2023/09/chenh-dalat-quan-ca-phe-di-buoi-nao-cung-dep.o-Da-Lat-ivviu-04-1024x768.jpg"
            width={600}
            height={600}
            className="w-full h-full aspect-video"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default CafeCard;
