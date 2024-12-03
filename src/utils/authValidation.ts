interface ValidationResult {
  isValid: boolean;
  error: string;
}

export const validateName = (name: string): ValidationResult => {
  const nameRegex = /^[가-힣a-zA-Z\s]+$/;
  return {
    isValid: nameRegex.test(name),
    error: nameRegex.test(name) ? "" : "이름은 한글 또는 영어만 입력해주세요.",
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email),
    error: emailRegex.test(email) ? "" : "이메일 형식이 아닙니다.",
  };
};

export const validatePassword = (password: string): ValidationResult => {
  const isValid = password.length >= 8;
  return {
    isValid,
    error: isValid ? "" : "비밀번호가 올바르지 않습니다.",
  };
};

export const validatePhoneNumber = (phoneNumber: string): ValidationResult => {
  const numberOnly = /^\d+$/;
  return {
    isValid: numberOnly.test(phoneNumber),
    error: numberOnly.test(phoneNumber) ? "" : "숫자만 입력해주세요.",
  };
};

export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string
): ValidationResult => {
  return {
    isValid: password === passwordConfirm,
    error: password === passwordConfirm ? "" : "비밀번호가 일치하지 않습니다.",
  };
};
