import { TaskItem } from '@/types';
import { InsightCard } from './seo-card';

interface SpeedInsightsProps {
  data: TaskItem;
}

const SpeedInsights = ({ data }: SpeedInsightsProps) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Speed Insights</h2>
      <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <InsightCard
          title="Time to Secure Connection"
          value={data.page_timing.time_to_secure_connection}
        />
        <InsightCard
          title="Waiting Time"
          value={data.page_timing.waiting_time}
        />
        <InsightCard
          title="Download Time"
          value={data.page_timing.download_time}
        />
        <InsightCard
          title="Time to Interactive"
          value={data.page_timing.time_to_interactive}
        />
        <InsightCard
          title="DOM Complete"
          value={data.page_timing.dom_complete}
        />
        <InsightCard
          title="Largest Contentful Paint"
          value={data.page_timing.largest_contentful_paint}
        />
        <InsightCard
          title="Duration Time"
          value={data.page_timing.duration_time}
        />
      </div>
    </div>
  );
};

export default SpeedInsights;
