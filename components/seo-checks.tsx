import { TaskItem } from '@/types';
import { SeoCheckCard } from './seo-card';

interface SeoChecksProps {
  data: TaskItem;
}

const SeoChecks = ({ data }: SeoChecksProps) => {
  return (
    <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
      <SeoCheckCard
        title="Duplicate Title"
        description="Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords."
        value={data.checks.duplicate_title_tag}
      />
      <SeoCheckCard
        title="Has Description"
        description="The description tag is an HTML tag that is used to define the description of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page."
        value={data.checks.no_description}
      />
      <SeoCheckCard
        title="Has Favicon"
        description="Your page does have a favicon. This can postively impact your page load speed and user experience."
        value={data.checks.no_favicon}
      />
      <SeoCheckCard
        title="Description"
        description="The description tag is an HTML tag that is used to define the description of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page."
        value={data.checks.low_readability_rate}
      />

      <SeoCheckCard
        title="Title Too long"
        description="Your page has a title that is too long. This can negatively impact your page load speed and user experience."
        value={data.checks.title_too_long}
      />
      <SeoCheckCard
        title="Has Render Blocking Resources"
        description="Your page has render blocking resources. This can negatively impact your page load speed and user experience."
        value={data.checks.has_render_blocking_resources}
      />
      <SeoCheckCard
        title="Is 4xx Code"
        description="Your page has a 4xx status code. This can negatively impact your page load speed and user experience."
        value={data.checks.is_4xx_code}
      />
      <SeoCheckCard
        title="Is 5xx Code"
        description="Your page has a 4xx status code. This can negatively impact your page load speed and user experience."
        value={data.checks.is_5xx_code}
      />
      <SeoCheckCard
        title="HTTPS to HTTP Links"
        description="Your page has links to HTTP pages. This can negatively impact your page load speed and user experience."
        value={data.checks.https_to_http_links}
      />
    </div>
  );
};

export default SeoChecks;
