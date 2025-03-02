"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
const testimonials = [
  {
    quote:
      "The ambiance of this cafe is simply unmatched! Every visit feels like a mini-vacation.",
    author: "Emma Johnson",
  },
  {
    quote:
      "I love the variety of coffee options available here. Each cup is a delightful experience!",
    author: "Michael Smith",
  },
  {
    quote:
      "This cafe has become my go-to spot for relaxation. The staff is friendly and the pastries are divine!",
    author: "Sophia Brown",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="relative w-full py-12 h-[400px] flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute w-full h-full inset-0 bg-black/50 -z-10">
        <Image
          src="https://demo.awaikenthemes.com/html-preview/roast/images/testimonial-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20 object-center"
          layout="fill"
        />
      </div>

      {/* Title */}
      <div className="text-center text-white">
        <p className="text-2xl text-buttonColor flex justify-center items-center gap-1">
          <span>☕</span> Our Testimonials
        </p>
        <h2 className="text-3xl font-serif font-semibold mt-2">
          HEAR FROM THOSE WHO KNOW US BEST
        </h2>
      </div>

      {/* Carousel */}
      <Carousel className="relative w-full max-w-4xl mx-auto mt-8">
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="bg-transparent text-center border-none shadow-none">
                <CardContent className="text-white max-w-2xl">
                  <FaQuoteLeft className="text-4xl text-buttonColor mx-auto mb-4" />
                  <p className="text-lg italic">{item.quote}</p>
                  <p className="mt-4 font-semibold">{item.author}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute border-2 border-buttonColor left-0 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/80 text-white rounded-full w-10 h-10" />
        <CarouselNext className="absolute border-2 border-buttonColor right-0 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/80 text-white rounded-full w-10 h-10" />
      </Carousel>
    </div>
  );
}
