"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import IncomingRequestCard from "@/components/cards/IncomingRequestCard";
import Input from "@/components/common/Input";
import DropdownSortMovingRequest from "../dropdowns/DropdownSortMovingRequest";
import Checkbox from "../common/checkboxs/Checkbox";
import cn from "@/config/cn";
import { getServiceText } from "@/utils/utilFunctions";
import { SERVICE_CODES } from "@/variables/service";
import assets from "@/variables/images";
import { type QuoteDetailsData } from "@/types/mover";

const filterBaseClass = cn(
  "flex flex-row items-center justify-between h-[68px] border-solid border-b-[1px] border-b-line-200 text-black font-medium"
);
const filterTypeLabelClass = cn(filterBaseClass, "mb-6 text-xl");
const filterItemClass = cn(filterBaseClass, "text-2lg");
const filterAllSelectClass = cn(
  "flex flex-row items-center gap-1 w-[103px] text-2lg text-grayscale-300 font-regular"
);

const allTrue = (arr: boolean[]): boolean => arr.every((item) => item);

interface ServiceFilterProps {
  serviceCounts: number[];
  onChange?: (newStates: boolean[]) => void;
}

function ServiceFilter({ serviceCounts, onChange }: ServiceFilterProps) {
  const [serviceStates, setServiceStates] = useState<boolean[]>(
    serviceCounts.map(() => true)
  );
  const [allChecked, setAllChecked] = useState(allTrue(serviceStates));

  // 필터 상태 변경 시 전체 선택 상태 업데이트
  useEffect(() => {
    setAllChecked(allTrue(serviceStates));
  }, [serviceStates]);

  const handleItemCheckClick = (index: number) => (newState: boolean) => {
    const updatedStates = [...serviceStates];
    updatedStates[index] = newState;
    setServiceStates(updatedStates);

    if (onChange) {
      onChange(updatedStates);
    }
  };

  const handleAllCheckClick = (newState: boolean) => {
    const updatedStates = serviceStates.map(() => newState);
    setServiceStates(updatedStates);

    if (onChange) {
      onChange(updatedStates);
    }
  };

  const serviceFilterTexts = [
    {
      text: getServiceText(SERVICE_CODES.MOVE_SMALL),
      index: SERVICE_CODES.MOVE_SMALL,
    },
    {
      text: getServiceText(SERVICE_CODES.MOVE_HOME),
      index: SERVICE_CODES.MOVE_HOME,
    },
    {
      text: getServiceText(SERVICE_CODES.MOVE_OFFICE),
      index: SERVICE_CODES.MOVE_OFFICE,
    },
  ];

  return (
    <div className="w-full h-[296px]">
      <div className={filterTypeLabelClass}>
        이사 유형
        <div className={filterAllSelectClass}>
          <Checkbox state={allChecked} onStateChange={handleAllCheckClick} />
          전체선택
        </div>
      </div>
      {serviceCounts.map((item, index) => (
        <div className={filterItemClass} key={index}>
          {`${serviceFilterTexts[index].text} (${item})`}
          <Checkbox
            state={serviceStates[index]}
            onStateChange={handleItemCheckClick(index)}
          />
        </div>
      ))}
    </div>
  );
}

interface FilterProps {
  designateCounts: number[];
  onChange?: (newStates: boolean[]) => void;
}

function Filter({ designateCounts, onChange }: FilterProps) {
  const [filterStates, setFilterStates] = useState<boolean[]>(
    designateCounts.map(() => true)
  );
  const [allChecked, setAllChecked] = useState(allTrue(filterStates));

  // 필터 상태 변경 시 전체 선택 상태 업데이트
  useEffect(() => {
    setAllChecked(allTrue(filterStates));
  }, [filterStates]);

  const handleItemCheckClick = (index: number) => (newState: boolean) => {
    const updatedStates = [...filterStates];
    updatedStates[index] = newState;
    setFilterStates(updatedStates);

    if (onChange) {
      onChange(updatedStates);
    }
  };

  const handleAllCheckClick = (newState: boolean) => {
    const updatedStates = filterStates.map(() => newState);
    setFilterStates(updatedStates);

    if (onChange) {
      onChange(updatedStates);
    }
  };

  const filterTexts = [
    {
      text: "미지정 견적 요청",
      index: 0,
    },
    {
      text: "지정 견적 요청",
      index: 1,
    },
  ];

  return (
    <div className="w-full h-[228px]">
      <div className={filterTypeLabelClass}>
        지정 여부
        <div className={filterAllSelectClass}>
          <Checkbox state={allChecked} onStateChange={handleAllCheckClick} />
          전체선택
        </div>
      </div>
      {designateCounts.map((item, index) => (
        <div className={filterItemClass} key={index}>
          {`${filterTexts[index].text} (${item})`}
          <Checkbox
            state={filterStates[index]}
            onStateChange={handleItemCheckClick(index)}
          />
        </div>
      ))}
    </div>
  );
}

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

const DATA_COUNT = 20;

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

async function fetchData_(formState: {
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

  console.log("fetchData_");

  return {
    list: sortedList,
    serviceCounts,
    designateCounts,
  };
}

interface RequestQuoteData extends QuoteDetailsData {
  id: number;
  isCompleted: boolean;
}

interface RequestFormProps {
  initialData: {
    list: RequestQuoteData[];
    serviceCounts: number[];
    designateCounts: number[];
  };
}

export default function RequestForm({ initialData }: RequestFormProps) {
  const [data, setData] = useState(initialData);
  const [formState, setFormState] = useState({
    keyword: "",
    currentServiceFilter: [true, true, true],
    currentDesignateFilter: [true, true],
    currentSort: "recent",
  });
  const [isFetching, setIsFetching] = useState(false);

  const [debouncedKeyword, setDebouncedKeyword] = useState(formState.keyword);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(formState.keyword);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [formState.keyword]);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      const query = new URLSearchParams();
      query.append("keyword", debouncedKeyword);

      const serviceQuery = `smallMove=${formState.currentServiceFilter[0]}&houseMove=${formState.currentServiceFilter[1]}&officeMove=${formState.currentServiceFilter[2]}`;
      const filertQuery = `unsigned=${formState.currentDesignateFilter[0]}&isDesignated=${formState.currentDesignateFilter[1]}`;
      const sortQuery = `sort=${formState.currentSort}`;

      console.log("Fetching API with:", {
        debouncedKeyword,
        serviceQuery,
        filertQuery,
        sortQuery,
      });

      const result = await fetchData_(formState);
      setData(result);
      setIsFetching(false);
    };

    fetchData();
  }, [
    debouncedKeyword,
    formState.currentServiceFilter,
    formState.currentDesignateFilter,
    formState.currentSort,
  ]);

  const handleAcceptRequest = () => {
    console.log("수락");
  };
  const handleRejectRequest = () => {
    console.log("거절");
  };

  const items = data.list.map((item, index) => {
    return (
      <IncomingRequestCard
        key={`${item.id}-${index}`}
        data={item}
        onPrimaryClick={handleAcceptRequest}
        onOutlinedClick={handleRejectRequest}
      />
    );
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormState((prev) => ({
      ...prev,
      keyword: value,
    }));
  };

  const handleServiceFilterChange = (newStates: boolean[]) => {
    setFormState((prev) => ({
      ...prev,
      currentServiceFilter: newStates,
    }));
  };

  const handleFilterChange = (newStates: boolean[]) => {
    setFormState((prev) => ({
      ...prev,
      currentDesignateFilter: newStates,
    }));
  };

  const handleSortChange = (sortIndex: number) => {
    const sortOptions = ["recent", "movingDate"];
    setFormState((prev) => ({
      ...prev,
      sort: sortOptions[sortIndex],
    }));
  };

  return (
    <>
      <div className="flex flex-row gap-2.5 items-center w-full h-[96px]">
        <div className="flex flex-row items-center h-full text-2lg text-[#2b2b2b] font-semibold cursor-pointer pc:text-2xl">
          받은 요청
        </div>
      </div>
      <div className="box-border flex flex-row gap-[117px] mt-4 tablet:mt-6 pc:mt-6 ">
        <div className="box-border flex flex-col gap-6 w-[328px]">
          <ServiceFilter
            serviceCounts={data.serviceCounts}
            onChange={handleServiceFilterChange}
          />
          <Filter
            designateCounts={data.designateCounts}
            onChange={handleFilterChange}
          />
        </div>
        <div className="box-border flex flex-col w-[955px] h-[2548px]">
          <div className="relative flex items-center w-full h-[64px]">
            <Input
              name="searchKeyword"
              placeholder="어떤 고객님을 찾고 계세요?"
              className="w-full pl-[46px] pc:pl-[68px]"
              value={formState.keyword}
              onChange={handleInputChange}
            />
            <div className="absolute left-4 w-6 h-6 pc:left-6 pc:w-9 pc:h-9">
              <Image src={assets.icons.search} alt="검색" fill />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full h-10 pc:mt-6">
            <div className="flex flex-row items-center text-lg font-medium">{`전체 ${data.list.length}건`}</div>
            <DropdownSortMovingRequest
              onSelect={handleSortChange}
              disabled={data.list.length === 0}
            />
          </div>
          <div className="flex flex-col w-full pc:mt-[32px] pc:gap-[48px]">
            {isFetching ? <p>Loading...</p> : items}
          </div>
        </div>
      </div>
    </>
  );
}
