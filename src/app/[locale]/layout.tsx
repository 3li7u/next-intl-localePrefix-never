import { siteConfig } from "@/config";
import { useTextDirection } from "@/hooks";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

import { fontSans } from "@/lib/fonts";

import "../globals.css";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/components/locale-switcher";

type TProps = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export async function generateMetadata({
  params: { locale },
}: Omit<TProps, "children">) {
  const t = await getTranslations({ locale, namespace: "rootLayout" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
  };
}

export function generateStaticParams() {
  return siteConfig.languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: TProps) {
  console.log(locale);
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} dir={useTextDirection(locale)} suppressHydrationWarning>
      <body className={cn("antialiased font-sans", fontSans.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
