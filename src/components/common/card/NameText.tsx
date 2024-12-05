import cn from "@/config/cn";
import { cva } from "class-variance-authority";

const nameVariants = cva("text-md font-semibold", {
  variants: {
    size: {
      responsive: "pc:text-lg",
      fixed: "",
    },
    defaultVariants: {
      size: "responsive",
      type: "mover",
    },
  },
});

const NameText = ({
  text,
  type,
  size,
  className,
}: {
  text: string;
  type: "mover" | "customer";
  size?: "responsive" | "fixed";
  className?: string;
}) => {
  const nameType = type === "mover" ? "기사님" : "고객님";

  return (
    <p className={cn(nameVariants({ size }), className)}>
      {text} <span>{nameType}</span>
    </p>
  );
};

export default NameText;
