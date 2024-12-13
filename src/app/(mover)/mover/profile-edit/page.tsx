import Profile from "@/components/forms/Profile";

const styles = {
  container: `flex flex-col items-center w-full`,
};

export default function ProfileEditPage() {
  const data = {
    nickName: "테스트",
    career: "1",
    introduction: "테스트",
    description: "테스트테스트테스트테스트테스트테스트",
    services: [99, 0, 1, 2],
    regions: [82055, 8202],
    imageUrl: "http://test.com",
  };
  return (
    <div className={styles.container}>
      <Profile isUser={false} isEdit={true} userData={data} />
    </div>
  );
}
