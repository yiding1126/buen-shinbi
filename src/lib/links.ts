// 実URL確定前の外部リンクをここで一元管理する。
// 確定済みのGoogleフォーム／問い合わせメール／Googleマップ／SNSは
// lib/content.ts 側で管理する。
// null の項目は「後日設定」。利用側は null なら該当リンク/CTAを描画しない。
export const links = {
  // 2027/8/29版（事実情報の正としてユーザー確認済み）。約30MBあり
  // リポジトリに直接置くとサイトが重くなるため、Googleドライブでの
  // 共有リンクを使用する。
  eventGuidelinesPdf:
    "https://drive.google.com/file/d/1Gcm_LFT5wxqTXh1HcCsC0OS0RWLq97S8/view?usp=sharing" as
      | string
      | null,
  facebook: null as string | null,
};
