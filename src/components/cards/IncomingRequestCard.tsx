"use client";

import CardContainer from "../common/card/CardContainer";
import Button from "../common/Button";
import { type QuoteDetailsData } from "@/types/mover";
import QuoteDetails from "../common/card/QuoteDetails";

interface RequestQuoteData extends QuoteDetailsData {
  id: number;
  isCompleted: boolean;
}

interface IncomingRequestCardProps {
  data: RequestQuoteData;
  className?: string;
  onPrimaryClick: (data: RequestQuoteData) => void;
  onOutlinedClick: (data: RequestQuoteData) => void;
}

const styles = {
  buttonContainer:
    "flex flex-col gap-2 w-full h-[104px] tablet:h-[48px] pc:h-[64px] tablet:flex-row pc:gap-[11px]",
};

const IncomingRequestCard = ({
  data,
  className,
  onPrimaryClick,
  onOutlinedClick,
}: IncomingRequestCardProps) => {
  const handleAcceptButtonClick = () => {
    onPrimaryClick(data);
  };
  const handleRejectButtonClick = () => {
    onOutlinedClick(data);
  };

  return (
    <CardContainer className="pc:pb-[12px] gap-4 ">
      <QuoteDetails data={data} />
      <div className={styles.buttonContainer}>
        <Button
          withIcon
          width="100%"
          onClick={handleAcceptButtonClick}
          className="h-[48px] tablet:h-[48px] pc:h-[64px]"
        >
          견적 보내기
        </Button>
        <Button
          variant="outlined"
          width="100%"
          onClick={handleRejectButtonClick}
          className="h-[48px] tablet:h-[48px] pc:h-[64px]"
        >
          반려
        </Button>
      </div>
    </CardContainer>
  );
};

export default IncomingRequestCard;
