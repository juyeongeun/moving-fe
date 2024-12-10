import FavoriteMoverCard, {
  type FavoriteMoverData,
} from "@/components/cards/FavoriteMoverCard";
import cn from "@/config/cn";
// import Loader from "@/components/common/Loader";
// import Message from "@/components/Message";

// interface FavoriteMoverListProps {
//   data: {
//     nextCursor: number;
//     hasNext: boolean;
//     list: FavoriteMoverData[];
//   };
// }

const mockData = {
  nextCursor: 21,
  hasNext: true,
  list: [
    {
      id: 11,
      imageUrl: null,
      nickname: "김기사11",
      career: 4,
      introduction: "열심히 하는 기사입니다. 고객 만족을 위해 최선을 다합니다.",
      services: [0, 1],
      regions: [82031, 8202],
      ratings: {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 1,
        average: 4,
      },
      reviewCount: 7,
      confirmCount: 11,
      favoriteCount: 3,
      isFavorite: true,
      isDesignated: true,
    },
    {
      id: 12,
      imageUrl: null,
      nickname: "이기사",
      career: 2,
      introduction: "신속하고 안전한 운송을 제공합니다.",
      services: [1, 2],
      regions: [82021, 8103],
      ratings: {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 2,
        average: 4,
      },
      reviewCount: 5,
      confirmCount: 8,
      favoriteCount: 1,
      isFavorite: true,
      isDesignated: false,
    },
    {
      id: 13,
      imageUrl: null,
      nickname: "박기사",
      career: 5,
      introduction: "친절한 응대와 책임감이 강한 기사입니다.",
      services: [0, 2],
      regions: [82031, 8204],
      ratings: {
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 1,
        "5": 1,
        average: 3,
      },
      reviewCount: 10,
      confirmCount: 15,
      favoriteCount: 5,
      isFavorite: true,
      isDesignated: false,
    },
    {
      id: 14,
      imageUrl: null,
      nickname: "최기사",
      career: 3,
      introduction: "시간 엄수와 안전 운송에 최선을 다합니다.",
      services: [1, 2],
      regions: [82032, 8203],
      ratings: {
        "1": 0,
        "2": 0,
        "3": 2,
        "4": 0,
        "5": 2,
        average: 4,
      },
      reviewCount: 6,
      confirmCount: 9,
      favoriteCount: 2,
      isFavorite: true,
      isDesignated: true,
    },
    {
      id: 15,
      imageUrl: null,
      nickname: "정기사",
      career: 6,
      introduction: "경험 풍부한 기사로, 다양한 상황에 대처 가능합니다.",
      services: [0, 1],
      regions: [82031, 8205],
      ratings: {
        "1": 1,
        "2": 1,
        "3": 0,
        "4": 2,
        "5": 2,
        average: 4,
      },
      reviewCount: 12,
      confirmCount: 20,
      favoriteCount: 4,
      isFavorite: true,
      isDesignated: false,
    },
    {
      id: 16,
      imageUrl: null,
      nickname: "류기사",
      career: 1,
      introduction: "신입이지만 열정이 가득한 기사입니다.",
      services: [2],
      regions: [82033, 8201],
      ratings: {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        average: 3,
      },
      reviewCount: 3,
      confirmCount: 4,
      favoriteCount: 1,
      isFavorite: true,
      isDesignated: false,
    },
    {
      id: 17,
      imageUrl: null,
      nickname: "김베테랑",
      career: 10,
      introduction: "오랜 경력으로 신뢰를 드리는 베테랑 기사입니다.",
      services: [0, 2],
      regions: [82031, 8206],
      ratings: {
        "1": 0,
        "2": 0,
        "3": 3,
        "4": 2,
        "5": 2,
        average: 4,
      },
      reviewCount: 20,
      confirmCount: 30,
      favoriteCount: 8,
      isFavorite: true,
      isDesignated: true,
    },
    {
      id: 18,
      imageUrl: null,
      nickname: "이친절",
      career: 2,
      introduction: "친절하고 꼼꼼한 서비스로 만족을 드립니다.",
      services: [1, 2],
      regions: [82034, 8202],
      ratings: {
        "1": 2,
        "2": 0,
        "3": 0,
        "4": 2,
        "5": 1,
        average: 3,
      },
      reviewCount: 5,
      confirmCount: 7,
      favoriteCount: 2,
      isFavorite: true,
      isDesignated: false,
    },
    {
      id: 19,
      imageUrl: null,
      nickname: "박베스트",
      career: 7,
      introduction: "최고의 퍼포먼스로 고객을 만족시키는 베스트 기사입니다.",
      services: [2],
      regions: [82035, 8203],
      ratings: {
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 2,
        "5": 2,
        average: 4,
      },
      reviewCount: 15,
      confirmCount: 22,
      favoriteCount: 6,
      isFavorite: true,
      isDesignated: false,
    },
    {
      id: 20,
      imageUrl: null,
      nickname: "최성실",
      career: 3,
      introduction: "성실하게 일하며 고객의 신뢰를 쌓는 기사입니다.",
      services: [0, 1],
      regions: [82031, 8207],
      ratings: {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 3,
        "5": 1,
        average: 4,
      },
      reviewCount: 9,
      confirmCount: 13,
      favoriteCount: 3,
      isFavorite: true,
      isDesignated: true,
    },
  ],
};

export default function FavoriteMoverPage() {
  // const { data, isPending, isError, isFetchingNextPage, hasNextPage } = useGetFavoriteMoverList();
  // if (isPending) return <Loader msg="찜한 기사님 목록을 불러오고 있어요." />;
  // if (isError)
  //   return <Message msg="찜한 기사님 목록을 불러오는 중 오류가 발생했어요." />;

  // const pages = data?.pages || [];
  // const isEmpty = pages[0].list.length === 0 || pages?.length === 0;

  return (
    <>
      <ul
        className={cn(
          "max-w-[1400px] mx-auto bg-bg-100 grid grid-cols-1 pc:grid-cols-2 gap-[24px] tablet:gap-[32px] pc:gap-x-[24px] pc:gap-y-[48px]"
        )}
      >
        {mockData.list.map((mover) => (
          <FavoriteMoverCard key={mover.id} data={mover} />
        ))}
      </ul>

      {/* <ul>
        {pages.map((page) => (
        page.list.map((mover: FavoriteMoverData) => {
            return <FavoriteMoverCard data={mover} />;
        })
        ))}

        {isFetchingNextPage && <Loader msg="더 불러오는 중..." />}
        {!hasNextPage && !isFetchingNextPage && (
          <Message msg="더 불러올 기사님이 없습니다." />
        )}
      </ul> */}
    </>
  );
}
