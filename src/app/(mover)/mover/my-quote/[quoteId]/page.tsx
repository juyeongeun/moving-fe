"use client";

import ConfirmedQuoteCard from "@/components/cards/ConfirmedQuoteCard";
import { useParams } from "next/navigation";
import LineSeparator from "@/components/common/LineSeparator";
import { formatCost } from "@/utils/formatCost";
import QuoteDetailInfo from "@/components/Quote/QuoteDetailInfo";

const data = {
  id: 103,
  requestDate: "2024-03-17T12:00:00.000Z",
  service: 1,
  isDesignated: true,
  name: "김일반",
  movingDate: "2024-11-30T12:00:00.000Z",
  pickupAddress: "서울특별시 강남구 역삼동 123-456",
  dropOffAddress: "서울특별시 서초구 서초동 789-012",
  isCompleted: true,
  isConfirmed: true,
  cost: 150000,
};

const styles = {
  topContainer:
    "mb-[110px] tablet:mb-[72px] pc:flex pc:flex-row pc:gap-[117px] pc:justify-center",
  title:
    "text-2lg font-semibold text-black-400 py-[30px] pc:text-2xl pc:pl-[132px]",
  container: "flex flex-col gap-[24px]",
  pcShareContainer: "hidden pc:block",
  shareContainer: "pc:hidden",
  shareText: "text-lg font-semibold text-black-400 pc:text-xl",
  costContainer: "flex flex-col gap-[16px] pc:gap-[32px]",
  costText: "text-lg font-semibold text-black-400 pc:text-xl",
  costValue: "text-xl font-bold text-black-400 pc:text-3xl",
  detailContainer: "flex flex-col gap-[24px] pc:gap-[40px]",
  detailTitle: "text-lg font-semibold text-black-400 pc:text-2xl",
};

export default function MyQuoteDetailPage() {
  const { quoteId } = useParams();
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto">
          <p className={styles.title}>견적 상세</p>
        </div>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.container}>
          <ConfirmedQuoteCard data={data} />
          <div className={styles.shareContainer}>
            <p className={styles.shareText}>견적서 공유하기</p>
          </div>
          <LineSeparator direction="horizontal" />
          <div className={styles.costContainer}>
            <p className={styles.costText}>견적가</p>
            <p className={styles.costValue}>{formatCost(data.cost)}원</p>
          </div>
          <LineSeparator direction="horizontal" />
          <div className={styles.detailContainer}>
            <p className={styles.detailTitle}>견적 정보</p>
            <QuoteDetailInfo
              data={{
                requestDate: data.requestDate,
                service: data.service,
                movingDate: data.movingDate,
                pickupAddress: data.pickupAddress,
                dropOffAddress: data.dropOffAddress,
              }}
            />
          </div>
        </div>
        <div className={styles.pcShareContainer}>
          <p className={styles.shareText}>견적서 공유하기</p>
        </div>
      </div>
    </>
  );
}
