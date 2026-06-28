import type { SVGProps } from "react";

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const, ...p,
});

export const Store = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 9 4 4h16l1 5" /><path d="M4 9v11h16V9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M9 20v-5h6v5" /></svg>
);
export const Truck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M1 5h13v11H1z" /><path d="M14 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg>
);
export const Cart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 13h11l2-9H6" /></svg>
);
export const Whatsapp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.34-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.78-.36l.56.01c.18.01.42-.07.66.5.24.59.82 2.02.89 2.17.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.19.73-.85.93-1.14.19-.29.39-.24.66-.15.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.12.07.7-.17 1.38Z" />
  </svg>
);
export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...p}><path d="M14 9V7c0-1 .3-1.5 1.6-1.5H17V2.2C16.6 2.1 15.5 2 14.3 2 11.6 2 10 3.6 10 6.4V9H7.5v3.5H10V22h4v-9.5h2.7l.4-3.5H14Z" /></svg>
);
export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg>
);
export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Pin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
);
export const ArrowLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M15 5l-7 7 7 7" /></svg>
);
export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M9 5l7 7-7 7" /></svg>
);
export const Download = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3v12" /><path d="m7 11 5 5 5-5" /><path d="M5 21h14" /></svg>
);
export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

export const channelIcons = { store: Store, truck: Truck, cart: Cart } as const;
