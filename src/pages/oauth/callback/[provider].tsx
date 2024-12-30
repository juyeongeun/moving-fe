import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const OAuthCallback = () => {
  const router = useRouter();
  const { code, state, provider } = router.query;

  useEffect(() => {
    if (code && state) {
      // 서버에서 403 응답을 JSON으로 받아올 수 있도록 fetch 사용
      fetch(`/oauth/${provider}/callback?code=${code}&state=${state}`, {
        credentials: "include",
      })
        .then(async (response) => {
          const data = await response.json();

          if (response.status === 403) {
            // 403 에러 처리
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

  return <div>인증 처리중...</div>;
};

export default OAuthCallback;
