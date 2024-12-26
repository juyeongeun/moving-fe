import axios from "axios";
import { axiosInstance, axiosInstance2 } from "./axios";

import {
  GetMovingRequestListByMoverParamData,
  GetMovingRequestListByMoverResponseData,
} from "@/types/api";

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
  career: number;
  introduction: string;
  services: number[];
  name: string;
  isDesignated: boolean;
  isFavorite: boolean;
  rating: Rating;
  reviewCount: number;
  confirmCount: number;
  favoriteCount: number;
}

interface MovingRequest {
  service: number;
  movingDate: string;
  pickupAddress: string;
  dropOffAddress: string;
  requestDate: string;
  isConfirmed: boolean;
  status: string;
}

interface Quote {
  id: number;
  cost: number;
  comment: string;
  isConfirmed: boolean;
  movingRequest: MovingRequest;
  mover: Mover;
}

interface PendingQuotesResponse {
  totalCount: number;
  list: Quote[];
}

// 고객의 이사 요청 목록 조회 함수
export const fetchMovingRequests = async (
  pageSize: number = 5,
  pageNum: number = 1
): Promise<PendingQuotesResponse> => {
  try {
    const response = await axiosInstance.get<PendingQuotesResponse>(
      "/moving-requests/by-customer",
      {
        params: {
          pageSize: pageSize,
          pageNum: pageNum,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching moving requests:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Failed to fetch moving requests: ${errorMessage}`);
  }
};

// 특정 이사 요청 ID에 대한 견적서 목록 조회 함수
export const fetchQuotesByMovingRequest = async (
  id: number,
  isCompleted: boolean = false
): Promise<Quote[]> => {
  try {
    const response = await axiosInstance.get<PendingQuotesResponse>(
      `/moving-request/${id}/quotes`,
      {
        params: {
          isCompleted: isCompleted.toString(),
        },
      }
    );

    return response.data.list;
  } catch (error) {
    console.error(`Error fetching quotes for moving request ${id}:`, error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    throw new Error(
      `Failed to fetch quotes for moving request ${id}: ${errorMessage}`
    );
  }
};

export type { PendingQuotesResponse, Quote, Mover, MovingRequest, Rating };

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

// export async function getMovingRequestListByMover({
//   smallMove,
//   houseMove,
//   officeMove,
//   keyword,
//   isDesignated,
//   orderBy,
//   limit,
//   cursor,
// }: {
//   smallMove: boolean;
//   houseMove: boolean;
//   officeMove: boolean;
//   keyword: string;
//   isDesignated: boolean | null;
//   orderBy: "recent" | "movingDate";
//   limit: number;
//   cursor: number | null;
// }): Promise<GetMovingRequestListByMoverResponseData | undefined> {
//   // console.log("getMovingRequestListByMover mock function connected");
//   /**
//    * 1. Endpoint:  `GET /moving-requests`
//    * 2. Description: 이사 요청 목록 조회
//    * 3. Request : access-token 쿠키 전달
//    * 4. link : https://www.notion.so/API-14d9702f08878032932ee08ab2c19fb0?pvs=4#14d9702f0887818e831dde53326a39e0
//    */
//   const serviceQuery = `smallMove=${smallMove}&houseMove=${houseMove}&officeMove=${officeMove}`;
//   const filterQuery = `isDesignated=${isDesignated}&isQuoted=false`;
//   const sortQuery = `orderBy=${orderBy}`;
//   const query = `${serviceQuery}&${filterQuery}&${sortQuery}`;

//   try {
//     console.log("Base URL:", axiosInstance2.defaults.baseURL);
//     console.log("Full URL:", `${PATH}/by-mover`);

//     const response = await axiosInstance2.get(`${PATH}/by-mover`); //?${query}`);

//     return response.data;
//   } catch (err: any) {
//     console.error("API 호출 오류:", err.message, err.config?.url);
//     throw new Error("API 요청 실패");
//   }

//   // return new Promise((resolve) => {
//   //   const response = getMockMovingRequestList({
//   //     smallMove,
//   //     houseMove,
//   //     officeMove,
//   //     keyword,
//   //     isDesignated,
//   //     orderBy,
//   //     limit,
//   //     cursor,
//   //   });
//   //   resolve(response);
//   // });
// }
export async function getMovingRequestListByMover({
  smallMove,
  houseMove,
  officeMove,
  keyword,
  isDesignated,
  orderBy,
  limit,
  cursor,
}: GetMovingRequestListByMoverParamData): Promise<GetMovingRequestListByMoverResponseData> {
  const serviceQuery = `smallMove=${smallMove}&houseMove=${houseMove}&officeMove=${officeMove}`;
  const sortQuery = `&orderBy=${orderBy}`;
  let designateQuery = ``;

  if (isDesignated !== null) {
    designateQuery = `&isDesignated=${isDesignated}`;
  }

  let keywordQuery = ``;

  if (keyword !== null && keyword?.trim().length !== 0) {
    keywordQuery = `&keyword=${keyword}`;
  }

  let limitQuery = ``;

  if (limit) {
    limitQuery = `&limit=${limit}`;
  }

  let cursorQuery = ``;

  if (cursor !== "" && cursor) {
    cursorQuery = `&cursor=${cursor}`;
  }

  const query = `${serviceQuery}${sortQuery}${designateQuery}${keywordQuery}${limitQuery}${cursorQuery}&isQuoted=false&isPastRequest=false`;

  try {
    // 임시. 테스트 코드드
    console.log("Base URL:", axiosInstance2.defaults.baseURL);
    console.log("Full URL:", `${PATH}/by-mover?${query}`);

    // const response = await axiosInstance2.get(`${PATH}/by-mover`); //`);
    // return response.data;

    const response = await fetch(
      `https://moving-be-1.onrender.com/moving-requests/my-mover?${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      console.error("Fetch API 호출 오류:", response.statusText);
      throw new Error("API 요청 실패");
    }

    const data = await response.json();
    console.log("query : ", query);
    console.log("data : ", data);

    return data;
  } catch (err: any) {
    // console.error("API 호출 오류:", err.message, err.config?.url);
    // throw new Error("API 요청 실패");
    console.error("Fetch API 호출 오류:", err.message);
    return {
      list: [],
      serviceCounts: { smallMove: 0, houseMove: 0, officeMove: 0 },
      requestCounts: { total: 0, designated: 0 },
      nextCursor: "",
      hasNext: false,
    };
  }
}
