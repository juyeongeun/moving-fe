import { QuoteData } from "./quote";
import {
  MovingRequestDataByMover,
  MovingRequestDataWithComplete,
} from "./movingRequest";
import { MoverDetailData } from "./mover";

// API 구조 참고
export interface GetQuoteApiResponseData extends QuoteData {
  isConfirmed: boolean;
  movingRequest: MovingRequestDataWithComplete;
  mover: MoverDetailData;
}

export interface CursorResponse {
  nextCursor: number;
  hasNext: boolean;
}

export interface OffsetResponse {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalCounts: number;
}

export interface serviceCounts {
  smallMove: number;
  houseMove: number;
  officeMove: number;
}
export interface requestCounts {
  total: number;
  designated: number;
}

// API 구조 참고
export interface GetMovingRequestListByMoverResponseData {
  list: MovingRequestDataByMover[];
  serviceCounts: serviceCounts;
  requestCounts: requestCounts;
  nextCursor: number | string;
  hasNext: boolean;
}
