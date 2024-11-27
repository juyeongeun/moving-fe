"use client";

import Image from "next/image";
import React, { useState } from "react";
import assets from "@/variables/images";

// Error Messages 출력은 추후 수정해야함

interface SearchInputProps {
  name: string;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  leftMargin?: string;
}

const styles = {
  container: "relative flex items-center",
  input:
    "input placeholder:text-grayscale-400  rounded-[16px] pr-10 focus:border-pr-blue-300 \
    focus:outline-none text-black-400 text-xl font-regular bg-bg-200",
  clearIcon: "absolute cursor-pointer right-[50px]",
  searchIcon: "absolute cursor-pointer",
};

export default function Input({
  name,
  placeholder = "",
  width = "auto",
  height = "auto",
  leftMargin = "16px",
}: SearchInputProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div
      className={styles.container}
      style={{
        width: typeof width === "number" ? `${width}` : width,
      }}
    >
      <input
        id={name}
        placeholder={placeholder}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          paddingLeft: inputValue
            ? leftMargin
            : leftMargin === "16px"
            ? "46px"
            : "62px",
        }}
        className={`${styles.input} `}
      />

      {inputValue && (
        <Image
          src={assets.icons.x}
          width={24}
          height={24}
          alt="clear"
          onClick={clearInput}
          className={styles.clearIcon}
        />
      )}

      <Image
        src={assets.icons.search}
        width={24}
        height={24}
        alt="search"
        style={{
          left: inputValue ? "unset" : leftMargin,
          right: inputValue ? "14px" : "unset",
        }}
        className={styles.searchIcon}
      />
    </div>
  );
}
