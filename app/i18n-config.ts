export const i18n = {
  defaultLang: "en",
  langs: ["en"],
  locales: ["bw", "za"],
} as const;

export type Language = (typeof i18n)["langs"][number];
export type Locale = (typeof i18n)["locales"][number];
