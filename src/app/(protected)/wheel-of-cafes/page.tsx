"use client";

import { dataCafe } from "@/constants/Mockdata.constants";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

export default function WheelOfCafesPage() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = dataCafe.map((item) => {
    return {
      option: item.cafeDetails.title,
      style: { backgroundColor: "orange", textColor: "black" },
    };
  });
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  console.log(prizeNumber);
  return (
    <div className="container mx-auto w-full h-full">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  );
}
