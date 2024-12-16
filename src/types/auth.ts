export interface UserLogin {
  email: string;
  password: string;
}

export interface UserSignup {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  imageUrl: string;
  services: string[];
  regions: string[];
}

export interface AuthResponse {
  status: number;
  error?: string;
}

export interface UserInfo {
  name: string;
  phoneNumber: string;
  currentPassword?: string;
  newPassword?: string;
}
