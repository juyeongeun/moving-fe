import { moverHandlers } from "./mover";
import { quoteHandlers } from "./quote";
import { reviewHandlers } from "./review";

// 핸들러 여기에 등록
export const handlers = [...moverHandlers, ...reviewHandlers, ...quoteHandlers];

export default handlers;
