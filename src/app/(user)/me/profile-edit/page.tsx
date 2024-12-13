import Profile from "@/components/forms/Profile";

const styles = {
  container: `flex flex-col items-center w-full mt-[57px] mx-auto px-0
    pc:w-[1400px] pc:mt-[26px] pc:px-[24px] pc:py-[32px]`,
};

export default function ProfileEditPage() {
  const data = {
    services: [1, 2],
    regions: [8202, 82031, 82032],
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/21/20/05/image-1271454_640.png",
  };
  return (
    <div className={styles.container}>
      <Profile isUser={true} isEdit={true} userData={data} />
    </div>
  );
}
