import { useQuery } from "@tanstack/react-query";
import {
  getMyReviewList,
  getAvailableReviewList,
  getMoversReviewList,
} from "../review";
import { reviewKey } from "../queryKeys";
import { OffsetParams } from "@/types/api";

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

export const useGetMoversReviewList = ({
  moverId,
  pageNum,
  pageSize,
}: OffsetParams & { moverId: number }) => {
  return useQuery({
    queryKey: reviewKey.mover(moverId),
    queryFn: () => getMoversReviewList({ moverId, pageNum, pageSize }),
  });
};
