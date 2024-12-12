import axiosInstance from "./axios";

import { MoverDetailData } from "@/types/mover";
import { GetQuoteApiResponseData } from "@/types/api";

const PATH = "/quotes";

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

function generateRandomResponse(quoteId: number): GetQuoteApiResponseData {
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

  const mover: MoverDetailData = {
    id: quoteId,
    name: `User ${getRandomInt(1, 1000)}`,
    nickname: `User_Nick ${getRandomInt(1, 1000)}`,
    imageUrl:
      Math.random() > 0.5
        ? `https://cdn.pixabay.com/photo/2023/07/08/13/20/drink-8114520_640.png`
        : null,
    introduction: Math.random() > 0.5 ? "안녕하세요" : "열심히 합니다",
    services: [0, 1, 2],
    regions: [8202],
    career: getRandomInt(1, 20),
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
    id: getRandomInt(1, 1000),
    cost: getRandomInt(10000, 1000000),
    comment: `${getRandomInt(1, 100)}만원`,
    isConfirmed: Math.random() > 0.5,
    movingRequest: {
      service: getRandomInt(0, 2),
      movingDate: new Date(
        baseDate.getTime() + (randomOffset + 10) * 24 * 60 * 60 * 1000
      ).toISOString(),
      pickupAddress: getRandomAddress(),
      dropOffAddress: getRandomAddress(),
      isCompleted: Math.random() > 0.5,
      createdAt: new Date(
        baseDate.getTime() + (randomOffset + 5) * 24 * 60 * 60 * 1000
      ).toISOString(),
    },
    mover,
  };
}

export function getQuote(quoteId: number): Promise<GetQuoteApiResponseData> {
  /**
   * 1. Endpoint:  `GET /quotes/:id`
   * 2. Description: 견적 상세 조회
   * 3. Request : access-token 쿠키 전달
   * 4. link : https://www.notion.so/API-14d9702f08878032932ee08ab2c19fb0?pvs=4#68e55ea91faf4d0294c0090a416c8e68
   */

  return new Promise((resolve) => {
    const response = generateRandomResponse(quoteId);
    resolve(response);
  });
}
