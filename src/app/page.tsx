import MoverInfoCard from "@/components/cards/MoverInfoCard";
import PendingRequestCard from "@/components/cards/PendingRequestCard";
import GrayLabel from "@/components/common/card/GrayLabel";
import MoverInfo from "@/components/common/card/MoverInfo";
export default function Home() {
  const mover = {
    id: 11,
    imageUrl: "",
    nickname: "김기사",
    career: 4,
    introduction: "열심히하는 기사입니다",
    services: [0, 1],
    regions: [82031, 8202],
    ratings: {
      "1": 0,
      "2": 0,
      "3": 1,
      "4": 0,
      "5": 1,
      average: 4,
    },
    reviewCount: 7,
    confirmCount: 11,
    favoriteCount: 3,
    isFavorite: true,
    isDesignated: true,
  };

  const pendingRequest = {
    id: 6,
    service: 0,
    isDesignated: true,
    imageUrl: "",
    nickname: "김코드",
    career: 1,
    ratings: {
      "1": 0,
      "2": 0,
      "3": 1,
      "4": 0,
      "5": 1,
      average: 4,
    },
    reviewCount: 7,
    confirmCount: 12,
    favoriteCount: 22,
    isFavorite: false,
    movingDate: "2024-11-30T10:00:00.000Z",
    pickupAddress: "서울시 강서구 @@로 111",
    dropOffAddress: "서울시 강동구 ##로 111",
    cost: 200000,
    requestDate: "2024-11-26T08:00:00.000Z",
  };

  return (
    <>
      <MoverInfoCard data={mover} className="m-10" size="fixed" />
      <MoverInfo data={mover} className="m-10" />
      <div className="flex gap-2 m-10">
        <GrayLabel>이사일 solid</GrayLabel>
        <GrayLabel type="border">이사일 border</GrayLabel>
      </div>
      <PendingRequestCard data={pendingRequest} />
    </>
  );
}
