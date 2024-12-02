import ProfileImage from "./ProfileImage";
import { formatCost } from "@/utils/formatCost";

interface ReviewMoverProps {
  moverName: string;
  moverImageUrl: string | null;
  moveDate: string;
  cost: number;
  className?: string;
}

export default function ReviewMover({
  moverName = "김코드",
  moverImageUrl,
  moveDate = "2024. 01. 01",
  cost = 100000,
  className,
}: ReviewMoverProps) {
  const styles = {
    profileContainer: `flex flex-row items-center gap-[12px] pt-[10px] pb-[20px] px-[9px] mb-[20px]
    border-b-[1px] border-solid border-line-200
    pc:border-[1px] pc:rounded-[8px]
    pc:py-[17px] pc:px-[18px] pc:gap-[24px] pc:mb-[32px]`,
    profileImage: `w-[46px] h-[46px] pc:w-[120px] pc:h-[120px]`,
    moverInfo: `flex flex-col gap-[6px]`,
    moveInfo: `flex flex-row gap-[12px] items-center`,
    chipsContainer: `flex flex-row gap-[6px]`,
    chips: `bg-bg-400 py-[2px] px-[4px] rounded-[4px] w-fit h-fit text-sm font-medium text-grayscale-400 
    pc:font-regular pc:text-2lg`,
    moverName: `text-md font-semibold text-black-300 pc:text-2xl`,
    moveDate: `text-sm font-medium text-black-300 pc:text-xl`,
    cost: `text-sm font-medium text-black-300 pc:text-xl`,
    divider: `text-xl font-medium text-line-200`,
  };
  return (
    <div className={`${styles.profileContainer} ${className}`}>
      <ProfileImage
        imgUrl={moverImageUrl}
        size="fixed"
        className={styles.profileImage}
      />
      <div className={styles.moverInfo}>
        <p className={styles.moverName}>{moverName} 기사님</p>
        <div className={styles.moveInfo}>
          <div className={styles.chipsContainer}>
            <p className={styles.chips}>이사일</p>
            <p className={styles.moveDate}>{moveDate}</p>
          </div>
          <p className={styles.divider}>|</p>
          <div className={styles.chipsContainer}>
            <p className={styles.chips}>견적가</p>
            <p className={styles.cost}>{formatCost(cost)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
