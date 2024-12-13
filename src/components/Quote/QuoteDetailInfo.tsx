import { getServiceText } from "@/utils/utilFunctions";
import { formatDateWithDay } from "@/utils/utilFunctions";
import { formatDate } from "@/utils/utilFunctions";

interface QuoteDetailInfoProps {
  data: {
    requestDate: string;
    service: number;
    movingDate: string;
    pickupAddress: string;
    dropOffAddress: string;
  };
}

const styles = {
  container:
    "flex flex-col gap-[10px] bg-bg-100 border border-solid border-line-100 rounded-[16px] px-[32px] py-[24px]",
  wrapper: "flex flex-row gap-[40px]",
  title: "text-md w-[65px] text-grayscale-300 pc:text-2lg pc:w-[90px]",
  value: "text-md text-black-400 pc:text-2lg",
};

export default function QuoteDetailInfo({ data }: QuoteDetailInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>견적 요청일</p>
        <p className={styles.value}>{formatDate(data.requestDate)}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>서비스</p>
        <p className={styles.value}>{getServiceText(data.service)}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>이동일</p>
        <p className={styles.value}>{formatDateWithDay(data.movingDate)}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>출발지</p>
        <p className={styles.value}>{data.pickupAddress}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>도착지</p>
        <p className={styles.value}>{data.dropOffAddress}</p>
      </div>
    </div>
  );
}
