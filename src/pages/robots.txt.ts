import { AppConfig } from '../config';

export async function get() {
  return {
    body: `User-agent: *
Allow: /
Sitemap: ${AppConfig.origin}sitemap.xml`,
  };
}
