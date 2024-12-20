"use client";

import {
  FaChevronRight,
  FaClock,
  FaComments,
  FaCrown,
  FaDollarSign,
  FaMapMarkerAlt,
  FaPlusCircle,
} from "react-icons/fa";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { dataCafe } from "@/constants/Mockdata.constants";
import { Button } from "@/components/ui/button";
import { BiSolidLike } from "react-icons/bi";
import {
  PiArrowFatDownFill,
  PiArrowFatUpFill,
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
import { CafeProps } from "@/types/cafe/cafe.types";
import { formatLikeNumber } from "@/utils/format-number.utils";
import { Badge } from "@/components/ui/badge";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import CountUp from "react-countup";
import CafeDetail from "@/components/cafe/cafe-detail/CafeDetail";

type CafeDetailPageProps = {
  params: {
    cafeId: string;
  };
};

export default function CafeDetailPage({ params }: CafeDetailPageProps) {
  const { cafeId } = params;

  return <CafeDetail cafeId={cafeId} />;
}
