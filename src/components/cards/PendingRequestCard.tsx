import MoverInfo from "../common/card/MoverInfo";
import ServiceChip, { ChipType } from "../common/card/ServiceChip";
import CardContainer from "../common/card/CardContainer";
import { mapServiceType } from "@/utils/utilFunctions";
import { type CardProps, type BaseMoverData } from "@/types/mover";

interface Address {
  pickupAddress: string;
  dropOffAddress: string;
}

interface RequestDetails {
  movingDate: string;
  requestDate: string;
  cost: number;
}

interface PendingRequestData extends BaseMoverData, Address, RequestDetails {
  service: number;
}

type PendingRequestCardProps = CardProps & {
  data: PendingRequestData;
};

const PendingRequestCard = ({
  data,
  size,
  className,
}: PendingRequestCardProps) => {
  const serviceType = mapServiceType([data.service])[0];

  return (
    <CardContainer>
      <ServiceChip variant={serviceType as ChipType} />
      <MoverInfo data={data} />
    </CardContainer>
  );
};

export default PendingRequestCard;
