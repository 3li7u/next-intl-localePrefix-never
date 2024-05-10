import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

export default function useTextDirection(locale: string) {
  const defaultLocale = useLocale();
  return getLangDir(locale || defaultLocale);
}
