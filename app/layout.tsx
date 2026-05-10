import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans, Fira_Code } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import Interactivity from "@/app/components/Interactivity";
import ScrollProgress from "@/app/components/ScrollProgress";
import { SITE } from "@/lib/content";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: { default: `${SITE.name} — ${SITE.role}`, template: `%s · ${SITE.name}` },
  description: SITE.lead,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.lead,
    type: "profile",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.lead,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1929",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${firaCode.variable}`}
    >
      <body>
        <a href="#main" className="sh-skip">
          Skip to main content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Interactivity />
      </body>
    </html>
  );
}
