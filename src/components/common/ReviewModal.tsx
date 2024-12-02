"use client";

import Textarea from "./Textarea";
import ReviewMover from "./card/ReviewMover";
import assets from "@/variables/images";
import Image from "next/image";
import Button from "./Button";
import StarRating from "./StartRating";
import ServiceChip from "./card/ServiceChip";
import { useState } from "react";

interface ReviewModalProps {
  onClose: () => void;
  onSubmit: () => void;
  serviceType: number;
  isDesignatedQuote: boolean;
}

export default function ReviewModal({
  onClose,
  onSubmit,
  serviceType,
  isDesignatedQuote = true,
}: ReviewModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  const isValid = rating > 0 && review.length >= 10;

  const styles = {
    container: `flex flex-col bg-white rounded-t-[32px] px-[24px] pt-[32px] pb-[40px]
    pc:w-[608px] pc:h-[854px] pc:rounded-[32px]`,
    titleContainer: `text-2lg font-bold text-black-400 flex justify-between mb-[26px]
    pc:text-2xl pc:font-semibold mb-[40px]`,
    closeIcon: `cursor-pointer w-[24px] h-[24px] pc:w-[32px] pc:h-[32px]`,
    chipsContainer: `flex flex-wrap gap-[8px] mb-[14px] pc:mb-[24px]`,
    ratingContainer: `flex flex-wrap gap-[8px] mb-[20px] pb-[20px] border-b-[1px] border-solid border-line-200
    pc:mb-[32px] pc:pb-[32px]`,
    ratingTitle: `text-lg font-semibold text-black-300 mb-[16px]
    pc:text-xl`,
    reviewContainer: `mb-[26px] pc:mb-[40px]`,
    reviewTitle: `text-lg font-semibold text-black-300 mb-[16px]
    pc:text-xl`,
  };

  const service: "smallMove" | "homeMove" | "officeMove" =
    serviceType === 2
      ? "homeMove"
      : serviceType === 3
      ? "officeMove"
      : "smallMove";

  const handleRatingChange = (rating: number) => {
    setRating(rating);
  };

  const handleReviewChange = (value: string) => {
    setReview(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p>리뷰 쓰기</p>
        <Image
          src={assets.icons.x}
          alt="close"
          width={24}
          height={24}
          className={styles.closeIcon}
          onClick={onClose}
        />
      </div>
      <div className={styles.chipsContainer}>
        <ServiceChip variant={service} />
        {isDesignatedQuote && <ServiceChip variant="designatedQuote" />}
      </div>
      <ReviewMover
        moverName="김코드"
        moverImageUrl={null}
        moveDate="2024. 01. 01"
        cost={100000}
      />
      <p className={styles.ratingTitle}>평점을 선택해 주세요</p>
      <div className={styles.ratingContainer}>
        <StarRating onRatingChange={handleRatingChange} />
      </div>
      <div className={styles.reviewContainer}>
        <p className={styles.reviewTitle}>상세 후기를 작성해 주세요</p>
        <Textarea
          placeholder="최소 10자 이상 입력해주세요"
          value={review}
          onChange={handleReviewChange}
        />
      </div>
      <Button
        children="리뷰 작성하기"
        variant="primary"
        onClick={onSubmit}
        disabled={!isValid}
      />
    </div>
  );
}
