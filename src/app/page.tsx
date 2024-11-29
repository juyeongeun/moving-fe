import FilterModal from "@/components/common/FilterModal";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <FilterModal count={[20, 4, 2, 10]} />
    </div>
  );
}
