import type { SVGProps } from 'react'

const PATHS: Record<string, string> = {
  home: 'M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z',
  trail: 'M7 4h10v4H7zM5 10h6v10H5zM13 10h6v6h-6z',
  questions: 'M5 5h14v3H5zM5 10h14v3H5zM5 15h9v3H5z',
  simulado: 'M6 4h12a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 0 1 2-2z',
  idib: 'M12 3 4 7v5c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7z',
  more: 'M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
  search: 'M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm8.5 15-3.8-3.8',
  settings: 'M10 3h4l.8 2.4 2.5.9 1.8-1.8 2.8 2.8-1.8 1.8.9 2.5L24 12v0M4.2 8.2 6 10l-.9 2.5L3.3 14.3 6 17l1.8-1.8 2.5.9L12 19h0',
  book: 'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4zm0 0v16',
  chart: 'M5 19h14M7 16v-5m5 5V7m5 12v-8',
  import: 'M12 4v10m0 0-4-4m4 4 4-4M5 18h14',
  sources: 'M6 4h9l3 3v13H6zM9 10h6M9 14h6',
  cards: 'M5 7h12v12H5zM8 4h12v12',
  sun: 'M12 4V2m0 20v-2M4 12H2m20 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4M18.4 5.6l1.4-1.4M5.6 18.4l-1.4 1.4M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
  moon: 'M16 3a8 8 0 1 0 5 13 7 7 0 0 1-5-13z',
  user: 'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z',
  check: 'M5 12.5 9.5 17 19 7',
  play: 'M8 6v12l10-6z',
  clock: 'M12 7v5l3 2M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z',
  flag: 'M5 3v18M5 4h11l-2 4 2 4H5',
  pt: 'M4 6h16v12H4zM8 9h8M8 12h6',
  rlm: 'M5 17 9 9l4 6 3-4 3 6',
  inf: 'M8 5h8v3H8zM6 10h12v9H6z',
  esp: 'M12 4 5 8v8l7 4 7-4V8z',
  review: 'M12 5a7 7 0 1 1-6.3 4M6 4v5h5',
  close: 'M6 6l12 12M18 6 6 18',
}

export function Icon({
  name,
  size = 20,
  ...rest
}: { name: keyof typeof PATHS | string } & SVGProps<SVGSVGElement> & { size?: number }) {
  const svg = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
    ...rest,
  }
  if (name === 'search') {
    return (
      <svg {...svg}>
        <circle cx="11" cy="11" r="6.25" />
        <path d="M16.2 16.2 20.5 20.5" />
      </svg>
    )
  }
  return (
    <svg {...svg}>
      <path d={PATHS[name] ?? PATHS.book} />
    </svg>
  )
}

export const DISCIPLINE_ICON: Record<string, keyof typeof PATHS> = {
  portugues: 'pt',
  rlm: 'rlm',
  informatica: 'inf',
  especificos: 'esp',
  estrategias: 'idib',
}
