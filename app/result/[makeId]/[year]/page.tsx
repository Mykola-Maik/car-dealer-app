import HttpService from "@/services/HttpService/HttpService";
import { DetailedInfo } from "@/types";
import { Card } from "flowbite-react";

interface Props {
  params: {
    makeId: string;
    year: string;
  };
}

export default async function MakeId({ params: { makeId, year } }: Props) {
  const { data } = await HttpService.get<DetailedInfo>(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="max-w-sm min-w-[300px]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {data?.Results[0].Make_Name}
        </h5>
        <h6 className="font-bold tracking-tight text-gray-900 text-center">
          Models:
        </h6>
        <ul>
          {data?.Results.map((result) => (
            <li key={result.Model_ID}>{result.Model_Name}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
