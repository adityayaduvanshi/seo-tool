'use client';

import { redirect } from 'next/navigation';
import { ApiResponse, Task } from '@/types';
import Image from 'next/image';

import ResultHeader from '@/components/result-header';
import ResultProgress from '@/components/result-progress';
import { useGetData } from '@/hooks/useGetData';
import { HashLoader } from 'react-spinners';
import SeoData from '@/components/seo-data';
import SeoChecks from '@/components/seo-checks';
import SpeedInsights from '@/components/speed-insights';

interface SeoPageProps {
  params: {
    seoId: string;
  };
}
const page = ({ params }: SeoPageProps) => {
  const decodedSeoId = decodeURIComponent(params.seoId);
  if (!params.seoId) {
    return redirect('/');
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, error } = useGetData<ApiResponse | null>(
    decodedSeoId
  );
  const tasks: Task[] | undefined = data?.tasks;

  if (isLoading || !tasks || tasks.length === 0) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <HashLoader />
      </div>
    );
  }
  if (tasks[0]?.status_code !== 20000) {
    return <div>Invalid Request</div>;
  }

  const {
    result: [{ items }],
  } = tasks?.[0] || {};
  const seoItem = items[0];
  return (
    <div className="h-full flex px-2  lg:px-40  py-20 md:py-24 gap-8 flex-col">
      <ResultHeader url={decodedSeoId} />
      <ResultProgress data={seoItem} />
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Title - {seoItem.meta.title}</h2>
      </div>
      <SeoData data={seoItem} />
      <SeoChecks data={seoItem} />
      <SpeedInsights data={seoItem} />
    </div>
  );
};

export default page;
