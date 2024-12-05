import Profile from "@/components/forms/Profile";

const styles = {
  container: `flex flex-col items-center w-full mt-[57px] mx-auto px-0
    pc:w-[1400px] pc:mt-[26px] pc:px-[24px] pc:py-[32px]`,
};

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <Profile isUser={false} isEdit={false} />
    </div>
  );
}
