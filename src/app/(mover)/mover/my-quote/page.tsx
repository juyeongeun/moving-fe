"use client";

import SentQuoteCard from "@/components/cards/SentQuoteCard";
import { useRouter, useSearchParams } from "next/navigation";
import RejectedRequestCard from "@/components/cards/RejectedRequestCard";
import { useGetManagedQuoteList } from "@/api/query-hooks/quote";
import Loader from "@/components/common/Loader";
import Message from "@/components/common/Message";
import { type SentQuoteData } from "@/types/quote";

export default function MyQuotePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = Number(searchParams.get("tab") || "0");

  const handleButtonClick = (quoteId: number) => {
    router.push(`/mover/my-quote/${quoteId}`);
  };

  const { data, isPending } = useGetManagedQuoteList({ tab: currentTab });

  if (isPending) {
    return <Loader msg="견적을 불러오는 중입니다." />;
  }

  if (!data || data.list.length === 0) {
    return <Message msg="데이터 없음" />;
  }

  return (
    <>
      <ul className="max-w-[1400px] mx-auto bg-bg-100 grid grid-cols-1 gap-[24px] mt-[24px] pc:grid-cols-2  tablet:gap-[32px] tablet:mt-[32px] pc:gap-x-[24px] pc:gap-y-[48px] pc:mt-[40px]">
        {data.list.map((item) =>
          currentTab === 0 ? (
            <SentQuoteCard
              data={item as SentQuoteData}
              onButtonClick={() => handleButtonClick(item.id)}
              key={item.id}
              classNameQuoteDetails={"pc:flex-col pc:gap-2 pc:items-start"}
            />
          ) : (
            <RejectedRequestCard
              data={item}
              key={item.id}
              classNameQuoteDetails={"pc:flex-col pc:gap-2 pc:items-start"}
            />
          )
        )}
      </ul>
    </>
  );
}
