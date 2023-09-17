export type ApiResponse = {
  cost: number; // Example: 0.00125
  status_code: number; // Example: 20000
  status_message: string; // Example: "Ok."
  tasks: Task[]; // Example: An array of Task objects
  tasks_count: number; // Example: 1
  tasks_error: number; // Example: 0
  time: string; // Example: "2.1565 sec."
  version: string; // Example: "0.1.20230825"
};

type PageTiming = {
  time_to_interactive: number;
  dom_complete: number;
  largest_contentful_paint: number;
  first_input_delay: number;
  connection_time: number;
  time_to_secure_connection: number;
  request_sent_time: number;
  waiting_time: number;
  download_time: number;
  duration_time: number;
  fetch_start: number;
  fetch_end: number;
};

type ContentMeta = {
  title: string;
  charset: number;
  follow: boolean;
  generator: string | null;
  htags: Record<string, string[]>;
  description: string;
  // Add other properties as needed
};

type Meta = {
  title: string;
  charset: number;
  follow: boolean;
  generator: null | string;
  htags: {
    h1: string[];
    h2: string[];
  };
  description: null | string;
  favicon: null | string;
  meta_keywords: null | string[];
  canonical: null | string;
  internal_links_count: number;
  external_links_count: number;
  inbound_links_count: number;
  images_count: number;
  images_size: number;
  scripts_count: number;
  scripts_size: number;
  stylesheets_count: number;
  stylesheets_size: number;
  title_length: number;
  description_length: number;
  render_blocking_scripts_count: number;
  render_blocking_stylesheets_count: number;
  cumulative_layout_shift: number;
  meta_title: null | string;
  content: {
    plain_text_size: number;
    plain_text_rate: number;
    plain_text_word_count: number;
    automated_readability_index: number;
    coleman_liau_readability_index: number;
    dale_chall_readability_index: number;
    flesch_kincaid_readability_index: number;
    smog_readability_index: number;
    description_to_content_consistency: null | number;
    title_to_content_consistency: number;
    meta_keywords_to_content_consistency: null | number;
  };
  deprecated_tags: null | string[];
  duplicate_meta_tags: null | string[];
  spell: null | string;
  social_media_tags: null | Record<string, string>;
};

export type Checks = {
  canonical: boolean;
  deprecated_html_tags: boolean;
  duplicate_meta_tags: boolean;
  duplicate_title_tag: boolean;
  flash: boolean;
  frame: boolean;
  has_html_doctype: boolean;
  has_meta_refresh_redirect: boolean;
  has_meta_title: boolean;
  has_micromarkup: boolean;
  has_micromarkup_errors: boolean;
  has_render_blocking_resources: boolean;
  high_character_count: boolean;
  high_content_rate: boolean;
  high_loading_time: boolean;
  high_waiting_time: boolean;
  https_to_http_links: boolean;
  irrelevant_description: boolean;
  irrelevant_meta_keywords: boolean;
  irrelevant_title: boolean;
  is_4xx_code: boolean;
  is_5xx_code: boolean;
  is_broken: boolean;
  is_http: boolean;
  is_https: boolean;
  is_redirect: boolean;
  is_www: boolean;
  large_page_size: boolean;
  lorem_ipsum: boolean;
  low_character_count: boolean;
  low_content_rate: boolean;
  low_readability_rate: boolean;
  meta_charset_consistency: boolean;
  no_content_encoding: boolean;
  no_description: boolean;
  no_doctype: boolean;
  no_encoding_meta_tag: boolean;
  no_favicon: boolean;
  no_h1_tag: boolean;
  no_image_alt: boolean;
  no_image_title: boolean;
  no_title: boolean;
  seo_friendly_url: boolean;
  seo_friendly_url_characters_check: boolean;
  seo_friendly_url_dynamic_check: boolean;
  seo_friendly_url_keywords_check: boolean;
  seo_friendly_url_relative_length_check: boolean;
  size_greater_than_3mb: boolean;
  small_page_size: boolean;
  title_too_long: boolean;
  title_too_short: boolean;
};

export type TaskItem = {
  resource_type: string;
  status_code: number;
  location: string | null;
  url: string;
  meta: Meta;
  page_timing: PageTiming;
  onpage_score: number;
  total_dom_size: number;
  // Add other properties as needed
  content_encoding: string;
  media_type: string;
  server: string;
  is_resource: boolean;
  url_length: number;
  relative_url_length: number;
  last_modified: string | null;
  broken_links: boolean;
  broken_resources: boolean;
  duplicate_content: boolean;
  duplicate_description: boolean;
  duplicate_title: boolean;
  encoded_size: number;
  fetch_time: string;
  cache_control: {
    cachable: boolean;
    ttl: number;
  };
  checks: {
    canonical: boolean;
    deprecated_html_tags: boolean;
    duplicate_meta_tags: boolean;
    duplicate_title_tag: boolean;
    flash: boolean;
    frame: boolean;
    has_html_doctype: boolean;
    has_meta_refresh_redirect: boolean;
    has_meta_title: boolean;
    has_micromarkup: boolean;
    has_micromarkup_errors: boolean;
    has_render_blocking_resources: boolean;
    high_character_count: boolean;
    high_content_rate: boolean;
    high_loading_time: boolean;
    high_waiting_time: boolean;
    https_to_http_links: boolean;
    irrelevant_description: boolean;
    irrelevant_meta_keywords: boolean;
    irrelevant_title: boolean;
    is_4xx_code: boolean;
    is_5xx_code: boolean;
    is_broken: boolean;
    is_http: boolean;
    is_https: boolean;
    is_redirect: boolean;
    is_www: boolean;
    large_page_size: boolean;
    lorem_ipsum: boolean;
    low_character_count: boolean;
    low_content_rate: boolean;
    low_readability_rate: boolean;
    meta_charset_consistency: boolean;
    no_content_encoding: boolean;
    no_description: boolean;
    no_doctype: boolean;
    no_encoding_meta_tag: boolean;
    no_favicon: boolean;
    no_h1_tag: boolean;
    no_image_alt: boolean;
    no_image_title: boolean;
    no_title: boolean;
    seo_friendly_url: boolean;
    seo_friendly_url_characters_check: boolean;
    seo_friendly_url_dynamic_check: boolean;
    seo_friendly_url_keywords_check: boolean;
    seo_friendly_url_relative_length_check: boolean;
    size_greater_than_3mb: boolean;
    small_page_size: boolean;
    title_too_long: boolean;
    title_too_short: boolean;
  };
  click_depth: number;
  custom_js_response: null;
};

export type TaskResult = {
  crawl_progress: string;
  crawl_status: string | null;
  crawl_gateway_address: string;
  items_count: number;
  items: TaskItem[];
};

type TaskData = {
  api: string;
  function: string;
  url: string;
  enable_javascript: boolean;
  check_spell: boolean;
  // Add other properties as needed
};

export type Task = {
  id: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  result_count: number;
  path: string[];
  data: TaskData;
  result: TaskResult[];
  // Add other properties as needed
};
