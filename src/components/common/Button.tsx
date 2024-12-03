import React from "react";
import Image from "next/image";

interface ButtonProps {
  onClick: () => void;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "outlined";
  type?: "button" | "submit" | "reset";
  className?: string;
  withIcon?: boolean;
}

const Button = ({ ...props }: ButtonProps): JSX.Element => {
  const {
    onClick,
    width = "auto",
    height = "auto",
    radius = "16px",
    children,
    disabled = false,
    variant = "primary",
    type = "button",
    className = "",
    withIcon = false,
  } = props;

  const formatDimension = (value: string | number) => {
    if (typeof value === "number") return `${value}px`;
    if (typeof value === "string" && !isNaN(Number(value))) return `${value}px`;
    return value;
  };

  const variantClasses = {
    primary: {
      default: `bg-pr-blue-300 text-gray-50 text-lg font-semibold p-4 hover:bg-pr-blue-200`,
      disabled: "bg-gray-100 text-gray-50 cursor-not-allowed",
    },
    outlined: {
      default:
        "bg-transparent text-pr-blue-300 text-left border-[1px] border-pr-blue-300 hover:bg-pr-blue-50",
      disabled:
        "bg-transparent text-left text-gray-100 border-[1px] border-gray-100 cursor-not-allowed",
    },
  };

  const getStyles = () => ({
    width: formatDimension(width),
    height: formatDimension(height),
    borderRadius: formatDimension(radius),
  });

  const getClassNames = () => {
    const baseClasses = "button text-lg font-semibold px-6 py-4";
    const layoutClasses = withIcon ? "flex items-center justify-center" : "";
    const variantClass =
      variantClasses[variant][disabled ? "disabled" : "default"];

    return [baseClasses, layoutClasses, variantClass, className]
      .filter(Boolean)
      .join(" ");
  };

  const renderIcon = () => {
    if (!withIcon) return null;

    return (
      <Image
        src="/icons/ic_writing.svg"
        alt="writing icon"
        width={24}
        height={24}
        className="ml-1"
      />
    );
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={getStyles()}
      className={getClassNames()}
    >
      {children}
      {renderIcon()}
    </button>
  );
};

export default Button;
