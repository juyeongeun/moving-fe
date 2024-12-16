import CAN_USE_DOM from "@/utils/canUseDom";
import axios from "axios";

const API_URL =
  (process.env.NEXT_PUBLIC_API_MOCKING === "enabled" && "/api") ||
  process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
