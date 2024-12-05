import { cva } from "class-variance-authority";

type GrayLabelProps = {
  children: React.ReactNode;
  variant?: "border" | "solid";
  size?: "fixed" | "responsive";
};

const grayLabelVariants = cva(
  "flex-shrink-0 w-fit text-md font-medium text-grayscale-400 py-0.5 px-1.5 rounded-[4px]",
  {
    variants: {
      variant: {
        border: "border-solid border-[1px] border-line-100 bg-bg-200",
        solid: "bg-bg-400 border-solid border-[1px] border-bg-400",
      },
      size: {
        fixed: "",
        responsive: "pc:text-2lg pc:px-2.5 pc:py-1",
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
