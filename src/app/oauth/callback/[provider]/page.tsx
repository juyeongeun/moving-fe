"use client";

import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function OAuthCallback() {
  const params = useParams();
  const searchParams = useSearchParams();
  const provider = params.provider;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  useEffect(() => {
    if (code && state) {
      fetch(`/oauth/${provider}/callback?code=${code}&state=${state}`, {
        credentials: "include",
      })
        .then(async (response) => {
          const data = await response.json();

          if (response.status === 403) {
            Swal.fire({
              title: "프로필 등록",
              text: data.data?.message || "프로필을 등록해주세요.",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "확인",
              confirmButtonColor: "#3085d6",
              cancelButtonText: "취소",
            }).then((result) => {
              if (result.isConfirmed && data.data?.redirectUrl) {
                window.location.href = data.data.redirectUrl;
              } else {
                window.location.href = "/auth/login";
              }
            });
          } else if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          }
        })
        .catch((error) => {
          console.error("OAuth callback error:", error);
          Swal.fire({
            title: "에러",
            text: "인증 처리 중 오류가 발생했습니다.",
            icon: "error",
            confirmButtonText: "확인",
          }).then(() => {
            window.location.href = "/auth/login";
          });
        });
    }
  }, [code, state, provider]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">인증 처리중...</div>
    </div>
  );
}
