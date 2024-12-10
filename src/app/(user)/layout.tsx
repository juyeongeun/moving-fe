import Main from "@/components/layout/Main";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const GREY_BG_PATHS = ["/me/mover", "/me/review"];

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Main grayBgPaths={GREY_BG_PATHS}>{children}</Main>
    </>
  );
};

export default Layout;
