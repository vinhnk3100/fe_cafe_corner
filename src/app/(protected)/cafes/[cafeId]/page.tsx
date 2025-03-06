"use client";
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
