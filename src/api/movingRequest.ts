import { axiosInstance } from "./axios";
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
