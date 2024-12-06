"use client";

import Image from "next/image";

import IncomingRequestCard from "@/components/cards/IncomingRequestCard";
import Input from "@/components/common/Input";
import DropdownSortMovingRequest from "../dropdowns/DropdownSortMovingRequest";

import assets from "@/variables/images";

// 임시. 테스트용
import { type QuoteDetailsData } from "@/types/mover";

const mockRequestQuoteData = Array.from({ length: 20 }, (_, index) => {
  const randomService = Math.floor(Math.random() * 3);
  const baseDate = new Date(2024, 11, 1);
  const randomOffset = Math.floor(Math.random() * 30);

  return {
    id: index + 1,
    requestDate: new Date(
      baseDate.getTime() + randomOffset * 24 * 60 * 60 * 1000
    ).toISOString(),
    service: randomService,
    isDesignated: Math.random() > 0.5,
    isConfirmed: false,
    name: `User ${index + 1}`,
    movingDate: new Date(
      baseDate.getTime() + (randomOffset + 5) * 24 * 60 * 60 * 1000
    ).toISOString(),
    pickupAddress: `${index + 1} Test Street, City A`,
    dropOffAddress: `${index + 10} Destination Ave, City B`,
    isCompleted: false,
  };
});

interface RequestQuoteData extends QuoteDetailsData {
  id: number;
  isCompleted: boolean;
}

interface RequestFormProps {
  testData: RequestQuoteData[];
}

export default function RequestForm({ testData }: RequestFormProps) {
  const handleAcceptRequest = () => {
    console.log("수락");
  };
  const handleRejectRequest = () => {
    console.log("거절");
  };

  const items = testData.map((data) => {
    return (
      <IncomingRequestCard
        key={data.id}
        data={data}
        onPrimaryClick={handleAcceptRequest}
        onOutlinedClick={handleRejectRequest}
      />
    );
  });

  return (
    <>
      <div className="flex flex-row gap-2.5 items-center w-full h-[96px]">
        <div className="flex flex-row items-center h-full text-2lg text-[#2b2b2b] font-semibold cursor-pointer pc:text-2xl">
          받은 요청
        </div>
      </div>
      <div className="box-border flex flex-row gap-[117px] mt-4 tablet:mt-6 pc:mt-6 ">
        <div className="box-border flex flex-col w-[328px] h-[548px] bg-slate-500">
          {" "}
        </div>
        <div className="box-border flex flex-col w-[955px] h-[2548px]">
          <div className="relative flex items-center w-full h-[64px]">
            <Input
              name="searchKeyword"
              placeholder="어떤 고객님을 찾고 계세요?"
              className="w-full pl-[46px] pc:pl-[68px]"
            />
            <div className="absolute left-4 w-6 h-6 pc:left-6 pc:w-9 pc:h-9">
              <Image src={assets.icons.search} alt="검색" fill />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full h-10 pc:mt-6">
            <div className="flex flex-row items-center text-lg font-medium">{`전체 ${testData.length}건`}</div>
            <DropdownSortMovingRequest
              onSelect={() => {}}
              disabled={testData.length === 0}
            />
          </div>
          <div className="flex flex-col w-full pc:mt-[32px] pc:gap-[48px]">
            {items}
          </div>
        </div>
      </div>
    </>
  );
}
