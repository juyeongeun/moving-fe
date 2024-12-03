"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import SnsComponent from "@/components/auth/SnsComponent";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/authValidation";
import FormHeader from "@/components/auth/FormHeader";

interface LoginComponentProps {
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

export default function LoginComponent({ isUser }: LoginComponentProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const validationResult =
      name === "email" ? validateEmail(value) : validatePassword(value);

    setErrors((prev) => ({
      ...prev,
      [name]: validationResult.error,
    }));
  };

  const isFormValid = () => {
    return (
      formData.email !== "" &&
      formData.password !== "" &&
      !errors.email &&
      !errors.password
    );
  };

  return (
    <div className={styles.container}>
      <FormHeader isUser={isUser} />
      <form className={styles.form}>
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
        아직 무빙 회원이 아니신가요?{" "}
        {isUser ? (
          <a href="/auth/register" className={styles.link}>
            이메일로 회원가입하기
          </a>
        ) : (
          <a href="/mover/auth/register" className={styles.link}>
            이메일로 회원가입하기
          </a>
        )}
      </p>
      <div className={styles.snsContainer}>
        <SnsComponent />
      </div>
    </div>
  );
}
