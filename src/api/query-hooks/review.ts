import { useQuery } from "@tanstack/react-query";
import { getMyReviewList, getAvailableReviewList } from "../review";
import { reviewKey } from "../queryKeys";

export const useGetMyReviewList = () => {
  return useQuery({
    queryKey: reviewKey.me(),
    queryFn: () => getMyReviewList(),
  });
};

export const useGetAvailableReviewList = () => {
  return useQuery({
    queryKey: reviewKey.available(),
    queryFn: () => getAvailableReviewList(),
  });
};
