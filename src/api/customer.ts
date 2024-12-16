import axiosInstance from "./axios";

const PATH = "/customers";

export const editCustomerProfile = async (formData: FormData) => {
  try {
    const response = await axiosInstance.patch(`${PATH}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
