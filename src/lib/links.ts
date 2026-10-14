// 実URL確定前の外部リンクをここで一元管理する。
// 確定済みのGoogleフォーム／問い合わせメール／Googleマップ／SNSは
// lib/content.ts 側で管理する。
// null の項目は「後日設定」。利用側は null なら該当リンク/CTAを描画しない。
export const links = {
  // ユーザー指定の開催要綱。Googleドライブの共有リンクを使用する。
  eventGuidelinesPdf:
    "https://drive.google.com/file/d/1Yya3yT9BgQrWWjOfrhjmjaDx4GHF-oCX/view?usp=sharing" as
      | string
      | null,
  facebook: null as string | null,
};
