"use client";
import { useState } from "react";

interface Tab {
  id: number;
  label: string;
}

interface QuoteGNBProps {
  initialTab?: number;
  onTabChange?: (tabId: number) => void;
  tabs: Tab[];
}

export const QuoteGNB = ({
  initialTab = 0,
  onTabChange,
  tabs,
}: QuoteGNBProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <nav
      role="navigation"
      aria-label="견적 내역 탭"
      className="w-full border-b border-gray-200"
    >
      <div className="max-w-[1400px] px-5 mx-auto flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              py-4 text-xl font-semibold
              transition-all duration-500
              border-b-2 min-w-[120px]
              ${
                activeTab === tab.id
                  ? "text-black-400 border-black-400"
                  : "text-gray-400 border-transparent"
              }
              hover:text-black
            `}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default QuoteGNB;
