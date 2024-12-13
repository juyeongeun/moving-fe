import RequestForm from "./moverRequest";

const DATA_COUNT = 20;

function getRandomString(length: number) {
  return Array.from({ length }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join("");
}

function getRandomAddress() {
  return `${Math.floor(Math.random() * 1000)} ${getRandomString(
    5
  )} Street, ${getRandomString(6)} City`;
}

const mockRequestQuoteData = Array.from({ length: DATA_COUNT }, (_, index) => {
  const randomService = Math.floor(Math.random() * 3);
  const baseDate = new Date(2025, 1, 1);
  const randomOffset = Math.floor(Math.random() * 30);

  return {
    id: Math.floor(Math.random() * 1000),
    requestDate: new Date(
      baseDate.getTime() + randomOffset * 24 * 60 * 60 * 1000
    ).toISOString(),
    service: randomService,
    isDesignated: Math.random() > 0.5,
    isConfirmed: false,
    name: `User ${getRandomString(3)}${index + 1}`,
    movingDate: new Date(
      baseDate.getTime() + (randomOffset + 5) * 24 * 60 * 60 * 1000
    ).toISOString(),
    pickupAddress: getRandomAddress(),
    dropOffAddress: getRandomAddress(),
    isCompleted: false,
  };
});

export function fetchData_(formState: {
  keyword: string;
  currentServiceFilter: boolean[];
  currentDesignateFilter: boolean[];
  currentSort: string;
}) {
  const filteredList = mockRequestQuoteData.filter((item) => {
    if (!formState.currentServiceFilter[item.service]) return false;

    if (item.isDesignated && !formState.currentDesignateFilter[1]) return false;

    if (!item.isDesignated && !formState.currentDesignateFilter[0])
      return false;

    if (
      formState.keyword &&
      !item.name.toLowerCase().includes(formState.keyword.toLowerCase())
    )
      return false;

    return true;
  });

  const sortedList = filteredList.sort((a, b) => {
    if (formState.currentSort === "recent") {
      return (
        new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime()
      );
    } else if (formState.currentSort === "movingDate") {
      return (
        new Date(a.movingDate).getTime() - new Date(b.movingDate).getTime()
      );
    }
    return 0;
  });

  const serviceCounts = [0, 0, 0];
  sortedList.forEach((item) => {
    serviceCounts[item.service]++;
  });

  const designateCounts = [0, 0];
  sortedList.forEach((item) => {
    if (item.isDesignated) {
      designateCounts[1]++;
    } else {
      designateCounts[0]++;
    }
  });

  return {
    list: sortedList,
    serviceCounts,
    designateCounts,
  };
}

export default async function RequestListPage({}) {
  const initialData = await fetchData_({
    keyword: "",
    currentServiceFilter: [true, true, true],
    currentDesignateFilter: [true, true],
    currentSort: "recent",
  });

  return <RequestForm initialData={initialData} />;
}
