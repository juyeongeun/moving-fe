import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? "/mock/api" // mocking URL
    : "/api"; // 실제 API URL

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 403) {
      const errorMessage = error.response?.data?.message;
      if (
        errorMessage === "Token missing" ||
        errorMessage === "Invalid token"
      ) {
        try {
          await axiosInstance.post("/auth/refresh");
          return axiosInstance(error.config);
        } catch (refreshError) {
          window.location.href = "/auth/login";
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
