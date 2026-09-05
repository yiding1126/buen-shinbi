import type { SVGProps } from "react";

// 線画のみの最小限アイコン。外部アイコンライブラリは使用しない。
function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.8" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3.2v3.6M16 3.2v3.6" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

export function TrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="4" width="14" height="11" rx="3" />
      <path d="M5 10.5h14" />
      <circle cx="9" cy="12.7" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12.7" r="0.7" fill="currentColor" stroke="none" />
      <path d="M8.3 18.8l-2 2.2M15.7 18.8l2 2.2" />
    </svg>
  );
}

export function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 16l1.1-4.5A2 2 0 017.5 10h9a2 2 0 011.9 1.5L19.5 16" />
      <rect x="3" y="16" width="18" height="4" rx="1.5" />
      <circle cx="7.5" cy="20" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="20" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.3 9.3l5 2.7-5 2.7z" fill="currentColor" stroke="none" />
    </svg>
  );
}
