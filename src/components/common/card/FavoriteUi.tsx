import Image from "next/image";
import assets from "@/variables/images";
import { formatCount } from "@/utils/utilFunctions";

interface FavoriteUiProps {
  favoriteCount: number;
  isFavorite: boolean;
}

export default function FavoriteUi({
  favoriteCount,
  isFavorite,
}: FavoriteUiProps) {
  const heartIcon = isFavorite
    ? assets.icons.likeActive
    : assets.icons.likeInactive;

  return (
    <div className="inline-flex items-center gap-0.5 pc:gap-1">
      <Image src={heartIcon} alt="favorite icon" width={24} height={24} />

      <span className="text-sm font-semibold pc:text-2lg text-pr-blue-400">
        {formatCount(favoriteCount)}
      </span>
    </div>
  );
}
