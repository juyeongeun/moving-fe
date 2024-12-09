import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
