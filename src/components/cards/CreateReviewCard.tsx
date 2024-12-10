import CardContainer from "../common/card/CardContainer";
import ServiceChip from "../common/card/ServiceChip";
import { formatDate, mapServiceType } from "@/utils/utilFunctions";
import { ChipType } from "../common/card/ServiceChip";
import ProfileImage from "../common/card/ProfileImage";
import NameText from "../common/card/NameText";
import TextWithGrayLabel from "../common/card/TextWithGrayLabel";
import LineSeparator from "../common/LineSeparator";
import Button from "../common/Button";
import cn from "@/config/cn";

interface CreateReviewData {
  id: number;
  service: number;
  isDesignated: boolean;
  imageUrl: string;
  nickname: string;
  movingDate: string;
  cost: number;
}

interface CreateReviewCardProps {
  data: CreateReviewData;
  className?: string;
  onPrimaryClick: () => void;
}

const CreateReviewCard = ({
  data,
  className,
  onPrimaryClick,
}: CreateReviewCardProps) => {
  const serviceType = mapServiceType([data.service])[0];
  const moveInDate = formatDate(data.movingDate);
  const quotePrice = `${data.cost.toLocaleString()}원`;

  return (
    <CardContainer className={cn("max-w-[688px]", "pc:py-[32px]", className)}>
      <div className="flex gap-2">
        <ServiceChip variant={serviceType as ChipType} />
        {data.isDesignated && <ServiceChip variant="designatedQuote" />}
      </div>

      <div className="flex items-center gap-2.5 pc:gap-6 pc:py-2">
        <ProfileImage imgUrl={data.imageUrl} />
        <div className="flex flex-col gap-1 pc:gap-2">
          <NameText text={data.nickname} type="mover" />
          <div className="flex gap-2 items-center gap-[12.5px]">
            <TextWithGrayLabel label="이사일" text={moveInDate} />
            <LineSeparator />
            <TextWithGrayLabel label="견적가" text={quotePrice} />
          </div>
        </div>
      </div>

      <Button onClick={onPrimaryClick}>리뷰 작성하기</Button>
    </CardContainer>
  );
};

export default CreateReviewCard;
