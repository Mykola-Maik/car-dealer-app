import { Car } from "@/types";

export interface CarState {
  cars: Car[];
  currentCar: Car | null;
  isLoading: boolean;
  error: null | string;
}
