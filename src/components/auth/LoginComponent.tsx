"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import SnsComponent from "@/components/auth/SnsComponent";
import FormHeader from "@/components/auth/FormHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/utils/authValidation";
import React from "react";

interface SignUpComponentProps {
  isUser: boolean;
}

const styles = {
  container: `flex flex-col items-center w-full tablet:px-0`,
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const validationResult = loginSchema.safeParse(data);
      if (!validationResult.success) {
        throw new Error("유효성 검사 실패");
      }

      // API 호출 로직
      console.log("폼 제출:", data);

      // 성공 시 폼 초기화
      reset();
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <div className={styles.container}>
      <FormHeader isUser={isUser} signUp={false} />
      <form className={styles.form}>
        <div className={styles.formItem}>
          <label htmlFor="email" className={styles.formLabel}>
            이메일
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="이메일을 입력해주세요."
            isAuth={true}
            error={errors.email?.message}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password" className={styles.formLabel}>
            비밀번호
          </label>
          <Input
            {...register("password")}
            type="password"
            placeholder="비밀번호를 입력해주세요."
            isAuth={true}
            error={errors.password?.message}
          />
        </div>
        <Button
          children="로그인"
          type="submit"
          variant="primary"
          className={styles.button}
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit(onSubmit)}
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
