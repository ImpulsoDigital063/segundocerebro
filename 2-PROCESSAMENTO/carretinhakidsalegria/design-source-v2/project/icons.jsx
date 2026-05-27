// ============================================================
// CARRETINHA — Icons (SVG inline, 1.5px stroke editorial)
// No emoji. Stroke-based for a quiet/premium feel.
// ============================================================

const Icon = ({ children, size = 20, stroke = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const Icons = {
  arrow: (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>,
  arrowDiag: (p) => <Icon {...p}><path d="M7 17L17 7M8 7h9v9"/></Icon>,
  whatsapp: (p) => <Icon {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.07-1.33A10 10 0 1 0 12 2Z"/>
    <path d="M8.5 8.5c.25-.65.66-.5 1.07-.5.34 0 .73-.04 1.08.83.4 1 1.34 3.4 1.45 3.65.11.25.18.54.04.85-.14.31-.21.5-.42.78-.21.27-.44.61-.63.81-.21.23-.42.47-.18.92.24.45 1.06 1.74 2.27 2.82 1.56 1.4 2.87 1.83 3.28 2.04.41.21.65.18.89-.11.24-.29 1.03-1.2 1.31-1.61.28-.41.56-.34.94-.21.38.14 2.43 1.15 2.85 1.36"/>
  </Icon>,
  check: (p) => <Icon {...p}><path d="M4 12l5 5L20 6"/></Icon>,
  plus: (p) => <Icon {...p}><path d="M5 12h14M12 5v14"/></Icon>,
  minus: (p) => <Icon {...p}><path d="M5 12h14"/></Icon>,
  menu: (p) => <Icon {...p}><path d="M4 7h16M4 17h16"/></Icon>,
  // Atrações — abstratos, não cartoon
  bounce: (p) => <Icon {...p}>
    <path d="M3 16c0-4 4-7 9-7s9 3 9 7"/>
    <path d="M3 16h18"/>
    <path d="M8 12V8M16 12V8"/>
  </Icon>,
  slide: (p) => <Icon {...p}>
    <path d="M5 19L15 6"/>
    <path d="M15 6h4v4"/>
    <path d="M5 19h7"/>
  </Icon>,
  tunnel: (p) => <Icon {...p}>
    <path d="M3 19V12a9 9 0 0 1 18 0v7"/>
    <path d="M3 19h18"/>
    <path d="M9 19v-5a3 3 0 0 1 6 0v5"/>
  </Icon>,
  small_slide: (p) => <Icon {...p}>
    <path d="M6 18L13 8"/>
    <path d="M13 8h5"/>
    <path d="M6 18h5"/>
  </Icon>,
  balls: (p) => <Icon {...p}>
    <circle cx="8" cy="10" r="2"/>
    <circle cx="15" cy="9" r="2"/>
    <circle cx="11" cy="15" r="2"/>
    <circle cx="17" cy="15" r="2"/>
    <path d="M3 19h18"/>
  </Icon>,
  audio: (p) => <Icon {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4z"/>
    <path d="M17 9a4 4 0 0 1 0 6"/>
  </Icon>,
  // Trust
  truck: (p) => <Icon {...p}>
    <rect x="2" y="7" width="12" height="9" rx="1"/>
    <path d="M14 10h4l3 3v3h-7z"/>
    <circle cx="6" cy="17.5" r="1.5"/>
    <circle cx="17" cy="17.5" r="1.5"/>
  </Icon>,
  user: (p) => <Icon {...p}>
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
  </Icon>,
  sparkle: (p) => <Icon {...p}>
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>
    <path d="M6 6l3 3M18 18l-3-3M6 18l3-3M18 6l-3 3"/>
  </Icon>,
  pin: (p) => <Icon {...p}>
    <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </Icon>,
  // Social
  instagram: (p) => <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </Icon>,
  play: (p) => <Icon {...p}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M10 8l6 4-6 4z" fill="currentColor" stroke="none"/>
  </Icon>,
  shield: (p) => <Icon {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>
    <path d="M9 12l2 2 4-4"/>
  </Icon>,
  star: (p) => <Icon {...p}>
    <path d="M12 3l2.5 5.5L20 9.3l-4 4 1 5.7L12 16.5 7 19l1-5.7-4-4 5.5-.8L12 3z"/>
  </Icon>,
};

// Atração icon mapping
const ATRACAO_ICONS = [Icons.bounce, Icons.slide, Icons.tunnel, Icons.small_slide, Icons.balls, Icons.audio];

Object.assign(window, { Icons, Icon, ATRACAO_ICONS });
