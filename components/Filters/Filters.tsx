"use client";

import { years } from "@/constants";
import { setCurrentCar } from "@/redux/slices/carSlice/carSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Dropdown, Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Filters = () => {
  const [selectedType, setSelectedType] = useState<string>("Vehicle type");
  const [selectedYear, setSelectedYear] = useState<string>("Model year");
  const options = useSelector((state: RootState) => state.carSlice.cars);
  const isDisabled =
    selectedType === "Vehicle type" || selectedYear === "Model year";
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const selectedCar = useSelector(
    (state: RootState) => state.carSlice.currentCar
  );

  const handleClickNext = () => {
    router.replace(`result/${selectedCar?.MakeId}/${selectedYear}`);
  };

  return (
    <form className="flex space-x-2 border border-2 border-slate-600 p-3 rounded h-[84px]">
      <Dropdown label={selectedType} className="overflow-hidden">
        <div className="max-h-[200px] overflow-y-auto w-[137px]">
          {options.map((option) => (
            <Dropdown.Item
              key={option.MakeId}
              className="text-left max-w-[137px]"
              onClick={() => {
                setSelectedType(option.MakeName);
                dispatch(setCurrentCar(option));
              }}
            >
              {option.MakeName}
            </Dropdown.Item>
          ))}
        </div>
      </Dropdown>

      <Dropdown label={selectedYear} className="overflow-hidden">
        <div className="max-h-[200px] overflow-y-auto">
          {years.map((option) => (
            <Dropdown.Item
              key={option}
              className="w-full text-left max-w-[137px]"
              onClick={() => setSelectedYear(option)}
            >
              {option}
            </Dropdown.Item>
          ))}
        </div>
      </Dropdown>

      <Button
        type="button"
        disabled={isDisabled}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickNext}
      >
        Next
      </Button>
    </form>
  );
};
