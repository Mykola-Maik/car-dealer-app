"use client";

import { Filters } from "@/components";
import { setAmount, setCars } from "@/redux/slices/carSlice/carSlice";
import { AppDispatch } from "@/redux/store";
import HttpService from "@/services/HttpService/HttpService";
import { CarDataFromApi } from "@/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    HttpService.get<CarDataFromApi>(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    )
      .then((res) => {
        dispatch(setCars(res.data.Results));
        dispatch(setAmount(res.data.Count));
      })
      .catch((err) => {
        throw new Error("Unexpected error ", err);
      });
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Filter Page</h1>
      <Filters />
    </div>
  );
}
