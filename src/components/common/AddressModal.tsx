"use client";

import Image from "next/image";
import AddressField from "./AddressField";
import SearchInput from "./SearchInput";
import Button from "./Button";
import assets from "@/variables/images";
import { useState } from "react";
interface AddressInputProps {
  text: string;
  className?: string;
  onClose?: () => void;
}

/**
 *
 * 모달 열고 닫기 예시
 * {isModalOpen && (
 *  <AddressInput
 *    onClose={() => setIsModalOpen(!isModalOpen)}
 *  />
 * )}
 */

export default function AddressInput({
  text,
  className,
  onClose,
}: AddressInputProps) {
  const handleClick = () => console.log("주소 선택 완료");
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const handleAddressSelect = (zipCode: string) => {
    setSelectedAddress(zipCode === selectedAddress ? null : zipCode);
  };

  const styles = {
    overlay: `fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`,
    container: `px-[16px] py-[24px] bg-white rounded-[32px] w-[292px] relative
    pc:w-[608px]`,
    inputWrapper: `flex items-center justify-between mb-[30px]
    pc:mb-[40px]
    `,
    font: `
    text-2lg font-bold
    pc:text-2xl pc:font-semibold
    `,
    clearIcon: `cursor-pointer w-[24px] h-[24px]
    pc:w-[36px] pc:h-[36px]`,
  };
  return (
    <div className={styles.overlay}>
      <div className={`${styles.container} ${className}`}>
        <div className={styles.inputWrapper}>
          <p className={styles.font}>{text}</p>
          <Image
            src={assets.icons.x}
            width={24}
            height={24}
            alt="close"
            className={styles.clearIcon}
            onClick={onClose}
          />
        </div>
        <SearchInput name="address" placeholder="텍스트를 입력해주세요." />
        <AddressField
          onClick={() => handleAddressSelect("12345")}
          zipCode="12345"
          roadAddress="서울특별시 강남구 테헤란로 14길 6 남도빌딩"
          streetAddress="서울특별시 강남구 테헤란로 14길 6 남도빌딩"
          selected={selectedAddress === "12345"}
          className="mt-[16px] pc:mt-[24px]"
        />
        <Button
          onClick={handleClick}
          children="선택완료"
          disabled={!selectedAddress}
          variant="primary"
          width="100%"
          className="mt-[24px] h-[54px] pc:mt-[40px] pc:h-[64px]"
        />
      </div>
    </div>
  );
}
