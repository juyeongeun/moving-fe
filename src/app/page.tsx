import MoverInfoCard from "@/components/cards/MoverInfoCard";
import GrayLabel from "@/components/common/card/GrayLabel";
import MoverInfo from "@/components/common/card/MoverInfo";
export default function Home() {
  return (
    <>
      <MoverInfoCard data={mover} className="m-10" size="fixed" />
      <MoverInfo data={mover} className="m-10" />
      <div className="flex gap-2 m-10">
        <GrayLabel>이사일 solid</GrayLabel>
        <GrayLabel type="border">이사일 border</GrayLabel>
      </div>
    </>
  );
}
