import CardContainer from "../common/card/CardContainer";
import MoverExperience from "../common/card/MoverExperience";
import ProfileImage from "../common/card/ProfileImage";
import GrayLabel from "../common/card/GrayLabel";
import { type ProfileData, type FullMoverData } from "@/types/mover";

interface MoverProfileCardProps {
  data: FullMoverData & ProfileData;
  className?: string;
}

const MoverProfileCard = ({ data, className }: MoverProfileCardProps) => {
  return (
    <CardContainer>
      <div className="flex items-center gap-3">
        <ProfileImage imgUrl={data.imageUrl} />
        <div className="flex flex-col gap-1">
          <p>{data.name}</p>
          <p>{data.introduction}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <MoverExperience data={data} />
        <div>
          <GrayLabel>제공 서비스</GrayLabel>
          <div className="flex flex-wrap gap-1">
            {data.services.map((service) => (
              <p key={service}>{service}</p>
            ))}
          </div>
        </div>
        <div>
          <GrayLabel>지역</GrayLabel>
          <div className="flex flex-wrap gap-1">
            {data.regions.map((region) => (
              <p key={region}>{region}</p>
            ))}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default MoverProfileCard;
