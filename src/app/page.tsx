import Textarea from "@/components/common/Textarea";

export default function Home() {
  return (
    <div className="bg-gray-600 flex justify-center items-center">
      <Textarea
        name="review"
        placeholder="최소 10자 이상 입력해주세요"
        width={560}
        height={160}
        xPadding="16px"
        value="안녕하세요"
        error="최소 10자 이상 입력해주세요"
      />
    </div>
  );
}
