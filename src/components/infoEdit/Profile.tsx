"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { profileSchema, ProfileFormData } from "@/utils/authValidation";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/common/ConfirmModal";
import Textarea from "@/components/common/Textarea";

interface ProfileEditProps {
  isUser: boolean;
  userData: {
    nickName: string;
    career: string;
    introduction: string;
    description: string;
    services: string[];
    regions: string[];
  };
}

const styles = {
  container: `relative flex flex-col items-center w-full px-[24px] 
    tablet:px-0`,
  pcContainer: `pc:flex pc:flex-col pc:items-center pc:w-full`,
  pcForm: `pc:flex pc:flex-row pc:gap-[72px]`,
  form: `flex flex-col gap-[16px] w-full mt-[16px] mb-[32px] pt-[20px] border-t-[1px] border-solid border-line-200`,
  formItem: `flex flex-col gap-[8px] border-b-[1px] border-solid border-line-100 pb-[20px] w-full`,
  formLabel: `text-md text-black-400 pc:text-xl`,
  buttonContainer: `flex flex-col gap-[8px] mt-[24px] pc:flex-row-reverse pc:gap-[32px] w-full`,
  button: `flex-1 text-center`,
  title: `w-full text-2lg font-bold text-black-400`,
  overlay: `fixed inset-0 bg-black-100 bg-opacity-50 z-40`,
  modalWrapper: `absolute top-0 left-0 w-full h-full flex items-center justify-center z-50`,
};

// FormField 컴포넌트 수정
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
  label: string | React.ReactNode;
  name: keyof ProfileFormData;
  type?: string;
  placeholder: string;
  register: any;
  error?: string;
  disabled?: boolean;
  className?: string;
}) => (
  <div className={styles.formItem}>
    <label htmlFor={name} className={styles.formLabel}>
      {typeof label === "string" ? label : label}
      {name === "services" || name === "regions" ? (
        <span className="text-pr-blue-300 text-lg font-semibold">*</span>
      ) : null}
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

export default function ProfileEdit({ isUser, userData }: ProfileEditProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      nickName: userData.nickName,
      career: userData.career,
      introduction: userData.introduction,
      description: userData.description,
      services: userData.services,
      regions: userData.regions,
    },
  });

  const values = watch();

  const getErrorMessage = (fieldName: keyof ProfileFormData) => {
    const value = values[fieldName];
    return Array.isArray(value)
      ? errors[fieldName]?.message
      : value?.trim()
      ? errors[fieldName]?.message
      : undefined;
  };

  const onSubmit = async (data: ProfileFormData) => {
    try {
      console.log(`${isUser ? "사용자" : "기사"} 폼 제출:`, data);

      // 성공 시 폼 초기화
      reset();
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className={styles.container}>
      {showModal && (
        <>
          <div className={styles.overlay} />
          <div className={styles.modalWrapper}>
            <ConfirmModal
              title="비밀번호 오류"
              description="현재 비밀번호가 일치하지 않습니다."
              buttonText="확인"
              onClose={() => setShowModal(false)}
            />
          </div>
        </>
      )}
      <p className={styles.title}>프로필 수정</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.pcForm}>
          <div className={styles.pcContainer}>
            <FormField
              label="별명"
              name="nickName"
              placeholder="사이트에 노출될 이름을 입력해 주세요"
              register={register}
              error={getErrorMessage("nickName")}
            />
            <FormField
              label="경력"
              name="career"
              placeholder="경력을 입력해주세요."
              register={register}
              error={getErrorMessage("career")}
            />
            <FormField
              label="소개"
              name="introduction"
              placeholder="소개를 입력해주세요."
              register={register}
              error={getErrorMessage("introduction")}
            />
          </div>
          <div className={styles.pcContainer}>
            <div className={styles.formItem}>
              <label className={styles.formLabel} htmlFor="description">
                상세 설명{" "}
                <span className="text-pr-blue-300 text-lg font-semibold">
                  *
                </span>
              </label>
              <Textarea
                name="description"
                placeholder="상세 설명을 입력해주세요"
                error={getErrorMessage("description")}
              />
            </div>
            <FormField
              label="서비스 가능 지역 "
              name="regions"
              placeholder="지역을 입력해주세요"
              register={register}
              error={getErrorMessage("regions")}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            children="수정하기"
            type="submit"
            variant="primary"
            className={styles.button}
            disabled={hasErrors && isDirty}
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
