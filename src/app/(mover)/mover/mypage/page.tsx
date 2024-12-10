import MoverProfileCard from "@/components/cards/MoverProfileCard";
import RatingInfo from "@/components/RatingInfo";
import LineSeparator from "@/components/common/LineSeparator";

const styles = {
  title: "text-lg font-bold text-black-400 py-[15px]",
  article: "flex flex-col items-center",
};

export default function MyPage() {
  const mockData = {
    id: 1,
    name: "김다나",
    imageUrl: null,
    ratings: {
      "1": 1,
      "2": 4,
      "3": 1,
      "4": 3,
      "5": 2,
      average: 4.3,
      totalSum: 13,
    },
    nickname: "김코드",
    career: 2,
    introduction:
      "성실 정확 한 줄 평가성실 정확 한 줄 평가성실 정확 한 줄 평가",
    services: [0, 1],
    regions: [82031, 8202],
    reviewCount: 11,
    confirmCount: 13,
  };
  return (
    <>
      <section className={styles.title}>
        <p>마이페이지</p>
      </section>
      <LineSeparator direction="horizontal" className="mb-[24px]" />
      <MoverProfileCard data={mockData} />
      <LineSeparator direction="horizontal" className="mt-[24px]" />
      <section>
        <p className={styles.title}>리뷰 ({mockData.reviewCount})</p>
        <article className={styles.article}>
          <RatingInfo
            ratings={{
              "1": mockData.ratings["1"],
              "2": mockData.ratings["2"],
              "3": mockData.ratings["3"],
              "4": mockData.ratings["4"],
              "5": mockData.ratings["5"],
              totalCount: mockData.reviewCount,
              totalSum: mockData.ratings.totalSum,
              average: mockData.ratings.average,
            }}
          />
        </article>
      </section>
    </>
  );
}
