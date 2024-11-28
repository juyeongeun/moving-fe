import Dropdown, { DropdownType } from "@/components/common/Dropdown";

export default function Home() {
  return (
    <div className="text-gray-">
      랜딩페이지입니다
      <Dropdown
        type={DropdownType.REGION}
        onSelect={(value) => {
          console.log(value);
        }}
        disabled={false}
      />
    </div>
  );
}
