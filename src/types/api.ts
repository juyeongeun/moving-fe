import { QuoteData } from "./quote";
import { MovingRequestDataWithComplete } from "./moving-request";
import { MoverDetailData } from "./mover";

// API 구조 참고
export interface GetQuoteApiResponseData extends QuoteData {
  isConfirmed: boolean;
  movingRequest: MovingRequestDataWithComplete;
  mover: MoverDetailData;
}
