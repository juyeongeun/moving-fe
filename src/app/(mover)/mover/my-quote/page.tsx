"use client";

import { useGetManagedQuoteList } from "@/api/query-hooks/quote";
import SentQuoteCard from "@/components/cards/SentQuoteCard";
import { useRouter, useSearchParams } from "next/navigation";
import RejectedRequestCard from "@/components/cards/RejectedRequestCard";
import Loader from "@/components/common/Loader";
import Message from "@/components/common/Message";
import { type QuoteDetailsData, type SentQuoteData } from "@/types/quote";
import { CursorResponse } from "@/types/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Suspense } from "react";

interface QuoteCardListProps {
  pages: CursorResponse<SentQuoteData | QuoteDetailsData>[];
  currentTab: number;
  onButtonClick: (id: number) => void;
}

const QuoteCardList = ({
  pages,
  currentTab,
  onButtonClick,
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
    </ul>
  );
};

function MyQuoteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = Number(searchParams.get("tab") || "0");

  const { ref, inView } = useInView();

  const {
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isPending,
    isError,
    data,
  } = useGetManagedQuoteList({ tab: currentTab });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [isFetching, inView, hasNextPage, fetchNextPage]);

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
    <>
      <QuoteCardList
        pages={pages}
        currentTab={currentTab}
        onButtonClick={handleButtonClick}
      />
      <div ref={ref}>
        {isFetchingNextPage ? (
          <Loader msg="찜한 기사님 목록 불러오는중" />
        ) : hasNextPage ? (
          <Loader msg="새 목록 불러오는 중" />
        ) : (
          <Message msg="더 불러올 기사님이 없습니다." />
        )}
      </div>
    </>
  );
}

export default function MyQuotePage() {
  return (
    <Suspense fallback={<Loader msg="견적을 불러오는 중입니다." />}>
      <MyQuoteContent />
    </Suspense>
  );
}
