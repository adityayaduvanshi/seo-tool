'use client';

import { ArrowLeftCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from './ui/button';

interface ResultHeaderProps {
  url: string;
}

const ResultHeader = ({ url }: ResultHeaderProps) => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.back()} variant="ghost">
        <ArrowLeftCircle />
      </Button>
      <div className="flex w-full items-center flex-col">
        <p className="text-sm text-gray-700 uppercase font-semibold">
          Everything You need to know
        </p>
        <h1 className=" text-md  font-bold md:text-4xl my-2">
          Results for {url}
        </h1>
      </div>
    </div>
  );
};

export default ResultHeader;
