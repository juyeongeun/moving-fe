"use client";

import { useEffect, useState } from "react";

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
          const initMsw = await import("../../mocks").then(
            (res) => res.default
          );
          await initMsw();
          setMswReady(true);
        } else {
          setMswReady(true);
        }
      } catch (err) {
        setError(err as Error);
        setMswReady(true);
      }
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (error) {
    console.error("MSW initialization failed:", error);
  }

  return <>{children}</>;
};

export default MSWComponent;
