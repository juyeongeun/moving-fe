import Profile from "@/components/forms/Profile";

const styles = {
  container: `flex flex-col items-center w-full`,
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
