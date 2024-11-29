"use client";

import Button from "./Button";
import { useState } from "react";
import Image from "next/image";
import assets from "@/variables/images";

interface FilterModalProps {
  moveCount?: number[];
  filterCount?: number[];
}

export default function FilterModal({
  moveCount,
  filterCount,
}: FilterModalProps) {
  const [selectedAddress, setSelectedAddress] = useState<number[]>([]);
  const [type, setType] = useState<string>("이사 유형");

  const handleClickType = (type: string) => {
    setType(type);
  };

  const handleClickMoveType = (id: number) => {
    if (id === 1) {
      if (selectedAddress.includes(1)) {
        setSelectedAddress([]);
      } else {
        const allIds = moveTypes().map((type) => type.id);
        setSelectedAddress(allIds);
      }
    } else {
      if (selectedAddress.includes(id)) {
        const newSelected = selectedAddress.filter((item) => item !== id);
        newSelected.filter((item) => item !== 1);
        setSelectedAddress(newSelected);
      } else {
        const newSelected = [...selectedAddress, id];
        const allItemsSelected = moveTypes()
          .slice(1)
          .every((type) => newSelected.includes(type.id));

        if (allItemsSelected) {
          setSelectedAddress([...newSelected, 1]);
        } else {
          setSelectedAddress(newSelected);
        }
      }
    }
  };

  const styles = {
    container: `flex flex-col gap-[16px] px-[24px] pt-[16px] pb-[32px] bg-white
    mobile:w-[100%] mobile:rounded-t-[32px]
    tablet:w-[375px] tablet:rounded-[32px]`,
    active: "text-pr-black-400",
    inactive: "text-grayscale-300",
    typeContainer: "flex flex-row justify-between p-[8px]",
    type: "flex gap-[24px]",
    filterType: `flex justify-between items-center border-b border-solid border-grayscale-100
    mobile:px-[10px] mobile:py-[13px]
    tablet:px-[16px] tablet:py-[21px]`,
    filterFont: "text-2lg font-semibold cursor-pointer",
  };

  const moveTypes = () => {
    if (type === "이사 유형") {
      return [
        { id: 1, name: "전체선택", count: moveCount?.[0] },
        { id: 2, name: "소형이사", count: moveCount?.[1] },
        { id: 3, name: "가정이사", count: moveCount?.[2] },
        { id: 4, name: "사무실이사", count: moveCount?.[3] },
      ];
    } else {
      return [
        { id: 1, name: "전체선택", count: filterCount?.[0] },
        { id: 2, name: "서비스 가능 지역", count: filterCount?.[1] },
        { id: 3, name: "지정 견적 요청", count: filterCount?.[2] },
      ];
    }
  };

  const handleClick = () => {
    console.log("조회하기");
  };

  return (
    <div className={styles.container}>
      <div className={styles.typeContainer}>
        <div className={`${styles.type} ${styles.filterFont}`}>
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
        </div>
        <Image src={assets.icons.x} alt="close" width={24} height={24} />
      </div>

      <div>
        {moveTypes().map((moveType) => (
          <label key={moveType.id}>
            <div className={styles.filterType}>
              <p>
                {moveType.name} ({moveType.count})
              </p>
              <Image
                src={
                  selectedAddress.includes(moveType.id)
                    ? assets.icons.checkboxActive
                    : assets.icons.checkboxInactive
                }
                alt="close"
                width={36}
                height={36}
                onClick={() => handleClickMoveType(moveType.id)}
              />
            </div>
          </label>
        ))}
      </div>

      <Button
        width="100%"
        onClick={handleClick}
        children="조회하기"
        variant="primary"
        disabled={selectedAddress.length === 0}
        className="mobile:mt-[24px]"
      />
    </div>
  );
}
