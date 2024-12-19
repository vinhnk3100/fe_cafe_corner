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
            src="https://files.oaiusercontent.com/file-54evoX6rVfYdrhUCugoJ3S?se=2024-12-19T07%3A55%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0ce52bd1-1e60-4e4b-9b6c-630c89d806c3.webp&sig=RNEs7TinXf17yVJE3cxrJeFGWdh9oT7F/5J5Hfb7x2s%3D"
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
            src="https://files.oaiusercontent.com/file-4xZJtVy7QDjZU2A5hzkQgm?se=2024-12-19T08%3A01%3A49Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dea75079b-caba-40c9-9037-351642df42ea.webp&sig=gKFbwlhyARWAYSUnUQj0MNdqnim8Mc/TabrozFYjCK0%3D"
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
            src="https://elitetour.com.vn/files/images/Blogs/Fansipan-Terrace-Cafe-HomeStay-1.jpg"
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
