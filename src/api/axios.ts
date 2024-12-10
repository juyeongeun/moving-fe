import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

// 요청 인터셉터 추후 추가

export default axiosInstance;
