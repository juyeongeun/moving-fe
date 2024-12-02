"use client";

import QuoteModal from "@/components/common/QuoteModal";

export default function Home() {
  return (
    <div className="bg-gray-800 w-full h-[100dvh]">
      <QuoteModal
        onClose={() => {}}
        onSubmit={() => {}}
        serviceType={1}
        isDesignatedQuote={true}
        isRejected={true}
      />
    </div>
  );
}
