"use client";

import Button from "./Button";
import { useState } from "react";
import Image from "next/image";
import assets from "@/variables/images";

interface FilterModalProps {
  count?: number[];
}

export default function FilterModal({ count }: FilterModalProps) {
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [type, setType] = useState<string>("이사 유형");

  const handleClickType = (type: string) => {
    setType(type);
  };

  const styles = {
    container: `flex flex-col gap-[16px] px-[24px] py-[16px] bg-white
    mobile:w-[100%]
    tablet:w-[375px] rounded-[32px]`,
    active: "text-pr-black-400",
    inactive: "text-grayscale-300",
    typeContainer: "flex flex-col gap-[16px]",
    type: "flex gap-[16px]",
  };

  const moveTypes = () => {
    if (type === "이사 유형") {
      return [
        { id: 1, name: "전체선택", count: count?.[0] },
        { id: 2, name: "소형이사", count: count?.[1] },
        { id: 3, name: "가정이사", count: count?.[2] },
        { id: 4, name: "사무실이사", count: count?.[3] },
      ];
    } else {
      return [
        { id: 1, name: "전체선택", count: count?.[0] },
        { id: 2, name: "서비스 가능 지역", count: count?.[1] },
        { id: 3, name: "지정 견적 요청", count: count?.[2] },
      ];
    }
  };

  const handleClick = () => {
    console.log("조회하기");
  };

  return (
    <div className={styles.container}>
      <div className={styles.typeContainer}>
        <div className={styles.type}>
          <p
            onClick={() => handleClickType("이사 유형")}
            className={styles[type === "이사 유형" ? "active" : "inactive"]}
          >
            이사 유형
          </p>
          <p
            onClick={() => handleClickType("필터")}
            className={styles[type === "필터" ? "active" : "inactive"]}
          >
            필터
          </p>
          <Image src={assets.icons.x} alt="close" width={24} height={24} />
        </div>

        <div>
          {moveTypes().map((moveType) => (
            <label key={moveType.id}>
              <input onChange={(e) => setSelectedAddress(e.target.value)} />
              <div>
                {moveType.name} ({moveType.count})
              </div>
            </label>
          ))}
        </div>

        <Button
          width="100%"
          onClick={handleClick}
          children="조회하기"
          variant="primary"
          disabled={!selectedAddress}
          className="mobile:mt-[24px]"
        />
      </div>
    </div>
  );
}
