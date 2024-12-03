import { SERVICE_TYPES } from "@/variables/var";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { REGION_CODES, REGION_TEXTS } from "@/variables/regions";

export const formatCount = (count: number) => {
  if (count > 9999) return "9,999+";
  return count.toLocaleString();
};

export const mapServiceType = (services: number[]) => {
  return services.map(
    (service) => SERVICE_TYPES[service as keyof typeof SERVICE_TYPES]
  );
};

export const formatDateWithDay = (date: string | Date): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return format(dateObj, "yyyy. MM. dd(E)", { locale: ko });
};

export const getRegionText = (code: keyof typeof REGION_CODES) => {
  return REGION_TEXTS[REGION_CODES[code]];
};
