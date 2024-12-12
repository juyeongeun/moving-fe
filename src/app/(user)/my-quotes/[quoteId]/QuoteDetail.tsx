"use client";

import Image from "next/image";
import { useState } from "react";

import MoverInfoCard from "@/components/cards/MoverInfoCard";
import LineSeparator from "@/components/common/LineSeparator";
import QuoteDetailInfo from "@/components/Quote/QuoteDetailInfo";
import QuoteButtonGroup from "@/components/common/QuoteButtonGroup";

import cn from "@/config/cn";

import { GetQuoteApiResponseData } from "@/types/api";
import assets from "@/variables/images";

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
  const [isCompeleted, setIsCompeleted] = useState<boolean>(
    data.movingRequest.isCompleted
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
    isDesignated: data.mover.isDesignated,
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

  const styles = {
    quoteInfo: `flex flex-col justify-between w-full h-[242px] text-lg 
      tablet:h-[258px]  
      pc:h-[330px] pc:text-2xl`,
    warning: `box-border flex flex-row items-center p-6 gap-4 
      w-full h-[48px] 
      bg-pr-blue-100 border-solid border-[1px] border-pr-blue-200 rounded-[12px] 
      shadow-[inset_-2px_-2px_10px_rgba(46,46,46,0.04),_2px_2px_10px_rgba(46,46,46,0.04)] 
      text-sm font-semibold text-pr-blue-300
      pc:h-[74px] 
      pc:text-lg`,
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

    if (!isCompeleted) {
      setIsCompeleted(true);
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
          <div className={styles.quoteInfo}>
            <div className="text-black-400 font-semibold">견적 정보</div>
            <QuoteDetailInfo data={quoteInfoData} />
          </div>
          {data.movingRequest.isEstimateConfirmed ||
          isCompeleted ? undefined : (
            <div className={styles.warning}>
              <div className="relative w-4 h-4 pc:w-6 pc:h-6">
                <Image src={assets.icons.info} alt="경고" fill />
              </div>
              확정하지 않은 견적이에요!
            </div>
          )}
        </div>
        <div className="box-border gap-6 w-[328px] hidden tablet:hidden pc:flex pc:flex-col">
          <QuoteButtonGroup
            isFavorite={isFavorite}
            disabled={isCompeleted}
            isPc={true}
            onFavoriteClick={handleFavoriteButtonClick}
            onButtonClick={handleConfirmQuoteButtonClick}
            buttonText={isCompeleted ? "견적 확정 완료" : "견적 확정하기"}
            showLabel={false}
          />
          <ShareBox />
        </div>
      </div>
      <QuoteButtonGroup
        isFavorite={isFavorite}
        disabled={isCompeleted}
        isPc={false}
        onFavoriteClick={handleFavoriteButtonClick}
        onButtonClick={handleConfirmQuoteButtonClick}
        buttonText={isCompeleted ? "견적 확정 완료" : "견적 확정하기"}
        showLabel={false}
      />
    </>
  );
}
