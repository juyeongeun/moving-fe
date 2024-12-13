export interface BaseMoverData {
  id: number;
  imageUrl: string | null;
  nickname: string;
  career: number;
  ratings: {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    average: number | null;
  };
  reviewCount: number;
  confirmCount: number;
}

export interface ProfileData {
  name: string | null;
  phoneNumber: string | null;
  email: string | null;
}

export interface FavoriteFields {
  favoriteCount: number;
  isFavorite: boolean;
}
export interface FullMoverData extends BaseMoverData {
  introduction: string;
  services: number[];
  regions: number[];
  isDesignated?: boolean;
}

export interface CardProps {
  size?: "fixed" | "responsive";
  className?: string;
}

export interface Address {
  pickupAddress: string;
  dropOffAddress: string;
}

export interface ConfirmInfo {
  isConfirmed: boolean;
}

export interface RequestDetails {
  movingDate: string;
  requestDate: string;
  cost: number;
}

export interface QuoteDetailsData {
  id: number;
  requestDate: string;
  service: number;
  isDesignated: boolean;
  isConfirmed?: boolean;
  name: string;
  movingDate: string;
  pickupAddress: string;
  dropOffAddress: string;
}

interface UserBaseData {
  id: number;
  name: string;
  email?: string;
  phoneNumber?: string;
}
interface MoverBaseData extends UserBaseData {
  imageUrl: string | null;
  nickname: string;
  career: number;
  services: number[];
  regions: number[];
  introduction?: string;
  description?: string;
}
// API 구조 참고
export interface RatingData {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  totalCount: number;
  totalSum: number;
  average: number;
}
// API 구조 참고
export interface MoverDetailData extends MoverBaseData {
  isDesignated: boolean;
  isFavorite: boolean;
  favoriteCount: number;
  reviewCount: number;
  confirmCount: number;
  rating: RatingData;
}
