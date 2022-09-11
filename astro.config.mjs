import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc';
import emoji from 'remark-emoji';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './scripts/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://tiepphan-astro.netlify.app',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark-dimmed',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      // langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  integrations: [
    mdx({
      remarkPlugins: [emoji, remarkReadingTime],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
          },
        ],
        [
          rehypeToc,
          {
            headings: ['h1', 'h2', 'h3'],
          },
        ],
      ],
    }),
    tailwind(),
    preact(),
    sitemap(),
  ],
});
