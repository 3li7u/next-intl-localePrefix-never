import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { siteConfig } from "./config";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: siteConfig.languages,
    localePrefix: siteConfig.localePrefix,
  });
