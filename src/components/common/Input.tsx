"use client";

import Image from "next/image";
import React, { useState } from "react";
import assets from "@/variables/images";

interface InputProps {
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  isAuth?: boolean;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
}

export default function Input({
  name,
  placeholder = "",
  type = "text",
  className = "",
  isAuth = false,
  value = "",
  error = "",
  onChange,
}: InputProps): JSX.Element {
  const styles = {
    container: `relative flex flex-col w-full`,
    inputContainer: "relative flex items-center",
    input: `input
      w-full text-lg p-[12px] border-[0.5px]
      placeholder:text-grayscale-400  
      ${
        error
          ? "border-pr-red-200"
          : value
          ? "border-pr-blue-300"
          : "border-line-200"
      }
      rounded-[16px] 
      pr-10
      focus:outline-none 
      focus:border-[1px] 
      ${error ? "focus:border-pr-red-200" : "focus:border-pr-blue-300"}
      text-black-400 
      font-regular
      pc:text-xl
      pc:px-[14px] pc:py-[16px]
      pc:border-[1px]
    `
      .replace(/\s+/g, " ")
      .trim(),
    authInput: "bg-white",
    defaultInput: "bg-bg-200",
    passwordIcon: "absolute cursor-pointer right-[14px]",
    errorMessage: `text-pr-red-200 text-sm font-medium text-right mt-[4px] mr-[8px]
    pc:text-lg`,
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
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          id={name}
          placeholder={placeholder}
          type={type === "password" && showPassword ? "text" : type}
          className={`${styles.input} ${className} ${
            isAuth ? styles.authInput : styles.defaultInput
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
