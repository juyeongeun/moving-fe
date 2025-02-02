export const REGION_CODES = {
  ALL: 82,
  SEOUL: 8202,
  GYEONGGI: 82031,
  INCHEON: 82032,
  GANGWON: 82033,
  CHUNGBUK: 82043,
  CHUNGNAM: 82041,
  SEJONG: 82044,
  DAEJEON: 82042,
  JEONBUK: 82063,
  JEONNAM: 82061,
  GWANGJU: 82062,
  GYEONGBUK: 82054,
  GYEONGNAM: 82055,
  DAEGU: 82053,
  ULSAN: 82052,
  BUSAN: 82051,
  JEJU: 82064,
} as const;

export const REGION_TEXTS = {
  [REGION_CODES.ALL]: "전체",
  [REGION_CODES.SEOUL]: "서울",
  [REGION_CODES.GYEONGGI]: "경기",
  [REGION_CODES.INCHEON]: "인천",
  [REGION_CODES.GANGWON]: "강원",
  [REGION_CODES.CHUNGBUK]: "충북",
  [REGION_CODES.CHUNGNAM]: "충남",
  [REGION_CODES.SEJONG]: "세종",
  [REGION_CODES.DAEJEON]: "대전",
  [REGION_CODES.JEONBUK]: "전북",
  [REGION_CODES.JEONNAM]: "전남",
  [REGION_CODES.GWANGJU]: "광주",
  [REGION_CODES.GYEONGBUK]: "경북",
  [REGION_CODES.GYEONGNAM]: "경남",
  [REGION_CODES.DAEGU]: "대구",
  [REGION_CODES.ULSAN]: "울산",
  [REGION_CODES.BUSAN]: "부산",
  [REGION_CODES.JEJU]: "제주",
} as const;
