"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

import {
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownBell,
} from "../common/Dropdown";

import assets from "@/variables/images";

type DropdownNotificationProps = {
  onSelect: (id: number) => void;
  disabled?: boolean;
};

export default function DropdownNotification({
  onSelect,
  disabled = false,
}: DropdownNotificationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyles = {
    base: "relative w-6 h-6 rounded-full cursor-pointer",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  };

  const dropdownTriggerClass = clsx(dropdownStyles.base, {
    [dropdownStyles.able]: !disabled,
    [dropdownStyles.open]: isOpen,
    [dropdownStyles.disabled]: disabled,
  });

  const dropdownListClass = clsx(
    "absolute flex flex-col items-center \
    p-4 py-2.5 top-[37px] right-[-100px] w-[312px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    tablet:top-[39px] tablet:right-[-56px] \
    pc:top-[54px] pc:w-[359px] pc:right-0"
  );

  const dropdownItemClass = clsx(
    "box-border flex flex-col items-left \
    px-6 py-3 \
    w-full \
    border-solid border-t border-line-100 \
    text-lg text-black-400 font-medium \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:py-4"
  );

  const notificationClass = clsx(
    "flex flex-row justify-between items-center",
    "pl-4 pr-[15px] w-full h-[54px]",
    "text-lg text-black-400 font-bold",
    "pc:pl-6 pc:text-2lg"
  );

  const timeClass = clsx("text-sm text-gray-300 font-medium");

  // 임시. API 호출이나 PROPS로 알림 리스트 확인
  const notifications = [
    { id: 1, message: "알림1", time: "1시간 전" },
    { id: 2, message: "알림2", time: "2시간 전" },
  ];

  const items = notifications.map((item) => {
    return {
      id: item.id,
      message: item.message,
      time: item.time,
      onClick: () => onSelect(item.id), // 임시. 알림 API 호출로 교체 예정
    };
  });

  const handleCloseList = () => {
    setIsOpen(false);
  };

  const itemsWithDivider = [
    <div className={notificationClass}>
      <div>알림</div>
      <div onClick={handleCloseList}>
        <Image src={assets.icons.x} alt="알림 닫기" width={24} height={24} />
      </div>
    </div>,
    ...items.map((item, index) => (
      <DropdownItem
        key={item.id}
        className={clsx(dropdownItemClass, index === 0 && "border-t-0")}
        onClick={item.onClick}
      >
        {item.message}
        <div className={timeClass}>{item.time}</div>
      </DropdownItem>
    )),
  ];

  return (
    <Dropdown
      trigger={<DropdownBell className={dropdownTriggerClass} />}
      isOpen={isOpen}
      onToggle={() => setIsOpen((prev) => !prev)}
    >
      <DropdownList className={dropdownListClass} items={itemsWithDivider} />
    </Dropdown>
  );
}
