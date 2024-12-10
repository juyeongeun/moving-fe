export const moverKey = {
  all: ["mover"] as const,
  lists: () => [...moverKey.all, "lists"] as const,
  list: (params = {}) => [...moverKey.lists(), { ...params }] as const,
  details: () => [...moverKey.all, "detail"] as const,
  detail: (moverId: string) => [...moverKey.details(), moverId] as const,
  favorite: (params = {}) => [...moverKey.list(params), "favorite"] as const,
};

export const reviewKey = {
  all: ["review"] as const,
  lists: () => [...reviewKey.all, "lists"] as const,
  list: (params = {}) => [...reviewKey.lists(), { ...params }] as const,
};
