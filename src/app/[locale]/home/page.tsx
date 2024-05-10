import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log("home:", locale);
  unstable_setRequestLocale(locale);
  const t = useTranslations("homePage"); // client & server-non-async component
  // const t = await getTranslations("homePage"); // async server components
  return (
    <main>
      <h1>{t("title")}</h1>
      <Link href="/about">goto: About</Link>
    </main>
  );
}
