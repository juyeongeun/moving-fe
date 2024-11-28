"use client";

import Image from "next/image";
import React, { useState } from "react";
import assets from "@/variables/images";

// Error Messages 출력은 추후 수정해야함

interface InputProps {
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
}

export default function Input({
  name,
  placeholder = "",
  type = "text",
  className = "",
  value = "",
  error = "",
  onChange,
}: InputProps): JSX.Element {
  const styles = {
    container: `relative flex flex-col
  mobile:w-[327px]
  tablet:w-full
  pc:w-[955px]`,
    inputContainer: "relative flex items-center",
    input: `
      mobile:w-[327px]
      mobile:text-lg
      mobile:p-[12px]
      mobile:border-[0.5px]

      pc:w-[640px]
      pc:text-xl
      pc:px-[14px] pc:py-[16px]
      pc:border-[1px]
      
      input placeholder:text-grayscale-400  
      border-line-200 
      rounded-[16px] 
      pr-10
      ${error ? "border-pr-red-200" : "border-transparent"}
      focus:border-[1px] 
      focus:${error ? "border-pr-red-200" : "border-pr-blue-300"} 
      focus:outline-none 
      text-black-400 
      font-regular
    `
      .replace(/\s+/g, " ")
      .trim(),
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
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          id={name}
          placeholder={placeholder}
          type={type === "password" && showPassword ? "text" : type}
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
