export interface Car {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface CarDataFromApi {
  Count: number;
  Message: string;
  Results: Car[];
  SearchCriteria: string;
}

export interface DetailedResults {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface DetailedInfo extends Omit<CarDataFromApi, "Results"> {
  Results: DetailedResults[];
}
