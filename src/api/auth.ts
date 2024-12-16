import axiosInstance from "./axios";
import { UserSignup, UserLogin, AuthResponse, UserInfo } from "@/types/auth";

const PATH = "/auth";

export const signup = async (userData: UserSignup): Promise<AuthResponse> => {
  const response = await axiosInstance.post(`${PATH}/signup`, userData);

  return response.data;
};

export const login = async (userData: UserLogin) => {
  const response = await axiosInstance.post(`${PATH}/signin`, userData);
  return { status: response.status };
};

export const editUserInfo = async (userData: UserInfo) => {
  console.log(userData);
  const response = await axiosInstance.patch(`/users`, userData);
  return { status: response.status };
};
