import { moverHandlers } from "./mover";
import { reviewHandlers } from "./review";

export const handlers = [...moverHandlers, ...reviewHandlers];

export default handlers;
