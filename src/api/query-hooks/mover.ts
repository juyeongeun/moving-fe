import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMoverList } from "../mover";
import { moverKey } from "../queryKeys";
import { getMoverById } from "../mover";
import { MoverDetailData } from "@/types/mover";

//내가 찜한 기사님 목록 조회
export const useGetFavoriteMoverList = () => {
  return useInfiniteQuery({
    queryKey: moverKey.favorite(),
    queryFn: () =>
      getMoverList({
        isFavorite: true,
        limit: 10,
      }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: null,
  });
};

// 기사님 상세 페이지
export const useGetMoverDetail = (moverId: number) => {
  return useQuery({
    queryKey: moverKey.detail(moverId),
    queryFn: () => getMoverById(moverId),
    enabled: !!moverId,
  });
};
