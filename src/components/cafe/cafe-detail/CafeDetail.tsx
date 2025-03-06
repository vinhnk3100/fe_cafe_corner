"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiSolidLike } from "react-icons/bi";
import {
  PiArrowFatDownFill,
  PiArrowFatUpFill,
  PiShareFatFill,
} from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCafes } from "@/hooks/useCafes";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatLikeNumber } from "@/utils/format-number.utils";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import {
  FaClock,
  FaComments,
  FaCrown,
  FaDollarSign,
  FaMapMarkerAlt,
  FaPlusCircle,
} from "react-icons/fa";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useState, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./CafeDetail.module.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Cafe } from "@/schemas/cafe.schema";
import { Coffee } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

const CafeDetail = ({ cafeId }: { cafeId: string }) => {
  const { cafes, isLoading, error } = useCafes();
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [cafeData, setCafeData] = useState<CafeProps>();

  useEffect(() => {
    // Handler to update screen size
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial screen size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchCafeById = async () => {
      setCafeData(cafes?.find((item: Cafe) => item.id === cafeId));
    };
    fetchCafeById();
  }, [cafeId, cafes]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <Coffee className="w-12 h-12 animate-spin text-buttonColor" />
      </div>
    );
  }

  if (!cafeData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <p className="text-textPrimaryColor">Cafe not found</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-primaryColor flex flex-col">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row py-8 lg:gap-12">
        {/* Left Sticky Section - Images */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-20 self-start space-y-8">
          {screenSize.width >= 1024 ? (
            <>
              {/* Main Swiper */}
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`${styles.main_swiper} hidden`}
              >
                <SwiperSlide>
                  <Image
                    width={800}
                    height={600}
                    src={cafeData.cafeDetails.thumbnail}
                    alt={`cafe thumbnail`}
                    className="w-full mx-auto h-[600px] max-h-[600px] md:max-h-[500px] sm:max-h-[400px] object-cover rounded-lg select-none"
                    priority
                  />
                </SwiperSlide>
                {cafeData.cafeDetails.contentImg.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={800}
                      height={600}
                      src={img}
                      alt={`Nature ${index + 1}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full mx-auto h-[600px] max-h-[600px] md:max-h-[500px] sm:max-h-[400px] object-cover rounded-lg select-none"
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Swiper */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`${styles.mySwiper}`}
              >
                <SwiperSlide>
                  <Image
                    width={200}
                    height={200}
                    src={cafeData.cafeDetails.thumbnail}
                    alt={`cafe thumbnail`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-[200px] md:h-[150px] sm:h-[100px] object-cover rounded-md opacity-100 select-none"
                    priority
                  />
                </SwiperSlide>
                {cafeData.cafeDetails.contentImg.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={200}
                      height={200}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-[200px] md:h-[150px] sm:h-[100px] object-cover rounded-md opacity-100 select-none"
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <>
              {/* Thumbnail Image */}
              <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={
                    cafeData.cafeDetails.thumbnail ||
                    "https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg"
                  }
                  alt="Cafe Thumbnail"
                  width={800}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  {cafeData.isCOTY && (
                    <div className="w-full h-full flex flex-row items-center gap-3">
                      <span className="h-full text-xl text-buttonColor">
                        {" "}
                        Cafe of the Year 2024
                      </span>
                      <FaCrown className="text-buttonColor drop-shadow-md text-4xl" />
                    </div>
                  )}
                  <h1 className="text-lg text-slate-300 w-auto h-full">
                    {cafeData.isRecommendedByPeople >= 100
                      ? "Recommended by most viewer ⭐"
                      : ""}
                  </h1>
                  <h1 className="text-4xl font-bold text-textPrimaryColor">
                    {cafeData.cafeDetails.title}
                  </h1>
                  <div className="flex gap-2 mt-2">
                    {cafeData.cafeDetails.cafeCategory.map((category) => (
                      <Badge
                        key={category.id}
                        className="bg-buttonColor text-primaryColor hover:bg-buttonHoverColor cursor-pointer text-md"
                      >
                        {category.cafeCategoryName}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carousel */}
              <Carousel
                opts={{
                  align: "center",
                }}
                className="w-full max-w-full"
              >
                <CarouselContent className="gap-1 w-full">
                  {cafeData.cafeDetails.contentImg.map((imgSrc, index) => (
                    <CarouselItem
                      key={index}
                      className={`rounded-lg shadow-md hover:shadow-lg transition-shadow md:basis-1/2 ${
                        cafeData.cafeDetails.contentImg.length >= 3
                          ? "lg:basis-1/3"
                          : "lg:basis-1/2"
                      }`}
                    >
                      <Dialog>
                        <DialogTrigger className="relative w-full group overflow-hidden">
                          <div className="flex justify-center items-center right-0 w-full h-full bg-black absolute opacity-0 group-hover:opacity-60 transition-all z-10">
                            <FaPlusCircle className="text-4xl text-buttonColor group-hover:scale-110" />
                          </div>
                          <Image
                            src={
                              imgSrc ||
                              "https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg"
                            }
                            alt={`Cafe Image ${index + 1}`}
                            width={600}
                            height={400}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="group-hover:scale-110 object-cover w-full h-48 rounded-lg transition-all"
                            priority
                          />
                        </DialogTrigger>
                        <DialogContent className="p-0 m-0 mx-auto w-full scale-150 border-none justify-center bg-primaryColor">
                          <Image
                            src={
                              imgSrc ||
                              "https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg"
                            }
                            alt={`Cafe Image ${index + 1}`}
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain bg-no-repeat w-full rounded-md border-none"
                            priority
                          />
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          {/* Cafe Name */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-start flex-col">
              <h2 className="text-4xl font-semibold text-textPrimaryColor">
                {cafeData.cafeDetails.title}
              </h2>
              <div className="grid grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-1">
                {cafeData.cafeDetails.cafeCategory.map((category) => (
                  <Badge
                    key={category.id}
                    className="bg-buttonColor text-primaryColor hover:bg-buttonHoverColor cursor-pointer text-md"
                  >
                    {category.cafeCategoryName}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BiSolidLike className="text-buttonColor text-2xl" />
              <span className="text-buttonColor text-lg">
                {Math.floor(
                  (cafeData.totalLike /
                    (cafeData.totalLike + cafeData.totalDislike)) *
                    100
                )}
                %
              </span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <FaClock className="text-buttonColor text-3xl" />
              <div>
                <h2 className="text-lg font-semibold text-textPrimaryColor">
                  Opening Hours
                </h2>
                <p className="text-textSecondaryColor">
                  {cafeData.cafeDetails.cafeOperation.openingTime} -{" "}
                  {cafeData.cafeDetails.cafeOperation.closingTime}
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-buttonColor text-6xl md:text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-textPrimaryColor">
                Address
              </h2>
              <p className="text-textSecondaryColor">
                {cafeData.cafeDetails.cafeLocation.houseNumber}{" "}
                {cafeData.cafeDetails.cafeLocation.street}
                {cafeData.cafeDetails.cafeLocation.district &&
                  `, ${cafeData.cafeDetails.cafeLocation.district}`}
                {cafeData.cafeDetails.cafeLocation.ward &&
                  `, Phường ${cafeData.cafeDetails.cafeLocation.ward}`}
                {cafeData.cafeDetails.cafeLocation.city &&
                  `, ${cafeData.cafeDetails.cafeLocation.city}`}
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <FaDollarSign className="text-buttonColor text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-textPrimaryColor">
                Price
              </h2>
              <p className="text-textSecondaryColor">
                From: 50,000đ - 100,000đ
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="text-textSecondaryColor leading-relaxed">
            {cafeData.cafeDetails.content || "No additional content provided."}
          </div>

          {/* Interaction Buttons */}
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-primaryColor border border-green-600 shadow-xl hover:border-green-600/20 hover:bg-green-600 hover:bg-opacity-20 hover:text-buttonHoverTextLightColor">
                    <PiArrowFatUpFill className="text-xl text-green-600" />
                    <CountUp
                      end={cafeData.totalLike}
                      formattingFn={formatLikeNumber}
                      className="text-textSecondaryColor"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Upvote</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-primaryColor border border-red-600 shadow-xl hover:border-red-600/20 hover:bg-red-600 hover:bg-opacity-20 hover:text-buttonHoverTextLightColor">
                    <PiArrowFatDownFill className="text-xl text-red-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Downvote</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-primaryColor border border-purple-600 shadow-xl hover:border-purple-600/20 hover:bg-purple-600 hover:bg-opacity-20 hover:text-buttonHoverTextLightColor">
                    <FaComments className="text-lg text-purple-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Comments</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-primaryColor border border-blue-600 shadow-xl hover:border-blue-600/20 hover:bg-blue-600 hover:bg-opacity-20 hover:text-buttonHoverTextLightColor">
                    <PiShareFatFill className="text-lg text-blue-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-primaryColor container mx-auto flex flex-col px-4 lg:px-8 py-8 gap-6 lg:gap-12">
        <div className="text-2xl font-bold text-textPrimaryColor items-center justify-center flex text-center w-full">
          Related Cafes
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
          {cafes?.slice(0, 4).map((cafe: Cafe) => {
            const getRelatedDistrict =
              cafe.cafeDetails.cafeLocation.district ===
              cafeData.cafeDetails.cafeLocation.district;
            if (getRelatedDistrict)
              return (
                <Link href={`/cafes/${cafe.id}`} key={cafe.id}>
                  <Card className="w-full h-64 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    {/* Background Overlay */}
                    <div className="w-full h-full relative">
                      <div className="absolute w-full h-full bg-primaryColor/50"></div>
                      <Image
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        src={cafe.cafeDetails.thumbnail}
                        alt={cafe.cafeDetails.title}
                        width={600}
                        height={600}
                        priority
                      />
                    </div>

                    {/* Wave Effect Inside CardHeader */}
                    <CardHeader className="w-full h-12 group-hover:h-28 transition-all duration-500 z-10 absolute bottom-0 left-0 bg-buttonColor/80 group-hover:bg-buttonColor overflow-hidden p-3">
                      <CardTitle className="text-slate-200 text-lg sm:text-xl font-bold relative">
                        {cafe.cafeDetails.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-md text-gray-200 group-hover:text-white line-clamp-2">
                        {cafe.cafeDetails.cafeLocation.houseNumber}{" "}
                        {cafe.cafeDetails.cafeLocation.street}, Quận{" "}
                        {cafe.cafeDetails.cafeLocation.district},{" "}
                        {cafe.cafeDetails.cafeLocation.ward},{" "}
                        {cafe.cafeDetails.cafeLocation.city}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default CafeDetail;
