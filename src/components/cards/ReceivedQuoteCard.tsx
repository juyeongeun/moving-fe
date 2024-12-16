import CardContainer from "../common/card/CardContainer";
import MoverInfo from "../common/card/MoverInfo";
import ServiceChip, { ChipType } from "../common/card/ServiceChip";
import { mapServiceType } from "@/utils/utilFunctions";
import { QuoteAmount } from "./PendingRequestCard";
import { FavoriteFields, BaseMoverData } from "@/types/mover";

interface ReceivedQuoteData extends BaseMoverData, FavoriteFields {
  introduction: string;
  isDesignated: boolean | undefined;
  service: number;
  cost: number;
}

interface ReceivedQuoteCardProps {
  data: ReceivedQuoteData;
  className?: string;
}

const ReceivedQuoteCard = ({ data, className }: ReceivedQuoteCardProps) => {
  const serviceType = mapServiceType([data.service])[0];

  return (
    <CardContainer className={className} gap="gap-3.5 pc:gap-6">
      <div className="flex gap-2">
        <ServiceChip variant={serviceType as ChipType} />
        {data.isDesignated && <ServiceChip variant="designatedQuote" />}
      </div>

      <MoverInfo data={data} />

      <QuoteAmount amount={data.cost} />
    </CardContainer>
  );
};

export default ReceivedQuoteCard;
