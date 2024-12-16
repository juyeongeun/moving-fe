export const moverKey = {
  all: ["mover"] as const,
  lists: () => [...moverKey.all, "lists"] as const,
  list: (params = {}) => [...moverKey.lists(), { ...params }] as const, // 기사 찾기 리스트
  details: () => [...moverKey.all, "detail"] as const,
  detail: (moverId: string) => [...moverKey.details(), moverId] as const, // 기사 상세 페이지
  favorite: (params = {}) => [...moverKey.list(params), "favorite"] as const, // 내가 찜한 기사 목록
};

export const reviewKey = {
  all: ["review"] as const,
  lists: () => [...reviewKey.all, "lists"] as const,
  list: (params = {}) => [...reviewKey.lists(), { ...params }] as const, //리뷰 리스트
  me: () => [...reviewKey.lists(), "me"] as const, // 내가 쓴 리뷰
  available: () => [...reviewKey.list(), "available"] as const, // 내가 작성할 수 있는 리뷰
};
