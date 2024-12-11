"use client";

import CreateReviewCard from "@/components/cards/CreateReviewCard";
import MyReviewCard, {
  MyReviewCardData,
} from "@/components/cards/MyReviewCard";
import Pagination from "@/components/common/Pagination";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import EmptyReview from "./EmptyReview";

const reviewToWriteList = {
  currentPage: 1,
  pageSize: 6,
  totalPages: 5,
  totalCounts: 26,
  list: [
    {
      id: 21,
      service: 2,
      isDesignated: false,
      imageUrl: null,
      nickname: "김코드",
      movingDate: "2024-11-27T10:00:00.000Z",
      cost: 210000,
    },
    {
      id: 22,
      service: 1,
      isDesignated: true,
      imageUrl: null,
      nickname: "박프론트",
      movingDate: "2024-12-01T09:30:00.000Z",
      cost: 180000,
    },
    {
      id: 23,
      service: 1,
      isDesignated: false,
      imageUrl: null,
      nickname: "이자바",
      movingDate: "2024-12-03T14:00:00.000Z",
      cost: 250000,
    },
    {
      id: 24,
      service: 2,
      isDesignated: false,
      imageUrl: null,
      nickname: "최백엔드",
      movingDate: "2024-12-05T08:00:00.000Z",
      cost: 230000,
    },
    {
      id: 25,
      service: 1,
      isDesignated: true,
      imageUrl: null,
      nickname: "정API",
      movingDate: "2024-12-07T11:00:00.000Z",
      cost: 200000,
    },
    {
      id: 26,
      service: 2,
      isDesignated: false,
      imageUrl: null,
      nickname: "오UX",
      movingDate: "2024-12-10T16:30:00.000Z",
      cost: 220000,
    },
  ],
};

const myReviewList = {
  currentPage: 1,
  pageSize: 6,
  totalPages: 5,
  totalCount: 26,
  list: [
    {
      id: 21,
      service: 2,
      isDesignated: false,
      imageUrl: null,
      nickname: "김코드",
      movingDate: "2024-11-27T10:00:00.000Z",
      cost: 210000,
      rating: 4,
      content: "조금 늦었지만 이사 잘 마무리했습니다.",
      createdAt: "2024-11-28T11:20:30.000Z",
    },
    {
      id: 22,
      service: 1,
      isDesignated: true,
      imageUrl: null,
      nickname: "박프론트",
      movingDate: "2024-12-01T09:30:00.000Z",
      cost: 180000,
      rating: 5,
      content: "친절하고 꼼꼼한 이사 서비스였어요.",
      createdAt: "2024-12-02T10:45:20.000Z",
    },
    {
      id: 23,
      service: 1,
      isDesignated: false,
      imageUrl: null,
      nickname: "이자바",
      movingDate: "2024-12-03T14:00:00.000Z",
      cost: 250000,
      rating: 3,
      content: "가격 대비 보통 수준의 서비스였습니다.",
      createdAt: "2024-12-04T08:15:10.000Z",
    },
    {
      id: 24,
      service: 2,
      isDesignated: false,
      imageUrl: null,
      nickname: "최백엔드",
      movingDate: "2024-12-05T08:00:00.000Z",
      cost: 230000,
      rating: 5,
      content: "시간 약속을 잘 지키셨고, 이사도 깔끔하게 끝났습니다!",
      createdAt: "2024-12-06T12:00:00.000Z",
    },
    {
      id: 25,
      service: 1,
      isDesignated: true,
      imageUrl: null,
      nickname: "정API",
      movingDate: "2024-12-07T11:00:00.000Z",
      cost: 200000,
      rating: 4,
      content: "처음엔 실수가 있었지만, 바로 수정해주셨습니다.",
      createdAt: "2024-12-08T09:30:45.000Z",
    },
    {
      id: 26,
      service: 2,
      isDesignated: false,
      imageUrl: null,
      nickname: "오UX",
      movingDate: "2024-12-10T16:30:00.000Z",
      cost: 220000,
      rating: 5,
      content: "이번 이사팀 최고였습니다! 추천합니다.",
      createdAt: "2024-12-11T10:10:00.000Z",
    },
  ],
};

const emptyReviewList = {
  currentPage: 1,
  pageSize: 6,
  totalPages: 5,
  totalCounts: 26,
  list: [],
};

const emptyMyList = {
  currentPage: 1,
  pageSize: 6,
  totalPages: 5,
  totalCounts: 26,
  list: [],
};

export default function MyReviewPage() {
  const [pageNum, setPageNum] = useState(1);
  const searchParams = useSearchParams();
  const currentTab = Number(searchParams.get("tab") || "0");

  const handleWriteReview = (reviewId: number) => {
    console.log(`Writing review for ID: ${reviewId}`);
  };

  const displayData = currentTab === 0 ? reviewToWriteList : myReviewList;
  // const displayData = currentTab === 0 ? emptyReviewList : emptyMyList;

  if (displayData.list.length === 0) {
    return <EmptyReview tab={currentTab} />;
  }

  return (
    <>
      <ul className="max-w-[1400px] mx-auto my-[16px] pc:my-[24px] bg-bg-100 grid grid-cols-1 gap-[24px] tablet:gap-[32px] pc:grid-cols-2 pc:gap-x-[24px] pc:gap-y-[48px]">
        {displayData.list.map((item) =>
          currentTab === 0 ? (
            <CreateReviewCard
              data={item}
              key={item.id}
              onPrimaryClick={() => handleWriteReview(item.id)}
            />
          ) : (
            <MyReviewCard data={item as MyReviewCardData} key={item.id} />
          )
        )}
      </ul>
      <Pagination
        currentPage={pageNum}
        totalPages={displayData.totalPages}
        onPageChange={setPageNum}
      />
    </>
  );
}
