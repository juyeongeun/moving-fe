export const MOVING_REQUESTS = {
  currentPage: 1,
  pageSize: 10,
  totalPage: 1,
  totalCount: 3, // 데이터 수
  list: [
    {
      id: 8,
      service: 1, // 서비스 종류 (예: 1 = "사무실 이사")
      movingDate: "2024-12-12T00:00:00.000Z", // 이사 예정일
      pickupAddress: "서울 중구 삼일대로 343", // 출발지
      dropOffAddress: "서울 강남구 선릉로 428", // 도착지
      name: "김철수", // 고객 이름
      requestDate: "2024-12-10T17:55:22.589Z", // 요청일
      isConfirmed: false, // 요청 확인 여부
    },
    {
      id: 9,
      service: 2, // 서비스 종류 (예: 2 = "가전 이사")
      movingDate: "2024-12-15T00:00:00.000Z",
      pickupAddress: "서울 종로구 세운상가 123",
      dropOffAddress: "서울 성동구 서울숲 456",
      name: "이영희",
      requestDate: "2024-12-14T10:15:30.000Z",
      isConfirmed: true,
    },
    {
      id: 10,
      service: 3, // 서비스 종류 (예: 3 = "가구 이사")
      movingDate: "2024-12-18T00:00:00.000Z",
      pickupAddress: "서울 서초구 반포대로 100",
      dropOffAddress: "서울 송파구 오금로 150",
      name: "박지민",
      requestDate: "2024-12-17T08:30:45.000Z",
      isConfirmed: false,
    },
  ],
};

export const MOVING_REQUEST_QUOTES = {
  id: 8, // 이사요청 ID
  list: [
    {
      id: 101, // 견적서 ID
      cost: 150000, // 견적 비용
      comment: "2024년 12월 이사에 대한 견적입니다.", // 견적서 코멘트
      service: 1, // 서비스 종류 (예: 1 = "사무실 이사")
      isConfirmed: false, // 견적서 확정 여부
      mover: {
        id: 201, // 이사 업체 ID
        imageUrl: "https://example.com/mover-image.jpg", // 이사 업체 이미지 URL
        nickname: "이사왕", // 이사 업체 닉네임
        career: 5, // 이사 업체 경력 (년)
        isDesignated: true, // 지정 이사 여부
        isFavorite: true, // 즐겨찾기 여부
        reviewCount: 120, // 리뷰 수
        favoriteCount: 85, // 즐겨찾기 수
        confirmCount: 50, // 확인된 수
        rating: {
          1: 5, // 1점 리뷰 수
          2: 3, // 2점 리뷰 수
          3: 10, // 3점 리뷰 수
          4: 50, // 4점 리뷰 수
          5: 52, // 5점 리뷰 수
          average: 4.4, // 평균 평점
          totalCount: 120, // 총 리뷰 수
          totalSum: 500, // 총 평점 합계
        },
      },
    },
    {
      id: 102,
      cost: 180000,
      comment: "추가 서비스 요청에 대한 견적서입니다.",
      service: 2, // 예: 2 = "가전 이사"
      isConfirmed: true, // 확정된 견적서
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
