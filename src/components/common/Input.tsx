"use client";

import Image from "next/image";
import React, { useState } from "react";
import assets from "@/variables/images";

// Error Messages 출력은 추후 수정해야함

interface InputProps {
  name: string;
  placeholder?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
}

export default function Input({
  name,
  placeholder = "",
  type = "text",
  width = "auto",
  height = "auto",
  className = "",
  value = "",
  error = "",
  onChange,
}: InputProps): JSX.Element {
  const styles = {
    container: "flex flex-col",
    inputContainer: "relative flex items-center",
    input: `input placeholder:text-grayscale-400 border-[1px] border-line-200 rounded-[16px] p-[14px] pr-10 \
      focus:border-[1px] focus:${
        error ? "border-pr-red-200" : "border-pr-blue-300"
      } focus:outline-none text-black-400 text-xl font-regular \
      ${error ? "border-pr-red-200" : "border-transparent"}`,
    authInput: "bg-white",
    defaultInput: "bg-bg-200",
    passwordIcon: "absolute cursor-pointer right-[14px]",
    errorMessage:
      "text-pr-red-200 text-lg font-medium text-right mt-[4px] mr-[8px]",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div
      className={styles.container}
      style={{
        width: typeof width === "number" ? `${width}` : width,
      }}
    >
      <div className={styles.inputContainer}>
        <input
          id={name}
          placeholder={placeholder}
          type={type === "password" && showPassword ? "text" : type}
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            height: typeof height === "number" ? `${height}px` : height,
          }}
          className={`${styles.input} ${
            className === "auth" ? styles.authInput : styles.defaultInput
          }`}
          value={inputValue}
          onChange={handleInputChange}
        />
        {type === "password" && (
          <Image
            src={
              showPassword
                ? assets.icons.visibilityOn
                : assets.icons.visibilityOff
            }
            width={24}
            height={24}
            alt={showPassword ? "Hide password" : "Show password"}
            onClick={togglePasswordVisibility}
            className={styles.passwordIcon}
          />
        )}
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
