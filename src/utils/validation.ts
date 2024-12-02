interface ValidationResult {
  isValid: boolean;
  error: string;
}

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email),
    error: emailRegex.test(email) ? "" : "이메일 형식이 아닙니다",
  };
};

export const validatePassword = (password: string): ValidationResult => {
  const isValid = password.length >= 8;
  return {
    isValid,
    error: isValid ? "" : "비밀번호는 8자리 이상이어야 합니다",
  };
};
