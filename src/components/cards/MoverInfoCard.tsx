import MoverInfo from "../common/card/MoverInfo";
import ServiceChip, { ChipType } from "../common/card/ServiceChip";
import { mapServiceType } from "@/utils/utilFunctions";
import { cva } from "class-variance-authority";
import CardContainer from "../common/card/CardContainer";

interface MoverData {
  id: number;
  nickname: string;
  career: number;
  introduction: string;
  imageUrl: string | null;
  services: number[];
  regions: number[];
  ratings: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    average: number;
  };
  reviewCount: number;
  confirmCount: number;
  favoriteCount: number;
  isFavorite: boolean;
  isDesignated: boolean;
}

export interface CardProps {
  size?: "fixed" | "responsive";
  className?: string;
}

export interface MoverInfoProps extends CardProps {
  data: MoverData;
}

const titleVariants = cva("text-lg font-semibold text-black-300", {
  variants: {
    size: {
      fixed: "",
      responsive: "pc:text-2xl",
    },
  },
  defaultVariants: {
    size: "responsive",
  },
});

const MoverInfoCard = ({
  data,
  size = "responsive",
  className,
}: MoverInfoProps) => {
  const serviceTypes = mapServiceType(data.services);

  return (
    <CardContainer size={size} className={className}>
      <div className="flex gap-2">
        {serviceTypes.map((serviceType) => (
          <ServiceChip
            variant={serviceType as ChipType}
            key={serviceType}
            isResponsive={true}
          />
        ))}
      </div>
      <h4 className={titleVariants({ size })}>{data.introduction}</h4>
      <MoverInfo data={data} size={size} />
    </CardContainer>
  );
};

export default MoverInfoCard;
