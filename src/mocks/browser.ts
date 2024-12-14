import { setupWorker } from "msw/browser";
import { moverHandlers } from "./handlers/mover";

const handlers = [...moverHandlers];
export const worker = setupWorker(...handlers);
