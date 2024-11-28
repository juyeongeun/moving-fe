import React from "react";

interface ChatFieldProps {
  radius?: string | number;
  value?: string;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export default function ChatField({
  radius = "24px",
  value = "",
  variant = "default",
  className = "",
}: ChatFieldProps): JSX.Element {
  const variantClasses = {
    default: `bg-pr-grayscale-50 text-black-400 text-md px-[20px] py-[12px]`,
    primary: `bg-pr-blue-300 text-white text-left text-md px-[20px] py-[12px]`,
    secondary: `bg-pr-blue-100 text-pr-blue-300 text-md px-[20px] py-[12px]`,
  };

  const borderRadiusStyles = (variant: string) => {
    switch (variant) {
      case "primary":
        return {
          borderTopLeftRadius: radius,
          borderTopRightRadius: "0",
          borderBottomRightRadius: radius,
          borderBottomLeftRadius: radius,
        };
      case "secondary":
        return {
          borderTopLeftRadius: radius,
          borderTopRightRadius: "0",
          borderBottomRightRadius: radius,
          borderBottomLeftRadius: radius,
        };
      case "default":
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
    <p
      style={{
        display: "inline-block",
        boxShadow: "2px 2px 8px 0px #E0E0E033",
        wordBreak: "break-word",
        ...borderRadiusStyles(variant),
      }}
      className={`${variantClasses[variant]} ${className}`}
    >
      {value}
    </p>
  );
}
