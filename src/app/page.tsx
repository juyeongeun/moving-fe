"use client";

import QuoteModal from "@/components/common/QuoteModal";

export default function Home() {
  return (
    <div className="bg-gray-600 w-full h-[100vh]">
      <QuoteModal
        serviceType={1}
        isDesignatedQuote={true}
        isRejected={true}
        startAddress="서울특별시 강남구 테헤란로 14길 6 남도빌딩ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁdasdfasf"
        endAddress="서울특별시 강남구 테헤란로 14길 6 남도빌딩"
        moveDate="2024. 01. 01(목)"
        customerName="김코드"
      />
    </div>
  );
}
