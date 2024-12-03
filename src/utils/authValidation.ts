import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, "이름은 2자 이상이어야 합니다.")
      .regex(/^[가-힣a-zA-Z\s]+$/, "이름은 한글 또는 영어만 입력해주세요."),
    email: z.string().email("올바른 이메일 형식이 아닙니다."),
    phoneNumber: z
      .string()
      .regex(/^01[0-9]\d{7,8}$/, "올바른 전화번호 형식이 아닙니다."),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

export type AuthFormData = z.infer<typeof signUpSchema>;
