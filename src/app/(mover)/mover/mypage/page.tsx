"use client";

import Pagination from "@/components/common/Pagination";
import MoverProfileCard from "@/components/cards/MoverProfileCard";
import RatingInfo from "@/components/RatingInfo";
import LineSeparator from "@/components/common/LineSeparator";
import cn from "@/config/cn";
import CustomerReview from "@/components/review/CustomerReview";
import { useState } from "react";
import { useRouter } from "next/navigation";

const mockData = {
  id: 1,
  name: "김다나",
  imageUrl: null,
  ratings: {
    "1": 1,
    "2": 4,
    "3": 1,
    "4": 3,
    "5": 2,
    average: 4.3,
    totalSum: 13,
  },
  nickname: "김코드",
  career: 2,
  introduction: "성실 정확 한 줄 평가성실 정확 한 줄 평가성실 정확 한 줄 평가",
  services: [0, 1],
  regions: [82031, 8202],
  reviewCount: 11,
  confirmCount: 13,
};

const reviewList = {
  currentPage: 1,
  totalPages: 18,
  totalCount: 50,
  list: [
    {
      id: 1,
      images: null,
      name: "김다나",
      rating: 5,
      content: "좋아요",
      createdAt: "2024-11-27T12:45:30.123Z",
    },
    {
      id: 2,
      images: [],
      name: "이수민",
      rating: 4,
      content: "친절하고 안전하게 옮겨주셨습니다.",
      createdAt: "2024-11-27T14:02:10.456Z",
    },
    {
      id: 3,
      images: null,
      name: "박지원",
      rating: 5,
      content: "시간 약속을 잘 지키고 꼼꼼했습니다.",
      createdAt: "2024-11-27T15:21:50.789Z",
    },
    {
      id: 4,
      images: [],
      name: "최민호",
      rating: 3,
      content: "전체적으로 좋았지만 조금 늦었습니다.",
      createdAt: "2024-11-27T16:10:05.987Z",
    },
    {
      id: 5,
      images: ["https://www.codeit.com/rv5_image1.svg"],
      name: "홍길동",
      rating: 5,
      content: "완벽한 서비스였습니다!",
      createdAt: "2024-11-27T17:40:20.123Z",
    },
    {
      id: 6,
      images: [],
      name: "유재석",
      rating: 4,
      content: "가격대비 훌륭한 서비스였어요.",
      createdAt: "2024-11-27T18:22:55.456Z",
    },
    {
      id: 7,
      images: [
        "https://www.codeit.com/rv7_image1.svg",
        "https://www.codeit.com/rv7_image2.svg",
      ],
      name: "강호동",
      rating: 5,
      content: "무거운 짐도 문제없이 옮겨주셨습니다.",
      createdAt: "2024-11-27T19:10:40.789Z",
    },
    {
      id: 8,
      images: null,
      name: "신동엽",
      rating: 4,
      content: "연락이 신속하고 응대가 좋았습니다.",
      createdAt: "2024-11-27T20:35:30.222Z",
    },
    {
      id: 9,
      images: [],
      name: "정우성",
      rating: 5,
      content: "다음에도 이용하고 싶어요.",
      createdAt: "2024-11-27T21:55:45.999Z",
    },
    {
      id: 10,
      images: ["https://www.codeit.com/rv10_image1.svg"],
      name: "이영자",
      rating: 5,
      content: "최고의 서비스였습니다.",
      createdAt: "2024-11-27T22:15:10.111Z",
    },
  ],
};

export default function MyPage() {
  const styles = {
    baseH2: "text-lg font-bold text-black-400 pc:text-2xl",
  };

  const [pageNum, setPageNum] = useState<number>(1);
  //여기에 tanstack-query로 Fetch
  const { list } = reviewList;
  const { totalPages } = reviewList;
  const router = useRouter();

  return (
    <>
      <section>
        <h2 className={cn(styles.baseH2, "mb-[15px]")}>마이페이지</h2>

        <LineSeparator
          direction="horizontal"
          className="mb-[24px] pc:bg-transparent"
        />

        <MoverProfileCard
          data={mockData}
          onPrimaryClick={() => router.push("/mover/profile-edit")}
          onOutlinedClick={() => router.push("/mover/info-edit")}
        />
      </section>
      <LineSeparator
        direction="horizontal"
        className="my-[24px] pc:my-[48px]"
      />
      <section>
        <h2 className={cn(styles.baseH2, "mb-[32px]")}>
          리뷰 ({mockData.reviewCount})
        </h2>
        <article className="flex flex-col items-center">
          <RatingInfo
            ratings={{
              "1": mockData.ratings["1"],
              "2": mockData.ratings["2"],
              "3": mockData.ratings["3"],
              "4": mockData.ratings["4"],
              "5": mockData.ratings["5"],
              totalCount: mockData.reviewCount,
              totalSum: mockData.ratings.totalSum,
              average: mockData.ratings.average,
            }}
          />
        </article>

        <ul className="flex flex-col mt-[43px] mb-[20px] pc:mt-[40px] pc:w-[955px] pc:mb-[40px]">
          {list.map((review) => (
            <CustomerReview data={review} key={review.id} />
          ))}
        </ul>

        <Pagination
          currentPage={pageNum}
          onPageChange={setPageNum}
          totalPages={totalPages}
        />
      </section>
    </>
  );
}
