export const PROFILE_CUSTOMER = ["프로필 수정", "찜한 기사님", "이사 리뷰"];
export const PROFILE_MOVER = ["마이페이지", "받은 견적"];
export const SORT_MOVER = [
  "리뷰 많은순",
  "평점 높은순",
  "경력 높은순",
  "확정 많은순",
];
export const SORT_MOVING_REQUEST = ["이사 빠른순", "요청일 빠른순"];

export enum DropdownType {
  REGION,
  SERVICE,
  PROFILE_CUSTOMER,
  PROFILE_MOVER,
  NOTIFICATION,
  SORT_MOVER,
  SORT_MOVING_REQUEST,
}

export const DROPDOWN_ITEM_CLASSES: Record<DropdownType, string> = {
  [DropdownType.REGION]:
    "box-border flex flex-row items-center \
    px-3.5 \
    w-full h-9 \
    text-md font-medium \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:px-6 pc:h-[64px] pc:text-2lg",
  [DropdownType.SERVICE]:
    "box-border flex flex-row items-center \
    px-3.5 \
    w-full h-9 \
    text-md font-medium text-nowrap \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:px-6 pc:h-[64px] pc:text-2lg",
  [DropdownType.PROFILE_CUSTOMER]:
    "box-border flex flex-col items-left \
    px-3 py-2 \
    w-full h-10 \
    text-md text-black-400 font-medium no-wrap\
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:px-6 pc:py-3.5 pc:h-[54px] pc:text-lg",
  [DropdownType.PROFILE_MOVER]:
    "box-border flex flex-col items-left \
    px-3 py-2 \
    w-full h-10 \
    text-md text-black-400 font-medium \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:px-6 pc:py-3.5 pc:h-[54px] pc:text-lg",
  [DropdownType.NOTIFICATION]:
    "box-border flex flex-col items-left \
    px-6 py-3 \
    w-full \
    text-lg text-black-400 font-medium \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:py-4",
  [DropdownType.SORT_MOVER]:
    "flex flex-col items-center justify-center \
    w-full h-8 \
    text-xs text-black-400 font-medium \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:h-10 pc:text-md",
  [DropdownType.SORT_MOVING_REQUEST]:
    "flex flex-col items-center justify-center \
    w-full h-8 \
    text-xs text-black-400 font-medium \
    hover:bg-pr-blue-50 \
    cursor-pointer \
    pc:h-10 pc:text-md",
};

export const DROPDOWN_LIST_CLASSES: Record<DropdownType, string> = {
  [DropdownType.REGION]:
    "grid grid-cols-2 overflow-y-scroll \
    h-full \
    scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar \
    scrollbar-thumb-grayscale-200 scrollbar-w-1 \
    pc:scrollbar-w-1.5",
  [DropdownType.SERVICE]:
    "absolute flex flex-col items-center \
    top-[42px] w-[89px] h-[144px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    tablet:top-11 \
    pc:top-20 pc:w-[328px] pc:h-[256px]",
  [DropdownType.PROFILE_CUSTOMER]:
    "absolute flex flex-col items-center \
    p-1.5 pt-2.5 top-[37px] right-0 w-[152px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-[54px] pc:w-[248px]",
  [DropdownType.PROFILE_MOVER]:
    "absolute flex flex-col items-center \
    p-1.5 pt-2.5 top-[37px] right-0 w-[152px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-[54px] pc:w-[248px]",
  [DropdownType.NOTIFICATION]:
    "absolute flex flex-col items-center \
    p-4 py-2.5 top-[37px] right-[-100px] w-[312px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    tablet:right-[-56px] \
    pc:top-[54px] pc:w-[359px] pc:right-0",
  [DropdownType.SORT_MOVER]:
    "absolute flex flex-col items-center \
    top-10 right-0 w-[91px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-12 pc:w-[114px]",
  [DropdownType.SORT_MOVING_REQUEST]:
    "absolute flex flex-col items-center \
    top-10 right-0 w-[91px] \
    border-solid border-[1px] border-line-100 rounded-2xl \
    bg-white \
    pc:top-12 pc:w-[114px]",
};

export const DROPDOWN_CLASSES: Record<
  DropdownType,
  {
    base: string;
    able: string;
    open: string;
    disabled: string;
  }
> = {
  [DropdownType.REGION]: {
    base: "relative box-border flex flex-row justify-between items-center \
        pl-3.5 pr-2.5 w-[75px] h-9 \
        border-solid border-[1px] border-grayscale-100 rounded-lg \
        bg-transparent shadow-[4px_4px_10px_rgba(238,238,238,0.1)] \
        text-black-400 \
        cursor-pointer \
        pc:w-[328px] pc:h-16 pc:px-6 pc:rounded-2xl",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300 text-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SERVICE]: {
    base: "relative box-border flex flex-row justify-between items-center \
        pl-3.5 pr-2.5 w-[87px] h-9 \
        border-solid border-[1px] border-grayscale-100 rounded-lg \
        bg-transparent shadow-[4px_4px_10px_rgba(238,238,238,0.1)] \
        text-black-400 \
        cursor-pointer \
        pc:w-[328px] pc:h-16 pc:px-6 pc:rounded-2xl",
    able: "shadow-md hover:bg-pr-blue-50",
    open: "border-pr-blue-300 text-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.PROFILE_CUSTOMER]: {
    base: "relative flex flex-row gap-4 items-center justify-between rounded-full cursor-pointer",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.PROFILE_MOVER]: {
    base: "relative flex flex-row gap-4 items-center justify-between rounded-full cursor-pointer",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.NOTIFICATION]: {
    base: "relative w-6 h-6 rounded-full cursor-pointer",
    able: "",
    open: "",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SORT_MOVER]: {
    base: "relative flex flex-row justify-center items-center \
        px-1.5 m-auto w-[91px] h-8 \
        bg-transparent rounded-lg \
        text-black-400 \
        cursor-pointer \
        pc:px-2.5 pc:w-[114px] pc:h-10",
    able: "",
    open: "text-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
  [DropdownType.SORT_MOVING_REQUEST]: {
    base: "relative flex flex-row justify-center items-center \
        px-1.5 m-auto w-[91px] h-8 \
        bg-transparent rounded-lg \
        text-black-400 \
        cursor-pointer \
        pc:px-2.5 pc:w-[114px] pc:h-10",
    able: "",
    open: "text-pr-blue-300",
    disabled: "cursor-not-allowed",
  },
};
