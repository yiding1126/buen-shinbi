import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

// 明朝体は仮選定（Noto Serif JP）。Phase 3のデザイン確認後、
// この2つの定義だけを差し替えれば全ページのフォントを変更できる。
export const fontSerif = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const fontSans = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
