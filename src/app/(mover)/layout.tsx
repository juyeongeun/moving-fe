import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main className="px-6 py-8 tablet:px-[72px] tablet:py-6 desktop:px-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
