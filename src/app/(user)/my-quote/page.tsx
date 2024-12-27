"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PendingRequestCard from "@/components/cards/PendingRequestCard";
import ReceivedQuoteCard from "@/components/cards/ReceivedQuoteCard";
import { ChevronDown, Package } from "lucide-react";
import DropdownQuote from "@/components/dropdowns/DropdownQuote";
import LineSeparator from "@/components/common/LineSeparator";
import { fetchPendingQuotes } from "@/api/PendingQuotes";

interface MovingRequest {
  service: number;
  movingDate: string;
  pickupAddress: string;
  dropOffAddress: string;
  requestDate: string;
  isConfirmed: boolean;
  status: string;
}

interface Mover {
  id: number;
  nickname: string;
  imageUrl: string | null;
  career: number;
  introduction: string;
  services: number[];
  name: string;
  isDesignated: boolean;
  isFavorite: boolean;
  rating: {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    totalCount: number;
    totalSum: number;
    average: number;
  };
  reviewCount: number;
  confirmCount: number;
  favoriteCount: number;
}

interface Quote {
  id: number;
  cost: number;
  comment: string;
  isConfirmed: boolean;
  movingRequest: MovingRequest;
  mover: Mover;
}

function MyQuoteContent() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "0";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPendingQuotes();
        setQuotes(data.list);
        setTotalCount(data.totalCount);
        setError(null);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setError("견적 정보를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">로딩중...</div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );

  console.log("quotes:", quotes); // Debug log

  const pendingRequestDataArray = quotes.map((data: Quote) => ({
    quoteId: data.id,
    id: data.mover.id,
    nickname: data.mover.nickname,
    career: data.mover.career,
    isDesignated: data.mover.isDesignated,
    rating: data.mover.rating,
    reviewCount: data.mover.reviewCount,
    cost: data.cost,
    confirmCount: data.mover.confirmCount,
    favoriteCount: data.mover.favoriteCount,
    status: data.movingRequest.status,
    pickupAddress: data.movingRequest.pickupAddress,
    dropOffAddress: data.movingRequest.dropOffAddress,
    movingDate: data.movingRequest.movingDate,
    requestDate: data.movingRequest.requestDate,
    movingType: data.movingRequest.service,
    service: data.movingRequest.service,
    isFavorite: data.mover.isFavorite,
    imageUrl: data.mover.imageUrl,
    introduction: data.mover.introduction,
  }));

  const toggleSection = (sectionNumber: number): void => {
    setOpenSection(openSection === sectionNumber ? null : sectionNumber);
  };

  const handleQuoteFilterClick = () => {};

  return (
    <div className="max-w-[1400px] mx-auto my-[16px] pc:my-[24px]">
      {tab === "0" && (
        <ul className="grid grid-cols-1 gap-[24px] tablet:gap-[32px] pc:grid-cols-2 pc:gap-x-[24px] pc:gap-y-[48px]">
          {pendingRequestDataArray.map((data, index) => (
            <PendingRequestCard
              key={index}
              data={data}
              onPrimaryClick={() => console.log(`${data.quoteId}`)}
              onOutlinedClick={() =>
                (window.location.href = `http://localhost:3000/my-quote/${data.quoteId}`)
              }
            />
          ))}
        </ul>
      )}

      {tab === "1" && (
        <div className="w-full mx-auto">
          <div className="text-2xl font-bold mb-6">견적 정보</div>

          <div className="rounded-lg shadow-card border border-stone-200 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none" />
            <div className="relative divide-y">
              <div className="relative p-2">
                <div className="flex flex-row gap-6 pc:gap-12 p-3 pc:p-6 items-center">
                  <div className="hidden tablet:flex bg-gray-50 rounded-2xl p-2 h-[160px] w-[160px] items-center justify-center border-solid border-2 border-gray-100 shadow-border">
                    <Package
                      width={104}
                      height={104}
                      strokeWidth={1.5}
                      className="text-gray-300"
                    />
                  </div>

                  <div className="flex flex-col gap-3 text-lg font-medium text-left">
                    <div className="flex flex-col pc:flex-row items-start pc:items-center gap-1 pc:gap-3">
                      <div className="gap-1 rounded-xl py-1 px-2 text-pr-blue-300 items-center flex flex-row bg-pr-blue-100">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 26L7.15928 25.6525C7.9634 23.898 8.45024 22.015 8.59724 20.0907L9.12162 13.226C9.47615 8.58495 13.3454 5 18 5V5C22.6546 5 26.5239 8.58495 26.8784 13.226L27.4028 20.0907C27.5498 22.015 28.0366 23.898 28.8407 25.6525L29 26"
                            stroke="#1B92FF"
                            strokeWidth="2"
                          />
                          <path
                            d="M29 26H7L9 21L10 11L12.5 6.5L18 5L23 6.5L26 11L27 21L29 26Z"
                            fill="#1B92FF"
                          />
                          <path
                            d="M7 26L29 26"
                            stroke="#1B92FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M21 29C21 30.6569 19.6569 32 18 32C16.3431 32 15 30.6569 15 29"
                            stroke="#1B92FF"
                            strokeWidth="2"
                          />
                        </svg>
                        만료된 요청
                      </div>
                      <div className="text-lg tablet:text-xl pc:text-2xl text-gray-500 flex flex-row gap-[2px] tablet:gap-2">
                        2024. 08. 28 (월) 오전 10:00
                        <div className="text-black-400">에 진행된 무빙</div>
                      </div>
                    </div>

                    <LineSeparator
                      direction="horizontal"
                      className="flex tablet:hidden"
                    />

                    <div className="flex flex-col gap-1">
                      <div className="flex gap-4">
                        <div className="text-gray-500">견적 요청일</div>
                        <div>24.08.26</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-gray-500">서비스</div>
                        <div>사무실이사</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-gray-500">출발지</div>
                        <div>서울 중구 삼일대로 343</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-gray-500">도착지</div>
                        <div>서울 강남구 선릉로 428</div>
                      </div>
                    </div>
                  </div>
                </div>

                <LineSeparator
                  direction="horizontal"
                  className="mb-2 mx-6 w-auto bg-gray-100"
                />
                <button
                  onClick={() => toggleSection(0)}
                  className="w-full px-6 py-1 text-left flex items-center gap-4 justify-center hover:bg-stone-50 transition-colors duration-200 sticky top-0 z-10"
                  aria-expanded={openSection === 0}
                >
                  <h2 className="text-lg font-semibold">견적서 보기</h2>
                  <ChevronDown
                    className={`text-pr-blue-300 transform transition-transform duration-300 ${
                      openSection === 0 ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-y-auto transition-all duration-500 ease-in-out ${
                    openSection === 0 ? "max-h-[670px]" : "max-h-0"
                  }`}
                >
                  <div className="px-5 py-4 flex flex-col gap-4">
                    <div className="text-2xl font-semibold">견적서 목록</div>
                    <div>
                      <DropdownQuote
                        onSelect={handleQuoteFilterClick}
                        disabled={false}
                      />
                    </div>
                  </div>

                  <div className="p-0 pc:p-4 grid gap-4 pc:grid-cols-2">
                    {pendingRequestDataArray.map((data, index) => (
                      <ReceivedQuoteCard key={index} data={data} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MyQuotePage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          로딩중...
        </div>
      }
    >
      <MyQuoteContent />
    </Suspense>
  );
}
