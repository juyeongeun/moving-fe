import { moverHandlers } from "./mover";
import { reviewHandlers } from "./review";

// 핸들러 여기에 등록
export const handlers = [...moverHandlers, ...reviewHandlers];

export default handlers;
