import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSection() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/cafes?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-260px)] bg-cover bg-center flex items-center justify-start px-4 sm:px-6 py-12">
      <div className="absolute inset-0 w-full h-full bg-primaryColor opacity-80 z-[-1]"></div>
      <Image
        className="absolute inset-0 w-full h-full object-cover object-center z-[-2]"
        src="/images/herobanner-cafe-shop.jpg"
        alt="Hero Banner"
        width={1920}
        height={1080}
        priority
      />
      <div className="container mx-auto flex items-start justify-center flex-col text-left">
        <p className="text-base sm:text-lg uppercase tracking-wide flex items-center justify-center gap-2">
          <span className="text-lg">☕</span> Crafted With Love, Served With
          Passion
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
          STEP INTO THE AROMA OF <br className="hidden sm:block" /> FRESHLY COFFEE
        </h1>
        <p className="text-base sm:text-lg max-w-3xl text-gray-300 mt-4">
          Discover a place where every cup is a masterpiece, crafted with
          passion and precision. From the rich, bold flavors of our signature
          blends to the cozy ambiance that feels like home.
        </p>

        {/* Search Input */}
        <div className="mt-6 flex justify-center w-full sm:w-auto">
          <div className="relative w-full max-w-[600px]">
            <Input
              type="text"
              placeholder="Search for your favorite coffee..."
              className="w-full md:w-[500px] bg-primaryColor bg-opacity-10 text-white border-2 border-buttonColor placeholder-buttonColor focus:ring-buttonColor rounded-full px-4 py-4 sm:py-6 backdrop-blur-md text-base sm:text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-buttonColor text-black hover:bg-buttonHoverColor px-3 sm:px-4 py-4 sm:py-6 rounded-full w-[100px]"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Button 
            className="bg-buttonColor text-black hover:bg-buttonHoverColor px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium"
            onClick={() => router.push('/cafes')}
          >
            Discover Coffee
          </Button>
        </div>
      </div>
    </section>
  );
}
