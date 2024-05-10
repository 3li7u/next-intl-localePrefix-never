export type TSiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next Intel Issue",
  description: "",
  languages: ["en", "ar"] as const,
  defaultLang: "en" as const,
  localePrefix: "never" as const,
};
