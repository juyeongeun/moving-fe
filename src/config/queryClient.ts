import { QueryClient, MutationCache } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
  // 나중에 모달로 Mutation 에러 처리하기 위해 추가
  // mutationCache: new MutationCache({
  //   onError: (error) => {
  //     console.error('Mutation Error', error.message || 'Unknown Error');
  //     onModalOpen({ msg: error.message });
  //   },
});

export default queryClient;
