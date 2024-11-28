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
    default: `
      bg-white text-black-400
      mobile:text-md mobile:px-[20px] mobile:py-[12px]
      pc:text-2lg pc:px-[40px] pc:py-[20px]
    `,
    primary: `
      bg-pr-blue-300 text-white text-left
      mobile:text-md mobile:px-[20px] mobile:py-[12px]
      pc:text-2lg pc:px-[24px] pc:py-[16px]
    `,
    secondary: `
      bg-pr-blue-100 text-pr-blue-300
      mobile:text-md mobile:px-[20px] mobile:py-[12px]
      pc:text-2lg pc:px-[24px] pc:py-[16px]
    `,
  };

  const styles = {
    container: "mobile:w-full tablet:w-[332px] pc:w-[1200px]",
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
    <div className={styles.container}>
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
    </div>
  );
}
