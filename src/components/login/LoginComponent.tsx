"use client";

import Image from "next/image";
import assets from "@/variables/images";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import SnsComponent from "@/components/common/SnsComponent";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/validation";

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

    // 유효성 검사
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "올바른 이메일 형식이 아닙니다",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          email: "",
        }));
      }
    }

    if (name === "password") {
      if (!validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password: "비밀번호는 8자리 이상이어야 합니다",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          password: "",
        }));
      }
    }
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
      <Image
        src={assets.images.logoWordmark}
        alt="logo"
        width={112}
        height={64}
        className={styles.logo}
      />
      {isUser ? (
        <p className={styles.linkDescription}>
          기사님이신가요?{" "}
          <a href="/user/auth/login" className={styles.link}>
            기사님 전용 페이지
          </a>
        </p>
      ) : (
        <p className={styles.linkDescription}>
          일반 유저라면?{" "}
          <a href="/user/auth/login" className={styles.link}>
            일반 유저 전용 페이지
          </a>
        </p>
      )}
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
          onClick={() => {}}
          variant="primary"
          className={styles.button}
          disabled={!isFormValid()}
        />
      </form>
      <p className={styles.linkDescription}>
        아직 무빙 회원이 아니신가요?{" "}
        <a href="/user/auth/signup" className={styles.link}>
          이메일로 회원가입하기
        </a>
      </p>
      <div className={styles.snsContainer}>
        <SnsComponent />
      </div>
    </div>
  );
}
