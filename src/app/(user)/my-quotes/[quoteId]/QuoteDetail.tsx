"use client";

import { useState } from "react";

import MoverInfoCard from "@/components/cards/MoverInfoCard";
import LineSeparator from "@/components/common/LineSeparator";
import QuoteDetailInfo from "@/components/Quote/QuoteDetailInfo";
import QuoteButtonGroup from "@/components/common/QuoteButtonGroup";

import cn from "@/config/cn";

import { GetQuoteApiResponseData } from "@/types/api";

function ShareBox() {
  return (
    <div className="flex flex-col justify-between w-[152px] h-[80px] tablet:h-[82px] pc:w-[224px] pc:h-[118px]">
      <div className="text-black-400 font-semibold text-lg pc:text-xl">
        견적서 공유하기
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-neutral-500"></div>
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-amber-400"></div>
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-sky-600"></div>
      </div>
    </div>
  );
}

interface QuoteDetailProps {
  data: GetQuoteApiResponseData;
}

export default function QuoteDetail({ data }: QuoteDetailProps) {
  const [isDesignated, setIsDesignated] = useState<boolean>(
    data.mover.isDesignated
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(data.mover.isFavorite);
  const [favoriteCount, setFavoriteCount] = useState<number>(
    data.mover.favoriteCount
  );

  const cardData = {
    id: data.id,
    imageUrl: data.mover.imageUrl,
    nickname: data.mover.nickname,
    career: data.mover.career,
    ratings: {
      "1": data.mover.rating["1"],
      "2": data.mover.rating["2"],
      "3": data.mover.rating["3"],
      "4": data.mover.rating["4"],
      "5": data.mover.rating["5"],
      average: data.mover.rating.average,
    },
    reviewCount: data.mover.reviewCount,
    confirmCount: data.mover.confirmCount,
    favoriteCount: favoriteCount,
    isFavorite: isFavorite,
    isDesignated: isDesignated,
    isConfirmed: data.isConfirmed,
    services: data.mover.services,
    regions: data.mover.regions,
    introduction: data.mover.introduction || "한 줄 소개",
  };

  const quoteInfoData = {
    requestDate: data.movingRequest.createdAt,
    service: data.movingRequest.service,
    movingDate: data.movingRequest.movingDate,
    pickupAddress: data.movingRequest.pickupAddress,
    dropOffAddress: data.movingRequest.dropOffAddress,
  };

  const handleFavoriteButtonClick = () => {
    console.log("찜하기 버튼 클릭 - 찜하기 API 호출");

    if (isFavorite) {
      setFavoriteCount((prev) => --prev);
    } else {
      setFavoriteCount((prev) => ++prev);
    }

    setIsFavorite((prev) => !prev);
  };

  const handleConfirmQuoteButtonClick = () => {
    console.log("견적 확정 버튼 클릭 - 견적 확정 API 호출");

    if (!isDesignated) {
      setIsDesignated(true);
    }
  };

  return (
    <>
      <div className="box-border flex flex-row justify-center gap-[117px] mt-4 tablet:mt-6 pc:mt-6">
        <div className="box-border flex flex-col gap-[23.5px] w-[328px] tablet:w-[600px] pc:gap-[39.5px] pc:w-[955px]">
          <MoverInfoCard data={cardData} size="responsive" />
          <LineSeparator direction="horizontal" />
          <div className="flex flex-col justify-between w-full h-[74px] tablet:h-[94px] pc:h-[110px]">
            <div className="text-black-400 font-semibold text-lg pc:text-2xl">
              견적가
            </div>
            <div className="text-black-400 font-bold text-xl pc:text-3xl">
              {Intl.NumberFormat("en-US").format(data.cost)}원
            </div>
          </div>
          <LineSeparator direction="horizontal" />
          <div className="pc:hidden">
            <ShareBox />
          </div>
          <LineSeparator direction="horizontal" className="pc:hidden" />
          <div className="flex flex-col justify-between w-full h-[242px] tablet:h-[258px] pc:h-[330px] tablet:text-lg pc:text-2xl ">
            <div className="text-black-400 font-semibold">견적 정보</div>
            <QuoteDetailInfo data={quoteInfoData} />
          </div>
        </div>
        <div className="box-border gap-6 w-[328px] hidden tablet:hidden pc:flex pc:flex-col">
          <QuoteButtonGroup
            isFavorite={isFavorite}
            disabled={isDesignated}
            isPc={true}
            onFavoriteClick={handleFavoriteButtonClick}
            onButtonClick={handleConfirmQuoteButtonClick}
            buttonText={
              isDesignated ? "지정 견적 요청 완료" : "지정 견적 요청하기"
            }
            showLabel={false}
          />
          <ShareBox />
        </div>
      </div>
      <QuoteButtonGroup
        isFavorite={isFavorite}
        disabled={isDesignated}
        isPc={false}
        onFavoriteClick={handleFavoriteButtonClick}
        onButtonClick={handleConfirmQuoteButtonClick}
        buttonText={isDesignated ? "지정 견적 요청 완료" : "지정 견적 요청하기"}
        showLabel={false}
      />
    </>
  );
}
