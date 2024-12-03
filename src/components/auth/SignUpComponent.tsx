"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import SnsComponent from "@/components/auth/SnsComponent";
import { useState } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirm,
  validatePhoneNumber,
} from "@/utils/authValidation";
import FormHeader from "@/components/auth/FormHeader";

interface SignUpComponentProps {
  isUser: boolean;
}

const styles = {
  container: `flex flex-col items-center w-full px-[24px]
  tablet:px-0`,
  logo: `pc:w-[140px] pc:h-[80px] mb-[10px]`,
  linkDescription: `text-xs text-black-100 pc:text-xl pc:text-black-200`,
  link: `text-pr-blue-300 underline font-semibold`,
  form: `flex flex-col gap-[16px] w-full mt-[40px] mb-[16px]`,
  formItem: `flex flex-col gap-[8px]`,
  formLabel: `text-md text-black-400 pc:text-xl`,
  button: `mt-[16px]`,
  snsContainer: `flex flex-col items-center gap-[24px] mt-[40px]`,
};

export default function SignUpComponent({ isUser }: SignUpComponentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const validationResult =
      name === "name"
        ? validateName(value)
        : name === "email"
        ? validateEmail(value)
        : name === "phoneNumber"
        ? validatePhoneNumber(value)
        : name === "passwordConfirm"
        ? validatePasswordConfirm(formData.password, value)
        : validatePassword(value);

    setErrors((prev) => ({
      ...prev,
      [name]: validationResult.error,
    }));
  };

  const isFormValid = () => {
    return (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.phoneNumber !== "" &&
      formData.password !== "" &&
      formData.passwordConfirm !== "" &&
      !errors.name &&
      !errors.email &&
      !errors.phoneNumber &&
      !errors.password &&
      !errors.passwordConfirm
    );
  };

  return (
    <div className={styles.container}>
      <FormHeader isUser={isUser} signUp={true} />
      <form className={styles.form}>
        <div className={styles.formItem}>
          <label htmlFor="name" className={styles.formLabel}>
            이름
          </label>
          <Input
            name="name"
            type="text"
            placeholder="성함을 입력해 주세요"
            isAuth={true}
            error={errors.name}
            value={formData.name}
            onChange={(value) => handleInputChange("name", value)}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email" className={styles.formLabel}>
            이메일
          </label>
          <Input
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            isAuth={true}
            error={errors.email}
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="phoneNumber" className={styles.formLabel}>
            전화번호
          </label>
          <Input
            name="phoneNumber"
            type="text"
            placeholder="휴대폰 번호를 입력해주세요."
            isAuth={true}
            error={errors.phoneNumber}
            value={formData.phoneNumber}
            onChange={(value) => handleInputChange("phoneNumber", value)}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password" className={styles.formLabel}>
            비밀번호
          </label>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            isAuth={true}
            error={errors.password}
            value={formData.password}
            onChange={(value) => handleInputChange("password", value)}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password" className={styles.formLabel}>
            비밀번호 확인
          </label>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요."
            isAuth={true}
            error={errors.passwordConfirm}
            value={formData.passwordConfirm}
            onChange={(value) => handleInputChange("passwordConfirm", value)}
          />
        </div>
        <Button
          children="로그인"
          type="submit"
          onClick={() => {}}
          variant="primary"
          className={styles.button}
          disabled={!isFormValid()}
        />
      </form>
      <p className={styles.linkDescription}>
        이미 무빙 회원이신가요?{" "}
        {isUser ? (
          <a href="/auth/login" className={styles.link}>
            로그인
          </a>
        ) : (
          <a href="/mover/auth/login" className={styles.link}>
            로그인
          </a>
        )}
      </p>
      <div className={styles.snsContainer}>
        <SnsComponent />
      </div>
    </div>
  );
}
