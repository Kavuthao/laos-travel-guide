export type EssentialIconName = 'visa' | 'money' | 'train' | 'temple' | 'safety' | 'internet' | 'plug' | 'emergency'

const paths: Record<EssentialIconName, React.ReactNode> = {
  visa: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M9 16h6" />
    </>
  ),
  money: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9.5v.01M18 14.5v.01" />
    </>
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <path d="M5 11h14M9 14.5v.01M15 14.5v.01M8 21l2-4M16 21l-2-4" />
    </>
  ),
  temple: (
    <>
      <path d="M12 3c-1 2-1.5 3-1.5 4.5h3C13.5 6 13 5 12 3z" />
      <path d="M7 12c0-2 1.5-4.5 5-4.5s5 2.5 5 4.5" />
      <path d="M4 12h16M5.5 12v8M18.5 12v8M3 20h18M10 20v-4a2 2 0 0 1 4 0v4" />
    </>
  ),
  safety: (
    <>
      <path d="M12 3 2.5 20h19L12 3z" />
      <path d="M12 10v4.5M12 17.5v.01" />
    </>
  ),
  internet: (
    <>
      <path d="M2.5 9a15 15 0 0 1 19 0M5.5 12.5a10.5 10.5 0 0 1 13 0M8.5 16a6 6 0 0 1 7 0" />
      <path d="M12 19.5v.01" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0V8z" />
      <path d="M12 17v4" />
    </>
  ),
  emergency: (
    <>
      <path d="M6 20v-7a6 6 0 0 1 12 0v7" />
      <path d="M4 20h16M12 3v2M4.5 6.5l1.4 1.4M19.5 6.5l-1.4 1.4" />
      <path d="M12 11v4M10 13h4" />
    </>
  ),
}

export function EssentialIcon({ name }: { name: EssentialIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
