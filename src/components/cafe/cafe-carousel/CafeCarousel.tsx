import { Card, CardContent } from "@/components/ui/card";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { dataCafe as data } from "@/constants/Mockdata.constants";
import CountUp from "react-countup";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CafeCarousel.style.scss";
import Link from "next/link";
import { FaChevronRight, FaClock, FaStore } from "react-icons/fa";
import { MdLocalCafe } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";
import { formatLikeNumber } from "@/utils/format-number.utils";

const CafeCarousel = () => {
  const [dataCafe, setDataCafe] = useState<CafeProps>();

  useEffect(() => {
    const fetchDataCafe = async () => {
      setDataCafe(data[0]); // Assuming the first item as the default data
    };
    fetchDataCafe();
  }, []);

  if (dataCafe) {
    const dataCafeSortedLike = [...data].sort(
      (a, b) => b.totalLike - a.totalLike
    );
    return (
      <Swiper
        speed={1600}
        parallax={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="relative mx-auto w-full h-auto xl:h-[700px] rounded-md bg-slate-500 hover:shadow-[0_4px_6px_-1px_rgba(248,250,252,0.2),0_1px_3px_rgba(248,250,252,0.08)]"
        slidesPerView={1}
        modules={[Parallax, Pagination, Autoplay]}
        // style={{
        //   height: `calc(100vh - 60px)`, // Adjust height to fit the screen
        // }}
      >
        {dataCafeSortedLike.slice(0, 4).map((item, index) => (
          <SwiperSlide key={item.id} className="w-full">
            <Card className="w-full border-0">
              <CardContent className="relative group p-0 flex items-center justify-center w-full h-full">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-60 transition-opacity" />
                {/* Image */}
                <Image
                  alt="Cafe thumbnail"
                  width={1600}
                  height={550}
                  src={item.cafeDetails.thumbnail}
                  className="h-full w-full object-cover aspect-video"
                />
                {/* Content */}
                <div className="absolute left-0 lg:left-12 p-0 px-10 md:p-10 w-auto lg:w-[800px] h-auto lg:h-[400px] flex justify-between flex-col">
                  <div className="flex flex-col">
                    <div
                      data-swiper-parallax="-200"
                      className="text-xl md:text-3xl lg:text-6xl text-slate-50 py-2 font-bold"
                    >
                      {item.cafeDetails.title}
                    </div>
                    <div
                      className="flex-row gap-3 hidden md:flex"
                      data-swiper-parallax="-200"
                    >
                      {dataCafe.cafeDetails.cafeCategory.map((item, index) => {
                        if (index > 2) return <>.</>;
                        return (
                          <Badge
                            key={item.id}
                            className="text-1xl w-auto bg-yellow-500 rounded-md text-slate-950 hover:bg-yellow-600"
                          >
                            {item.cafeCategoryName}
                          </Badge>
                        );
                      })}
                    </div>
                    <div
                      className="py-1 md:py-6 text-[0.7em] lg:text-xl text-slate-50 font-light group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:via-white group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all flex items-start gap-2"
                      data-swiper-parallax="-300"
                    >
                      <PiMapPinFill className="text-3xl text-slate-50" />
                      <span>
                        <span className="font-bold">Address: </span>
                        {item.cafeDetails.cafeLocation.houseNumber},{" "}
                        {item.cafeDetails.cafeLocation.street}
                        {item.cafeDetails.cafeLocation.district && (
                          <span>
                            , Quận {item.cafeDetails.cafeLocation.district}
                          </span>
                        )}
                        {item.cafeDetails.cafeLocation.ward && (
                          <span>
                            , Phường {item.cafeDetails.cafeLocation.ward}
                          </span>
                        )}
                        {item.cafeDetails.cafeLocation.city && (
                          <span>, {item.cafeDetails.cafeLocation.city}</span>
                        )}
                      </span>
                    </div>
                    <div
                      className="font-light text-[0.7em] lg:text-xl text-slate-50 group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:via-white group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all flex items-center gap-2"
                      data-swiper-parallax="-400"
                    >
                      <FaClock className="text-sm md:text-2xl text-slate-50" />
                      <span>
                        <span className="font-bold">Opening Daily: </span>
                        {item.cafeDetails.cafeOperation.openingTime} -{" "}
                        {item.cafeDetails.cafeOperation.closingTime}
                      </span>
                    </div>
                    {/* Stats */}
                    <div
                      className="flex gap-8 py-2 md:py-6 text-[0.6em] lg:text-3xl"
                      data-swiper-parallax="-500"
                    >
                      <div className="text-white text-center w-auto md:w-[80px]">
                        <span className="block font-bold">
                          <CountUp
                            formattingFn={formatLikeNumber}
                            duration={3}
                            end={item.totalLike}
                          />
                        </span>
                        <span className="text-white/80">Likes</span>
                      </div>
                      <div className="text-white text-center">
                        <span className="block font-bold">
                          <CountUp end={100} />+
                        </span>
                        <span className="text-white/80">Reviews</span>
                      </div>
                      <div className="text-white text-center">
                        <span className="block font-bold">#{index + 1}</span>
                        <span className="text-white/80">Ranking</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="hidden md:flex flex-wrap gap-4 mt-4">
                    {/* View Cafe Button */}
                    <Link href={`cafes/${item.id}`}>
                      <button
                        data-swiper-parallax="-500"
                        className="bg-yellow-500 hover:bg-yellow-300 text-gray-900 rounded-lg px-8 py-3 font-semibold transition-all duration-300 ease-in-out flex flex-row gap-2 items-center"
                      >
                        <MdLocalCafe className="text-2xl" />
                        View Cafe
                        <FaChevronRight className="inline ml-2" />
                      </button>
                    </Link>

                    {/* View Chain Store Button */}
                    <Link href={`cafes/${item.id}`}>
                      <button
                        data-swiper-parallax="-600"
                        className="bg-slate-400 hover:bg-slate-300 text-gray-950 rounded-lg px-8 py-3 font-semibold transition-all duration-300 ease-in-out flex flex-row gap-2 items-center"
                      >
                        <FaStore className="text-2xl" />
                        View Cafe Chain
                        <FaChevronRight className="inline ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else return <></>;
};

export default CafeCarousel;
