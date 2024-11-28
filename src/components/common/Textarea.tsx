"use client";

import React, { useState } from "react";

// TODO: 에러 메시지 수정

interface TextareaProps {
  name?: string;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  xPadding?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
}

export default function TextField({
  name = "",
  placeholder = "",
  width = "auto",
  height = "auto",
  xPadding = "16px",
  value = "",
  onChange,
  className,
  error = "",
}: TextareaProps) {
  const [textareaValue, setTextareaValue] = useState<string>(value);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextareaValue(newValue);
    onChange && onChange(newValue);
  };

  const styles = {
    textarea: `textarea placeholder:text-grayscale-300 rounded-[16px] \
    py-[14px] text-black-400 text-xl font-regular resize-none \
    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent \
    focus:outline-none ${error ? "border border-pr-red-200" : "border-none"}`,
    container: "flex flex-col",
    errorMessage:
      "text-pr-red-200 text-lg font-medium text-left mt-[4px] mr-[8px]",
  };

  return (
    <div
      className={styles.container}
      style={{
        width: typeof width === "number" ? `${width}` : width,
      }}
    >
      <textarea
        name={name}
        placeholder={placeholder}
        value={textareaValue}
        onChange={handleTextareaChange}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          paddingLeft:
            typeof xPadding === "number" ? `${xPadding}px` : xPadding,
          paddingRight:
            typeof xPadding === "number" ? `${xPadding}px` : xPadding,
        }}
        className={`${styles.textarea} ${className}`}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
