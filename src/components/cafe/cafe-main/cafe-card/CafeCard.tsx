"use client";

import Link from "next/link";
import CafeCardItem from "./cafe-card-item/CafeCardItem";
import { dataCafe } from "@/constants/Mockdata.constants";
import { CafeProps } from "@/types/cafe/cafe.types";

export default function CafeCard() {
  if (dataCafe) {
    return (
      <>
        {dataCafe.slice(0, 8).map((data: CafeProps) => (
          <Link key={data.id} href={`/cafes/${data.id}`}>
            <CafeCardItem data={data} />
          </Link>
        ))}
      </>
    );
  } else return <></>;
}
