"use client";

import Textarea from "../common/Textarea";
import ReviewMover from "../common/card/ReviewMover";
import assets from "@/variables/images";
import Image from "next/image";
import Button from "../common/Button";
import StarRating from "../common/StartRating";
import ServiceChip from "../common/card/ServiceChip";
import LineSeparator from "../common/LineSeparator";
import { useState } from "react";
import toast from "react-hot-toast";

interface ReviewModalProps {
  onClose: () => void;
  onSubmit: () => void;
  serviceType: number;
  isDesignatedQuote: boolean;
  moverName: string;
  moverImageUrl: string | null;
  moveDate: string;
  cost: number;
}

export default function ReviewModal({
  onClose,
  onSubmit,
  serviceType,
  isDesignatedQuote = true,
  moverName,
  moverImageUrl,
  moveDate,
  cost,
}: ReviewModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const isValid = rating > 0 && review.length >= 10;

  const styles = {
    container: `flex flex-col bg-white rounded-t-[32px] pt-[32px] pb-[40px]
    pc:w-[608px] pc:rounded-[32px]`,
    titleContainer: `text-2lg font-bold text-black-400 flex justify-between items-center mb-[26px]
    pc:text-2xl pc:font-semibold pc:mb-[40px]`,
    closeIcon: `cursor-pointer pc:w-[32px] pc:h-[32px]`,
    chipsContainer: `flex flex-wrap gap-[8px] mb-[14px] pc:mb-[24px]`,
    ratingContainer: `flex flex-wrap gap-[8px] pb-[20px]
    pc:mb-[32px] pc:pb-[32px]`,
    title: `text-lg font-semibold text-black-300 mb-[16px]
    pc:text-xl`,
    reviewContainer: `mb-[26px] pc:mb-[40px]`,
    imageContainer: "relative w-[100px] h-[100px]",
    reviewImage: "rounded-[8px] object-cover w-full h-full",
    removeButton:
      "absolute top-[4px] right-[4px] bg-black-400 rounded-full p-[4px] cursor-pointer",
    addImageButton:
      "w-[100px] h-[100px] border-[1px] border-gray-200 rounded-[8px] flex items-center justify-center border-[1px] border-gray-200 border-solid cursor-pointer",
    imagesWrapper: "flex gap-[16px] mb-[20px]",
    lineSeparator: "mb-[20px]",
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 3) {
      toast.error("이미지는 최대 3장까지 업로드할 수 있습니다.");
      return;
    }

    const newFiles = files.slice(0, 3 - images.length);
    setImages((prev) => [...prev, ...newFiles]);

    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
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
        moverName={moverName}
        moverImageUrl={moverImageUrl}
        moveDate={moveDate}
        cost={cost}
      />
      <p className={styles.title}>평점을 선택해 주세요</p>
      <div className={styles.ratingContainer}>
        <StarRating onRatingChange={handleRatingChange} />
      </div>
      <LineSeparator direction="horizontal" className={styles.lineSeparator} />
      <p className={styles.title}>리뷰 이미지 첨부</p>
      <div className={styles.imagesWrapper}>
        {previews.map((preview, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={preview}
              alt={`review-image-${index}`}
              width={100}
              height={100}
              className={styles.reviewImage}
            />
            <button
              className={styles.removeButton}
              onClick={() => handleRemoveImage(index)}
            >
              <Image src={assets.icons.x} alt="remove" width={16} height={16} />
            </button>
          </div>
        ))}
        {images.length < 3 && (
          <label className={styles.addImageButton}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Image
              src={assets.icons.search}
              alt="add-image"
              width={24}
              height={24}
            />
          </label>
        )}
      </div>
      <LineSeparator direction="horizontal" className={styles.lineSeparator} />
      <div className={styles.reviewContainer}>
        <p className={styles.title}>상세 후기를 작성해 주세요</p>
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
