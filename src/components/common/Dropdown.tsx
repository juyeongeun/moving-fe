"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

import { REGION_CODES } from "../../variables/regions";
import { SERVICES } from "../../variables/services";
import {
  PROFILE_CUSTOMER,
  PROFILE_MOVER,
  SORT_MOVING_REQUEST,
  SORT_MOVER,
} from "@/variables/dropdown";
import assets from "../../variables/images.js";

// import style from "./Dropdown.module.css";

export enum DropdownType {
  REGION,
  SERVICE,
  PROFILE_CUSTOMER,
  PROFILE_MOVER,
  NOTIFICATION,
  SORT_MOVER,
  SORT_MOVING_REQUEST,
}

interface DropdownItemProps {
  type: DropdownType;
  children: string;
  value: string;
  onClick?: () => void;
}

function DropdownItem({ type, children, value, onClick }: DropdownItemProps) {
  const dropdownItemClass = clsx(
    "box-border flex flex-row justify-between items-center px-[14px] py-4 pc:px-6 pc:py-4 w-75px h-9 pc:w-[164px] pc:h-[64px]",
    "text-md pc:text-2lg",
    "bg-white hover:bg-pr-blue-50 flex-none order-0 grow-0"
  );
  return <div className={dropdownItemClass}>{children}</div>;
}

const DROPDOWN_LIST_CLASSES: Record<DropdownType, string> = {
  [DropdownType.REGION]:
    "grid grid-cols-2 h-full overflow-y-scroll \
    scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar \
    scrollbar-thumb-grayscale-200 scrollbar-w-1 pc:scrollbar-w-1.5",
  [DropdownType.SERVICE]: "flex flex-col items-center",
  [DropdownType.PROFILE_CUSTOMER]: "flex flex-col items-center",
  [DropdownType.PROFILE_MOVER]: "flex flex-col items-center",
  [DropdownType.NOTIFICATION]: "flex flex-col items-center",
  [DropdownType.SORT_MOVER]: "flex flex-col items-center",
  [DropdownType.SORT_MOVING_REQUEST]: "flex flex-col items-center",
};

interface DropdownListProps {
  type: DropdownType;
}

function DropdownList({ type }: DropdownListProps) {
  const dropdownListBaseClass = "relative overflow-x-hidden";

  if (type === DropdownType.REGION) {
    const keys = Object.keys(REGION_CODES);
    const items = keys.map((key) => {
      return (
        <DropdownItem type={type} value={key} key={key}>
          {REGION_CODES[key]}
        </DropdownItem>
      );
    });

    const dropdownListWrapperClass = clsx(
      "absolute top-11 pc:top-20 w-[150px] h-[179px] pc:w-[328px] pc:h-[320px] overflow-hidden",
      "box-border border-solid border-[1px] border-line-100",
      "rounded-[16px] bg-white"
    );
    const dropdownListClass = clsx(
      DROPDOWN_LIST_CLASSES[type],
      dropdownListBaseClass
    );

    const dynamicLineHeight = `${Math.ceil(keys.length / 2) * 36}px`;
    const dynamicLineHeightPC = `${Math.ceil(keys.length / 2) * 64}px`;
    const dynamicLineClass = clsx(
      "absolute top-0 bottom-0 left-1/2 w-px bg-line-100 pointer-events-none",
      `h-[${dynamicLineHeight}] pc:h-[${dynamicLineHeightPC}]`
    );

    return (
      <div className={dropdownListWrapperClass}>
        <div className={dropdownListClass}>
          {items}
          <div className={dynamicLineClass}></div>
        </div>
      </div>
    );
  }

  if (
    type === DropdownType.PROFILE_CUSTOMER ||
    type === DropdownType.PROFILE_MOVER
  ) {
    // 로그아웃 추가
  }
}

const DROPDOWN_CLASSES: Record<
  DropdownType,
  {
    base: string;
    able: string;
    open: string;
    disabled: string;
  }
> = {
  [DropdownType.REGION]: {
    base: "absolute box-border flex flex-row justify-between items-center \
          pl-3.5 pr-2.5 w-[75px] h-9 \
          border-solid border-[1px] border-grayscale-100 \
          bg-transparent shadow-[4px_4px_10px_rgba(238,238,238,0.1)] \
          pc:w-[328px] pc:h-16 pc:px-6 pc:rounded-2xl",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SERVICE]: {
    base: "absolute box-border flex flex-row justify-between items-center \
          pl-3.5 pr-2.5 w-[87px] h-9 \
          border-solid border-[1px] border-grayscale-100 rounded-lg \
          bg-transparent shadow-[4px_4px_10px_rgba(238,238,238,0.1)] \
          pc:w-[328px] pc:h-16 pc:px-6 pc:rounded-2xl",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.PROFILE_CUSTOMER]: {
    base: "absolute flex flex-row gap-4 items-center justify-between rounded-full",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.PROFILE_MOVER]: {
    base: "absolute flex flex-row gap-4 items-center justify-between rounded-full",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.NOTIFICATION]: {
    base: "absolute w-6 h-6",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SORT_MOVER]: {
    base: "absolute flex flex-row justify-center items-center \
          px-1.5 m-auto w-[91px] h-8 \
          bg-white rounded-lg \
          pc:px-2.5 pc:w-[114px] pc:h-10",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SORT_MOVING_REQUEST]: {
    base: "absolute flex flex-row justify-center items-center \
          px-1.5 m-auto w-[91px] h-8 \
          bg-white rounded-lg \
          pc:px-2.5 pc:w-[114px] pc:h-10",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
};

interface DropdownProps {
  type: DropdownType;
  profileImageUrl?: string;
  userName?: string;
  onSelect?: (value: number) => void;
  disabled?: boolean;
}

export default function Dropdown({
  type,
  profileImageUrl = assets.icons.userProfile,
  userName = "김가나",
  onSelect,
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [curretnSortMover, setCurrentSortMover] = useState(SORT_MOVER[0]);
  const [curretnSortMovingRequest, setCurrentSortMovingRequest] = useState(
    SORT_MOVING_REQUEST[0]
  );

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const dropdownClass = clsx(DROPDOWN_CLASSES[type].base, {
    [DROPDOWN_CLASSES[type].able]: !disabled,
    [DROPDOWN_CLASSES[type].open]: isOpen,
    [DROPDOWN_CLASSES[type].disabled]: disabled,
  });
  const dropdownTexts = ["지역", "서비스", userName, userName];
  const dropdownTextBaseClass = clsx("text-nowrap text-black-400");
  const dropdownFilterClass = clsx(
    dropdownTextBaseClass,
    "text-md pc:text-2lg font-medium"
  );
  const dropdownFilter = (
    <div className={dropdownFilterClass}>{dropdownTexts[type]}</div>
  );

  const dropdownUserNameClass = clsx(
    dropdownTextBaseClass,
    "hidden pc:block text-md pc:text-2lg font-medium"
  );
  const dropdownUserName = (
    <div className={dropdownUserNameClass}>{dropdownTexts[type]}</div>
  );

  const dropdownSortMoverClass = clsx(
    dropdownTextBaseClass,
    "text-xs pc:text-md font-semibold"
  );
  const dropdownSortMover = (
    <div className={dropdownSortMoverClass}>{curretnSortMover}</div>
  );

  const dropdownSortMovingRequestClass = clsx(
    dropdownTextBaseClass,
    "text-xs pc:text-md font-semibold"
  );
  const dropdownSortMovingRequest = (
    <div className={dropdownSortMovingRequestClass}>
      {curretnSortMovingRequest}
    </div>
  );

  const dropdownImage = (
    <div className="w-5 h-5 pc:w-9 pc:h-9 relative">
      <Image src={assets.icons.chevronDown} alt="드롭 다운" fill />
    </div>
  );

  const commonImageFrameClass = clsx("w-6 h-6 pc:w-9 pc:h-9 relative");
  const profileImage = (
    <div className={commonImageFrameClass}>
      <Image src={profileImageUrl} alt="프로필 드롭 다운" fill />
    </div>
  );

  const notificationImage = (
    <div className={commonImageFrameClass}>
      <Image src={assets.icons.alarm} alt="알림 드롭 다운" fill />
    </div>
  );

  const sortDropdownImage = (
    <div className="w-5 h-5 relative">
      <Image src={assets.icons.chevronDown} alt="드롭 다운" fill />
    </div>
  );

  const dropdownContent = [
    <>
      {dropdownFilter}
      {dropdownImage}
    </>,
    <>
      {dropdownFilter}
      {dropdownImage}
    </>,
    <>
      {profileImage}
      {dropdownUserName}
    </>,
    <>
      {profileImage}
      {dropdownUserName}
    </>,
    <>{notificationImage}</>,
    <>
      {dropdownSortMover}
      {sortDropdownImage}
    </>,
    <>
      {dropdownSortMovingRequest}
      {sortDropdownImage}
    </>,
  ];

  return (
    <div className="relative inline-block text-left">
      <div className={dropdownClass} onClick={toggleDropdown}>
        {dropdownContent[type]}
      </div>
      {isOpen && !disabled && <DropdownList type={type} />}
    </div>
  );
}
