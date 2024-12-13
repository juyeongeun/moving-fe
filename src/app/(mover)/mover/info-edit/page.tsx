import InfoEdit from "@/components/forms/InfoEdit";

const styles = {
  container: `flex flex-col items-center w-full`,
};

export default function InfoEditPage() {
  const userData = {
    name: "홍길동",
    email: "test@test.com",
    phoneNumber: "01012345678",
  };
  return (
    <div className={styles.container}>
      <InfoEdit isUser={false} userData={userData} />
    </div>
  );
}
