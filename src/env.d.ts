interface ImportMetaEnv {
  readonly SITE: string;
  readonly SITE_LOGO: string;
  readonly SITE_NAME: string;
  readonly SITE_NAME_SUB: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

