"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import assets from "../../variables/images.js";

export enum DropdownType {
  REGION,
  SERVICE,
  PROFILE_CUSTOMER,
  PROFILE_MOVER,
  NOTIFICATION,
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
    base: "w-[75px] h-[36px] pl-[14px] pr-[10px] border-solid border-[1px] border-grayscale-100 pc:w-[328px] pc:h-[64px] pc:px-6 box-border flex flex-row items-center justify-between absolute rounded-[8px] pc:rounded-[16px] drop-shadow-[4px_4px_10px_rgba(195,217,242,0.2)] bg-transparent",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300",
    disabled: " cursor-not-allowed",
  },
  [DropdownType.SERVICE]: {
    base: "w-[87px] h-[36px] pl-[13px] pr-[9px] border-solid border-[1px] border-grayscale-100 pc:w-[328px] pc:h-[64px] pc:px-6 box-border flex flex-row items-center justify-between absolute rounded-[8px] pc:rounded-[16px] drop-shadow-[4px_4px_10px_rgba(195,217,242,0.2)] bg-transparent",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.PROFILE_CUSTOMER]: {
    base: "",
    able: "",
    open: "",
    disabled: "",
  },
  [DropdownType.PROFILE_MOVER]: {
    base: "",
    able: "",
    open: "",
    disabled: "",
  },
  [DropdownType.NOTIFICATION]: {
    base: "",
    able: "",
    open: "",
    disabled: "",
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
  userName = "김가나", // 임시
  onSelect,
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const dropdownClass = clsx(DROPDOWN_CLASSES[type].base, {
    [DROPDOWN_CLASSES[type].able]: !disabled,
    [DROPDOWN_CLASSES[type].open]: isOpen,
    [DROPDOWN_CLASSES[type].disabled]: disabled,
  });
  const dropdownTexts = ["지역", "서비스", userName, userName];
  const dropdownFilter = (
    <div className="text-md pc:text-2lg text-medium text-black-400">
      {dropdownTexts[type]}
    </div>
  );

  const dropdownUserName = (
    <div className="text-md pc:text-2lg text-medium text-black-400">
      {dropdownTexts[type]}
    </div>
  );

  const dropdownImage = (
    <div className="w-[20px] h-[20px] pc:w-[36px] pc:h-[36px] relative">
      <Image src={assets.icons.chevronDown} alt="드롭 다운" fill />
    </div>
  );

  const profileImage = (
    <div className="w-[20px] h-[20px] pc:w-[36px] pc:h-[36px] relative">
      <Image src={profileImageUrl} alt="드롭 다운" fill />
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
  ];

  return (
    <div className="relative inline-block text-left">
      <div className={dropdownClass} onClick={toggleDropdown}>
        {dropdownContent[type]}
      </div>
      {isOpen && !disabled && (
        <div
          className={clsx(
            "absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          )}
        >
          <ul className="py-1">
            {["Option 1", "Option 2", "Option 3"].map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  //   onSelect(option);
                  console.log(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
