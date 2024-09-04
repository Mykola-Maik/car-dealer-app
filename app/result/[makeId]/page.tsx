interface Props {
  params: {
    makeId: string;
  };
}

export default function MakeId({ params }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Result Page with {params.makeId}
      </h1>
    </div>
  );
}
