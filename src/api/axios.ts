import axios from "axios";
import Swal from "sweetalert2";

const API_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? "/mock" // mocking URL
    : "/api"; // 실제 API URL

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

// CSR 전용 인스턴스
export const axiosCSRInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  ...commonConfig,
});

// SSR 전용 인스턴스
export const axiosSSRInstance = axios.create({
  // 임시. 테스트 코드(개인 be 주소 적용용)
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://moving-be-1.onrender.com",
  withCredentials: true,
  ...commonConfig,
});

// SSR/CSR 환경에 따라 자동 인스턴스 선택택
export const axiosInstance =
  typeof window === "undefined" ? axiosSSRInstance : axiosCSRInstance;

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 403) {
      const errorMessage = error.response?.data?.message;
      if (
        errorMessage === "Token missing" ||
        errorMessage === "Invalid token"
      ) {
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            await axiosInstance.post("/auth/refresh");
            isRefreshing = false;
            return axiosInstance(error.config);
          } catch (refreshError) {
            isRefreshing = false;
            if (typeof window !== "undefined") {
              // CSR 환경에서만 리디렉션
              window.location.href = "/auth/login";
            }
            return Promise.reject(error);
          }
        } else {
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

// 임시. 테스트 코드
export const axiosInstance2 = axios.create({
  baseURL: "https://moving-be-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
