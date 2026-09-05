// 実URL確定前の外部リンクをここで一元管理する。
// 確定済みのGoogleフォーム／問い合わせメール／Googleマップ／SNSは
// lib/content.ts 側で管理する。
// null の項目は「後日設定」。利用側は null なら該当リンク/CTAを描画しない。
export const links = {
  // 2027/8/29版（事実情報の正としてユーザー確認済み）。約30MBあるため、
  // 軽量版が届き次第、内容の同一性を確認のうえ差し替える。
  eventGuidelinesPdf: "/documents/buen-shinbi-2027-guidelines.pdf" as string | null,
  facebook: null as string | null,
};
