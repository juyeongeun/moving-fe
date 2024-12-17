import { moverHandlers } from "./mover";
import { reviewHandlers } from "./review";
import { movingRequestHandlers } from "./pendingQuotes";

// 핸들러 여기에 등록
export const handlers = [
  ...moverHandlers,
  ...reviewHandlers,
  ...movingRequestHandlers,
];

export default handlers;
