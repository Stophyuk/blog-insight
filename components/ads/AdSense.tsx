"use client";

import { useEffect } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle";
  fullWidthResponsive?: boolean;
  className?: string;
}

export function AdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  // AdSense가 활성화되지 않은 경우 개발 환경에서 플레이스홀더 표시
  if (process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_ADSENSE_ID) {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 p-4 text-center ${className}`}>
        <p className="text-gray-500 text-sm">AdSense 광고 영역</p>
        <p className="text-xs text-gray-400 mt-1">Slot: {adSlot}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  );
}
