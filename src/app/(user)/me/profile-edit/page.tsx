import Profile from "@/components/infoEdit/Profile";

const styles = {
  container: `flex flex-col items-center w-full mt-[57px] mx-auto px-0
    pc:w-[1400px] pc:mt-[26px] pc:px-[24px] pc:py-[32px]`,
};

export default function ProfileEditPage() {
  const data = {
    services: [1, 2],
    regions: [8202, 82031, 82032],
    imageUrl: "https://test.com",
  };
  return (
    <div className={styles.container}>
      <Profile isUser={true} isEdit={true} userData={data} />
    </div>
  );
}
