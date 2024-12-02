import React from "react";

interface ChatFieldProps {
  radius?: string | number;
  value?: string;
  variant?: "default" | "primary" | "secondary";
  className?: string;
  type?: "custom" | "admin";
}

export default function ChatField({
  radius = "24px",
  value = "",
  variant = "default",
  className = "",
  type = "admin",
}: ChatFieldProps): JSX.Element {
  const variantClasses = {
    default: `
      bg-white text-black-400
      text-md px-[20px] py-[12px]
      pc:text-2lg pc:px-[40px] pc:py-[20px]
    `,
    primary: `
      bg-pr-blue-300 text-white text-left
      text-md px-[20px] py-[12px]
      pc:text-2lg pc:px-[24px] pc:py-[16px]
    `,
    secondary: `
      bg-pr-blue-100 text-pr-blue-300
      text-md px-[20px] py-[12px]
      pc:text-2lg pc:px-[24px] pc:py-[16px]
    `,
  };

  const styles = {
    container: "w-full tablet:w-[332px] pc:w-[1200px]",
  };

  const borderRadiusStyles = (type: string) => {
    switch (type) {
      case "custom":
        return {
          borderTopLeftRadius: radius,
          borderTopRightRadius: "0",
          borderBottomRightRadius: radius,
          borderBottomLeftRadius: radius,
        };
      case "admin":
      default:
        return {
          borderTopLeftRadius: "0",
          borderTopRightRadius: radius,
          borderBottomRightRadius: radius,
          borderBottomLeftRadius: radius,
        };
    }
  };

  return (
    <div className={styles.container}>
      <p
        style={{
          display: "inline-block",
          boxShadow: "2px 2px 8px 0px #E0E0E033",
          wordBreak: "break-word",
          ...borderRadiusStyles(type),
        }}
        className={`${variantClasses[variant]} ${className}`}
      >
        {value}
      </p>
    </div>
  );
}
