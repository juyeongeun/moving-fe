import QuoteDetail from "./QuoteDetail";

import { getQuote } from "@/api/quote";
import { GetQuoteApiResponseData } from "@/types/api";
import { Metadata } from "next";

async function fetchQuoteData(
  quoteId: number
): Promise<GetQuoteApiResponseData> {
  return getQuote(quoteId);
}

interface PageProps {
  params: { quoteId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function MyQuotesDetailPage({ params }: PageProps) {
  const { quoteId } = params;

  const data = await fetchQuoteData(Number(quoteId));

  const styles = {
    constainer: `flex flex-col items-center w-full`,
    topBar: `flex flex-row gap-2.5 items-center justify-center w-[328px] h-[54px] 
      tablet:w-[600px] 
      pc:w-[1400px] pc:h-[96px]`,
    barItem: `flex flex-row items-center w-[328px] h-full 
      text-2lg text-[#2b2b2b] font-semibold 
      tablet:w-[600px] 
      pc:w-[1400px] pc:text-2xl`,
  };

  return (
    <div className={styles.constainer}>
      <div className={styles.topBar}>
        <div className={styles.barItem}>견적 상세</div>
      </div>
      <QuoteDetail data={data} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "견적 상세",
};
