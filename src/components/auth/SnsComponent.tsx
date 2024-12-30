import assets from "@/variables/images";
import Image from "next/image";
import { oauth } from "@/api/auth";
const styles = {
  linkDescription: `text-xs text-black-100 pc:text-xl pc:text-black-200`,
  snsContainer: `flex flex-row items-center gap-[24px]`,
  sns: `cursor-pointer`,
};

export default function SnsComponent({ isUser }: { isUser: boolean }) {
  const handleClickSns = async (sns: string) => {
    try {
      const { data } = await oauth(sns, isUser ? "customer" : "mover");
      window.location.replace(data);
    } catch (error) {
      console.error("OAuth 에러:", error);
    }
  };

  return (
    <>
      <p className={styles.linkDescription}>SNS 계정으로 간편 가입하기</p>
      <div className={styles.snsContainer}>
        <Image
          src={assets.images.logoGoogle}
          alt="google"
          width={54}
          height={54}
          className={styles.sns}
          onClick={() => handleClickSns("google")}
        />
        <Image
          src={assets.images.logoKakao}
          alt="kakao"
          width={54}
          height={54}
          className={styles.sns}
          onClick={() => handleClickSns("kakao")}
        />
        <Image
          src={assets.images.logoNaver}
          alt="naver"
          width={54}
          height={54}
          className={styles.sns}
          onClick={() => handleClickSns("naver")}
        />
      </div>
    </>
  );
}
