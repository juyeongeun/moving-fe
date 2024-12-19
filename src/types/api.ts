import { QuoteData } from "./quote";
import { MovingRequestDataWithComplete } from "./movingRequest";
import { MoverDetailData } from "./mover";

// API 구조 참고
export interface GetQuoteApiResponseData extends QuoteData {
  isConfirmed: boolean;
  movingRequest: MovingRequestDataWithComplete;
  mover: MoverDetailData;
}

export interface CursorResponse<T> {
  nextCursor: number | null;
  hasNext: boolean;
  list: T[];
}

export interface OffsetResponse<T> {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalCounts: number;
  list: T[];
}

export interface CursorParams {
  limit?: number;
  nextCursorId?: number | null;
}

export interface OffsetParams {
  pageNum?: number;
  pageSize?: number;
}
