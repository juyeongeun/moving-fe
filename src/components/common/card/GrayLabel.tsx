import { cva } from "class-variance-authority";

type GrayLabelProps = {
  children: React.ReactNode;
  variant?: "border" | "solid";
  size?: "fixed" | "responsive";
};

const grayLabelVariants = cva(
  "box-border flex-shrink-0 flex items-center w-fit text-md font-medium text-grayscale-400 px-1.5 h-[28px] rounded-[4px]",
  {
    variants: {
      variant: {
        border: "border-solid border-[1px] border-line-100 bg-bg-200",
        solid: "bg-bg-400 border-solid border-[1px] border-bg-400",
      },
      size: {
        fixed: "",
        responsive: "pc:text-2lg pc:h-[34px]",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "responsive",
    },
  }
);

const GrayLabel = ({ children, variant, size }: GrayLabelProps) => {
  return (
    <span className={grayLabelVariants({ variant, size })}>{children}</span>
  );
};

export default GrayLabel;
