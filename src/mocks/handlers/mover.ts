import { http, HttpResponse } from "msw";
import { MOVER_LIST } from "../data/mover";

interface QueryParams {
  nextCursorId?: number;
  order?: "review" | "career" | "confirm" | "rating";
  limit?: number | 10;
  keyword?: string;
  region?: number;
  service?: number;
  isFavorite?: boolean;
}

export const moverHandlers = [
  http.get("/api/movers", ({ request }) => {
    const url = new URL(request.url);
    const params: QueryParams = {
      nextCursorId: Number(url.searchParams.get("nextCursorId")) || undefined,
      order: url.searchParams.get("order") as QueryParams["order"],
      limit: Number(url.searchParams.get("limit")) || 10,
      keyword: url.searchParams.get("keyword") || undefined,
      region: Number(url.searchParams.get("region")) || undefined,
      service: Number(url.searchParams.get("service")) || undefined,
      isFavorite: url.searchParams.get("isFavorite") === "true",
    };

    let filteredList = [...MOVER_LIST.list];

    // Apply filters
    if (params.keyword) {
      filteredList = filteredList.filter((mover) =>
        mover.nickname.includes(params.keyword!)
      );
    }

    if (params.region) {
      filteredList = filteredList.filter((mover) =>
        mover.regions.includes(params.region!)
      );
    }

    if (params.service) {
      filteredList = filteredList.filter((mover) =>
        mover.services.includes(params.service!)
      );
    }

    if (params.isFavorite) {
      filteredList = filteredList.filter((mover) => mover.isFavorite);
    }

    // Apply sorting
    if (params.order) {
      filteredList.sort((a, b) => {
        switch (params.order) {
          case "rating":
            return b.ratings.average - a.ratings.average;
          case "review":
            return b.reviewCount - a.reviewCount;
          case "career":
            return b.career - a.career;
          case "confirm":
            return b.confirmCount - a.confirmCount;
          default:
            return 0;
        }
      });
    }

    // Apply cursor pagination
    if (params.nextCursorId) {
      const cursorIndex = filteredList.findIndex(
        (mover) => mover.id === params.nextCursorId
      );
      filteredList = filteredList.slice(cursorIndex);
    }

    // Apply limit (with default value of 10)
    const limit = params.limit ?? 10;
    const limitedList = filteredList.slice(0, limit);
    const nextCursor =
      limitedList.length < limit || !filteredList[limit]
        ? null
        : filteredList[limit].id;

    return HttpResponse.json({
      list: limitedList,
      total: filteredList.length,
      nextCursor,
    });
  }),

  http.get("/api/movers/:id", ({ params }) => {
    const { id } = params;
    const { list } = MOVER_LIST;
    const mover = list.find((m) => m.id === Number(id));

    if (!mover) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(mover);
  }),
];
