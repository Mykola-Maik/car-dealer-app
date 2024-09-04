import { CarState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CarState = {
  cars: [],
  currentCar: null,
  isLoading: false,
  error: null,
};

export const carSlice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {},
});

export const {  } = carSlice.actions;

export default carSlice.reducer;
