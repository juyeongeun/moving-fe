import { setupServer } from "msw/node";
import { moverHandlers } from "./handlers/mover";

const handlers = [...moverHandlers];

export const server = setupServer(...handlers);
