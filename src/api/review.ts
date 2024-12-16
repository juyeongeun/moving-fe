import axiosInstance from "./axios";
import { type OffsetResponse } from "@/types/api";
import { type MyReviewCardData } from "@/components/cards/MyReviewCard";
import { ReviewMoverData } from "@/components/common/card/ReviewMover";

const PATH = "/reviews";

interface GetMyReviews extends OffsetResponse {
  list: MyReviewCardData[] | [];
}

// 내가 작성한 리뷰 부를 api
export const getMyReviewList = async (): Promise<GetMyReviews> => {
  const response = await axiosInstance.get(`${PATH}/me`);
  return response.data;
};

interface GetAvailableReviews extends OffsetResponse {
  list: ReviewMoverData[] | [];
}
// 작성 가능한 리뷰 부를 api
export const getAvailableReviewList =
  async (): Promise<GetAvailableReviews> => {
    const response = await axiosInstance.get(`${PATH}/available`);
    return response.data;
  };
