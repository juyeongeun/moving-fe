import SearchInput from "@/components/common/SearchInput";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import ChatField from "@/components/common/ChatField";

export default function Home() {
  return (
    <div className="bg-gray-600 flex justify-center items-center flex-col gap-4">
      <SearchInput name="review" placeholder="최소 10자 이상 입력해주세요" />
      <Input
        name="review"
        placeholder="최소 10자 이상 입력해주세요"
        type="password"
        error="에러가 발생했습니다."
      />
      <Textarea
        name="review"
        placeholder="최소 10자 이상 입력해주세요"
        type="modal"
      />
      <ChatField value="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요" />
    </div>
  );
}
