"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiSolidLike } from "react-icons/bi";
import {
  PiArrowFatDownFill,
  PiArrowFatUpFill,
  PiCoffeeBeanFill,
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatLikeNumber } from "@/utils/format-number.utils";
import { Badge } from "@/components/ui/badge";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import CountUp from "react-countup";
import {
  FaChevronRight,
  FaClock,
  FaComments,
  FaCrown,
  FaDollarSign,
  FaMapMarkerAlt,
  FaPlusCircle,
} from "react-icons/fa";
import { dataCafe } from "@/constants/Mockdata.constants";
import { CafeProps } from "@/types/cafe/cafe.types";
import { loadSlim } from "@tsparticles/slim";
import { useState, useEffect, useLayoutEffect } from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./CafeDetail.module.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const CafeDetail = ({ cafeId }: { cafeId: string }) => {
  const iconSvg = `<svg fill="#FFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 326.05 326.05"
	 xml:space="preserve">
<g>
	<path d="M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16
		c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z
		 M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8
		C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169
		C322.479,191.585,343.526,103.869,310.81,48.75z"/>
</g>
</svg>`;
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [cafeprimaryColor, setCafeprimaryColor] = useState<string>();
  const [cafeData, setCafeData] = useState<CafeProps>();
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log(thumbsSwiper);
  }, [thumbsSwiper]);

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
      setCafeData(dataCafe.find((item) => item.id === cafeId));
    };
    fetchCafeById();
  }, [cafeData, cafeId, cafeprimaryColor]);

  useLayoutEffect(() => {
    const fetchCafeById = async () => {
      setCafeprimaryColor(
        dataCafe.find((item) => item.id === cafeId)?.cafeDetails.cafeTheme
          .primaryColor
      );
    };
    fetchCafeById();
  }, [cafeData, cafeId, cafeprimaryColor]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!cafeData) {
    return <>Loading...</>;
  }

  if (init)
    return (
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
                {cafeData.cafeDetails.contentImg.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={800}
                      height={600}
                      src={img}
                      alt={`Nature ${index + 1}`}
                      className="w-full mx-auto h-[600px] max-h-[600px] md:max-h-[500px] sm:max-h-[400px] object-cover rounded-lg select-none"
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
                {cafeData.cafeDetails.contentImg.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={800}
                      height={800}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-[200px] md:h-[150px] sm:h-[100px] object-cover rounded-md opacity-100 select-none"
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
                  src={cafeData.cafeDetails.thumbnail}
                  alt="Cafe Thumbnail"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  {cafeData.isCOTY && (
                    <div className="w-full h-full flex flex-row items-center gap-3">
                      <span className="h-full text-xl text-yellow-300">
                        {" "}
                        Cafe of the Year 2024
                      </span>
                      <FaCrown className="text-yellow-300 drop-shadow-md text-4xl" />
                    </div>
                  )}
                  <h1 className="text-lg text-slate-300 w-auto h-full">
                    {cafeData.isRecommendedByPeople >= 100
                      ? "Recommended by most viewer ⭐"
                      : ""}
                  </h1>
                  <h1
                    className="text-4xl font-bold"
                    style={{
                      color: `${cafeData.cafeDetails.cafeTheme.primaryColor}`,
                    }}
                  >
                    {cafeData.cafeDetails.title}
                  </h1>
                  <div className="flex gap-2 mt-2">
                    {cafeData.cafeDetails.cafeCategory.map((category) => (
                      <Badge
                        key={category.id}
                        className="bg-yellow-500 text-slate-900 hover:bg-yellow-300 cursor-pointer text-md"
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
                            <FaPlusCircle className="text-4xl text-slate-50 group-hover:scale-110" />
                          </div>
                          <Image
                            src={imgSrc}
                            alt={`Cafe Image ${index + 1}`}
                            width={600}
                            height={400}
                            className="group-hover:scale-110 object-cover w-full h-48 rounded-lg transition-all"
                          />
                        </DialogTrigger>
                        <DialogContent className="p-0 m-0 mx-auto w-full scale-150 border-none justify-center bg-slate-950">
                          <Image
                            src={imgSrc}
                            alt={`Cafe Image ${index + 1}`}
                            width={800}
                            height={600}
                            className="object-contain bg-no-repeat w-full rounded-md border-none"
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
              <h2 className="text-4xl font-semibold text-gray-200">
                {cafeData.cafeDetails.title}
              </h2>
              <div className="grid grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-1">
                {cafeData.cafeDetails.cafeCategory.map((category) => (
                  <Badge
                    key={category.id}
                    className="bg-yellow-500 text-slate-900 hover:bg-yellow-300 cursor-pointer text-md"
                  >
                    {category.cafeCategoryName}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BiSolidLike className="text-green-500 text-2xl" />
              <span className="text-green-500 text-lg">
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
              <FaClock className="text-yellow-500 text-3xl" />
              <div>
                <h2 className="text-lg font-semibold text-gray-200">
                  Opening Hours
                </h2>
                <p className="text-gray-400">
                  {cafeData.cafeDetails.cafeOperation.openingTime} -{" "}
                  {cafeData.cafeDetails.cafeOperation.closingTime}
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-6xl md:text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-200">Address</h2>
              <p className="text-gray-400">
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
            <FaDollarSign className="text-yellow-500 text-3xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-200">Price</h2>
              <p className="text-gray-400">From: 50,000đ - 100,000đ</p>
            </div>
          </div>

          {/* Content */}
          <div className="text-gray-300 leading-relaxed">
            {cafeData.cafeDetails.content || "No additional content provided."}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition select-none">
              View Chain <FaChevronRight className="inline ml-2" />
            </button>
            <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition select-none">
              See Events
            </button>
          </div>

          {/* Interaction Buttons */}
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-slate-900 border border-slate-800 hover:bg-green-800">
                    <PiArrowFatUpFill className="text-xl text-green-600" />
                    <CountUp
                      end={cafeData.totalLike}
                      formattingFn={formatLikeNumber}
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
                  <Button className="bg-slate-900 hover:bg-red-800 border border-slate-800">
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
                  <Button className="bg-slate-900 hover:bg-cyan-800 border border-slate-800">
                    <FaComments className="text-lg text-cyan-600" />
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
                  <Button className="bg-slate-900 hover:bg-purple-800 border border-slate-800">
                    <PiShareFatFill className="text-lg text-purple-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Particles
            className="z-[-1]"
            id="tsparticles"
            options={{
              fullScreen: { enable: true },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 0.2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 30,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "image", // Use image as the particle shape
                  options: {
                    image: [
                      {
                        src: `data:image/svg+xml;base64,${btoa(iconSvg)}`, // Base64 encode the SVG
                        width: 200,
                        height: 200,
                      },
                    ],
                  },
                },
                size: {
                  value: { min: 1, max: 10 },
                },
              },
            }}
          />
        </div>
      </div>
    );
};

export default CafeDetail;
