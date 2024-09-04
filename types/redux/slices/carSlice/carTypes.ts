import { Car } from "@/types";

export interface CarState {
  cars: Car[] | [];
  currentCar: Car | null;
  amount: number;
  isLoading: boolean;
  error: null | string;
}
