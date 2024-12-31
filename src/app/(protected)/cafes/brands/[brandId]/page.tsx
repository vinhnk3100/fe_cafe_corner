"use client";

import { CafeBrandDetail } from "@/components/cafe";


type CafeBrandDetailPageProps = {
  params: {
    brandId: string;
  };
};

export default function CafeBrandDetailPage({
  params,
}: CafeBrandDetailPageProps) {
  const { brandId } = params;
  return <CafeBrandDetail brandId={brandId} />;
}
