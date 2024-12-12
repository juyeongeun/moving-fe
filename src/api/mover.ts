import axiosInstance from "./axios";

const PATH = "/movers";

interface GetMoverListParams {
  nextCursorId?: number | null;
  order?: string;
  limit?: number;
  keyword?: string;
  region?: number;
  service?: number;
  isFavorite?: boolean;
}

export const getMoverList = async ({
  nextCursorId,
  order,
  limit,
  keyword,
  region,
  service,
  isFavorite = false,
}: GetMoverListParams) => {
  const params = {
    ...(nextCursorId && { nextCursorId: nextCursorId }),
    ...(order && { order: order }),
    ...(limit && { limit: limit }),
    ...(keyword && { keyword: keyword }),
    ...(region && { region: region }),
    ...(service && { service: service }),
    ...(isFavorite && { isFavorite: isFavorite }),
  };

  const response = await axiosInstance.get(PATH, { params });
  return response.data;
};

interface setMoverFavoriteProps {
  moverId: number;
  favorite: boolean;
}

export async function setMoverFavorite({
  moverId,
  favorite,
}: setMoverFavoriteProps) {
  const path = `${PATH}/${moverId}/favorite?favorite=${favorite}`;
  const res = await axiosInstance.post(path);

  console.log("찜하기 버튼 클릭 - 찜하기 API 호출");

  return res;
}
