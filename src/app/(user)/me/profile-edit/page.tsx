import Profile from "@/components/forms/Profile";

const styles = {
  container: `flex flex-col items-center w-full`,
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
