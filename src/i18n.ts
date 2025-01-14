import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { siteConfig } from "./config";

const locales = siteConfig.languages;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../messages/en.json")
        : import(`../messages/${locale}.json`))
    ).default,
  };
});
