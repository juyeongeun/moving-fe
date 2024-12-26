import MoverList from "./moverList";

import { getMoverList } from "@/api/mover";

import { MOVER_DEFAULT_PAGE_SIZE } from "@/variables/mover";

export default async function FindMoverList() {
  const initialData = await getMoverList({
    limit: MOVER_DEFAULT_PAGE_SIZE,
    nextCursorId: null,
  });

  return <MoverList initialData={initialData} />;
}
