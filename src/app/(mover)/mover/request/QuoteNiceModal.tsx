import NiceModal, { useModal } from "@ebay/nice-modal-react";

import QuoteModal from "@/components/modals/QuoteModal";

interface QuoteModal_Props {
  isRejected: boolean;
  customerName: string;
  serviceType: number;
  isDesignatedQuote: boolean;
  startAddress: string;
  endAddress: string;
  moveDate: string;
  onSubmit: (quoteDate: { cost?: number; comment: string }) => void;
}

export function QuoteModalComponent({
  isRejected,
  customerName,
  serviceType,
  isDesignatedQuote,
  startAddress,
  endAddress,
  moveDate,
  onSubmit,
}: QuoteModal_Props) {
  const modal = useModal();

  const styles = {
    modalOverlay: `flex flex-col items-center justify-end 
            fixed inset-0 
            bg-[#141414] bg-opacity-50 
            tablet:justify-center 
            pc:justify-center`,
    modalContainer: `flex flex-col items-center justify-center 
            mx-auto w-full 
            tablet:w-[375px] 
            pc:w-[608px]`,
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <QuoteModal
          isRejected={isRejected}
          customerName={customerName}
          serviceType={serviceType}
          isDesignatedQuote={isDesignatedQuote}
          startAddress={startAddress}
          endAddress={endAddress}
          moveDate={moveDate}
          onSubmit={onSubmit}
          onClose={() => modal.remove()}
        />
      </div>
    </div>
  );
}

export const QuoteNiceModal = NiceModal.create(QuoteModalComponent);
