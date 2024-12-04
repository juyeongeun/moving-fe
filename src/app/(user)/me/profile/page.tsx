import Profile from "@/components/infoEdit/Profile";

const styles = {
  container: `flex flex-col items-center w-full mt-[57px]
    tablet:w-[327px] mx-auto px-0
    pc:w-[1400px] pc:mt-[26px] pc:px-[24px] pc:py-[32px]`,
};

export default function ProfilePage() {
  const userData = {
    nickName: "",
    career: "",
    introduction: "",
    description: "안녕하세요",
    services: ["서비스1", "서비스2"],
    regions: ["서울", "경기"],
  };
  return (
    <div className={styles.container}>
      <Profile isUser={true} userData={userData} />
    </div>
  );
}
