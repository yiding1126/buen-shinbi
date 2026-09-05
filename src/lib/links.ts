// 実URL確定前の外部リンクをここで一元管理する。
// 確定済みのGoogleフォーム／問い合わせメールは lib/content.ts 側で管理する。
// null の項目は「後日設定」。利用側は null なら該当リンク/CTAを描画しない。
export const links = {
  eventGuidelinesPdf: null as string | null,
  googleMaps: null as string | null,
  instagram: null as string | null,
  youtube: null as string | null,
  facebook: null as string | null,
};
