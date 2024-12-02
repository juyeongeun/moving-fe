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
  time?: string;
  onClick?: () => void;
}

function DropdownItem({ type, children, time, onClick }: DropdownItemProps) {
  const dropdownItemClass = clsx(
    "box-border flex flex-row justify-between items-center px-[14px] py-4 pc:px-6 pc:py-4 w-75px h-9 pc:w-[164px] pc:h-[64px]",
    "text-md pc:text-2lg",
    "bg-white hover:bg-pr-blue-50 flex-none order-0 grow-0"
  );
  return <div className={dropdownItemClass}>{children}</div>;
}

const DROPDOWN_LIST_CLASSES: Record<DropdownType, string> = {
  [DropdownType.REGION]:
    "grid grid-cols-2 overflow-y-scroll overflow-x-hidden\
    h-full \
    scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar \
    scrollbar-thumb-grayscale-200 scrollbar-w-1 \
    pc:scrollbar-w-1.5",
  [DropdownType.SERVICE]:
    "absolute flex flex-col items-center overflow-y-hidden \
    top-11 w-[89px] h-[144px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-20 pc:w-[328px] pc:h-[256px]",
  [DropdownType.PROFILE_CUSTOMER]:
    "absolute flex flex-col items-center overflow-y-hidden \
    p-1.5 pt-2.5 top-[37px] right-0 w-[89px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-[54px] pc:w-[248px]",
  [DropdownType.PROFILE_MOVER]:
    "absolute flex flex-col items-center overflow-y-hidden \
    p-1.5 pt-2.5 top-[37px] right-0 w-[89px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-[54px] pc:w-[248px]",
  [DropdownType.NOTIFICATION]:
    "absolute flex flex-col items-center overflow-y-hidden \
    p-4 py-2.5 top-[37px] right-[-100px] w-[312px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    tablet:right-[-56px] \
    pc:top-[54px] pc:w-[359px] pc:right-0",
  [DropdownType.SORT_MOVER]: "flex flex-col items-center",
  [DropdownType.SORT_MOVING_REQUEST]: "flex flex-col items-center",
};

interface DropdownListProps {
  type: DropdownType;
}

function DropdownList({ type }: DropdownListProps) {
  if (type === DropdownType.REGION) {
    const keys = Object.keys(REGION_CODES);
    const items = keys.map((key) => {
      return (
        <DropdownItem type={type} key={key}>
          {REGION_CODES[key]}
        </DropdownItem>
      );
    });

    const dropdownListWrapperClass = clsx(
      "absolute box-border overflow-hidden",
      "top-11 w-[150px] h-[179px]",
      "border-solid border-[1px] border-line-100 rounded-lg",
      "bg-white",
      "pc:top-20 pc:w-[328px] pc:h-[320px] pc:rounded-2xl"
    );

    const dynamicLineHeight = `${Math.ceil(keys.length / 2) * 36}px`;
    const dynamicLineHeightPC = `${Math.ceil(keys.length / 2) * 64}px`;
    const dynamicLineClass = clsx(
      "absolute",
      "top-0 bottom-0 left-1/2 w-px",
      "bg-line-100 pointer-events-none",
      `h-[${dynamicLineHeight}] pc:h-[${dynamicLineHeightPC}]`
    );

    return (
      <div className={dropdownListWrapperClass}>
        <div className={DROPDOWN_LIST_CLASSES[type]}>
          {items}
          <div className={dynamicLineClass}></div>
        </div>
      </div>
    );
  }

  const dropdownListBaseClass =
    "border-solid border-[1px] border-line-100 bg-white";

  if (type === DropdownType.SERVICE) {
    const items = SERVICES.map((service) => {
      return (
        <DropdownItem type={type} key={service}>
          {service}
        </DropdownItem>
      );
    });

    const dropdownListClass = clsx(
      DROPDOWN_LIST_CLASSES[type],
      dropdownListBaseClass
    );

    return <div className={dropdownListClass}>{items}</div>;
  }

  const name = "고객명"; // 임시. 로그인 후 가지고 있을 고객명 값을 받아와 기입 예정
  const nameClass = clsx(
    "flex flex-row justify-left items-center",
    "pl-3 w-full h-[54px]",
    "text-2lg text-black-300 font-bold",
    "pc:pl-6"
  );
  const signOutClass = clsx(
    "flex flex-row justify-center items-center",
    "w-full h-[46px]",
    "text-md text-grayscale-500 font-medium"
  );
  if (type === DropdownType.PROFILE_CUSTOMER) {
    const items = PROFILE_CUSTOMER.map((customerMenu) => {
      return (
        <DropdownItem type={type} key={customerMenu}>
          {customerMenu}
        </DropdownItem>
      );
    });

    const dropdownListClass = clsx(
      DROPDOWN_LIST_CLASSES[type],
      dropdownListBaseClass
    );

    return (
      <div className={dropdownListClass}>
        <div className={nameClass}>{`${name} 고객님`}</div>
        {items}
        <div className={signOutClass}>로그아웃</div>
      </div>
    );
  }

  if (type === DropdownType.PROFILE_MOVER) {
    const items = PROFILE_MOVER.map((moverMenu) => {
      return (
        <DropdownItem type={type} key={moverMenu}>
          {moverMenu}
        </DropdownItem>
      );
    });

    const dropdownListClass = clsx(
      DROPDOWN_LIST_CLASSES[type],
      dropdownListBaseClass
    );

    return (
      <div className={dropdownListClass}>
        <div className={nameClass}>{`${name} 기사님`}</div>
        {items}
        <div className={signOutClass}>로그아웃</div>
      </div>
    );
  }

  const alarmClass = clsx(
    "flex flex-row justify-between items-center",
    "pl-4 pr-[15px] w-full h-[54px]",
    "text-lg text-black-400 font-bold",
    "pc:pl-6 pc:text-2lg"
  );
  if (type === DropdownType.NOTIFICATION) {
    const items = [
      { text: "알림1", time: "1시간 전" },
      { text: "알림2", time: "2시간 전" },
    ].map((notificationInfo, index) => {
      return (
        <DropdownItem
          type={type}
          time={notificationInfo.time}
          key={`${index}-${notificationInfo.text}`}
        >
          {notificationInfo.text}
        </DropdownItem>
      );
    });

    const dropdownListClass = clsx(
      DROPDOWN_LIST_CLASSES[type],
      dropdownListBaseClass
    );

    return (
      <div className={dropdownListClass}>
        <div className={alarmClass}>
          <div>알림</div>
          <Image src={assets.icons.x} alt="알림 닫기" width={24} height={24} />
          {/* 임시. x 클릭시 동작 로직 연결 필요*/}
        </div>
        {items}
      </div>
    );
  }

  if (type === DropdownType.SORT_MOVER) {
    const items = SORT_MOVER.map((sortMover) => {
      return (
        <DropdownItem type={type} key={sortMover}>
          {sortMover}
        </DropdownItem>
      );
    });

    const dropdownListClass = clsx(
      DROPDOWN_LIST_CLASSES[type],
      dropdownListBaseClass
    );

    return <div className={dropdownListClass}>{items}</div>;
  }

  if (type === DropdownType.SORT_MOVING_REQUEST) {
    const items = SORT_MOVING_REQUEST.map((sortMovingRequest) => {
      return (
        <DropdownItem type={type} key={sortMovingRequest}>
          {sortMovingRequest}
        </DropdownItem>
      );
    });

    const dropdownListClass = clsx(
      DROPDOWN_LIST_CLASSES[type],
      dropdownListBaseClass
    );

    return <div className={dropdownListClass}>{items}</div>;
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
    base: "relative box-border flex flex-row justify-between items-center \
          pl-3.5 pr-2.5 w-[75px] h-9 \
          border-solid border-[1px] border-grayscale-100 rounded-lg \
          bg-transparent shadow-[4px_4px_10px_rgba(238,238,238,0.1)] \
          pc:w-[328px] pc:h-16 pc:px-6 pc:rounded-2xl",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SERVICE]: {
    base: "relative box-border flex flex-row justify-between items-center \
          pl-3.5 pr-2.5 w-[87px] h-9 \
          border-solid border-[1px] border-grayscale-100 rounded-lg \
          bg-transparent shadow-[4px_4px_10px_rgba(238,238,238,0.1)] \
          pc:w-[328px] pc:h-16 pc:px-6 pc:rounded-2xl",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.PROFILE_CUSTOMER]: {
    base: "relative flex flex-row gap-4 items-center justify-between rounded-full",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.PROFILE_MOVER]: {
    base: "relative flex flex-row gap-4 items-center justify-between rounded-full",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.NOTIFICATION]: {
    base: "relative w-6 h-6",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SORT_MOVER]: {
    base: "relative flex flex-row justify-center items-center \
          px-1.5 m-auto w-[91px] h-8 \
          bg-white rounded-lg \
          pc:px-2.5 pc:w-[114px] pc:h-10",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SORT_MOVING_REQUEST]: {
    base: "relative flex flex-row justify-center items-center \
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
    <div className="relative w-5 h-5 pc:w-9 pc:h-9">
      <Image src={assets.icons.chevronDown} alt="드롭 다운" fill />
    </div>
  );

  const commonImageFrameClass = clsx("relative w-6 h-6 pc:w-9 pc:h-9");
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
    <div className="relative w-5 h-5">
      <Image src={assets.icons.chevronDown} alt="정렬 드롭 다운" fill />
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
