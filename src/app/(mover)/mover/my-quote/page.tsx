"use client";

import ReviewModal from "@/components/common/ReviewModal";

export default function MyQuotePage() {
  return (
    <div>
      <ReviewModal
        onClose={() => {}}
        onSubmit={() => {}}
        serviceType={0}
        isDesignatedQuote={false}
        moverName="김코드"
        moverImageUrl={null}
        moveDate="2024-01-01"
        cost={100000}
      />
    </div>
  );
}
