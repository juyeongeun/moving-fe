import AddressChip from "./AddressChip";

interface AddressFieldProps {
  zipCode: string;
  roadAddress: string;
  streetAddress: string;
  selected?: boolean;
}

export default function AddressField({
  zipCode,
  roadAddress,
  streetAddress,
  selected = false,
}: AddressFieldProps) {
  const styles = {
    container: `
        rounded-[16px] px-[16px] py-[20px] text-left
        mobile:w-[260px] mobile:h-[196px]
        pc:w-[560px] pc:h-[158px]
        ${selected ? "bg-pr-blue-50 border border-pr-blue-200" : "bg-white"}
    `,
    zipCode: `
        mobile:text-md pc:text-lg
        font-semibold text-black-400 
    `,
    address: `
        mobile:text-md pc:text-lg
        text-black-400 word-break:break-word
    `,
    addressWrapper: `
        flex flex-col gap-[16px] mt-[16px]
    `,
    addressRow: `
        flex flex-row gap-[8px]
    `,
  };

  return (
    <div className={styles.container}>
      <p className={styles.zipCode}>{zipCode}</p>
      <div className={styles.addressWrapper}>
        <div className={styles.addressRow}>
          <AddressChip type="도로명" />
          <p className={styles.address}>{roadAddress}</p>
        </div>
        <div className={styles.addressRow}>
          <AddressChip type="지번" />
          <p className={styles.address}>{streetAddress}</p>
        </div>
      </div>
    </div>
  );
}
