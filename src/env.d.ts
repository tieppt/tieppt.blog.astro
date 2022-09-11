interface ImportMetaEnv {
  readonly SITE: string;
  readonly SITE_LOGO: string;
  readonly SITENAME: string;
  readonly SITENAME_SUB: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
