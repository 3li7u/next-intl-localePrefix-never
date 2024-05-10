"use client";

import { siteConfig } from "@/config";
import { Link, usePathname } from "@/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  return siteConfig.languages.map((locale) => (
    <Link
      key={locale}
      href={pathname}
      locale={locale}
      className="uppercase px-3">
      {locale}
    </Link>
  ));
}
