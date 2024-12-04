"use client";

import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

import assets from "../../variables/images.js";
import { boolean } from "zod";

// import { useState, ReactNode } from "react";

// import { REGION_CODES } from "../../variables/regions";
// import { SERVICES } from "../../variables/services";
// import {
//   PROFILE_CUSTOMER,
//   PROFILE_MOVER,
//   SORT_MOVING_REQUEST,
//   SORT_MOVER,
//   DropdownType,
//   DROPDOWN_ITEM_CLASSES,
//   DROPDOWN_LIST_CLASSES,
//   DROPDOWN_CLASSES,
// } from "../../variables/dropdown";
//

// interface DropdownItemProps {
//   type: DropdownType;
//   children: string;
//   time?: string;
//   onClick?: (value: string) => void;
//   href?: string;
// }

// function DropdownItem({ type, children, time, onClick }: DropdownItemProps) {
//   const timeClass = clsx("text-sm text-gray-300 font-medium");

//   const handleClickDropdownItem = () => {
//     const value = "temp";

//     onClick ? onClick(value) : undefined;
//   };

//   return (
//     <div
//       className={DROPDOWN_ITEM_CLASSES[type]}
//       onClick={handleClickDropdownItem}
//     >
//       {children}
//       {time ? <div className={timeClass}>{time}</div> : null}
//     </div>
//   );
// }

// interface DropdownListProps {
//   type: DropdownType;
//   onClose: (value: boolean) => void;
// }

// function DropdownList({ type, onClose }: DropdownListProps) {
//   const handleCloseList = () => {
//     onClose(false);
//   };

//   if (type === DropdownType.REGION) {
//     const keys = Object.keys(REGION_CODES);
//     const items = keys.map((key) => {
//       return (
//         <DropdownItem type={type} key={key}>
//           {REGION_CODES[key]}
//         </DropdownItem>
//       );
//     });

//     const dropdownListWrapperClass = clsx(
//       "absolute box-border overflow-hidden",
//       "top-11 w-[150px] h-[179px]",
//       "border-solid border-[1px] border-line-100 rounded-lg",
//       "bg-white",
//       "tablet:top-11",
//       "pc:top-20 pc:w-[328px] pc:h-[320px] pc:rounded-2xl"
//     );

//     const dynamicLineHeight = `${Math.ceil(keys.length / 2) * 36}px`;
//     const dynamicLineHeightPC = `${Math.ceil(keys.length / 2) * 64}px`;
//     const dynamicLineClass = clsx(
//       "absolute",
//       "top-0 bottom-0 left-1/2 w-px",
//       "bg-line-100 pointer-events-none",
//       `h-[${dynamicLineHeight}] pc:h-[${dynamicLineHeightPC}]`
//     );

//     return (
//       <div className={dropdownListWrapperClass}>
//         <div className={DROPDOWN_LIST_CLASSES[type]}>
//           {items}
//           <div className={dynamicLineClass}></div>
//         </div>
//       </div>
//     );
//   }

//   const dropdownListBaseClass =
//     "border-solid border-[1px] border-line-100 bg-white";

//   if (type === DropdownType.SERVICE) {
//     const items = SERVICES.map((service) => {
//       return (
//         <DropdownItem type={type} key={service}>
//           {service}
//         </DropdownItem>
//       );
//     });

//     const dropdownListClass = clsx(
//       DROPDOWN_LIST_CLASSES[type],
//       dropdownListBaseClass
//     );

//     return <div className={dropdownListClass}>{items}</div>;
//   }

//   const name = "고객명"; // 임시. 로그인 후 가지고 있을 고객명 값을 받아와 기입 예정
//   const nameClass = clsx(
//     "flex flex-row justify-left items-center",
//     "pl-3 w-full h-[54px]",
//     "text-2lg text-black-300 font-bold",
//     "pc:pl-6"
//   );
//   const signOutClass = clsx(
//     "flex flex-row justify-center items-center",
//     "w-full h-[46px]",
//     "text-md text-grayscale-500 font-medium",
//     "cursor-pointer"
//   );
//   if (type === DropdownType.PROFILE_CUSTOMER) {
//     const items = PROFILE_CUSTOMER.map((customerMenu) => {
//       return (
//         <DropdownItem type={type} key={customerMenu}>
//           {customerMenu}
//         </DropdownItem>
//       );
//     });

//     const dropdownListClass = clsx(
//       DROPDOWN_LIST_CLASSES[type],
//       dropdownListBaseClass
//     );

//     return (
//       <div className={dropdownListClass}>
//         <div className={nameClass}>{`${name} 고객님`}</div>
//         {items}
//         <div className={signOutClass}>로그아웃</div>
//       </div>
//     );
//   }

//   if (type === DropdownType.PROFILE_MOVER) {
//     const items = PROFILE_MOVER.map((moverMenu) => {
//       return (
//         <DropdownItem type={type} key={moverMenu}>
//           {moverMenu}
//         </DropdownItem>
//       );
//     });

//     const dropdownListClass = clsx(
//       DROPDOWN_LIST_CLASSES[type],
//       dropdownListBaseClass
//     );

//     return (
//       <div className={dropdownListClass}>
//         <div className={nameClass}>{`${name} 기사님`}</div>
//         {items}
//         <div className={signOutClass}>로그아웃</div>
//       </div>
//     );
//   }

//   if (type === DropdownType.NOTIFICATION) {

//     const dropdownListClass = clsx(
//       DROPDOWN_LIST_CLASSES[type],
//       dropdownListBaseClass
//     );

//   }

//   if (type === DropdownType.SORT_MOVER) {
//     const items = SORT_MOVER.map((sortMover) => {
//       return (
//         <DropdownItem type={type} key={sortMover}>
//           {sortMover}
//         </DropdownItem>
//       );
//     });

//     const dropdownListClass = clsx(
//       DROPDOWN_LIST_CLASSES[type],
//       dropdownListBaseClass
//     );

//     return <div className={dropdownListClass}>{items}</div>;
//   }

//   if (type === DropdownType.SORT_MOVING_REQUEST) {
//     const items = SORT_MOVING_REQUEST.map((sortMovingRequest) => {
//       return (
//         <DropdownItem type={type} key={sortMovingRequest}>
//           {sortMovingRequest}
//         </DropdownItem>
//       );
//     });

//     const dropdownListClass = clsx(
//       DROPDOWN_LIST_CLASSES[type],
//       dropdownListBaseClass
//     );

//     return <div className={dropdownListClass}>{items}</div>;
//   }
// }

// interface DropdownProps {
//   type: DropdownType;
//   profileImageUrl?: string;
//   userName?: string;
//   onSelect?: (value: number) => void;
//   disabled?: boolean;
// }

// export default function Dropdown({
//   type,
//   profileImageUrl = assets.icons.userProfile,
//   userName = "김가나",
//   onSelect,
//   disabled = false,
// }: DropdownProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [curretnSortMover, setCurrentSortMover] = useState(SORT_MOVER[0]);
//   const [curretnSortMovingRequest, setCurrentSortMovingRequest] = useState(
//     SORT_MOVING_REQUEST[0]
//   );

//   const toggleDropdown = () => {
//     if (!disabled) setIsOpen((prev) => !prev);
//   };

//   const dropdownClass = clsx(DROPDOWN_CLASSES[type].base, {
//     [DROPDOWN_CLASSES[type].able]: !disabled,
//     [DROPDOWN_CLASSES[type].open]: isOpen,
//     [DROPDOWN_CLASSES[type].disabled]: disabled,
//   });
//   const dropdownTexts = ["지역", "서비스", userName, userName];
//   const dropdownTextBaseClass = clsx("text-nowrap");
//   const dropdownFilterClass = clsx(
//     dropdownTextBaseClass,
//     "text-md pc:text-2lg font-medium"
//   );
//   const dropdownFilter = (
//     <div className={dropdownFilterClass}>{dropdownTexts[type]}</div>
//   );

//   const dropdownUserNameClass = clsx(
//     dropdownTextBaseClass,
//     "hidden pc:block text-md pc:text-2lg font-medium"
//   );
//   const dropdownUserName = (
//     <div className={dropdownUserNameClass}>{dropdownTexts[type]}</div>
//   );

//   const dropdownSortMoverClass = clsx(
//     dropdownTextBaseClass,
//     "text-xs pc:text-md font-semibold"
//   );
//   const dropdownSortMover = (
//     <div className={dropdownSortMoverClass}>{curretnSortMover}</div>
//   );

//   const dropdownSortMovingRequestClass = clsx(
//     dropdownTextBaseClass,
//     "text-xs pc:text-md font-semibold"
//   );
//   const dropdownSortMovingRequest = (
//     <div className={dropdownSortMovingRequestClass}>
//       {curretnSortMovingRequest}
//     </div>
//   );

//   const dropdownImage = (
//     <div className="relative w-5 h-5 pc:w-9 pc:h-9">
//       <Image
//         src={isOpen ? assets.icons.chevronDownActive : assets.icons.chevronDown}
//         alt="드롭 다운"
//         fill
//       />
//     </div>
//   );

//   const commonImageFrameClass = clsx("relative w-6 h-6 pc:w-9 pc:h-9");
//   const profileImage = (
//     <div className={commonImageFrameClass}>
//       <Image src={profileImageUrl} alt="프로필 드롭 다운" fill />
//     </div>
//   );

//   const notificationImage = (
//     <div className={commonImageFrameClass}>
//       <Image src={assets.icons.alarm} alt="알림 드롭 다운" fill />
//     </div>
//   );

//   const sortDropdownImage = (
//     <div className="relative w-5 h-5">
//       <Image
//         src={isOpen ? assets.icons.chevronDownActive : assets.icons.chevronDown}
//         alt="정렬 드롭 다운"
//         fill
//       />
//     </div>
//   );

//   const dropdownContent = [
//     <>
//       {dropdownFilter}
//       {dropdownImage}
//     </>,
//     <>
//       {dropdownFilter}
//       {dropdownImage}
//     </>,
//     <>
//       {profileImage}
//       {dropdownUserName}
//     </>,
//     <>
//       {profileImage}
//       {dropdownUserName}
//     </>,
//     <>{notificationImage}</>,
//     <>

//     </>,
//     <>
//       {dropdownSortMovingRequest}
//       {sortDropdownImage}
//     </>,
//   ];

//   return (
//     <div className="relative inline-block text-left">
//       <div className={dropdownClass} onClick={toggleDropdown}>
//         {dropdownContent[type]}
//       </div>
//       {isOpen && !disabled && <DropdownList type={type} onClose={setIsOpen} />}
//     </div>
//   );
// }

type DropdownFilterProps = {
  children: React.ReactNode | string;
};

export function DropdownFilter({ children }: DropdownFilterProps) {
  const dropdownFilterClass = clsx(
    "text-nowrap text-md pc:text-2lg font-medium"
  );

  return <div className={dropdownFilterClass}>{children}</div>;
}

type DropdownImageProps = {
  isOpen: boolean;
};

export function DropdownImage({ isOpen }: DropdownImageProps) {
  return (
    <div className="relative w-5 h-5 pc:w-9 pc:h-9">
      <Image
        src={isOpen ? assets.icons.chevronDownActive : assets.icons.chevronDown}
        alt="드롭 다운"
        fill
      />
    </div>
  );
}

type ProfileImageProps = {
  imageUrl?: string;
};

export function ProfileImage({
  imageUrl = assets.icons.userProfile,
}: ProfileImageProps) {
  const commonImageFrameClass = clsx(
    "relative w-6 h-6 rounded-full overflow-hidden pc:w-9 pc:h-9"
  );

  return (
    <div className={commonImageFrameClass}>
      <Image src={imageUrl} alt="프로필 드롭 다운" fill />
    </div>
  );
}

type DropdownUserNameProps = {
  name?: string;
};

export function DropdownUserName({ name = "사용자명" }: DropdownUserNameProps) {
  const dropdownUserNameClass = clsx(
    "hidden pc:block text-md text-nowrap pc:text-2lg font-medium"
  );

  return <div className={dropdownUserNameClass}>{name}</div>;
}

export function DropdownNotification() {
  const commonImageFrameClass = clsx("relative w-6 h-6 pc:w-9 pc:h-9");

  return (
    <div className={commonImageFrameClass}>
      <Image src={assets.icons.alarm} alt="알림 드롭 다운" fill />
    </div>
  );
}

type DropdownSortMoverProps = {
  curretnSortMover: string;
};

export function DropdownSortMover({
  curretnSortMover,
}: DropdownSortMoverProps) {
  const dropdownSortMoverClass = clsx(
    "text-nowrap text-xs pc:text-md font-semibold"
  );

  return <div className={dropdownSortMoverClass}>{curretnSortMover}</div>;
}

type SortDropdownImageProps = {
  isOpen: boolean;
};

export function SortDropdownImage({ isOpen }: SortDropdownImageProps) {
  return (
    <div className="relative w-5 h-5">
      <Image
        src={isOpen ? assets.icons.chevronDownActive : assets.icons.chevronDown}
        alt="정렬 드롭 다운"
        fill
      />
    </div>
  );
}

type DropdownItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function DropdownItem({
  children,
  onClick,
  className,
  as: Component = "div",
}: DropdownItemProps) {
  return (
    <Component className={clsx(className)} onClick={onClick}>
      {children}
    </Component>
  );
}

type DropdownListProps = {
  items: React.ReactNode[];
  className?: string;
};

export function DropdownList({ items, className }: DropdownListProps) {
  return (
    <div className={clsx(className)}>
      {items.map((item, index) => (
        <>{item}</>
      ))}
    </div>
  );
}

type DropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
};

export function Dropdown({
  trigger,
  children,
  isOpen,
  onToggle,
  className,
}: DropdownProps) {
  return (
    <div className={clsx("relative", className)}>
      <div onClick={onToggle}>{trigger}</div>
      {isOpen && <>{children}</>}
    </div>
  );
}
