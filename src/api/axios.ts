import axios from "axios";
import Swal from "sweetalert2";

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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.data?.redirect) {
      // 추후 수정 예정
      const result = await Swal.fire({
        title: "프로필 등록",
        text: error.response?.data?.message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "확인",
        confirmButtonColor: "bg-pr-blue-300",
      });

      if (result.isConfirmed) {
        window.location.href = error.response?.data?.redirectUrl;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
