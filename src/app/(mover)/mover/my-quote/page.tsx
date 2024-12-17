"use client";

import { useGetManagedQuoteList } from "@/api/query-hooks/quote";
import SentQuoteCard from "@/components/cards/SentQuoteCard";
import { useRouter, useSearchParams } from "next/navigation";
import RejectedRequestCard from "@/components/cards/RejectedRequestCard";
import Loader from "@/components/common/Loader";
import Message from "@/components/common/Message";
import {
  type RejectedQuotesResponse,
  type SentQuotesResponse,
} from "@/api/quote";
import { type SentQuoteData } from "@/types/quote";

interface QuoteCardListProps {
  pages: (SentQuotesResponse | RejectedQuotesResponse)[];
  currentTab: number;
  onButtonClick: (id: number) => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}

const QuoteCardList = ({
  pages,
  currentTab,
  onButtonClick,
  isFetchingNextPage,
  hasNextPage,
}: QuoteCardListProps) => {
  return (
    <ul className="max-w-[1400px] mx-auto bg-bg-100 grid grid-cols-1 gap-[24px] mt-[24px] pc:grid-cols-2 tablet:gap-[32px] tablet:mt-[32px] pc:gap-x-[24px] pc:gap-y-[48px] pc:mt-[40px]">
      {pages.map((page) =>
        page.list.map((item) =>
          currentTab === 0 ? (
            <SentQuoteCard
              key={item.id}
              data={item as SentQuoteData}
              onButtonClick={() => onButtonClick(item.id)}
              classNameQuoteDetails="pc:flex-col pc:gap-2 pc:items-start"
            />
          ) : (
            <RejectedRequestCard
              key={item.id}
              data={item}
              classNameQuoteDetails="pc:flex-col pc:gap-2 pc:items-start"
            />
          )
        )
      )}
      {isFetchingNextPage && <Loader msg="더 불러오는 중..." />}
      {!hasNextPage && !isFetchingNextPage && (
        <Message msg="더 불러올 견적이 없습니다." />
      )}
    </ul>
  );
};

export default function MyQuotePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = Number(searchParams.get("tab") || "0");

  const { data, isPending, isError, isFetchingNextPage, hasNextPage } =
    useGetManagedQuoteList({ tab: currentTab });

  const handleButtonClick = (quoteId: number) => {
    router.push(`/mover/my-quote/${quoteId}`);
  };

  if (isPending) {
    return <Loader msg="견적을 불러오는 중입니다." />;
  }

  if (isError) {
    return <Message msg="견적을 불러오는중 오류가 발생했습니다." />;
  }

  const pages = data?.pages || [];
  const isEmpty = pages[0]?.list.length === 0 || pages.length === 0;

  if (isEmpty) {
    return <Message msg="데이터 없음" />;
  }

  return (
    <QuoteCardList
      pages={pages}
      currentTab={currentTab}
      onButtonClick={handleButtonClick}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
    />
  );
}
