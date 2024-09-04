import { Car, CarState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CarState = {
  cars: [],
  currentCar: null,
  amount: 0,
  isLoading: false,
  error: null,
};

export const carSlice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {
    setCars(state, { payload }: PayloadAction<Car[]>) {
      state.cars = payload;
    },

    setAmount(state, { payload }: PayloadAction<number>) {
      state.amount = payload;
    },

    setCurrentCar(state, { payload }: PayloadAction<Car>) {
      state.currentCar = payload;
    },

    clearCurrentCar(state) {
      state.currentCar = null;
    },
  },
});

export const { setCars, setAmount, setCurrentCar, clearCurrentCar } =
  carSlice.actions;

export default carSlice.reducer;
