import type { Metadata } from "next";
import { fontSans, fontSerif } from "@/lib/fonts";
import { SHOW_FIXED_CTA } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "武縁心美2027｜太極拳・中国武術 演武交流会",
  description:
    "2027年5月30日、豊中市立文化芸術センターで開催する太極拳・中国武術の演武交流会「武縁心美2027」。全国の団体・チームの出演を募集。観覧は入場無料・事前申込不要です。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${fontSerif.variable} ${fontSans.variable} h-full antialiased motion-safe:scroll-smooth`}
    >
      <body
        className={`min-h-full flex flex-col bg-background text-ink ${
          SHOW_FIXED_CTA ? "pb-14 lg:pb-0" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
