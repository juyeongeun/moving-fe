import { type QuoteDetailsData } from "@/types/mover";
import CardContainer from "../common/card/CardContainer";
import QuoteDetails from "../common/card/QuoteDetails";
import { QuoteAmount } from "./PendingRequestCard";
import cn from "@/config/cn";

interface MoverQuoteData extends QuoteDetailsData {
  isCompleted: boolean;
  isConfirmed: boolean;
  cost: number;
}

interface SentQuoteCardProps {
  data: MoverQuoteData;
  className?: string;
  classNameQuoteDetails?: string;
  onButtonClick: () => void;
}

const styles = {
  completedOverlay:
    "absolute inset-0 bg-[#040404A3] rounded-[16px] flex flex-col items-center justify-center text-white z-10 border-solid border-[1px] border-grayscale-300",
  completedText: "text-2lg font-semibold mb-4",
  completedButton:
    "px-[18px] py-[10px] bg-pr-blue-100 text-pr-blue-300 text-lg font-semibold rounded-[16px] border-solid border-[1px] border-pr-blue-200 hover:bg-pr-blue-200 hover:text-white",
};

const SentQuoteCard = ({
  data,
  className,
  classNameQuoteDetails,
  onButtonClick,
}: SentQuoteCardProps) => {
  return (
    <CardContainer className={cn("relative", className)}>
      <QuoteDetails
        data={data}
        className={classNameQuoteDetails}
        showRequestDate={true}
      />
      <QuoteAmount amount={data.cost} />

      {data.isCompleted && (
        <div className={styles.completedOverlay}>
          <p className={styles.completedText}>이사 완료된 견적이에요</p>
          <button className={styles.completedButton} onClick={onButtonClick}>
            견적 상세보기
          </button>
        </div>
      )}
    </CardContainer>
  );
};

export default SentQuoteCard;
