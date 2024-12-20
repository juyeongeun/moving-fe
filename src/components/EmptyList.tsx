import Image from "next/image";
import assets from "@/variables/images";

interface EmptyListProps {
  text: string;
}

export default function EmptyList({ text }: EmptyListProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px] w-full h-[370px] tablet:h-[656px] pc:h-[656px]">
      <div className="relative w-[110px] h-[82px] tablet:w-[184px] tablet:h-[136px] pc:w-[184px] pc:h-[136px] mx-auto motion-safe:animate-bounce">
        <Image src={assets.images.emptyFolder} alt="빈 폴더" fill />
      </div>
      <h3 className="text-xl tablet:text-2xl pc:text-2xl font-medium mb-6 text-grayscale-300">
        {text}
      </h3>
    </div>
  );
}
