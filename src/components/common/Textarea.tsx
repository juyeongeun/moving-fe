"use client";

import React, { useState } from "react";

// TODO: 에러 메시지 수정

interface TextareaProps {
  name?: string;
  placeholder?: string;
  type?: "modal" | "form"; // modal은 모달 형식, form은 폼 형식에 들어가는 textarea
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
}

export default function Textarea({
  name = "",
  placeholder = "",
  value = "",
  onChange,
  className,
  error = "",
  type = "form",
}: TextareaProps) {
  const [textareaValue, setTextareaValue] = useState<string>(value);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextareaValue(newValue);
    onChange && onChange(newValue);
  };

  const getResponsiveStyles = () => {
    const baseStyles = "h-[160px]";

    return type === "modal"
      ? `w-full ${baseStyles} tablet:w-full pc:w-[560px]`
      : `w-full ${baseStyles}`;
  };

  const styles = {
    textarea: `mobile:px-[16px] mobile:text-lg pc:px-[24px] pc:text-xl
    textarea placeholder:text-grayscale-300 rounded-[16px] \
    py-[14px] text-black-400 font-regular resize-none \
    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent \
    focus:outline-none ${getResponsiveStyles()} \
    ${error ? "border border-pr-red-200" : "border-none"}`,
    container: "flex flex-col w-full",
    errorMessage:
      "text-pr-red-200 text-lg font-medium text-left mt-[4px] mr-[8px]",
  };

  return (
    <div className={styles.container}>
      <textarea
        name={name}
        placeholder={placeholder}
        value={textareaValue}
        onChange={handleTextareaChange}
        className={`${styles.textarea} ${className}`}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
