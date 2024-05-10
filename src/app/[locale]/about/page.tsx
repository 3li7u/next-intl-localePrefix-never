import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log("about:", locale);
  unstable_setRequestLocale(locale);
  const t = useTranslations("aboutPage");
  return (
    <main>
      <h1>{t("title")}</h1>
      <Link href="/home">goto: Home</Link>
    </main>
  );
}
