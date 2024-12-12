"use client";

import MoverInfoCard from "@/components/cards/MoverInfoCard";
import CheckboxChip from "@/components/common/checkboxs/CheckboxChip";
import { useParams } from "next/navigation";
import LineSeparator from "@/components/common/LineSeparator";
import { SERVICE_TEXTS } from "@/variables/service";
import { REGION_TEXTS } from "@/variables/regions";
import CustomerReview from "@/components/review/CustomerReview";
import RatingInfo from "@/components/RatingInfo";
import Pagination from "@/components/common/Pagination";
import cn from "@/config/cn";
import { useState } from "react";
import Image from "next/image";
import assets from "@/variables/images";
import QuoteButtonGroup from "@/components/common/QuoteButtonGroup";
// import QuoteRequestModal from "@/components/modals/QuoteRequestModal";

const data = {
  id: 1,
  imageUrl: "https://picsum.photos/200/300",
  nickname: "김일반",
  career: 5,
  ratings: {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    average: 3,
    totalSum: 15,
  },
  reviewCount: 15,
  confirmCount: 10,
  introduction: "안녕하세요 저는 김일반입니다.",
  description:
    "저는 김일반입니다. 저는 김일반입니다. 저는 김일반입니다. 저는 김일반입니다. 저는 김일반입니다. 저는 김일반입니다.",
  services: [0, 1, 2],
  regions: [
    82, 8202, 82031, 82032, 82033, 82041, 82042, 82043, 82044, 82051, 82052,
    82053, 82054, 82055, 82061, 82062, 82063, 82064,
  ],
  isDesignated: false,
  favoriteCount: 10,
  isFavorite: true,
  isConfirmed: false,
};

const reviewList = {
  currentPage: 1,
  totalPages: 7,
  totalCount: 10,
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
      images: [
        "https://picsum.photos/200/200",
        "https://picsum.photos/200/300",
      ],
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
        "https://picsum.photos/200/200",
        "https://picsum.photos/200/100",
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
      images: ["https://picsum.photos/200/400"],
      name: "이영자",
      rating: 5,
      content: "최고의 서비스였습니다.",
      createdAt: "2024-11-27T22:15:10.111Z",
    },
  ],
};

const styles = {
  topContainer:
    "mb-[110px] mt-[24px] tablet:mb-[72px] pc:flex pc:flex-row pc:gap-[90px] pc:justify-center pc:mt-[52px]",
  container: "flex flex-col gap-[24px] pc:gap-[40px] pc:max-w-[920px]",
  pcShareContainer:
    "hidden pc:whitespace-nowrap pc:flex pc:flex-col pc:gap-[40px]",
  shareContainer: "pc:hidden",
  shareText: "text-lg font-semibold text-black-400 pc:text-xl",
  contentContainer: "flex flex-col gap-[16px] pc:gap-[32px]",
  title: "text-lg font-bold text-black-400 pc:text-2xl",
  description: "text-md text-black-400 pc:text-2lg",
  serviceContainer:
    "w-[300px] flex flex-wrap gap-[8px] tablet:w-[450px] pc:gap-[16px]",
  baseH2: "text-lg font-bold text-black-400 pc:my-[32px] pc:text-2xl",
  emptyContainer:
    "flex flex-col items-center justify-center gap-[24px] p-[80px] mb-auto text-lg text-grayscale-400",
};

export default function MyQuoteDetailPage() {
  const { quoteId } = useParams();
  const [pageNum, setPageNum] = useState<number>(reviewList.currentPage);
  const [isDesignated, setIsDesignated] = useState<boolean>(data.isDesignated);
  const [isFavorite, setIsFavorite] = useState<boolean>(data.isFavorite);

  const handleFavorite = async () => {
    try {
      setIsFavorite(!isFavorite);
      // API 호출 로직
      // await favoriteAPI(moverId);
    } catch (error) {
      // 에러 처리
    }
  };

  const handleQuoteRequest = async () => {
    try {
      setIsDesignated(!isDesignated);
      // await requestQuote(moverId);
    } catch (error) {
      // 에러 처리
    }
  };

  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.container}>
          <MoverInfoCard data={data} />
          <LineSeparator direction="horizontal" />
          <div className={styles.shareContainer}>
            <p className={styles.shareText}>나만 알기엔 아쉬운 기사님인가요?</p>
          </div>
          <LineSeparator direction="horizontal" />
          <div className={styles.contentContainer}>
            <p className={styles.title}>상세설명</p>
            <p className={styles.description}>{data.description}</p>
          </div>
          <LineSeparator direction="horizontal" />
          <div className={styles.contentContainer}>
            <p className={styles.title}>제품 서비스</p>
            <div className={styles.serviceContainer}>
              {data.services.map((service) => (
                <CheckboxChip
                  key={service}
                  text={SERVICE_TEXTS[service as keyof typeof SERVICE_TEXTS]}
                  state={true}
                  disabled={true}
                />
              ))}
            </div>
          </div>
          <LineSeparator direction="horizontal" />
          <div className={styles.contentContainer}>
            <p className={styles.title}>서비스 가능 지역</p>
            <div className={styles.serviceContainer}>
              {data.regions.map((region) => (
                <CheckboxChip
                  key={region}
                  text={REGION_TEXTS[region as keyof typeof REGION_TEXTS]}
                  state={true}
                  disabled={true}
                />
              ))}
            </div>
          </div>
          <LineSeparator direction="horizontal" />
          <section>
            <h2 className={cn(styles.baseH2, "mb-[32px]")}>
              리뷰 ({data.reviewCount})
            </h2>
            {data.reviewCount > 0 ? (
              <>
                <article className="flex flex-col items-center">
                  <RatingInfo
                    ratings={{
                      "1": data.ratings["1"],
                      "2": data.ratings["2"],
                      "3": data.ratings["3"],
                      "4": data.ratings["4"],
                      "5": data.ratings["5"],
                      totalCount: data.reviewCount,
                      totalSum: data.ratings.totalSum,
                      average: data.ratings.average,
                    }}
                  />
                </article>

                <ul className="flex flex-col mt-[43px] mb-[20px] pc:mt-[40px] pc:w-[955px] pc:mb-[40px]">
                  {reviewList.list.map((review) => (
                    <CustomerReview data={review} key={review.id} />
                  ))}
                </ul>

                <Pagination
                  currentPage={pageNum}
                  onPageChange={setPageNum}
                  totalPages={reviewList.totalPages}
                />
              </>
            ) : (
              <div className={styles.emptyContainer}>
                <Image
                  src={assets.icons.empty}
                  alt="no-review"
                  width={110}
                  height={82}
                />
                <p>리뷰가 없습니다.</p>
              </div>
            )}
          </section>
        </div>

        <div className={styles.pcShareContainer}>
          <QuoteButtonGroup
            isPc={true}
            isFavorite={isFavorite}
            disabled={isDesignated}
            moverNickname={data.nickname}
            buttonText={
              isDesignated ? "지정 견적 요청 완료" : "지정 견적 요청하기"
            }
            onFavoriteClick={handleFavorite}
            onButtonClick={handleQuoteRequest}
          />
          <LineSeparator direction="horizontal" />
          <p className={styles.shareText}>나만 알기엔 아쉬운 기사님인가요?</p>
        </div>
      </div>
      <QuoteButtonGroup
        isFavorite={isFavorite}
        disabled={isDesignated}
        onFavoriteClick={handleFavorite}
        onButtonClick={handleQuoteRequest}
        buttonText={isDesignated ? "지정 견적 요청 완료" : "지정 견적 요청하기"}
      />
    </>
  );
}
