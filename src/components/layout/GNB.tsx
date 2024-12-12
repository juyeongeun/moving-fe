"use client";

import { useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cn from "@/config/cn";
import DropdownProfile from "../dropdowns/DropdownProfile";
import DropdownNotification from "../dropdowns/DropdownNotification";
import useResize from "../hooks/useResize";
import assets from "@/variables/images";

import { PC_WIDTH } from "@/variables/screen";
// 임시 //--------------------- 테스트
function TestSelectTextUser({
  value,
  onCheck,
}: {
  value: UserType;
  onCheck: (value: UserType) => void;
}) {
  const [selected, setSelected] = useState<UserType>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let selectedValue = null;

    if (event.target.value !== "default") {
      selectedValue = event.target.value as UserType;
    }

    setSelected(selectedValue);
    onCheck(selectedValue);
  };

  return (
    <div className="flex flex-row gap-2">
      <label>
        <input
          type="radio"
          name="userType"
          value="default"
          checked={selected === null}
          onChange={handleChange}
        />{" "}
        비회원
      </label>
      <label>
        <input
          type="radio"
          name="userType"
          value="USER"
          checked={selected === "USER"}
          onChange={handleChange}
        />{" "}
        일반
      </label>
      <label>
        <input
          type="radio"
          name="userType"
          value="MOVER"
          checked={selected === "MOVER"}
          onChange={handleChange}
        />{" "}
        기사
      </label>
    </div>
  );
}
// 테스트 ---------------------
interface NavItemProps {
  href: string;
  isIncludedPath?: boolean;
  children: ReactNode;
}

function NavItem({ href, isIncludedPath = false, children }: NavItemProps) {
  const pathname = usePathname();

  const isActive = isIncludedPath
    ? pathname === href
    : pathname.startsWith(href);

  let linkStyle = cn(
    "text-lg font-bold",
    isActive ? "text-black-400" : "text-gray-400"
  );

  return (
    <Link href={href} className={linkStyle}>
      {children}
    </Link>
  );
}

type UserType = "MOVER" | "USER" | null;

interface GNBProps {
  userType?: UserType;
}

// TODO:
// 1. 유저타입에 따라 렌더링되는 탭 변경
// 2. 모바일에서 메뉴 버튼 클릭 시 사이드바 토글시 유저정보는 따로 fetch하는 것이 좋을 듯

const GNB = ({ userType = null }: GNBProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tempUserType, setTempUserType] = useState<UserType>(null);

  useResize((width) => {
    if (width >= PC_WIDTH) {
      setIsMenuOpen(false);
    }
  });

  // 임시
  const userName = "테스터";

  const renderTabs = () => {
    // switch (userType) {
    switch (
      tempUserType // 임시
    ) {
      case "MOVER":
        return (
          <>
            <NavItem href="/mover/request">받은 요청</NavItem>
            <NavItem href="/mover/my-quote">내 견적 관리</NavItem>
          </>
        );
      case "USER":
        return (
          <>
            <NavItem href="/request-quote">견적 요청</NavItem>
            <NavItem href="/find-mover">기사님 찾기</NavItem>
            <NavItem href="/my-quotes">내 견적 관리</NavItem>
          </>
        );
      default:
        return <NavItem href="/find-mover">기사님 찾기</NavItem>;
    }
  };

  return (
    <nav className="w-full h-[54px] pc:h-[88px] py-[10px] pc:border-b pc:border-solid pc:border-line-100 bg-white">
      <div className="max-w-[328px] tablet:max-w-[600px] pc:max-w-[1400px] h-full mx-auto flex justify-between items-center">
        <div className="flex items-center gap-20">
          <Link href="/">
            <div className="relative w-[28.8px] h-[32.76px] tablet:w-[88px] tablet:h-[34px] pc:w-[116px] pc:h-[44px] text-2xl font-bold">
              <Image
                src={assets.images.logo}
                alt="logo"
                fill
                className="hidden tablet:block"
              />
              <Image
                src={assets.images.logoMarkonly}
                alt="logo"
                fill
                className="block tablet:hidden"
              />
            </div>
          </Link>
          <div className="hidden pc:flex gap-10">{renderTabs()}</div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <TestSelectTextUser value={tempUserType} onCheck={setTempUserType} />
          <DropdownNotification
            onSelect={(id: number) => {
              console.log(id); // 임시. 테스트용
            }}
          />
          <DropdownProfile name={userName} />
          <button
            className="block pc:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={assets.icons.menu} alt="menu" width={24} height={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image src={assets.icons.x} alt="close" width={24} height={24} />
          </button>
          <div className="flex items-center gap-2 mt-8 mb-6">
            <Image
              src={assets.icons.userProfile}
              alt="user"
              width={36}
              height={36}
            />
            <span className="text-2lg font-medium text-black-400">
              {userName}
            </span>
          </div>
          <div className="flex flex-col gap-6">{renderTabs()}</div>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
