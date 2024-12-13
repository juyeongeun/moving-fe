import ProfileForm from "@/components/forms/Profile";

const styles = {
  container: `flex flex-col items-center w-full`,
};

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <ProfileForm isUser={false} isEdit={false} />
    </div>
  );
}
