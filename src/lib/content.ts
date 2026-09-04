// docs/lp-spec.md に明記された一次情報のみを保持する。
// 未確定情報（会場アクセス詳細・駐車場情報・meta description等）は
// ここに推測で追加しない。確定次第このファイルに追記する。

export const event = {
  name: "武縁心美2027",
  nameKana: "ぶえんしんび",
  type: "太極拳・中国武術 演武発表会",
  dateLabel: "2027年5月30日（日）",
  timeLabel: "10:00〜16:00",
  admissionLabel: "入場無料",
} as const;

export const venue = {
  name: "豊中市立文化芸術センター 中ホール（アクア文化ホール）",
  postalCode: "561-0802",
  address: "大阪府豊中市曽根東町3-7-2",
} as const;

export const organizer = {
  organizerName: "劉武術協会",
  supervisorName: "武縁心美2027実行委員会",
} as const;

export const participation = {
  feePerPersonPerTeamYen: 3000,
  applicationFormUrl: "https://forms.gle/86AseiD97eNuhNEQA",
  applicationDeadlineLabel: "2027年3月31日（水）",
  paymentMethod: "銀行振込",
} as const;

export const contact = {
  email: "info.liu2026@gmail.com",
} as const;

export const social = {
  instagram: {
    // 「武縁心美公式Instagram」等の表記はしない（仕様書25章）
    label: "劉一丁 Instagram",
    url: "https://www.instagram.com/liuyiding2810/",
  },
  youtube: {
    // 「武縁心美公式YouTube」等の表記はしない（仕様書25章）
    label: "劉武術協会 公式YouTube",
    url: "https://www.youtube.com/@liu.wushu2017",
  },
} as const;
