import { axiosInstance } from "./axios";
import { type OffsetResponse, type OffsetParams } from "@/types/api";
import { type MyReviewCardData } from "@/components/cards/MyReviewCard";
import { type ReviewMoverData } from "@/components/common/card/ReviewMover";
import { type CustomerReviewData } from "@/components/review/CustomerReview";

const PATH = "/reviews";

// 내가 작성한 리뷰 부를 api
export const getMyReviewList = async (): Promise<
  OffsetResponse<MyReviewCardData>
> => {
  const response = await axiosInstance.get(`${PATH}/me`);
  return response.data;
};

// 작성 가능한 리뷰 부를 api
export const getAvailableReviewList = async (): Promise<
  OffsetResponse<ReviewMoverData>
> => {
  const response = await axiosInstance.get(`${PATH}/available`);
  return response.data;
};

// 특정 기사의 리뷰 목록 부를 api
export const getMoversReviewList = async ({
  moverId,
  pageNum = 1,
  pageSize = 5,
}: OffsetParams & { moverId: number }): Promise<
  OffsetResponse<CustomerReviewData>
> => {
  const response = await axiosInstance.get(`${PATH}/mover/${moverId}`, {
    params: { pageNum, pageSize },
  });
  return response.data;
};
