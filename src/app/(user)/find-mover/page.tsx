import MoverList from "./moverList";

import { RatingData } from "@/types/mover";
import { REGION_CODES } from "@/variables/regions";

type RegionCode = (typeof REGION_CODES)[keyof typeof REGION_CODES];

export interface MockDataItem {
  id: number;
  imageUrl: string | null;
  services: number[];
  nickname: string;
  name: string;
  career: number;
  regions: (typeof REGION_CODES)[keyof typeof REGION_CODES][];
  introduction: string;
  isDesignated: boolean;
  isFavorite: boolean;
  reviewCount: number;
  favoriteCount: number;
  isConfirmed: boolean;
  confirmCount: number;
  rating: RatingData;
}

const generateRandomName = (length: number) => {
  const chars = "가나다라마바사아자차카타파하";
  return Array.from({ length })
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const fetchData_ = ({
  listCount,
  service,
  region,
  keyword,
  isFavorite = null,
}: {
  listCount: number;
  service?: number | null;
  region?: number | null;
  keyword?: string;
  isFavorite?: boolean | null;
}): {
  nextCursor: number | null;
  hasNext: false;
  list: MockDataItem[];
} => {
  const regionValues = Object.values(REGION_CODES);

  const data = Array.from({ length: listCount }, (_, index) => {
    const rating = {
      1: Math.floor(Math.random() * 50),
      2: Math.floor(Math.random() * 50),
      3: Math.floor(Math.random() * 50),
      4: Math.floor(Math.random() * 50),
      5: Math.floor(Math.random() * 50),
    };

    const totalRatings = Object.values(rating).reduce(
      (sum, count) => sum + count,
      0
    );
    const weightedSum = Object.entries(rating).reduce(
      (sum, [key, value]) => sum + Number(key) * value,
      0
    );
    const average: number = totalRatings > 0 ? weightedSum / totalRatings : 0;

    return {
      id: index + 1,
      imageUrl: null,
      services: shuffleArray([0, 1, 2]).slice(
        0,
        Math.floor(Math.random() * 3) + 1
      ),
      nickname: generateRandomName(3),
      name: generateRandomName(3),
      career: Math.floor(Math.random() * 10),
      regions: shuffleArray(regionValues).slice(
        0,
        Math.floor(Math.random() * 5) + 1
      ),
      introduction: "열심히 하겠습니다!",
      isDesignated: Math.random() > 0.5,
      isFavorite: isFavorite === null ? Math.random() > 0.5 : isFavorite,
      reviewCount: Math.floor(Math.random() * 100),
      favoriteCount: Math.floor(Math.random() * 100),
      isConfirmed: Math.random() > 0.5,
      confirmCount: Math.floor(Math.random() * 100),
      rating: {
        ...rating,
        average,
      },
    };
  });

  const filteredData = data.filter((item) => {
    const matchesService =
      service === null || service === undefined
        ? true
        : item.services.includes(service);
    const matchesRegion =
      region === null || region === undefined
        ? true
        : item.regions.includes(region as RegionCode);
    const matchesKeyword = keyword
      ? [item.introduction, item.name, item.nickname].some((field) =>
          field.toLowerCase().includes(keyword.toLowerCase())
        )
      : true;

    const result = matchesService && matchesRegion && matchesKeyword;
    return result;
  });

  return {
    nextCursor: null,
    hasNext: false,
    list: filteredData,
  };
};

export default function FindMoverList() {
  const initialList = fetchData_({
    listCount: 20,
  });

  const initialFavoriteList = fetchData_({
    listCount: 3,
    isFavorite: true,
  });

  return (
    <MoverList
      initialList={initialList}
      initialFavoriteList={initialFavoriteList.list}
    />
  );
}
