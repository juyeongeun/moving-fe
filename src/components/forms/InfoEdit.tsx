"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { infoEditSchema, InfoEditFormData } from "@/utils/authValidation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { editUserInfo } from "@/api/auth";
import { UserInfo } from "@/types/auth";

interface InfoEditProps {
  isUser: boolean;
  userData: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}

const styles = {
  container: `relative flex flex-col items-center w-full`,
  pcContainer: `pc:flex pc:flex-col pc:items-center pc:w-full`,
  pcForm: `pc:flex pc:flex-row pc:gap-[72px]`,
  form: `flex flex-col gap-[16px] w-full mt-[16px] mb-[32px] pt-[20px] border-t-[1px] border-solid border-line-200`,
  formItem: `flex flex-col gap-[8px] border-b-[1px] border-solid border-line-100 pb-[20px] w-full mb-[20px]
  pc:mb-[32px] pc:pb-[32px]`,
  formLabel: `text-lg text-black-400 font-semibold pc:text-xl`,
  buttonContainer: `flex flex-col gap-[8px] mt-[24px] pc:flex-row-reverse pc:gap-[32px] w-full`,
  button: `flex-1 text-center`,
  title: `w-full text-2lg font-bold text-black-400`,
};

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  disabled = false,
  className = "",
}: {
  label: string;
  name: keyof InfoEditFormData;
  type?: string;
  placeholder: string;
  register: any;
  error?: string;
  disabled?: boolean;
  className?: string;
}) => (
  <div className={styles.formItem}>
    <label htmlFor={name} className={styles.formLabel}>
      {label}
    </label>
    <Input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
      className={className}
    />
  </div>
);

export default function InfoEdit({ isUser, userData }: InfoEditProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    reset,
  } = useForm<InfoEditFormData>({
    resolver: zodResolver(infoEditSchema),
    mode: "onChange",
    defaultValues: {
      name: userData.name,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      currentPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
  });

  const values = watch();

  const getErrorMessage = (fieldName: keyof InfoEditFormData) => {
    return values[fieldName]?.trim() ? errors[fieldName]?.message : undefined;
  };

  const onSubmit = async (data: InfoEditFormData) => {
    const hasPasswordChange = data.currentPassword && data.newPassword;
    const userType = isUser ? "유저" : "기사";

    console.log(
      `${userType} 폼 제출:`,
      data.name,
      data.phoneNumber,
      hasPasswordChange && data.newPassword
    );

    const userInfo: UserInfo = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      currentPassword: data.currentPassword,
    };

    if (data.newPassword) {
      userInfo.newPassword = data.newPassword;
    }
    try {
      await editUserInfo(userInfo);

      isUser ? router.push("/find-mover") : router.push("/mover/my-page");

      toast.success("기본정보 수정이 완료되었습니다.", {
        position: "bottom-center",
        icon: "👏",
      });
      reset();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.data?.message ||
        error.response?.data?.message ||
        "정보 수정에 실패했습니다.";

      toast.error(errorMessage, {
        position: "bottom-center",
      });
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  // 버튼 활성화 조건을 확인하는 함수 추가
  const isSubmitDisabled = () => {
    const hasCurrentPassword = !values.currentPassword;
    const isPasswordChangeValid =
      values.newPassword || values.newPasswordConfirm
        ? values.newPassword && values.newPasswordConfirm
        : true;

    return (
      hasCurrentPassword || !isPasswordChangeValid || (hasErrors && isDirty)
    );
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>기본정보 수정</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.pcForm}>
          <div className={styles.pcContainer}>
            <FormField
              label="이름"
              name="name"
              placeholder="성함을 입력해 주세요"
              register={register}
              error={getErrorMessage("name")}
            />
            <FormField
              label="이메일"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              register={register}
              error={getErrorMessage("email")}
              disabled={true}
              className="cursor-not-allowed text-grayscale-300"
            />
            <FormField
              label="전화번호"
              name="phoneNumber"
              placeholder="휴대폰 번호를 입력해주세요."
              register={register}
              error={getErrorMessage("phoneNumber")}
            />
          </div>
          <div className={styles.pcContainer}>
            <FormField
              label="현재 비밀번호"
              name="currentPassword"
              type="password"
              placeholder="현재 비밀번호를 입력해주세요"
              register={register}
              error={getErrorMessage("currentPassword")}
            />
            <FormField
              label="새 비밀번호"
              name="newPassword"
              type="password"
              placeholder="새 비밀번호를 입력해주세요"
              register={register}
              error={getErrorMessage("newPassword")}
            />
            <FormField
              label="새 비밀번호 확인"
              name="newPasswordConfirm"
              type="password"
              placeholder="새 비밀번호를 다시 입력해주세요"
              register={register}
              error={getErrorMessage("newPasswordConfirm")}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            children="수정하기"
            type="submit"
            variant="primary"
            className={styles.button}
            disabled={isSubmitDisabled()}
          />
          <Button
            children="취소"
            variant="outlined"
            className={styles.button}
            onClick={() => router.push("/")}
          />
        </div>
      </form>
    </div>
  );
}
