import React from "react";
import GNB from "@/components/layout/GNB";

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
