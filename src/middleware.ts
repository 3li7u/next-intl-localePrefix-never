import { siteConfig } from "@/config";
import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
  locales: siteConfig.languages,
  localePrefix: siteConfig.localePrefix,
  defaultLocale: siteConfig.defaultLang,
  localeDetection: true,
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public/images
     * - public/svg
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|svg|.*\\..*).*)",
  ],
};
