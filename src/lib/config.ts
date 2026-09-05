// 開催まで段階的に更新する運用フラグ。コンポーネント側は分岐ロジックのみ持つ。
export type EventStatus = "recruiting" | "closed" | "event_soon" | "finished";

export const EVENT_STATUS: EventStatus = "recruiting";
export const SHOW_PROGRAM = false;
export const SHOW_FIXED_CTA = true;
