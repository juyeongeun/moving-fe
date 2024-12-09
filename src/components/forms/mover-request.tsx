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

async function fetchData_() {
  const result = {
    list: mockRequestQuoteData,
    serviceCounts: mockServiceFilter,
    designateCounts: mockFilter,
  };

  console.log("CSR API 호출 : fetchData_");

  return result;
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
  const [currentServiceFilter, setCurrentServiceFilter] = useState<boolean[]>([
    true,
    true,
    true,
  ]);
  const [currentDesignateFilter, setCurrentDesignateFilter] = useState<
    boolean[]
  >([true, true]);
  const [keyword, setKeyword] = useState("");
  const [currentSort, setCurrentSort] = useState("recent");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      const query = new URLSearchParams();
      query.append("keyword", keyword);

      const serviceQuery = `smallMove=${currentServiceFilter[0]}&houseMove=${currentServiceFilter[1]}&officeMove=${currentServiceFilter[2]}`;
      const filertQuery = `unsigned=${currentDesignateFilter[0]}&isDesignated=${currentDesignateFilter[1]}`;
      const sortQuery = `sort=${currentSort}`;

      // const response = await fetch(
      //   `/api/requests?${serviceQuery}&${filertQuery}&${query}&${sortQuery}`
      // );
      // const result = await response.json();
      const result = await fetchData_();

      setData(result);
      setIsFetching(false);
    };

    fetchData();
  }, [
    currentServiceFilter,
    currentDesignateFilter,
    keyword,
    currentSort,
    initialData,
  ]);

  const handleAcceptRequest = () => {
    console.log("수락");
  };
  const handleRejectRequest = () => {
    console.log("거절");
  };

  const items = data.list.map((item) => {
    return (
      <IncomingRequestCard
        key={item.id}
        data={item}
        onPrimaryClick={handleAcceptRequest}
        onOutlinedClick={handleRejectRequest}
      />
    );
  });

  const handleServiceCheck = (arr: boolean[]) => {
    setCurrentServiceFilter(arr);
  };
  const handleFilterCheck = (arr: boolean[]) => {
    setCurrentDesignateFilter(arr);
  };
  const handleSortSelect = (sortCode: number) => {
    const sortValues = ["recent", "movingDate"];
    setCurrentSort(sortValues[sortCode]);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
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
            onChange={handleServiceCheck}
          />
          <Filter
            designateCounts={data.designateCounts}
            onChange={handleFilterCheck}
          />
        </div>
        <div className="box-border flex flex-col w-[955px] h-[2548px]">
          <div className="relative flex items-center w-full h-[64px]">
            <Input
              name="searchKeyword"
              placeholder="어떤 고객님을 찾고 계세요?"
              className="w-full pl-[46px] pc:pl-[68px]"
              value={keyword}
              onChange={handleSearchChange}
            />
            <div className="absolute left-4 w-6 h-6 pc:left-6 pc:w-9 pc:h-9">
              <Image src={assets.icons.search} alt="검색" fill />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full h-10 pc:mt-6">
            <div className="flex flex-row items-center text-lg font-medium">{`전체 ${data.list.length}건`}</div>
            <DropdownSortMovingRequest
              onSelect={handleSortSelect}
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
