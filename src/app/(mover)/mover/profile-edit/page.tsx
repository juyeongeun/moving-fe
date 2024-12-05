import Profile from "@/components/infoEdit/Profile";

const styles = {
  container: `flex flex-col items-center w-full mt-[57px] mx-auto px-0
    pc:w-[1400px] pc:mt-[26px] pc:px-[24px] pc:py-[32px]`,
};

export default function ProfileEditPage() {
  const data = {
    nickName: "테스트",
    career: "1",
    introduction: "테스트",
    description: "테스트",
    services: [1, 2],
    regions: [82055, 8202],
    imageUrl: "http://test.com",
  };
  return (
    <div className={styles.container}>
      <Profile isUser={false} isEdit={true} userData={data} />
    </div>
  );
}
