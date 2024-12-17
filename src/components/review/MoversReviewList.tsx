import { useGetMoversReviewList } from "@/api/query-hooks/review";
import Pagination from "../common/Pagination";
import RatingInfo from "../RatingInfo";
import CustomerReview, { type CustomerReviewData } from "./CustomerReview";
import { type RatingData } from "@/types/mover";
import { useState } from "react";
import Loader from "../common/Loader";
import EmptyReview from "@/app/(user)/me/review/EmptyReview";

export const MoversReviewList = ({
  totalRatings,
  moverId,
}: {
  totalRatings: RatingData;
  moverId: number;
}) => {
  const [pageNum, setPageNum] = useState<number>(1);

  const { data, isPending } = useGetMoversReviewList({
    moverId,
    pageNum,
    pageSize: 5,
  });
  const totalPages = Number(data?.totalPages);

  if (isPending) {
    return <Loader msg="리뷰 불러오는 중" />;
  }

  if (!data) {
    return null;
  }

  return (
    <section>
      <h2 className="text-lg font-bold text-black-400 pc:my-[32px] pc:text-2xl mb-[32px]">
        리뷰 ({totalRatings.totalCount})
      </h2>
      {totalRatings.totalCount > 0 ? (
        <>
          <article className="flex flex-col items-center">
            <RatingInfo
              rating={{
                "1": totalRatings["1"],
                "2": totalRatings["2"],
                "3": totalRatings["3"],
                "4": totalRatings["4"],
                "5": totalRatings["5"],
                totalCount: totalRatings.totalCount,
                totalSum: totalRatings.totalSum,
                average: totalRatings.average,
              }}
            />
          </article>

          <ul className="flex flex-col mt-[43px] mb-[20px] pc:mt-[40px] pc:w-[955px] pc:mb-[40px]">
            {data.list.map((review: CustomerReviewData) => (
              <CustomerReview data={review} key={review.id} />
            ))}
          </ul>
        </>
      ) : (
        <EmptyReview />
      )}
      <Pagination
        currentPage={pageNum}
        onPageChange={setPageNum}
        totalPages={totalPages}
      />
    </section>
  );
};

export default MoversReviewList;
