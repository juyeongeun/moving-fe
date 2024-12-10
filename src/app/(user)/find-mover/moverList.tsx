"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Input from "@/components/common/Input";
import MoverInfoCard from "@/components/cards/MoverInfoCard";
import { FullMoverData, FavoriteFields } from "@/types/mover";
import DropdownRegion from "@/components/dropdowns/DropdownRegion";
import DropdownService from "@/components/dropdowns/DropdownService";

import assets from "@/variables/images";
import { REGION_CODES } from "@/variables/regions";

// 임시. 테스트용
import { MockDataItem, fetchData_ } from "./page";

interface FilterProps {
  onRegionChange: (newStates: number | null) => void;
  onServiceChange: (newStates: number | null) => void;
}

function Filter({ onRegionChange, onServiceChange }: FilterProps) {
  const [filterStates, setFilterStates] = useState<{
    region: number | null;
    service: number | null;
  }>({ region: null, service: null });

  const handleSelectRegion = (regionCode: number) => {
    setFilterStates((prev) => ({ ...prev, region: regionCode }));
    onRegionChange(regionCode);
  };

  const handleSelectService = (serviceCode: number) => {
    setFilterStates((prev) => ({ ...prev, service: serviceCode }));
    onServiceChange(serviceCode);
  };

  return (
    <div className="pc:w-[328px] pc:h-[340px]">
      <DropdownRegion onSelect={handleSelectRegion} disabled={false} />
      <DropdownService onSelect={handleSelectService} disabled={false} />
    </div>
  );
}

interface MoverListProps {
  initialData: {
    nextCursor: number | null;
    hasNext: boolean;
    list: MockDataItem[];
  };
}

export default function MoverList({ initialData }: MoverListProps) {
  const [data, setData] = useState(initialData);
  const [formState, setFormState] = useState<{
    keyword: string;
    currentServiceFilter: number | null;
    currentRegionFilter: number | null;
    currentSort: string;
  }>({
    keyword: "",
    currentServiceFilter: null,
    currentRegionFilter: null,
    currentSort: "recent",
  });
  const [debouncedKeyword, setDebouncedKeyword] = useState(formState.keyword);
  const [isFetching, setIsFetching] = useState(false);

  console.log(initialData);

  const items = data.list.map((item, index) => {
    const { name, ...rest } = item;
    const singleData: FullMoverData & FavoriteFields = {
      ...rest,
    };

    return (
      <MoverInfoCard
        key={`${item.id}-${index}`}
        data={singleData}
        size="responsive"
        className=""
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

  const handleServiceFilterChange = (newStates: number | null) => {
    setFormState((prev) => ({
      ...prev,
      currentServiceFilter: newStates,
    }));
  };

  const handleRegionFilterChange = (newStates: number | null) => {
    setFormState((prev) => ({
      ...prev,
      currentRegionFilter: newStates,
    }));
  };

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

      let serviceQuery = "";
      if (formState.currentServiceFilter === 0) {
        serviceQuery = `smallMove=true&houseMove=false&officeMove=false`;
      } else if (formState.currentServiceFilter === 1) {
        serviceQuery = `smallMove=false&houseMove=true&officeMove=false`;
      } else if (formState.currentServiceFilter === 2) {
        serviceQuery = `smallMove=false&houseMove=false&officeMove=true`;
      } else if (formState.currentServiceFilter === 99) {
        serviceQuery = `smallMove=true&houseMove=true&officeMove=true`;
      }

      const filertQuery = `region=${formState.currentRegionFilter}`;
      const sortQuery = `sort=${formState.currentSort}`;

      console.log("used query:", {
        debouncedKeyword,
        serviceQuery,
        filertQuery,
        sortQuery,
      });

      const result = fetchData_({
        listCount: 20,
        service: formState.currentServiceFilter,
        region: formState.currentRegionFilter,
        keyword: debouncedKeyword,
      });
      setData(result);
      setIsFetching(false);
    };

    fetchData();
  }, [
    debouncedKeyword,
    formState.currentServiceFilter,
    formState.currentRegionFilter,
    formState.currentSort,
  ]);

  return (
    <div className="flex flex-col items-center pc:w-full">
      <div className="flex flex-row gap-2.5 items-center justify-center w-full h-[54px] pc:h-[96px]">
        <div className="flex flex-row items-center w-[328px] tablet:w-[600px] pc:w-[1400px] h-full text-2lg text-[#2b2b2b] font-semibold cursor-pointer pc:text-2xl">
          기사님 찾기
        </div>
      </div>
      <div className="box-border flex flex-row justify-center gap-[117px] mt-4 tablet:mt-6 pc:mt-6">
        <div className="box-border gap-6 w-[328px] hidden tablet:hidden pc:flex pc:flex-col bg-slate-700">
          <Filter
            onRegionChange={handleRegionFilterChange}
            onServiceChange={handleServiceFilterChange}
          />
        </div>
        <div className="box-border flex flex-col w-[328px] tablet:w-[600px] pc:w-[955px] h-[2548px]">
          <div className="relative flex items-center px-0 py-3 w-full h-[76px] tablet:px-2.5 tablet:py-3 pc:p-0 pc:h-[64px]">
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
          <div className="flex flex-col w-full mt-3 gap-[32px] overflow-hidden tablet:mt-4 pc:mt-[32px] pc:gap-[48px]">
            {isFetching ? <p>Loading...</p> : items}
          </div>
        </div>
      </div>
    </div>
  );
}
