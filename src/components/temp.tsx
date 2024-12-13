export function ShareBox() {
  return (
    <div className="flex flex-col justify-between w-[152px] h-[80px] tablet:h-[82px] pc:w-[224px] pc:h-[118px]">
      <div className="text-black-400 font-semibold text-lg pc:text-xl">
        견적서 공유하기
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-neutral-500"></div>
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-amber-400"></div>
        <div className="w-[40px] h-[40px] pc:w-[64px] pc:h-[64px] bg-sky-600"></div>
      </div>
    </div>
  );
}
