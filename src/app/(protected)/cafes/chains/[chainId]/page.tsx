"use client";

import { CafeChainDetail } from "@/components/cafe";

type CafeChainDetailPageProps = {
  params: {
    chainId: string;
  };
};

export default function CafeChainDetailPage({
  params,
}: CafeChainDetailPageProps) {
  const { chainId } = params;
  return <CafeChainDetail chainId={chainId} />;
}
