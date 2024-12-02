"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import assets from "@/variables/images";

type UserType = "MOVER" | "USER" | null;

interface GNBProps {
  userType?: UserType;
}

// TODO:
// 1. 유저타입에 따라 렌더링되는 탭 변경
// 2. 모바일에서 메뉴 버튼 클릭 시 사이드바 토글시 유저정보는 따로 fetch하는 것이 좋을 듯

const GNB = ({ userType = null }: GNBProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderTabs = () => {
    const linkStyle = "font-bold text-pr-blue-400 text-2lg";

    switch (userType) {
      case "MOVER":
        return (
          <>
            <Link href="/requests" className={linkStyle}>
              받은 요청
            </Link>
            <Link href="/my-quotes" className={linkStyle}>
              내 견적 관리
            </Link>
          </>
        );
      case "USER":
        return (
          <>
            <Link href="/request-quote" className={linkStyle}>
              견적 요청
            </Link>
            <Link href="/find-mover" className={linkStyle}>
              기사님 찾기
            </Link>
            <Link href="/my-quotes" className={linkStyle}>
              내 견적 관리
            </Link>
          </>
        );
      default:
        return (
          <Link href="/find-mover" className={linkStyle}>
            기사님 찾기
          </Link>
        );
    }
  };

  return (
    <nav className="w-full py-6 border-b border-line-100 bg-white">
      <div className="max-w-[1400px] h-full px-5 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-20">
          <Link href="/">
            {" "}
            <div className="text-2xl font-bold">
              <Image
                src={assets.images.logo}
                alt="logo"
                width={100}
                height={100}
                className="hidden tablet:block"
              />
              <Image
                src={assets.images.logoMarkonly}
                alt="logo"
                width={36}
                height={36}
                className="block tablet:hidden"
              />
            </div>
          </Link>

          <div className="hidden pc:flex gap-10">{renderTabs()}</div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-gray-700">
            <Image
              src={assets.icons.alarm}
              alt="alarm"
              width={36}
              height={36}
            />
          </button>
          <div className="flex items-center">
            <Image
              src={assets.icons.userProfile}
              alt="user"
              width={36}
              height={36}
            />
            <span className="hidden pc:block text-2lg font-medium text-black-400 ml-2">
              김가나
            </span>
          </div>
          <button
            className="block pc:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={assets.icons.menu} alt="menu" width={36} height={36} />
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
            <span className="text-2lg font-medium text-black-400">김가나</span>
          </div>
          <div className="flex flex-col gap-6">{renderTabs()}</div>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
