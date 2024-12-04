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
  onPrimaryClick: () => void;
  onOutlinedClick: () => void;
}

const styles = {
  buttonContainer: "flex flex-col gap-2 tablet:flex-row w-full",
};

const IncomingRequestCard = ({
  data,
  className,
  onPrimaryClick,
  onOutlinedClick,
}: IncomingRequestCardProps) => {
  return (
    <CardContainer>
      <QuoteDetails data={data} />
      <div className={styles.buttonContainer}>
        <Button withIcon width="100%" onClick={onPrimaryClick}>
          견적 보내기
        </Button>
        <Button variant="outlined" width="100%" onClick={onOutlinedClick}>
          반려
        </Button>
      </div>
    </CardContainer>
  );
};

export default IncomingRequestCard;
