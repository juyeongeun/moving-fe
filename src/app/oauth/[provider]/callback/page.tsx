"use client";

import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function OAuthCallback() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "프로필 등록",
        text: error,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "확인",
        confirmButtonColor: "#3085d6",
        cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/me/profile";
        } else {
          window.location.href = "/auth/login";
        }
      });
    }
  }, [error]);

  return <div>처리중...</div>;
}
