import assets from "@/variables/images";
import Image from "next/image";
import Button from "@/components/common/Button";

interface QuoteButtonGroupProps {
  isFavorite: boolean;
  disabled?: boolean;
  isPc?: boolean;
  moverNickname?: string;
  buttonText?: string;
  onFavoriteClick: () => void;
  onButtonClick: () => void;
}

export default function QuoteButtonGroup({
  isFavorite,
  disabled,
  isPc = false,
  moverNickname,
  buttonText,
  onFavoriteClick,
  onButtonClick,
}: QuoteButtonGroupProps) {
  const styles = {
    buttonContainer: isPc
      ? "hidden pc:flex pc:flex-col pc:gap-[32px] pc:justify-center pc:items-center"
      : "sticky bottom-0 bg-white border-none w-full flex flex-row gap-[8px] justify-center items-center py-[10px] z-[999] pc:hidden",
    likeIcon:
      "p-[15px] h-[54px] cursor-pointer border border-solid border-line-200 rounded-[16px] pc:text-xl pc:font-semibold pc:py-[11px] pc:flex pc:flex-row pc:gap-[8px] pc:items-center pc:px-[105px]",
    shareText: "text-lg font-semibold text-black-400 pc:text-xl",
  };

  return (
    <>
      {!isPc ? (
        <div className={styles.buttonContainer}>
          <button className={styles.likeIcon} onClick={onFavoriteClick}>
            <Image
              src={
                isFavorite ? assets.icons.likeActive : assets.icons.likeInactive
              }
              alt="mover-image"
              width={24}
              height={24}
            />
          </button>
          <Button
            children={buttonText}
            variant="primary"
            disabled={disabled}
            width="100%"
            onClick={onButtonClick}
          />
        </div>
      ) : (
        <div className={styles.buttonContainer}>
          <p className={styles.shareText}>
            {moverNickname} 기사님에게 지정 견적을 요청해보세요!
          </p>
          <button className={styles.likeIcon} onClick={onFavoriteClick}>
            <Image
              src={
                isFavorite ? assets.icons.likeActive : assets.icons.likeInactive
              }
              alt="mover-image"
              width={24}
              height={24}
            />
            기사님 찜하기
          </button>
          <Button
            children={buttonText}
            variant="primary"
            disabled={disabled}
            width="100%"
            onClick={onButtonClick}
          />
        </div>
      )}
    </>
  );
}
