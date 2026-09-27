/** Paletas de acento (clases completas para que Tailwind las detecte). */
export const TONES = {
  blue: {
    tile: "bg-blue-500/10 border-blue-500/25 text-blue-400",
    glow: "from-blue-500/25",
    soft: "bg-blue-400/70",
    ring: "hover:border-blue-500/40",
  },
  violet: {
    tile: "bg-violet-500/10 border-violet-500/25 text-violet-400",
    glow: "from-violet-500/25",
    soft: "bg-violet-400/70",
    ring: "hover:border-violet-500/40",
  },
  emerald: {
    tile: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
    glow: "from-emerald-500/25",
    soft: "bg-emerald-400/70",
    ring: "hover:border-emerald-500/40",
  },
  amber: {
    tile: "bg-amber-500/10 border-amber-500/25 text-amber-400",
    glow: "from-amber-500/25",
    soft: "bg-amber-400/70",
    ring: "hover:border-amber-500/40",
  },
  rose: {
    tile: "bg-rose-500/10 border-rose-500/25 text-rose-400",
    glow: "from-rose-500/25",
    soft: "bg-rose-400/70",
    ring: "hover:border-rose-500/40",
  },
  sky: {
    tile: "bg-sky-500/10 border-sky-500/25 text-sky-400",
    glow: "from-sky-500/25",
    soft: "bg-sky-400/70",
    ring: "hover:border-sky-500/40",
  },
} as const;

export type Tone = keyof typeof TONES;
