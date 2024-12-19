import { Card, CardContent } from "@/components/ui/card";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { dataCafe as data } from "@/constants/Mockdata.constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CafeCarousel.style.scss";
import Link from "next/link";
import { FaChevronRight, FaStore } from "react-icons/fa";
import { MdLocalCafe } from "react-icons/md";

const CafeCarousel = () => {
  const [dataCafe, setDataCafe] = useState<CafeProps>();

  useEffect(() => {
    const fetchDataCafe = async () => {
      setDataCafe(data[0]); // Assuming the first item as the default data
    };
    fetchDataCafe();
  }, []);

  if (dataCafe) {
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
        className="relative mx-auto w-full h-[700px]"
        slidesPerView={1}
        modules={[Parallax, Pagination, Autoplay]}
        // style={{
        //   height: `calc(100vh - 60px)`, // Adjust height to fit the screen
        // }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="w-full">
            <Card className="w-full border-0">
              <CardContent className="relative group p-0 flex items-center justify-center w-full">
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
                <div className="absolute left-0 lg:left-12 p-10 w-auto lg:w-[800px] h-[400px] flex justify-between flex-col">
                  <div className="flex flex-col">
                    <div
                      className="text-lg lg:text-lg text-slate-50 group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:via-white group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all flex flex-row gap-2 items-center"
                      data-swiper-parallax="-200"
                    >
                      <span className="font-bold">Opening hours:</span>
                      {item.cafeDetails.cafeOperation.openingTime} -{" "}
                      {item.cafeDetails.cafeOperation.closingTime}
                    </div>
                    <div
                      data-swiper-parallax="-300"
                      className="text-2xl lg:text-5xl text-slate-50 py-2 font-bold group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:via-white group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all"
                    >
                      {item.cafeDetails.title}
                    </div>
                    <div
                      className="text-sm lg:text-xl text-slate-50 font-light group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:via-white group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all"
                      data-swiper-parallax="-400"
                    >
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
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 mt-4">
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
                        View Chain Store
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
