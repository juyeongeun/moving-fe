import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("전체");
  const options = ["전체", "옵션 1", "옵션 2", "옵션 3", "옵션 4"];

  return (
    <div className="relative max-w-[343px]">
      {/* 드롭다운 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-[190px] h-[64px] px-4 py-6 text-black bg-none border-[1px] border-solid text-pr-blue-300 border-pr-blue-300 rounded-[16px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:ring-opacity-50 transition-colors"
      >
        <span className="text-base font-medium">{selected}</span>
        <ChevronDown
          className={`w-5 h-5 text-pr-blue-300 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {/* 드롭다운 옵션 목록 */}
      <div
        className={`absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="border-[1px] border-solid border-line-200 rounded-lg overflow-hidden">
          {options.map((option, index) => (
            <li key={option}>
              <button
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors ${
                  selected === option ? "text-pr-blue-300" : "text-black"
                } ${
                  index !== options.length - 1 ? "border-b border-line-200" : ""
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
