"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Coffee, MapPin, Calendar } from "lucide-react";
import { PiCoffeeBean } from "react-icons/pi";
import { GiThreeLeaves } from "react-icons/gi";

export default function AboutUs() {
  return (
    <section className="bg-primaryColor text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 relative w-full">
      {/* Left Content */}
      <div className="absolute top-0 left-[-160px] inset-0 flex items-center gap-2">
        <PiCoffeeBean className="absolute top-0 left-0 text-coffeeBeanColor w-28 h-28" />
        <PiCoffeeBean className="absolute top-4 left-10 text-coffeeBeanColor w-28 h-28 rotate-90" />
        <PiCoffeeBean className="absolute top-20 left-0 text-coffeeBeanColor w-28 h-28" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <p className="text-2xl text-buttonColor uppercase tracking-wide flex items-center gap-3">
          <span className="">
            <Coffee className="w-10 h-10" />
          </span>{" "}
          About Us
        </p>
        <h2 className="text-4xl font-serif leading-snug">
          BRINGING PEOPLE TOGETHER, <br /> ONE CUP AT A TIME
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                A Cozy Coffee Experience
              </h3>
              <p className="text-gray-400">
                Enjoy the rich aroma and comforting warmth of our expertly
                crafted coffee. Whether you're looking for a quiet corner to
                relax or a vibrant space to catch up with friends, we bring you
                the perfect coffee experience
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Event Elegance</h3>
              <p className="text-gray-400">
                Host your special moments with us! From intimate gatherings to
                vibrant celebrations offers.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Button className="bg-buttonColor hover:bg-buttonHoverColor text-lg font-medium text-primaryColor px-8 py-6 rounded-lg">
            More About Us
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative flex justify-center">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://demo.awaikenthemes.com/html-preview/roast/images/about-us-image.jpg"
            alt="About Us"
            width={500}
            height={500}
            className="rounded-tl-full rounded-tr-full object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute bottom-10 left-4 bg-[#D9A86C] text-black p-4 rounded-lg shadow-lg">
          <p className="font-semibold text-lg flex items-center gap-2">
            ⏰ Open Hours
          </p>
          <p className="text-sm">
            Monday - Friday: <span className="font-medium">09:30 - 7:30</span>
          </p>
          <p className="text-sm">
            Saturday: <span className="font-medium">10:30 - 5:00</span>
          </p>
          <p className="text-sm">
            Sunday: <span className="font-medium">24 hours open</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-[-200px] flex items-center gap-2 z-20">
        <GiThreeLeaves className="absolute bottom-40 right-0 text-coffeeBeanColor w-28 h-28 overflow-hidden" />
        <PiCoffeeBean className="absolute bottom-0 right-0 text-coffeeBeanColor w-28 h-28 overflow-hidden" />
        <PiCoffeeBean className="absolute bottom-4 right-10 text-coffeeBeanColor w-28 h-28 overflow-hidden rotate-90" />
        <PiCoffeeBean className="absolute bottom-20 right-0 text-coffeeBeanColor w-28 h-28 overflow-hidden" />
      </div>
    </section>
  );
}
