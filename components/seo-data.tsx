import { TaskItem } from '@/types';
import { SeoCard } from './seo-card';

interface SeoDataProps {
  data: TaskItem;
}

const SeoData = ({ data }: SeoDataProps) => {
  const { meta } = data;
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 pb-2 gap-4">
      <SeoCard title="External Links" value={meta.external_links_count} />
      <SeoCard title="Internal Links" value={meta.internal_links_count} />
      <SeoCard title="Scripts" value={meta.scripts_count} />
      <SeoCard title="Plain Text Size" value={meta.content.plain_text_size} />
      <SeoCard
        title="Plain Text Rate"
        value={meta.content.plain_text_rate?.toFixed(2)}
      />
      <SeoCard
        title="Plain Text Word Count"
        value={meta.content.plain_text_word_count}
      />
      <SeoCard
        title="Automated Readability Index"
        value={meta.content.automated_readability_index?.toFixed(2)}
      />
      <SeoCard
        title="Coleman Liau Readability Index"
        value={meta.content.coleman_liau_readability_index?.toFixed(2)}
      />
      <SeoCard
        title="Dale Chall Readability Index"
        value={meta.content.dale_chall_readability_index?.toFixed(2)}
      />
      <SeoCard
        title="Flesch Kincaid Readability Index"
        value={meta.content.flesch_kincaid_readability_index?.toFixed(2)}
      />
      <SeoCard
        title="Smog Readability Index"
        value={meta.content.smog_readability_index?.toFixed(2)}
      />
      <SeoCard
        title="Description to Content Consistency"
        value={meta.content.description_to_content_consistency?.toFixed(2)}
      />
    </div>
  );
};

export default SeoData;
