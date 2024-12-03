import React from "react";
import GNB from "@/components/layout/GNB";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GNB />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
