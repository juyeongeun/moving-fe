"use client";

import SentQuoteCard from "@/components/cards/SentQuoteCard";
import { useRouter, useSearchParams } from "next/navigation";
import RejectedRequestCard from "@/components/cards/RejectedRequestCard";

const defaultData = [
  {
    id: 100,
    requestDate: "2024-03-17T12:00:00.000Z",
    service: 0,
    isDesignated: true,
    name: "김일반",
    movingDate: "2024-11-30T12:00:00.000Z",
    pickupAddress: "서울특별시 강남구 역삼동 123-456",
    dropOffAddress: "서울특별시 서초구 서초동 789-012",
    isCompleted: false,
    isConfirmed: true,
    cost: 150000,
  },
  {
    id: 101,
    requestDate: "2024-03-17T12:00:00.000Z",
    service: 0,
    isDesignated: true,
    name: "김일반",
    movingDate: "2024-11-30T12:00:00.000Z",
    pickupAddress: "서울특별시 강남구 역삼동 123-456",
    dropOffAddress: "서울특별시 서초구 서초동 789-012",
    isCompleted: false,
    isConfirmed: false,
    cost: 150000,
  },
  {
    id: 102,
    requestDate: "2024-03-17T12:00:00.000Z",
    service: 0,
    isDesignated: true,
    name: "김일반",
    movingDate: "2024-11-30T12:00:00.000Z",
    pickupAddress: "서울특별시 강남구 역삼동 123-456",
    dropOffAddress: "서울특별시 서초구 서초동 789-012",
    isCompleted: true,
    isConfirmed: true,
    cost: 150000,
  },
  {
    id: 103,
    requestDate: "2024-03-17T12:00:00.000Z",
    service: 1,
    isDesignated: false,
    name: "김일반",
    movingDate: "2024-11-30T12:00:00.000Z",
    pickupAddress: "서울특별시 강남구 역삼동 123-456",
    dropOffAddress: "서울특별시 서초구 서초동 789-012",
    isCompleted: true,
    isConfirmed: false,
    cost: 150000,
  },
];

const rejectData = [
  {
    id: 201,
    requestDate: "2024-03-17T12:00:00.000Z",
    service: 0,
    isDesignated: true,
    name: "김반려",
    movingDate: "2024-11-30T12:00:00.000Z",
    pickupAddress: "서울특별시 강남구 역삼동 123-456",
    dropOffAddress: "서울특별시 서초구 서초동 789-012",
    isCompleted: false,
    isConfirmed: false,
    cost: 150000,
  },
  {
    id: 202,
    requestDate: "2024-03-17T12:00:00.000Z",
    service: 0,
    isDesignated: true,
    name: "김반려",
    movingDate: "2024-11-30T12:00:00.000Z",
    pickupAddress: "서울특별시 강남구 역삼동 123-456",
    dropOffAddress: "서울특별시 서초구 서초동 789-012",
    isCompleted: false,
    isConfirmed: false,
    cost: 150000,
  },
  {
    id: 203,
    requestDate: "2024-03-17T12:00:00.000Z",
    service: 0,
    isDesignated: true,
    name: "김반려",
    movingDate: "2024-11-30T12:00:00.000Z",
    pickupAddress: "서울특별시 강남구 역삼동 123-456",
    dropOffAddress: "서울특별시 서초구 서초동 789-012",
    isCompleted: false,
    isConfirmed: false,
    cost: 150000,
  },
];

export default function MyQuotePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = Number(searchParams.get("tab") || "0");

  const handleButtonClick = (data: (typeof defaultData)[0]) => {
    router.push(`/mover/my-quote/${data.id}`);
  };

  const displayData = currentTab === 0 ? defaultData : rejectData;

  const styles = {
    container: `max-w-[1400px] mx-auto bg-bg-100 grid grid-cols-1 gap-[24px] mt-[24px] pc:grid-cols-2  tablet:gap-[32px] tablet:mt-[32px] pc:gap-x-[24px] pc:gap-y-[48px] pc:mt-[40px]`,
  };

  return (
    <>
      <ul className={styles.container}>
        {displayData.map((data) =>
          currentTab === 0 ? (
            <SentQuoteCard
              data={data}
              onButtonClick={() => handleButtonClick(data)}
              key={data.id}
              classNameQuoteDetails={"pc:flex-col pc:gap-2 pc:items-start"}
            />
          ) : (
            <RejectedRequestCard
              data={data}
              key={data.id}
              classNameQuoteDetails={"pc:flex-col pc:gap-2 pc:items-start"}
            />
          )
        )}
      </ul>
    </>
  );
}
