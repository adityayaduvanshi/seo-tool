'use client';

interface ResultHeaderProps {
  url: string;
}

const ResultHeader = ({ url }: ResultHeaderProps) => {
  return (
    <div className="flex w-full items-center flex-col">
      <p className="text-sm text-gray-700 uppercase font-semibold">
        Everything You need to know
      </p>
      <h1 className=" text-md  font-bold md:text-4xl my-2">
        Results for https://{url}/
      </h1>
    </div>
  );
};

export default ResultHeader;
