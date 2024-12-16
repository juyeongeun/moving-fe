import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);

export const startWorker = async () => {
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    return worker.start({
      onUnhandledRequest: (request, print) => {
        const allowedPaths = [
          "/_next/",
          "/static/",
          "/assets/",
          ".png",
          ".svg",
          ".css",
          ".woff",
          ".woff2",
          "blob:",
        ];

        if (allowedPaths.some((path) => request.url.includes(path))) {
          return;
        }

        if (request.url.includes("/api/")) {
          print.warning();
        }
      },
    });
  }
};
