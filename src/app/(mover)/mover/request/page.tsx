import RequestForm from "./RequestForm";

import { getMovingRequestListByMover } from "@/api/movingRequest";

const PAGE_SIZE = 20;

export default async function RequestListPage({}) {
  const initialData = await getMovingRequestListByMover({
    keyword: "",
    smallMove: true,
    houseMove: true,
    officeMove: true,
    isDesignated: null,
    orderBy: "recent",
    limit: PAGE_SIZE,
    cursor: null,
  });

  return <RequestForm initialData={initialData} />;
}
