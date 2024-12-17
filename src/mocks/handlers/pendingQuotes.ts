import { http, HttpResponse } from "msw";
import { MovingRequestResponse } from "../types/quotes";
import { MOVING_REQUESTS } from "../data/pendingQuotes";

export const movingRequestHandlers = [
  http.get("/api/moving-request/pending-quotes", () => {
    return HttpResponse.json(MOVING_REQUESTS);
  }),

  http.get("/api/moving-request/:id/quotes", ({ params }) => {
    const { id } = params;
    const quote = MOVING_REQUESTS.list.find((item) => item.id === Number(id));

    if (!quote) {
      return HttpResponse.json(
        {
          path: `/api/moving-request/${id}/quotes`,
          method: "GET",
          message: "Not Found",
          data: { message: "활성중인 이사요청이 없습니다." },
          date: new Date().toISOString(),
        },
        { status: 404 }
      );
    }

    return HttpResponse.json(quote);
  }),
];

export default movingRequestHandlers;
