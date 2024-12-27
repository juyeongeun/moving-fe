"use client";

import Image from "next/image";
import Link from "next/link";
import assets from "@/variables/images";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  useAuth();
  return (
    <main className="container mx-auto px-4 py-16 pc:py-20 max-w-[374px] pc:max-w-[1400px]">
      <h1 className="text-2xl tablet:text-2xl pc:text-3xl text-center font-semibold mb-11">
        원하는 이사 서비스를 요청하고 <br /> 견적을 받아보세요
      </h1>

      {/* Desktop layout (1200px+) */}
      <div className="hidden pc:block">
        <div className="flex gap-6 mb-8 justify-center">
          <div className="flex-3">
            <Image
              src={assets.images.landingMd01}
              alt="가정이사"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-8 grid grid-rows-2 gap-6">
            <div>
              <Image
                src={assets.images.landingMd02}
                alt="가정이사"
                width={1000}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Image
                src={assets.images.landingMd03}
                alt="기업, 사무실 이사"
                width={1000}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tablet/Mobile layout (<1200px) */}
      <div className="block pc:hidden ">
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <Image
              src={assets.images.landingSm01}
              alt="가정이사"
              width={1000}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={assets.images.landingSm02}
              alt="가정이사"
              width={1000}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={assets.images.landingSm03}
              alt="기업, 사무실 이사"
              width={1000}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Responsive button container */}
      <div className="flex flex-col pc:flex-row items-center justify-center gap-4">
        <Link
          className="w-full mobile:w-[340px] p-4 bg-pr-blue-300 text-white font-semibold rounded-3xl hover:bg-blue-600 text-center"
          href="/auth/login"
          passHref
        >
          <div>로그인</div>
        </Link>
        <Link
          className="w-full mobile:w-[340px] p-4 border border-solid border-pr-blue-300 text-[#2D8EFF] font-semibold rounded-3xl hover:bg-blue-100 text-center"
          href="/auth/register"
          passHref
        >
          <div>회원가입</div>
        </Link>
      </div>
    </main>
  );
}
