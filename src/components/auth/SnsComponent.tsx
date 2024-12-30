import assets from "@/variables/images";
import Image from "next/image";

const styles = {
  linkDescription: `text-xs text-black-100 pc:text-xl pc:text-black-200`,
  snsContainer: `flex flex-row items-center gap-[24px]`,
  sns: `cursor-pointer`,
};

export default function SnsComponent({ isUser }: { isUser: boolean }) {
  const handleSnsLogin = async (provider: string) => {
    const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/oauth/${provider}/${
      isUser ? "customer" : "mover"
    }`;

    window.location.href = isUser ? "me/profile" : "mover/profile";
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
          onClick={() => handleSnsLogin("google")}
        />
        <Image
          src={assets.images.logoKakao}
          alt="kakao"
          width={54}
          height={54}
          className={styles.sns}
          onClick={() => handleSnsLogin("kakao")}
        />
        <Image
          src={assets.images.logoNaver}
          alt="naver"
          width={54}
          height={54}
          className={styles.sns}
          onClick={() => handleSnsLogin("naver")}
        />
      </div>
    </>
  );
}
