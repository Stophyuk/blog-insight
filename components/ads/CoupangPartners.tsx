"use client";

import { useEffect } from "react";

interface CoupangPartnersProps {
  subId?: string;
  className?: string;
}

export function CoupangPartners({ subId = "", className = "" }: CoupangPartnersProps) {
  useEffect(() => {
    // 쿠팡 파트너스 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 개발 환경에서 플레이스홀더 표시
  if (process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_COUPANG_PARTNER_ID) {
    return (
      <div className={`bg-blue-50 border-2 border-dashed border-blue-300 p-4 text-center ${className}`}>
        <p className="text-blue-600 text-sm">쿠팡파트너스 광고 영역</p>
        <p className="text-xs text-blue-400 mt-1">SubID: {subId || "default"}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        id="coupang-ad-container"
        data-partner-id={process.env.NEXT_PUBLIC_COUPANG_PARTNER_ID}
        data-sub-id={subId}
      />
    </div>
  );
}
