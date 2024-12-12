import MoverInfoCard from "@/components/cards/MoverInfoCard";
import Button from "@/components/common/Button";
import QuoteDetailInfo from "@/components/Quote/QuoteDetailInfo";
import ButtonFavorite from "@/components/ButtonFavorite";
import cn from "@/config/cn";
import {
  formatDate,
  formatDateWithDayTime,
  getServiceText,
} from "@/utils/utilFunctions";

interface Rating {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  totalCount: number;
  totalSum: number;
  average: number;
}

interface Mover {
  id: number;
  nickname: string;
  imageUrl: string | null;
  introduction: string;
  career: number;
  regions: number[];
  services: number[];
  isDesignated: boolean;
  isFavorite: boolean;
  reviewCount: number;
  favoriteCount: number;
  confirmCount: number;
  rating: Rating;
}

interface ApiResponse {
  service: number;
  isCompleted: boolean; // 이사일이 지나서 완료된 요청인지 여부 판단
  isConfirmed: boolean;
  mover: Mover;
  id: number;
  cost: number;
  comment: string;
  pickupAddress: string;
  dropOffAddress: string;
  requestDate: string;
  movingDate: string;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length: number) {
  return Array.from({ length }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join("");
}

function getRandomAddress() {
  return `${Math.floor(Math.random() * 1000)} ${getRandomString(
    5
  )} Street, ${getRandomString(6)} City`;
}

function generateRandomResponse(quoteId: number): ApiResponse {
  const baseDate = new Date(2025, 1, 1);
  const randomOffset = Math.floor(Math.random() * 30);

  const ratings = {
    1: Math.floor(Math.random() * 50),
    2: Math.floor(Math.random() * 50),
    3: Math.floor(Math.random() * 50),
    4: Math.floor(Math.random() * 50),
    5: Math.floor(Math.random() * 50),
  };

  const totalCount = Object.values(ratings).reduce(
    (sum, count) => sum + count,
    0
  );
  const totalSum = Object.entries(ratings).reduce(
    (sum, [key, value]) => sum + Number(key) * value,
    0
  );
  const average: number = totalCount > 0 ? totalSum / totalCount : 0;

  const mover: Mover = {
    id: quoteId,
    nickname: `User_${getRandomInt(1, 1000)}`,
    imageUrl:
      Math.random() > 0.5
        ? `https://cdn.pixabay.com/photo/2023/07/08/13/20/drink-8114520_640.png`
        : null,
    introduction: Math.random() > 0.5 ? "안녕하세요" : "열심히 합니다",
    career: getRandomInt(1, 20),
    regions: [8202],
    services: [0, 1, 2],
    isDesignated: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    reviewCount: getRandomInt(0, 500),
    favoriteCount: getRandomInt(0, 1000),
    confirmCount: getRandomInt(0, 300),
    rating: {
      ...ratings,
      totalCount,
      totalSum,
      average,
    },
  };

  return {
    service: getRandomInt(0, 2),
    isCompleted: Math.random() > 0.5,
    isConfirmed: Math.random() > 0.5,
    mover,
    id: getRandomInt(1, 1000),
    cost: getRandomInt(10000, 1000000),
    comment: `${getRandomInt(1, 100)}만원`,
    pickupAddress: getRandomAddress(),
    dropOffAddress: getRandomAddress(),
    requestDate: new Date(
      baseDate.getTime() + (randomOffset + 5) * 24 * 60 * 60 * 1000
    ).toISOString(),
    movingDate: new Date(
      baseDate.getTime() + (randomOffset + 10) * 24 * 60 * 60 * 1000
    ).toISOString(),
  };
}

interface DividerProps {
  className?: string;
}

function Divider({ className }: DividerProps) {
  const dividerClass = cn("relative w-full h-[48px] pc:h-[80px]", className);
  const forLineClass = cn(
    `absolute top-1/2 left-0 w-full border-solid border-t border-line-100 transform -translate-y-1/2`
  );

  return (
    <div className={dividerClass}>
      <div className={forLineClass}></div>
    </div>
  );
}

function ShareBox() {
  return (
    <div className="flex flex-col justify-between w-[152px] h-[80px] tablet:h-[82px] pc:w-[224px] pc:h-[118px]">
      <div className="text-black-400 font-semibold text-lg pc:text-xl">
        견적서 공유하기
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-neutral-500"></div>
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-amber-400"></div>
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-sky-600"></div>
      </div>
    </div>
  );
}

export interface MyQuotesDetailPageProps {
  params: {
    quoteId: string;
  };
}

export default async function MyQuotesDetailPage({
  params,
}: MyQuotesDetailPageProps) {
  const { quoteId } = await params;

  const data = generateRandomResponse(Number(quoteId));

  const tempCardData = {
    id: data.id,
    imageUrl: data.mover.imageUrl,
    nickname: data.mover.nickname,
    career: data.mover.career,
    ratings: {
      "1": data.mover.rating["1"],
      "2": data.mover.rating["2"],
      "3": data.mover.rating["3"],
      "4": data.mover.rating["4"],
      "5": data.mover.rating["5"],
      average: data.mover.rating.average,
    },
    reviewCount: data.mover.reviewCount,
    confirmCount: data.mover.confirmCount,
    favoriteCount: data.mover.favoriteCount,
    isFavorite: data.mover.isFavorite,
    isDesignated: data.mover.isDesignated,
    isConfirmed: data.isConfirmed,
    services: [data.service],
    regions: data.mover.regions,
    introduction: data.mover.introduction,
  };

  const quoteInfoData = {
    requestDate: data.requestDate,
    service: data.service,
    movingDate: data.movingDate,
    pickupAddress: data.pickupAddress,
    dropOffAddress: data.dropOffAddress,
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row gap-2.5 items-center justify-center w-[328px] tablet:w-[600px] pc:w-[1400px] h-[54px] pc:h-[96px]">
        <div className="flex flex-row items-center w-[328px] tablet:w-[600px] pc:w-[1400px] h-full text-2lg text-[#2b2b2b] font-semibold pc:text-2xl">
          견적 상세
        </div>
      </div>
      <div className="box-border flex flex-row justify-center gap-[117px] mt-4 tablet:mt-6 pc:mt-6">
        <div className="box-border flex flex-col w-[328px] tablet:w-[600px] pc:w-[955px]">
          <MoverInfoCard data={tempCardData} />
          <Divider />
          <div className="flex flex-col justify-between w-full h-[74px] tablet:h-[94px] pc:h-[110px]">
            <div className="text-black-400 font-semibold text-lg pc:text-2xl">
              견적가
            </div>
            <div className="text-black-400 font-bold text-xl pc:text-3xl">
              {Intl.NumberFormat("en-US").format(data.cost)}원
            </div>
          </div>
          <Divider />
          <div className="w-full h-[100px] tablet:h-[102px] pc:hidden">
            <ShareBox />
          </div>
          <Divider className="pc:hidden" />
          <div className="flex flex-col justify-between w-full h-[242px] tablet:h-[258px] pc:h-[330px] tablet:text-lg pc:text-2xl">
            <div className="text-black-400 font-semibold">견적 정보</div>
            <QuoteDetailInfo data={quoteInfoData} />
          </div>
        </div>
        <div className="box-border gap-6 w-[328px] hidden tablet:hidden pc:flex pc:flex-col">
          <Button className="w-[328px] h-[64px]">견적 확정하기</Button>
          <ShareBox />
        </div>
      </div>
      <div className="flex flex-row item-center sticky bottom-0 w-full h-[74px] pc:hidden">
        <ButtonFavorite
          moverId={data.mover.id}
          customerId={1} // 임시. 고객 정보 저장/확인 로직 필요
          isFavorite={data.mover.isFavorite}
        />
        <Button className="w-full h-[54px]">견적 확정하기</Button>
      </div>
    </div>
  );
}
