import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-170px)] bg-cover bg-center flex items-center justify-start px-6">
      <div className="absolute inset-0 w-full h-full bg-primaryColor opacity-80 z-[-1]"></div>
      <Image
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
        src="https://demo.awaikenthemes.com/html-preview/roast/images/hero-bg.jpg"
        alt="Hero Banner"
        width={1000}
        height={1000}
      />
      <div className="container mx-auto flex items-start justify-center flex-col text-left">
        <p className="text-lg uppercase tracking-wide flex items-center justify-center gap-2">
          <span className="text-lg">☕</span> Crafted With Love, Served With
          Passion
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          STEP INTO THE AROMA OF <br /> FRESHLY COFFEE
        </h1>
        <p className="text-lg max-w-3xl text-gray-300 mt-4">
          Discover a place where every cup is a masterpiece, crafted with
          passion and precision. From the rich, bold flavors of our signature
          blends to the cozy ambiance that feels like home.
        </p>

        {/* Search Input */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search for your favorite coffee..."
              className="w-fit md:w-[500px] bg-primaryColor bg-opacity-10 text-white border-2 border-buttonColor placeholder-buttonColor focus:ring-buttonColor rounded-full px-4 py-6 backdrop-blur-md text-lg"
            />
            <Button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-buttonColor text-black hover:bg-buttonHoverColor px-4 py-6 rounded-full">
              Search
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-buttonColor text-black hover:bg-buttonHoverColor px-8 py-6 rounded-full text-lg font-medium">
            Discover Coffee
          </Button>
        </div>
      </div>
    </section>
  );
}
