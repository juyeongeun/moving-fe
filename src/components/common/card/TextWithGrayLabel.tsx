import cn from "@/config/clsx";
import GrayLabel from "./GrayLabel";
import { cva } from "class-variance-authority";

const textWithGrayLabelVariants = cva("flex gap-2 items-center", {
  variants: {
    size: {
      responsive: "pc:gap-[12px] ",
      fixed: "",
    },
  },
  defaultVariants: {
    size: "responsive",
  },
});

const textVariants = cva("text-md font-medium truncate", {
  variants: {
    size: {
      responsive: "pc:text-2lg",
      fixed: "",
    },
  },
  defaultVariants: {
    size: "responsive",
  },
});

const TextWithGrayLabel = ({
  label,
  text,
  className,
  size = "responsive",
}: {
  label: string;
  text: string;
  className?: string;
  size?: "responsive" | "fixed";
}) => {
  return (
    <span className={cn(textWithGrayLabelVariants({ size }), className)}>
      <GrayLabel size={size}>{label}</GrayLabel>
      <p className={cn(textVariants({ size }))}>{text}</p>
    </span>
  );
};

export default TextWithGrayLabel;
