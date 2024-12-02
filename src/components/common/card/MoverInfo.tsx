import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/config/clsx";
import assets from "@/variables/images";
import Image from "next/image";
import FavoriteUi from "./FavoriteUi";
import LineSeparator from "../LineSeparator";
import ProfileImage from "./ProfileImage";

interface MoverInfoProps {
  mover: {
    nickName: string;
    career: number;
    reviewCount: number;
    ratings: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      average: number;
    };
    confirmCount: number;
    imgUrl: string | null;
    isFavorite: boolean;
    favoriteCount: number;
  };
  size?: "fixed" | "responsive";
}

const moverExperienceVariants = cva(
  "flex items-center text-sm font-medium text-black-300 gap-2.5",
  {
    variants: {
      size: {
        fixed: "",
        responsive: "pc:text-lg",
      },
    },
    defaultVariants: {
      size: "responsive",
    },
  }
);

const MoverExperience = ({
  ratings,
  career,
  reviewCount,
  confirmCount,
  className,
  size,
}: Partial<MoverInfoProps["mover"]> & {
  className?: string;
  size?: MoverInfoProps["size"];
}) => {
  const isResponsive = size === "responsive";

  return (
    <div className={cn(moverExperienceVariants({ size, className }))}>
      <div className="inline-flex items-center gap-0.5 ">
        <Image
          className={cn("w-5 h-5", {
            "pc:w-6 pc:h-6": isResponsive,
          })}
          src={assets.icons.starActive}
          alt="star"
          width={20}
          height={20}
        />
        {ratings?.average?.toFixed(1)}
        <span className="text-grayscale-300">{`(${reviewCount})`}</span>
      </div>
      <LineSeparator />
      <span className="flex items-center gap-1">
        <span className="text-grayscale-300">경력</span>
        {`${career}년`}
      </span>
      <LineSeparator />
      <span className="flex items-center gap-1">
        {`${confirmCount}건`}
        <span className="text-grayscale-300">확정</span>
      </span>
    </div>
  );
};

const moverInfoVariants = cva(
  "flex gap-3 items-center text-black-300 border-solid rounded-md border-line-100 shadow-border border-[1px] p-2.5",
  {
    variants: {
      size: {
        fixed: "",
        responsive: "pc:p-3",
      },
    },
    defaultVariants: {
      size: "responsive",
    },
  }
);

const MoverInfo = ({
  mover,
  className,
  size,
}: MoverInfoProps & { className?: string }) => {
  const isResponsive = size === "responsive";
  return (
    <div className={cn(moverInfoVariants({ size }), className)}>
      <ProfileImage imgUrl={mover.imgUrl} />
      <div
        className={cn("flex flex-col gap-2", {
          "pc:gap-3": isResponsive,
        })}
      >
        <div className="flex items-center justify-between gap-1">
          <span className="text-lg font-semibold pc:text-2lg">
            {mover.nickName} 기사님
          </span>
          <FavoriteUi
            isFavorite={mover.isFavorite}
            favoriteCount={mover.favoriteCount}
          />
        </div>
        <MoverExperience {...mover} />
      </div>
    </div>
  );
};

export default MoverInfo;
