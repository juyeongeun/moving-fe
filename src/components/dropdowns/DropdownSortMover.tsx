"use client";

import { useState } from "react";
import clsx from "clsx";

import {
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownSortMover,
  SortDropdownImage,
} from "../common/Dropdown";
import { getServiceText } from "@/utils/utilFunctions";

import { SORT_MOVER_CODES, SORT_MOVER_TEXTS } from "@/variables/dropdown";

type DropdownRegionProps = {
  onSelect: (regionCode: number) => void;
  disabled: boolean;
};

export default function DropdownRegion({
  onSelect,
  disabled,
}: DropdownRegionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [curretnSortMover, setCurretnSortMover] = useState(
    SORT_MOVER_TEXTS[SORT_MOVER_CODES.REVIEW]
  );

  const dropdownStyles = {
    base: "relative flex flex-row justify-between items-center \
        px-1.5 m-auto w-[91px] h-8 \
        bg-transparent rounded-lg \
        text-black-400 \
        cursor-pointer \
        pc:px-2.5 pc:w-[114px] pc:h-10",
    able: "",
    open: "text-pr-blue-300",
    disabled: "cursor-not-allowed",
  };

  const dropdownTriggerClass = clsx(dropdownStyles.base, {
    [dropdownStyles.able]: !disabled,
    [dropdownStyles.open]: isOpen,
    [dropdownStyles.disabled]: disabled,
  });

  const dropdownListClass = clsx(
    "absolute flex flex-col items-center overflow-hidden\
    top-10 right-0 w-[91px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-12 pc:w-[114px]"
  );

  const dropdownItemClass = clsx(
    "flex flex-col justify-center \
    px-1.5 w-full h-8 \
    text-xs text-black-400 font-medium \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:px-2.5 pc:h-10 pc:text-md"
  );

  const keys = Object.keys(SORT_MOVER_CODES);
  const items = keys.map((key) => {
    return {
      label: getServiceText(
        SORT_MOVER_CODES[key as keyof typeof SORT_MOVER_CODES]
      ),
      onClick: () =>
        onSelect(SORT_MOVER_CODES[key as keyof typeof SORT_MOVER_CODES]),
    };
  });

  return (
    <Dropdown
      trigger={
        <div className={dropdownTriggerClass}>
          <DropdownSortMover curretnSortMover={curretnSortMover} />
          <SortDropdownImage isOpen={isOpen} />
        </div>
      }
      isOpen={isOpen}
      onToggle={() => setIsOpen((prev) => !prev)}
    >
      <DropdownList
        className={dropdownListClass}
        items={items.map((item, index) => (
          <DropdownItem
            key={index}
            className={dropdownItemClass}
            onClick={item.onClick}
          >
            {item.label}
          </DropdownItem>
        ))}
      />
    </Dropdown>
  );
}
