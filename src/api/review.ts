import axiosInstance from "./axios";

const PATH = "/reviews";

//(일반유저) 작성 가능한 리뷰, 내가 작성한 리뷰 부를 api
export const getReviewList = async () => {
  const response = await axiosInstance.get(PATH);
  return response.data;
};
