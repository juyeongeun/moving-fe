"use client";

import { useEffect } from "react";

export function MSWComponent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      import("@/mocks/browser").then(({ startWorker }) => startWorker());
    }
  }, []);

  return <>{children}</>;
}

export default MSWComponent;
