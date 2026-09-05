// docs/lp-spec-v2.md（未確定：docs/event-guidelines.pdf到着待ち）に
// 明記された一次情報のみを保持する。ここに推測で追加しない。

export const event = {
  name: "武縁心美2027",
  nameKana: "ぶえんしんび",
  // スマートフォン版デザイン参考画像に基づく仮のメインコピー。Heroは
  // lp-spec-v2.mdの「キャッチコピーなし」方針と異なるが現状維持と指示済み。
  tagline: ["武がつなぐ、", "人と、心と、未来へ。"],
  type: "太極拳・中国武術 演武交流会",
  dateLabel: "2027年5月30日（日）",
  timeLabel: "10:00〜16:00（予定）",
  admissionLabel: "入場無料",
  registrationNote: "事前申込不要",
} as const;

export const venue = {
  name: "豊中市立文化芸術センター 中ホール（アクア文化ホール）",
  postalCode: "561-0802",
  address: "大阪府豊中市曽根東町3-7-2",
  accessLabel: "阪急宝塚線「曽根」駅より徒歩約5分",
  parkingLabel: "地下駐車場64台（有料）／最初30分無料、以降30分毎100円",
} as const;

export const organizer = {
  organizerName: "劉武術協会",
  supervisorName: "武縁心美2027実行委員会",
} as const;

export const participation = {
  teamMinSize: 6,
  performanceTimeLimitMinutes: 4,
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
