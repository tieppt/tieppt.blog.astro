export interface Link extends HTMLLinkElement {
  prefetch: boolean;
}

export interface Meta extends HTMLMetaElement {
  property: string;
}

export interface OpenGraphMeta {
  basic: {
    title: string;
    type: string;
    image: string;
    url?: string;
  };
  optional?: {
    audio?: string;
    description?: string;
    determiner?: string;
    locale?: string;
    localeAlternate?: string[];
    siteName?: string;
    video?: string;
  };
  image?: {
    url?: string;
    secureUrl?: string;
    type?: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    expirationTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
}

export interface TwitterMeta {
  card?: string;
  site?: string;
  creator?: string;
}

export interface ExtendMetadata {
  link?: Partial<Link>[];
  meta?: Partial<Meta>[];
}

export interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  nofollow?: boolean;
  noindex?: boolean;
  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
  extend?: ExtendMetadata;
}
