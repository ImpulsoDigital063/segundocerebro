// ============================================================
// CARRETINHA — MOBILE styles (mStyles)
// Designed at 390px (iPhone 13/14 base). Mobile-first.
// ============================================================

const MOBILE_W = 390;
const MPADX = 20;

const mStyles = {
  root: {
    width: MOBILE_W,
    background: "#FAF6F0",
    color: "#1B1612",
    fontFamily: '"Inter", sans-serif',
    overflow: "hidden",
  },

  // HEADER
  header: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: `16px ${MPADX}px`,
    position: "sticky", top: 0, zIndex: 30,
    background: "rgba(250,246,240,0.94)",
    backdropFilter: "saturate(180%) blur(12px)",
    borderBottom: "1px solid rgba(27,22,18,0.08)",
  },
  logo: { display: "flex", alignItems: "center", gap: 8, textDecoration: "none" },
  logoMark: { display: "inline-flex" },
  logoTitle: { fontFamily: '"Fraunces", serif', fontSize: 16, fontWeight: 500, color: "#1B1612", letterSpacing: "-0.015em" },
  menuBtn: {
    background: "transparent", border: "1px solid #E8E2D7", borderRadius: 999,
    padding: 8, width: 36, height: 36,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    color: "#1B1612", cursor: "pointer",
  },

  // HERO
  hero: { padding: `32px ${MPADX}px 56px` },
  heroHeadline: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400, fontSize: 48, lineHeight: 0.98,
    letterSpacing: "-0.035em",
    color: "#1B1612",
    margin: "16px 0 16px",
    textWrap: "pretty",
  },
  heroSub: {
    fontSize: 15, lineHeight: 1.55,
    color: "#5A4F46",
    margin: "0 0 28px",
  },
  heroPhoto: { position: "relative", marginBottom: 32 },
  heroPhotoBadge: {
    position: "absolute", left: 12, bottom: 12,
    background: "#FAF6F0",
    borderRadius: 12, padding: "12px 14px",
    display: "flex", alignItems: "center", gap: 10,
    boxShadow: "0 8px 24px rgba(27,22,18,0.18)",
  },
  heroPhotoBadgeNum: {
    fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 400,
    color: "#C8395E", lineHeight: 1, letterSpacing: "-0.04em",
  },
  heroPhotoBadgeTxt: {
    fontSize: 11, lineHeight: 1.3, color: "#1B1612", fontWeight: 500,
  },

  form: {
    background: "#fff",
    border: "1px solid #E8E2D7",
    borderRadius: 16,
    padding: 20,
    boxShadow: "0 1px 2px rgba(27,22,18,.04), 0 12px 32px rgba(27,22,18,.05)",
  },
  formHead: {
    paddingBottom: 16, marginBottom: 16, borderBottom: "1px solid #F0EBE0",
  },
  formLabel: {
    fontFamily: '"Fraunces", serif', fontSize: 18, fontWeight: 500,
    color: "#1B1612", lineHeight: 1.2,
  },
  formHint: { fontSize: 12, color: "#8A7B6D", marginTop: 4 },
  formStack: { display: "flex", flexDirection: "column", gap: 16 },

  // TRUST
  trust: {
    background: "#1B1612", color: "#FAF6F0",
    padding: `32px ${MPADX}px`,
    display: "flex", flexDirection: "column", gap: 0,
  },
  trustItem: {
    padding: "20px 0", borderTop: "1px solid rgba(250,246,240,0.10)",
  },
  trustKicker: {
    fontFamily: 'ui-monospace, "SF Mono", monospace',
    fontSize: 11, color: "#E8B14A", marginBottom: 8, fontWeight: 600,
    letterSpacing: "0.08em",
  },
  trustTitle: {
    fontFamily: '"Fraunces", serif',
    fontSize: 20, fontWeight: 500, lineHeight: 1.2,
    color: "#FAF6F0", marginBottom: 6,
    letterSpacing: "-0.015em",
  },
  trustDesc: { fontSize: 13, lineHeight: 1.5, color: "#B59A7F" },

  // SHARED H/LEDE
  h1: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400, fontSize: 38,
    lineHeight: 1.03, letterSpacing: "-0.025em",
    color: "#1B1612",
    margin: "12px 0 12px",
    textWrap: "balance",
  },
  lede: {
    fontSize: 15, lineHeight: 1.55, color: "#5A4F46", margin: 0,
  },

  // ATRAÇÕES
  atracoesWrap: { padding: `64px 0` },
  atracoesHead: { padding: `0 ${MPADX}px`, marginBottom: 32 },
  atrCarousel: {
    display: "flex", gap: 16,
    padding: `0 ${MPADX}px`,
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
  },
  atrCard: {
    flex: "0 0 260px",
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid #E8E2D7",
    scrollSnapAlign: "start",
  },
  atrBody: { padding: "20px 20px 24px" },
  atrIcoRow: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    marginBottom: 12,
  },
  atrIcon: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 32, height: 32, borderRadius: 8,
    background: "#F2EBDD", color: "#C8395E",
  },
  atrIndex: {
    fontFamily: 'ui-monospace, "SF Mono", monospace',
    fontSize: 10, color: "#8A7B6D", letterSpacing: "0.06em", fontWeight: 600,
  },
  atrTitle: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 500, fontSize: 20, lineHeight: 1.15,
    letterSpacing: "-0.015em", color: "#1B1612", margin: "0 0 6px",
  },
  atrDesc: { fontSize: 13, lineHeight: 1.5, color: "#5A4F46", margin: 0 },
  carouselHint: {
    padding: `16px ${MPADX}px 0`,
    display: "inline-flex", alignItems: "center", gap: 6,
    fontSize: 11, fontWeight: 500, color: "#8A7B6D",
    textTransform: "uppercase", letterSpacing: "0.08em",
  },

  // COMO FUNCIONA
  comoWrap: {
    padding: `64px ${MPADX}px`,
    background: "#F2EBDD",
  },
  comoStack: { marginTop: 32, display: "flex", flexDirection: "column", gap: 24 },
  comoItem: { display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, position: "relative" },
  comoNumWrap: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center" },
  comoNum: {
    width: 44, height: 44, borderRadius: "50%",
    background: "#1B1612", color: "#FAF6F0",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: '"Fraunces", serif', fontSize: 16, fontWeight: 500,
    flexShrink: 0,
  },
  comoLine: {
    flex: 1, width: 1,
    background: "#C8395E", opacity: 0.3, marginTop: 8,
  },
  comoBody: { paddingTop: 8, paddingBottom: 24 },
  comoTitle: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 500, fontSize: 20, lineHeight: 1.2,
    letterSpacing: "-0.02em", color: "#1B1612", margin: "0 0 8px",
  },
  comoDesc: { fontSize: 14, lineHeight: 1.55, color: "#5A4F46", margin: 0 },

  // CAPACIDADE
  capWrap: { padding: `64px ${MPADX}px` },
  capNumberRow: {
    display: "flex", alignItems: "flex-end", gap: 16,
    marginTop: 12, marginBottom: 24,
  },
  capNumber: {
    fontFamily: '"Fraunces", serif',
    fontSize: 120, fontWeight: 400, color: "#C8395E",
    lineHeight: 0.8, letterSpacing: "-0.06em",
  },
  capNumberSide: { paddingBottom: 12 },
  capNumberLabel: {
    fontFamily: '"Fraunces", serif', fontStyle: "italic",
    fontSize: 18, color: "#1B1612", lineHeight: 1.2,
    letterSpacing: "-0.015em",
  },
  capDesc: {
    fontSize: 15, lineHeight: 1.55, color: "#5A4F46",
    marginTop: 24, marginBottom: 24,
  },
  capFacts: { display: "flex", flexDirection: "column" },
  capFact: {
    display: "flex", justifyContent: "space-between",
    padding: "14px 0", borderTop: "1px solid #E8E2D7",
  },
  capFactK: {
    fontSize: 12, color: "#8A7B6D",
    textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600,
  },
  capFactV: {
    fontFamily: '"Fraunces", serif', fontSize: 16, color: "#1B1612", fontWeight: 500,
  },

  // HIGIENIZAÇÃO
  higWrap: { padding: `64px ${MPADX}px` },

  // PACOTES
  pkgWrap: {
    padding: `64px ${MPADX}px`,
    background: "#1B1612", color: "#FAF6F0",
  },
  pkgStack: { marginTop: 32, display: "flex", flexDirection: "column", gap: 16 },
  pkgCard: {
    borderRadius: 16, padding: 24,
    color: "#FAF6F0",
  },
  pkgHead: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginBottom: 12,
  },
  pkgName: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400, fontSize: 26, lineHeight: 1.1,
    letterSpacing: "-0.02em", color: "#FAF6F0", margin: "8px 0 16px",
  },
  pkgPriceTag: {
    fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em",
    fontWeight: 600, marginBottom: 4,
  },
  pkgPriceValor: {
    fontFamily: '"Fraunces", serif',
    fontSize: 32, fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1,
    color: "#FAF6F0", paddingBottom: 16,
    borderBottom: "1px solid rgba(250,246,240,0.15)",
    marginBottom: 16,
  },
  pkgList: {
    listStyle: "none", padding: 0, margin: "0 0 20px",
    display: "flex", flexDirection: "column", gap: 8,
  },
  pkgListItem: {
    display: "flex", alignItems: "start", gap: 8,
    fontSize: 13, lineHeight: 1.45, color: "inherit",
  },

  // OLÍMPIO
  olimpioWrap: { padding: `64px ${MPADX}px` },
  olimpioPhotoWrap: { position: "relative" },
  olimpioSticker: {
    position: "absolute", right: 12, bottom: -16,
    background: "#E8B14A", color: "#1B1612",
    padding: "12px 16px", borderRadius: 10,
    transform: "rotate(-2deg)",
    boxShadow: "0 6px 18px rgba(27,22,18,0.18)",
  },
  olimpioStickerL1: {
    fontFamily: '"Fraunces", serif', fontStyle: "italic",
    fontSize: 12, color: "#5A4F46",
  },
  olimpioStickerL2: {
    fontFamily: '"Fraunces", serif',
    fontSize: 16, fontWeight: 500, color: "#1B1612",
    letterSpacing: "-0.015em",
  },
  olimpioBody: {
    fontSize: 15, lineHeight: 1.6,
    color: "#5A4F46", margin: "0 0 16px",
  },

  // GALERIA
  galWrap: {
    padding: `64px ${MPADX}px`,
    background: "#F2EBDD",
  },
  galGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginTop: 32,
  },
  galCell: { position: "relative" },
  galCap: {
    position: "absolute", left: 10, bottom: 10,
    color: "#FAF6F0", fontSize: 10, fontWeight: 500,
    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
    zIndex: 5,
  },

  // FAQ
  faqWrap: { padding: `64px ${MPADX}px` },
  faqList: { marginTop: 24 },
  faqRow: { padding: "20px 0", borderTop: "1px solid #E8E2D7" },
  faqHeader: {
    display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16,
  },
  faqQ: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 500, fontSize: 17, lineHeight: 1.25,
    letterSpacing: "-0.015em", color: "#1B1612",
    margin: 0, transition: "color 200ms ease-out",
  },
  faqIcon: {
    color: "#1B1612", flexShrink: 0,
    width: 28, height: 28,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    border: "1px solid #E8E2D7", borderRadius: "50%",
  },
  faqA: {
    fontSize: 14, lineHeight: 1.6, color: "#5A4F46",
    overflow: "hidden",
    transition: "max-height 320ms cubic-bezier(.2,.7,.2,1), opacity 320ms ease-out, margin-top 320ms ease-out",
  },

  // CTA FINAL
  ctaWrap: {
    padding: `64px ${MPADX}px`,
    background: "#1B1612", color: "#FAF6F0",
  },
  ctaHeadline: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400, fontSize: 44, lineHeight: 1,
    letterSpacing: "-0.035em", color: "#FAF6F0",
    margin: "16px 0 16px",
  },
  ctaBody: {
    fontSize: 15, lineHeight: 1.55, color: "#B59A7F",
    margin: "0 0 24px",
  },
  ctaSideCard: {
    background: "rgba(250,246,240,0.05)",
    border: "1px solid rgba(250,246,240,0.12)",
    borderRadius: 16, padding: 20,
    marginTop: 32,
  },
  ctaSideHead: {
    fontSize: 11, fontWeight: 700, letterSpacing: "0.10em",
    textTransform: "uppercase", color: "#E8B14A",
    paddingBottom: 12, borderBottom: "1px solid rgba(250,246,240,0.10)",
    marginBottom: 4,
  },
  ctaSideRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid rgba(250,246,240,0.06)",
  },
  ctaSideDate: { fontFamily: '"Fraunces", serif', fontSize: 16, color: "#FAF6F0" },
  ctaSideStatus: { fontSize: 11, fontWeight: 600, letterSpacing: "0.02em" },

  // FOOTER
  footer: {
    padding: `48px ${MPADX}px 32px`,
    background: "#FAF6F0", color: "#1B1612",
    borderTop: "1px solid #E8E2D7",
  },
  footerLogo: {
    fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 500,
    letterSpacing: "-0.02em", marginBottom: 8,
  },
  footerTag: { fontSize: 13, lineHeight: 1.55, color: "#5A4F46", marginBottom: 24 },
  footerLinks: { display: "flex", flexDirection: "column", gap: 4, marginBottom: 24 },
  footerLink: {
    display: "flex", alignItems: "center", gap: 8,
    padding: "6px 0", fontSize: 13, color: "#1B1612",
    textDecoration: "none",
  },
  footerBottom: {
    paddingTop: 20, borderTop: "1px solid #E8E2D7",
    fontSize: 11, color: "#8A7B6D", lineHeight: 1.6,
  },
};

Object.assign(window, { mStyles, MOBILE_W });
