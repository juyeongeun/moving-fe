"use client";

import StarRatingDisplay from "../common/StarRatingDisplay";
import LineSeparator from "../common/LineSeparator";
import ReviewImageSlider from "./ReviewImageSlider";
import { format } from "date-fns";

interface CustomerReviewData {
  id: number;
  rating: number;
  content: string;
  createdAt: string;
  name: string;
  images: string[];
}
const CustomerReview = ({ data }: { data: CustomerReviewData }) => {
  const createdDate = format(new Date(data.createdAt), "yyyy-MM-dd");

  return (
    <li className="flex flex-col gap-4 tablet:gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-md font-regular pc:text-2lg">
          <span className="text-black-400">{data.name}</span>
          <LineSeparator />
          <time className="text-grayscale-300">{createdDate}</time>
        </div>
        <StarRatingDisplay
          average={data.rating}
          size="fixed"
          className="w-5 h-5"
        />
      </div>
      <ReviewImageSlider images={data.images} />
      <p>{data.content}</p>
    </li>
  );
};

export default CustomerReview;
