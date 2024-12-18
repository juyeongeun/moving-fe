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

export const fetchPendingQuotes = async (): Promise<PendingQuotesResponse> => {
  try {
    const response = await axiosInstance.get<PendingQuotesResponse>(
      "/moving-request/pending-quotes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pending quotes:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    throw new Error(`Failed to fetch pending quotes: ${errorMessage}`);
  }
};

export type { PendingQuotesResponse, Quote, Mover, MovingRequest, Rating };
