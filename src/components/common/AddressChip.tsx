interface AddressChipProps {
  type: "도로명" | "지번";
}

export default function AddressChip({ type }: AddressChipProps) {
  const styles = {
    container: `
        inline-block whitespace-nowrap h-fit
        bg-pr-blue-50 rounded-[16px] text-pr-blue-300
        mobile:px-[6px] mobile:py-[2px] mobile:text-xs
        pc:px-[8.5px] pc:py-[2px] pc:text-md
    `,
  };
  return <span className={styles.container}>{type}</span>;
}
