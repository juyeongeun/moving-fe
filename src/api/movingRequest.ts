import axiosInstance from "./axios";

import { GetMovingRequestListByMoverResponseData } from "@/types/api";

const PATH = "/moving-requests";

export const DATA_COUNT = 5;

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

const mockRequestQuoteData = Array.from({ length: DATA_COUNT }, (_, index) => {
  const randomService = Math.floor(Math.random() * 3);
  const baseDate = new Date(2025, 1, 1);
  const randomOffset = Math.floor(Math.random() * 30);

  return {
    id: Math.floor(Math.random() * 1000),
    requestDate: new Date(
      baseDate.getTime() + randomOffset * 24 * 60 * 60 * 1000
    ).toISOString(),
    service: randomService,
    isDesignated: Math.random() > 0.5,
    isConfirmed: false,
    name: `User ${getRandomString(3)}${index + 1}`,
    movingDate: new Date(
      baseDate.getTime() + (randomOffset + 5) * 24 * 60 * 60 * 1000
    ).toISOString(),
    pickupAddress: getRandomAddress(),
    dropOffAddress: getRandomAddress(),
    isCompleted: false,
  };
});

let testCursor = 0;

function getMockMovingRequestList({
  smallMove,
  houseMove,
  officeMove,
  keyword,
  isDesignated,
  orderBy,
  limit,
  cursor,
}: {
  smallMove: boolean;
  houseMove: boolean;
  officeMove: boolean;
  keyword: string;
  isDesignated: boolean | null;
  orderBy: "recent" | "movingDate";
  limit: number;
  cursor: number | null;
}) {
  const serviceFilter = [smallMove, houseMove, officeMove];

  const filteredList = mockRequestQuoteData.filter((item, index) => {
    if (cursor && index < cursor) return false;

    if (!serviceFilter[item.service]) return false;

    if (isDesignated !== null && item.isDesignated !== isDesignated) {
      return false;
    }

    if (keyword && !item.name.toLowerCase().includes(keyword.toLowerCase())) {
      return false;
    }

    return true;
  });

  const sortedList = filteredList.sort((a, b) => {
    if (orderBy === "recent") {
      return (
        new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime()
      );
    } else if (orderBy === "movingDate") {
      return (
        new Date(a.movingDate).getTime() - new Date(b.movingDate).getTime()
      );
    }
    return 0;
  });

  const paginatedList = sortedList.slice(0, limit);

  const serviceCounts = [0, 0, 0];
  filteredList.forEach((item) => {
    serviceCounts[item.service]++;
  });

  const designateCounts = [0, 0];
  filteredList.forEach((item) => {
    if (item.isDesignated) {
      designateCounts[1]++;
    } else {
      designateCounts[0]++;
    }
  });

  testCursor++;

  // const hasNext = nextCursor ? true : false;
  const hasNext = true;

  return {
    list: paginatedList,
    serviceCounts,
    designateCounts,
    nextCursor: testCursor > 3 ? null : testCursor,
    hasNext,
  };
}

export function createMovingRequest() {
  /**
   * - / ( POST )
   * 1. Endpoint: `POST /moving-requests`
   * 2. Description: 이사 요청 생성
   * 3. Request : access-token 쿠키 전달
   * 4. link : https://www.notion.so/API-14d9702f08878032932ee08ab2c19fb0?pvs=4#14d9702f0887814cb39efb0fa6c37733
   */
  return {};
}

export async function getMovingRequestListByMover({
  smallMove,
  houseMove,
  officeMove,
  keyword,
  isDesignated,
  orderBy,
  limit,
  cursor,
}: {
  smallMove: boolean;
  houseMove: boolean;
  officeMove: boolean;
  keyword: string;
  isDesignated: boolean | null;
  orderBy: "recent" | "movingDate";
  limit: number;
  cursor: number | null;
}): Promise<GetMovingRequestListByMoverResponseData> {
  console.log("getMovingRequestListByMover mock function connected");
  /**
   * 1. Endpoint:  `GET /moving-requests`
   * 2. Description: 이사 요청 목록 조회
   * 3. Request : access-token 쿠키 전달
   * 4. link : https://www.notion.so/API-14d9702f08878032932ee08ab2c19fb0?pvs=4#14d9702f0887818e831dde53326a39e0
   */
  const serviceQuery = `smallMove=${smallMove}&houseMove=${houseMove}&officeMove=${officeMove}`;
  const filterQuery = `isDesignated=${isDesignated}&isQuoted=false`;
  const sortQuery = `orderBy=${orderBy}`;
  const query = `${serviceQuery}&${filterQuery}&${sortQuery}`;

  // const result = await axiosInstance.get(`${PATH}/movingRequests?${query}`);

  return new Promise((resolve) => {
    const response = getMockMovingRequestList({
      smallMove,
      houseMove,
      officeMove,
      keyword,
      isDesignated,
      orderBy,
      limit,
      cursor,
    });
    resolve(response);
  });
}
