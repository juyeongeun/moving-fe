import MoverList from "./moverList";

import { REGION_CODES } from "@/variables/regions";

type RegionCode = (typeof REGION_CODES)[keyof typeof REGION_CODES];
interface Rating {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  average: number;
}

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
  confirmCount: number;
  ratings: Rating;
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
}: {
  listCount: number;
  service?: number | null;
  region?: number | null;
  keyword?: string;
}): {
  nextCursor: number | null;
  hasNext: false;
  list: MockDataItem[];
} => {
  const regionValues = Object.values(REGION_CODES);

  const data = Array.from({ length: listCount }, (_, index) => {
    const ratings = {
      1: Math.floor(Math.random() * 50),
      2: Math.floor(Math.random() * 50),
      3: Math.floor(Math.random() * 50),
      4: Math.floor(Math.random() * 50),
      5: Math.floor(Math.random() * 50),
    };

    // 평균 계산: (키 * 값의 합) / 값의 총합
    const totalRatings = Object.values(ratings).reduce(
      (sum, count) => sum + count,
      0
    );
    const weightedSum = Object.entries(ratings).reduce(
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
      isFavorite: Math.random() > 0.5,
      reviewCount: Math.floor(Math.random() * 100),
      favoriteCount: Math.floor(Math.random() * 100),
      confirmCount: Math.floor(Math.random() * 100),
      ratings: {
        ...ratings,
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
  const initialData = fetchData_({
    listCount: 20,
    service: null,
    region: null,
    keyword: "",
  });

  return <MoverList initialData={initialData} />;
}
