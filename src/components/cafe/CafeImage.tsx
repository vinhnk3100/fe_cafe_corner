import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Cafe } from "@/schemas/cafe.schema";

export default function CafeImage({
  cafe,
  modeView,
}: {
  cafe: Cafe;
  modeView: string;
}) {
  const imageClass =
    modeView === "grid"
      ? "w-full h-48 object-cover object-center group-hover:scale-110 ease-in-out duration-300"
      : "w-full h-[240px] object-cover object-center group-hover:scale-110 ease-in-out duration-300";

  if (modeView === "table") {
    return (
      <Carousel className="w-full h-full">
        <CarouselContent>
          <CarouselItem>
            <Image
              src={
                cafe.cafeDetails.thumbnail.length > 0
                  ? cafe.cafeDetails.thumbnail
                  : "https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg"
              }
              alt={cafe.cafeDetails.title}
              width={400}
              height={250}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={imageClass}
            />
          </CarouselItem>
          {cafe.cafeDetails.contentImg.map((image) => (
            <CarouselItem key={image}>
              <Image
                src={
                  image.length > 0
                    ? image
                    : "https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg"
                }
                alt={cafe.cafeDetails.title}
                width={400}
                height={250}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={imageClass}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 border-2 text-white bg-primaryColor rounded-full p-2 w-10 h-10" />
        <CarouselNext className="absolute right-2 border-2 text-white bg-primaryColor rounded-full p-2 w-10 h-10" />
      </Carousel>
    );
  }

  return (
    <Image
      src={
        cafe.cafeDetails.thumbnail.length > 0
          ? cafe.cafeDetails.thumbnail
          : "https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg"
      }
      alt={cafe.cafeDetails.title}
      width={400}
      height={250}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={imageClass}
    />
  );
}
