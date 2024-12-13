"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Input from "@/components/common/Input";
import MoverInfoCard from "@/components/cards/MoverInfoCard";
import { FullMoverData, FavoriteFields, ConfirmInfo } from "@/types/mover";
import DropdownRegion from "@/components/dropdowns/DropdownRegion";
import DropdownService from "@/components/dropdowns/DropdownService";
import DropdownSortMovingRequest from "@/components/dropdowns/DropdownSortMovingRequest";

import {
  SORT_MOVING_REQUEST_CODES,
  SORT_MOVING_REQUEST_TEXTS,
} from "@/variables/dropdown";
import assets from "@/variables/images";

// 임시. 테스트용
import { MockDataItem, fetchData_ } from "./page";

function FavoriteMoverList({ list }: { list: MockDataItem[] }) {
  const items = list.map((item, index) => {
    return (
      <MoverInfoCard
        key={`${item.id}-${index}`}
        data={item}
        size="fixed"
        className=""
      />
    );
  });

  return (
    <div className="w-full">
      <div className="flex flex-row items-center pc:h-[32px] text-xl text-black-400 font-semibold">
        찜한 기사님
      </div>
      <div className="flex flex-col gap-4 pc:mt-[16px] pc:w-full">{items}</div>
    </div>
  );
}

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
      <div className="flex flex-row items-center text-xl text-black font-medium justify-between pc:px-[13.5px] pc:w-full pc:h-[64px]">
        필터
        <div className="flex flex-row items-center text-lg text-grayscale-300 font-medium cursor-pointer pc:h-[32px]">
          초기화
        </div>
      </div>
      <div className="flex flex-row items-center text-2lg text-black-400 font-semibold pc:mt-[10px] pc:w-full pc:h-[64px]">
        지역을 선택해주세요
      </div>
      <DropdownRegion onSelect={handleSelectRegion} disabled={false} />
      <div className="flex flex-row items-center text-2lg text-black-400 font-semibold pc:mt-[10px] pc:w-full pc:h-[64px]">
        어떤 서비스가 필요하세요?
      </div>
      <DropdownService onSelect={handleSelectService} disabled={false} />
    </div>
  );
}

interface MoverListProps {
  initialList: {
    nextCursor: number | null;
    hasNext: boolean;
    list: MockDataItem[];
  };
  initialFavoriteList: MockDataItem[];
}

export default function MoverList({
  initialList,
  initialFavoriteList,
}: MoverListProps) {
  const [data, setData] = useState(initialList);
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

  const items = data.list.map((item, index) => {
    return (
      <MoverInfoCard
        key={`${item.id}-${index}`}
        data={item}
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

  const handleServiceFilterChange = (newService: number | null) => {
    if (newService === 99) {
      newService = null;
    }

    setFormState((prev) => ({
      ...prev,
      currentServiceFilter: newService,
    }));
  };

  const handleRegionFilterChange = (newRegion: number | null) => {
    if (newRegion === 82) {
      newRegion = null;
    }

    setFormState((prev) => ({
      ...prev,
      currentRegionFilter: newRegion,
    }));
  };

  const handleSortChange = (newSort: number) => {
    const sorts = ["recent", "movingDate"];

    setFormState((prev) => ({
      ...prev,
      currentSort: sorts[newSort],
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
      <div className="hidden pc:flex flex-row gap-2.5 items-center justify-center w-full h-[54px] pc:h-[96px]">
        <div className="pc:flex flex-row items-center w-[328px] tablet:w-[600px] pc:w-[1400px] h-full text-2lg text-[#2b2b2b] font-semibold cursor-pointer pc:text-2xl">
          기사님 찾기
        </div>
      </div>
      <div className="box-border flex pc:flex-row justify-center gap-[117px] pc:mt-6">
        <div className="box-border w-[328px] hidden tablet:hidden pc:flex pc:flex-col pc:gap-[46px]">
          <Filter
            onRegionChange={handleRegionFilterChange}
            onServiceChange={handleServiceFilterChange}
          />
          <FavoriteMoverList list={initialFavoriteList} />
        </div>
        <div className="box-border flex flex-col w-[328px] tablet:w-[600px] pc:w-[955px]">
          <div className="flex flex-row items-center justify-between h-[68px] pc:h-[40px] pc:justify-end">
            <div className="flex flex-row gap-3 pc:hidden">
              <DropdownRegion
                onSelect={handleRegionFilterChange}
                disabled={false}
              />
              <DropdownService
                onSelect={handleServiceFilterChange}
                disabled={false}
              />
            </div>
            <DropdownSortMovingRequest
              onSelect={handleSortChange}
              disabled={false}
            />
          </div>
          <div className="relative flex items-center px-0 pc:mt-6 py-3 w-full h-[76px] tablet:px-2.5 tablet:py-1.5 pc:p-0 pc:h-[64px]">
            <Input
              name="searchKeyword"
              placeholder="텍스트를 입력해 주세요."
              className="w-full pl-[46px] pc:pl-[68px]"
              value={formState.keyword}
              onChange={handleInputChange}
            />
            <div className="absolute left-[16px] w-6 h-6 pc:left-6 pc:w-9 pc:h-9">
              <Image src={assets.icons.search} alt="검색" fill />
            </div>
          </div>
          <div className="flex flex-col w-full mt-3 gap-[24px] tablet:gap-[32px] overflow-hidden tablet:mt-4 pc:mt-[32px] pc:gap-[48px]">
            {isFetching ? <p>Loading...</p> : items}
          </div>
        </div>
      </div>
    </div>
  );
}
