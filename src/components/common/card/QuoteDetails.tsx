"use client";

import { mapServiceType } from "@/utils/utilFunctions";
import { formatTimeAgo } from "@/utils/utilFunctions";
import { formatDateWithDay } from "@/utils/utilFunctions";
import LineSeparator from "../LineSeparator";
import NameText from "./NameText";
import { ChipType } from "./ServiceChip";
import ServiceChip from "./ServiceChip";
import TextWithGrayLabel from "./TextWithGrayLabel";
import { type QuoteDetailsData } from "@/types/mover";

const styles = {
  topContainer: "flex items-center justify-between",
  buttonContainer: "flex flex-col gap-2 tablet:flex-row w-full",
  chipContainer: "flex items-center gap-2 pc:gap-3",
  requestDate: "text-xs text-gray-500 justify-self-end pc:text-md",
  name: "text-lg font-semibold pc:text-xl",
  requestInfoContainer:
    "box-border flex flex-col gap-2.5 tablet:gap-2 pc:gap-[17.5px] pc:p-4",
  addressContainer:
    "box-border flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-3",
};

const QuoteDetails = ({
  data,
  showRequestDate = true,
}: {
  data: QuoteDetailsData;
  showRequestDate?: boolean;
}) => {
  const serviceType = mapServiceType([data.service])[0];
  const timeAgo = formatTimeAgo(data.requestDate);
  const movingDate = formatDateWithDay(data.movingDate);

  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.chipContainer}>
          {data.isConfirmed && <ServiceChip variant="confirmed" />}
          <ServiceChip variant={serviceType as ChipType} size="responsive" />
          {data.isDesignated && (
            <ServiceChip variant="designatedQuote" size="responsive" />
          )}
        </div>
        {showRequestDate && (
          <time className={styles.requestDate}>{timeAgo}</time>
        )}
      </div>
      <div className={styles.requestInfoContainer}>
        <NameText text={data.name} type="customer" className={styles.name} />
        <TextWithGrayLabel
          label="이사일"
          text={movingDate}
          className="tablet:hidden"
        />
        <LineSeparator direction="horizontal" />
        <div className={styles.addressContainer}>
          <TextWithGrayLabel
            label="이사일"
            text={movingDate}
            className="hidden tablet:flex"
          />
          <LineSeparator className="hidden tablet:block" />
          <TextWithGrayLabel label="출발" text={data.pickupAddress} />
          <LineSeparator className="hidden tablet:block" />
          <TextWithGrayLabel label="도착" text={data.dropOffAddress} />
        </div>
      </div>
    </>
  );
};

export default QuoteDetails;
