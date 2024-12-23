"use client";

import { dataCafe } from "@/constants/Mockdata.constants";
import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";

import styles from "./WheelOfCafes.module.scss";
import { Button } from "@/components/ui/button";
import { CafeProps } from "@/types/cafe/cafe.types";

export default function WheelOfCafesPage() {
  const [cafeAfterSpin, setCafeAfterSpin] = useState<CafeProps>();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = dataCafe.map((item) => {
    return {
      option: item.cafeDetails.title,
    };
  });

  console.log(data);
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * (data.length + 1));
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  useEffect(() => {
    if (prizeNumber) {
      setCafeAfterSpin(
        dataCafe.find((item) => {
          return item.cafeDetails.title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(
              data[prizeNumber].option
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            );
        })
      );
    }
  }, [prizeNumber, mustSpin]);

  console.log("Prize number after spin ID: ", prizeNumber);
  console.log("Cafe name after spin: ", data[prizeNumber].option);
  console.log("Cafe After spin ID", cafeAfterSpin);

  return (
    <div className="container mx-auto w-full">
      <div className="flex flex-row w-full gap-6">
        <div className={`${styles["roulette-container"]}`}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
            backgroundColors={["#020617", "#334155"]}
            textColors={["#ffffff"]}
            fontSize={12}
            innerBorderWidth={1}
            outerBorderWidth={3}
            radiusLineWidth={3}
          />
          <Button
            className="bg-slate-950 mx-auto flex font-bold text-xl w-auto p-5 hover:bg-slate-800"
            onClick={handleSpinClick}
          >
            Let's Go
          </Button>
        </div>
        <div className="flex w-full">Filter Section</div>
      </div>
      <div className="w-full flex bg-slate-700">
        Display Result Section:
        {!mustSpin ? <>{cafeAfterSpin?.cafeDetails.title}</> : "Please wait..."}
      </div>
    </div>
  );
}
