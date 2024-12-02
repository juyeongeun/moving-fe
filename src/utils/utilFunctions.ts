import { SERVICE_TYPES } from "@/variables/var";

export const formatCount = (count: number) => {
  if (count > 9999) return "9,999+";
  return count.toLocaleString();
};

export const mapServiceType = (services: number[]) => {
  return services.map(
    (service) => SERVICE_TYPES[service as keyof typeof SERVICE_TYPES]
  );
};
