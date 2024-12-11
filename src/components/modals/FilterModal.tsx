"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Button from "../common/Button";
import Checkbox from "../common/checkboxs/Checkbox";
import cn from "@/config/cn";
import { getServiceText } from "@/utils/utilFunctions";

import { SERVICE_CODES } from "@/variables/service";
import assets from "@/variables/images";

const SERVICE_FILTER: number = 0;
const DESIGNATE_FILTER: number = 1;

const allTrue = (arr: boolean[]): boolean => arr.every((item) => item);
const sumNumberArray = (arr: number[]) => {
  let sum: number = 0;
  arr.forEach((el) => (sum += el));

  return sum;
};

interface FilterModalProps {
  serviceCounts: number[];
  serviceFilters: boolean[];
  designateCounts: number[];
  designateFilters: boolean[];
  onSubmit: (data: {
    newServiceStates: boolean[];
    newDesignateStates: boolean[];
  }) => void;
  onClose: () => void;
}

export default function FilterModal({
  serviceCounts,
  serviceFilters,
  designateCounts,
  designateFilters,
  onSubmit,
  onClose,
}: FilterModalProps) {
  const [formState, setFormState] = useState({
    newServiceStates: serviceFilters,
    newDesignateStates: designateFilters,
  });
  const [allServiceChecked, setAllServiceChecked] = useState(
    allTrue(serviceFilters)
  );
  const [allDesignateChecked, setAllDesignateChecked] = useState(
    allTrue(designateFilters)
  );
  const [type, setType] = useState<number>(SERVICE_FILTER);

  const handleClickType = (type: number) => {
    setType(type);
  };

  const setServices = (newStates: boolean[]) => {
    setFormState((prev) => ({ ...prev, newServiceStates: newStates }));
  };

  const handleServiceItemCheckClick =
    (index: number) => (newState: boolean) => {
      const updatedStates = [...formState.newServiceStates];
      updatedStates[index] = newState;
      setServices(updatedStates);
    };

  const handleAllServiceCheckClick = (newState: boolean) => {
    const updatedStates = formState.newServiceStates.map(() => newState);
    setServices(updatedStates);
  };

  const setDesignates = (newStates: boolean[]) => {
    setFormState((prev) => ({ ...prev, newDesignateStates: newStates }));
  };

  const handleDesignateItemCheckClick =
    (index: number) => (newState: boolean) => {
      const updatedStates = [...formState.newDesignateStates];
      updatedStates[index] = newState;
      setDesignates(updatedStates);
    };

  const handleAllDesignateCheckClick = (newState: boolean) => {
    const updatedStates = formState.newDesignateStates.map(() => newState);
    setDesignates(updatedStates);
  };

  const filterBaseClass = cn(
    "flex flex-row items-center justify-between h-[68px] border-solid border-b-[1px] border-b-line-200 text-black-400 font-medium"
  );
  const filterTypeLabelClass = cn(
    "flex flex-row items-center justify-between mb-3 h-[42px] text-2lg font-semibold"
  );
  const filterItemClass = cn(filterBaseClass, "text-lg text-black-400");
  const filterAllSelectClass = cn(
    filterBaseClass,
    "mb-2 h-[52px] text-lg text-grayscale-300"
  );

  const styles = {
    container: `flex flex-col gap-[16px] px-[24px] pt-[16px] pb-[32px] bg-white
    w-[100%] rounded-t-[32px]
    tablet:w-[375px] tablet:rounded-[32px]`,
  };

  const serviceFilterTexts = [
    {
      text: getServiceText(SERVICE_CODES.MOVE_SMALL),
      index: SERVICE_CODES.MOVE_SMALL,
    },
    {
      text: getServiceText(SERVICE_CODES.MOVE_HOME),
      index: SERVICE_CODES.MOVE_HOME,
    },
    {
      text: getServiceText(SERVICE_CODES.MOVE_OFFICE),
      index: SERVICE_CODES.MOVE_OFFICE,
    },
  ];

  const DesignatefilterTexts = [
    {
      text: "미지정 견적 요청",
      index: 0,
    },
    {
      text: "지정 견적 요청",
      index: 1,
    },
  ];

  const handleClick = () => {
    try {
      console.log("onSubmit 호출");
      onSubmit(formState);
      console.log("onClose 호출");
      onClose();
    } catch (error) {
      console.error("onSubmit 에러:", error);
    }
  };

  useEffect(() => {
    setAllServiceChecked(allTrue(formState.newServiceStates));
  }, [formState.newServiceStates]);

  useEffect(() => {
    setAllDesignateChecked(allTrue(formState.newDesignateStates));
  }, [formState.newDesignateStates]);

  return (
    <div className={styles.container}>
      <div className={filterTypeLabelClass}>
        <div className="flex flex-row h-full gap-6">
          <p
            onClick={() => handleClickType(SERVICE_FILTER)}
            className={cn(
              "cursor-pointer",
              type === SERVICE_FILTER ? "text-black-400" : "text-grayscale-300"
            )}
          >
            이사 유형
          </p>
          <p
            onClick={() => handleClickType(DESIGNATE_FILTER)}
            className={cn(
              "cursor-pointer",
              type === DESIGNATE_FILTER
                ? "text-black-400"
                : "text-grayscale-300"
            )}
          >
            지정 여부
          </p>
        </div>
        <div className="relative w-6 h-6 cursor-pointer" onClick={onClose}>
          <Image src={assets.icons.x} alt="close" fill />
        </div>
      </div>
      <div>
        {type === SERVICE_FILTER ? (
          <div className="w-full h-[228px]">
            <div className={filterAllSelectClass}>
              {`전체선택 (${sumNumberArray(serviceCounts)})`}
              <Checkbox
                state={allServiceChecked}
                onStateChange={handleAllServiceCheckClick}
              />
            </div>
            {serviceCounts.map((item, index) => (
              <div className={filterItemClass} key={index}>
                {`${serviceFilterTexts[index].text} (${item})`}
                <Checkbox
                  state={formState.newServiceStates[index]}
                  onStateChange={handleServiceItemCheckClick(index)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[228px]">
            <div className={filterAllSelectClass}>
              {`전체선택 (${sumNumberArray(designateCounts)})`}
              <Checkbox
                state={allDesignateChecked}
                onStateChange={handleAllDesignateCheckClick}
              />
            </div>
            {designateCounts.map((item, index) => (
              <div className={filterItemClass} key={index}>
                {`${DesignatefilterTexts[index].text} (${item})`}
                <Checkbox
                  state={formState.newDesignateStates[index]}
                  onStateChange={handleDesignateItemCheckClick(index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Button
        width="100%"
        onClick={handleClick}
        children="조회하기"
        variant="primary"
        disabled={false}
        className="mt-[24px]"
      />
    </div>
  );
}
