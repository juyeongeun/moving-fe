import assets from "@/variables/images";
import Image from "next/image";

const styles = {
  linkDescription: `text-xs text-black-100 pc:text-xl pc:text-black-200`,
  snsContainer: `flex flex-row items-center gap-[24px]`,
};

export default function SnsComponent() {
  return (
    <>
      <p className={styles.linkDescription}>SNS 계정으로 간편 가입하기</p>
      <div className={styles.snsContainer}>
        <Image
          src={assets.images.logoGoogle}
          alt="google"
          width={54}
          height={54}
        />
        <Image
          src={assets.images.logoKakao}
          alt="kakao"
          width={54}
          height={54}
        />
        <Image
          src={assets.images.logoNaver}
          alt="naver"
          width={54}
          height={54}
        />
      </div>
    </>
  );
}
