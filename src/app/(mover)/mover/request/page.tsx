import RequestForm from "./mover-request";

const DATA_COUNT = 20;

const mockRequestQuoteData = Array.from({ length: DATA_COUNT }, (_, index) => {
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

const mockServiceFilter = [10, 2, 8];

const mockFilter = [10, 10];

async function fetchInitialData() {
  const serviceFilter = [true, true, true];
  const serviceQuery = `smallMove=${serviceFilter[0]}&houseMove=${serviceFilter[1]}&officeMove=${serviceFilter[2]}`;
  const filter = [true, true];
  const filertQuery = `unsigned=${filter[0]}&isDesignated=${filter[1]}`;
  const data: {
    list: any[];
    serviceCounts: number[];
    designateCounts: number[];
  } = await fetch(`moving/temp-path?${serviceQuery}&${filertQuery}`, {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return data;
}

async function fetchInitialData_() {
  const result = {
    list: mockRequestQuoteData,
    serviceCounts: mockServiceFilter,
    designateCounts: mockFilter,
  };

  return result;
}

export default async function RequestListPage({}) {
  const initialData = await fetchInitialData_();

  return <RequestForm initialData={initialData} />;
}
