import { http, HttpResponse } from "msw";
import { MOVING_REQUESTS, MOVING_REQUEST_QUOTES } from "../data/movingQuotes"; // 데이터 import

export const movingRequestHandlers = [
  // 1. 고객의 이사 요청 목록 조회
  http.get("/api/moving-requests/by-customer", ({ request }) => {
    const url = new URL(request.url);
    const pageSize = parseInt(url.searchParams.get("pageSize") || "5", 10);
    const pageNum = parseInt(url.searchParams.get("pageNum") || "1", 10);

    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedRequests = MOVING_REQUESTS.list.slice(startIndex, endIndex);

    if (paginatedRequests.length === 0) {
      return HttpResponse.json(
        {
          path: "/moving-requests/by-customer",
          method: "GET",
          message: "Not Found",
          data: { message: "조건의 맞는 이사요청 목록이 없습니다." },
          date: new Date().toISOString(),
        },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      currentPage: pageNum,
      pageSize: pageSize,
      totalPage: Math.ceil(MOVING_REQUESTS.totalCount / pageSize),
      totalCount: MOVING_REQUESTS.totalCount,
      list: paginatedRequests,
    });
  }),

  // 2. 특정 이사 요청 ID에 대한 견적서 목록 조회
  http.get("/api/moving-request/:id/quotes", ({ params, request: req }) => {
    const { id } = params;
    const url = new URL(req.url);
    const isCompleted = url.searchParams.get("isCompleted") === "true";

    // 해당 이사 요청 ID 찾기
    const request = MOVING_REQUESTS.list.find((item) => item.id === Number(id));

    if (!request) {
      return HttpResponse.json(
        {
          path: `/api/moving-request/${id}/quotes`,
          method: "GET",
          message: "Not Found",
          data: { message: "견적서 목록이 없습니다." },
          date: new Date().toISOString(),
        },
        { status: 404 }
      );
    }

    // 견적서 목록에서 필터링
    const filteredQuotes = MOVING_REQUEST_QUOTES.list.filter((quote) =>
      isCompleted ? quote.isConfirmed : true
    );

    if (filteredQuotes.length === 0) {
      return HttpResponse.json(
        {
          path: `/api/moving-request/${id}/quotes`,
          method: "GET",
          message: "Not Found",
          data: { message: "견적서 목록이 없습니다." },
          date: new Date().toISOString(),
        },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      id: request.id,
      list: filteredQuotes,
    });
  }),
];

export default movingRequestHandlers;
