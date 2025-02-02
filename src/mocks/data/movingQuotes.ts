export const PAST_REQUESTS = {
  currentPage: 1,
  pageSize: 10,
  totalPage: 1,
  totalCount: 3,
  list: [
    {
      id: 8,
      service: 1,
      movingDate: "2024-12-12T00:00:00.000Z",
      pickupAddress: "서울 중구 삼일대로 343",
      dropOffAddress: "서울 강남구 선릉로 428",
      name: "김철수",
      requestDate: "2024-12-10T17:55:22.589Z",
      isConfirmed: false,
    },
    {
      id: 9,
      service: 2,
      movingDate: "2024-12-15T00:00:00.000Z",
      pickupAddress: "서울 종로구 세운상가 123",
      dropOffAddress: "서울 성동구 서울숲 456",
      name: "이영희",
      requestDate: "2024-12-14T10:15:30.000Z",
      isConfirmed: true,
    },
    {
      id: 10,
      service: 3,
      movingDate: "2024-12-18T00:00:00.000Z",
      pickupAddress: "서울 서초구 반포대로 100",
      dropOffAddress: "서울 송파구 오금로 150",
      name: "박지민",
      requestDate: "2024-12-17T08:30:45.000Z",
      isConfirmed: false,
    },
  ],
};

export const MOVING_REQUESTED_QUOTES = {
  id: 8,
  list: [
    {
      id: 101,
      cost: 150000,
      comment: "2024년 12월 이사에 대한 견적입니다.",
      service: 1,
      isConfirmed: false,
      mover: {
        id: 201,
        imageUrl: "https://example.com/mover-image.jpg",
        nickname: "이사왕",
        career: 5,
        isDesignated: true,
        isFavorite: true,
        reviewCount: 120,
        favoriteCount: 85,
        confirmCount: 50,
        rating: {
          1: 5,
          2: 3,
          3: 10,
          4: 50,
          5: 52,
          average: 4.4,
          totalCount: 120,
          totalSum: 500,
        },
      },
    },
    {
      id: 102,
      cost: 180000,
      comment: "추가 서비스 요청에 대한 견적서입니다.",
      service: 2,
      isConfirmed: true,
      mover: {
        id: 202,
        imageUrl: "https://example.com/mover-image2.jpg",
        nickname: "이사짱",
        career: 8,
        isDesignated: false,
        isFavorite: false,
        reviewCount: 200,
        favoriteCount: 120,
        confirmCount: 70,
        rating: {
          1: 8,
          2: 12,
          3: 30,
          4: 60,
          5: 90,
          average: 4.3,
          totalCount: 200,
          totalSum: 860,
        },
      },
    },
  ],
};
