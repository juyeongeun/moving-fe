import RequestForm from "@/components/forms/mover-request";

const mockRequestQuoteData = Array.from({ length: 10 }, (_, index) => {
  const randomService = Math.floor(Math.random() * 3);
  const baseDate = new Date(2024, 11, 1);
  const randomOffset = Math.floor(Math.random() * 30);

  return {
    id: index + 1,
    requestDate: new Date(
      baseDate.getTime() + randomOffset * 24 * 60 * 60 * 1000
    ).toISOString(),
    service: randomService,
    isDesignated: Math.random() > 0.5,
    isConfirmed: false,
    name: `User ${index + 1}`,
    movingDate: new Date(
      baseDate.getTime() + (randomOffset + 5) * 24 * 60 * 60 * 1000
    ).toISOString(),
    pickupAddress: `${index + 1} Test Street, City A`,
    dropOffAddress: `${index + 10} Destination Ave, City B`,
    isCompleted: false,
  };
});

export default function RequestListPage({}) {
  return (
    <>
      <RequestForm testData={mockRequestQuoteData} />
    </>
  );
}
