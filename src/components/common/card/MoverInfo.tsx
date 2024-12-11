import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/config/cn";
import FavoriteUi from "./FavoriteUi";
import ProfileImage from "./ProfileImage";
import MoverExperience from "./MoverExperience";
import { FavoriteFields, type BaseMoverData } from "@/types/mover";
import NameText from "./NameText";

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

type MoverInfoProps = {
  data: BaseMoverData & FavoriteFields;
  className?: string;
  size?: "fixed" | "responsive";
};

const MoverInfo = ({ data, className, size }: MoverInfoProps) => {
  if (!data) return null;

  const isResponsive = size === "responsive";

  return (
    <div className={cn(moverInfoVariants({ size }), className)}>
      <ProfileImage imgUrl={data.imageUrl} size={size} />
      <div
        className={cn("flex flex-col gap-2 w-full", {
          "pc:gap-3": isResponsive,
        })}
      >
        <div className="flex items-center justify-between">
          <NameText text={data.nickname} type="mover" />
          <FavoriteUi
            isFavorite={data.isFavorite}
            favoriteCount={data.favoriteCount}
          />
        </div>

        <MoverExperience data={data} size={size} />
      </div>
    </div>
  );
};

export default MoverInfo;
