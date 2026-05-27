// ============================================================
// CARRETINHA — DESKTOP styles (dStyles)
// Designed at 1440px. Layout uses CSS grid for clarity.
// ============================================================

const DESKTOP_W = 1440;
const MAXW = 1280; // max inner width — 80px breathing on each side at 1440
const PADX = 80;

const dStyles = {
  root: {
    width: DESKTOP_W,
    background: "#FAF6F0",
    color: "#1B1612",
    fontFamily: '"Inter", sans-serif',
    overflow: "hidden",
  },

  // ===== HEADER =========================================
  header: {
    position: "sticky", top: 0, zIndex: 30,
    background: "rgba(250,246,240,0.92)",
    backdropFilter: "saturate(180%) blur(12px)",
    borderBottom: "1px solid rgba(27,22,18,0.08)",
  },
  headerInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `20px ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: 40,
  },
  logo: { display: "flex", alignItems: "center", gap: 12, textDecoration: "none" },
  logoMark: { display: "inline-flex" },
  logoText: { display: "flex", flexDirection: "column", lineHeight: 1 },
  logoTitle: { fontFamily: '"Fraunces", serif', fontSize: 20, fontWeight: 500, color: "#1B1612", letterSpacing: "-0.015em" },
  logoSub: { fontSize: 11, fontWeight: 500, color: "#8A7B6D", marginTop: 3, letterSpacing: "0.04em" },

  nav: { display: "flex", gap: 32, justifyContent: "center" },
  navLink: { fontSize: 14, fontWeight: 500, color: "#1B1612", textDecoration: "none" },

  // ===== HERO ===========================================
  hero: { paddingTop: 48, paddingBottom: 120 },
  heroInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: 96, alignItems: "start",
  },
  heroCopy: { paddingTop: 56 },
  heroHeadline: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400,
    fontSize: 96,
    lineHeight: 0.96,
    letterSpacing: "-0.035em",
    color: "#1B1612",
    margin: "20px 0 24px",
    textWrap: "pretty",
  },
  heroSub: {
    fontSize: 19, lineHeight: 1.5,
    color: "#5A4F46",
    maxWidth: 520,
    margin: "0 0 40px",
  },

  heroForm: {
    background: "#fff",
    border: "1px solid #E8E2D7",
    borderRadius: 20,
    padding: 28,
    boxShadow: "0 1px 2px rgba(27,22,18,.04), 0 12px 32px rgba(27,22,18,.05)",
  },
  heroFormHeader: { paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid #F0EBE0" },
  heroFormLabel: { fontFamily: '"Fraunces", serif', fontSize: 20, fontWeight: 500, color: "#1B1612", lineHeight: 1.2 },
  heroFormHint: { fontSize: 13, color: "#8A7B6D", marginTop: 6 },
  heroFormGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px 28px",
  },
  heroFormCta: {
    marginTop: 28, paddingTop: 24, borderTop: "1px solid #F0EBE0",
    display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
  },

  // Hero media
  heroMedia: { position: "relative" },
  heroFloat1: {
    position: "absolute", left: -32, bottom: 64,
    background: "#FAF6F0", border: "1px solid #E8E2D7",
    borderRadius: 16, padding: "20px 24px",
    display: "flex", alignItems: "center", gap: 16,
    boxShadow: "0 4px 16px rgba(27,22,18,0.10)",
  },
  heroFloatNum: {
    fontFamily: '"Fraunces", serif',
    fontSize: 56, fontWeight: 400, color: "#C8395E",
    lineHeight: 1, letterSpacing: "-0.04em",
  },
  heroFloatTxt: {
    fontSize: 13, lineHeight: 1.3, color: "#1B1612", fontWeight: 500,
  },
  heroFloat2: {
    position: "absolute", right: -24, top: 48,
    background: "#1B1612", color: "#FAF6F0",
    borderRadius: 16, padding: "18px 20px",
    maxWidth: 240,
    boxShadow: "0 8px 24px rgba(27,22,18,0.18)",
  },
  heroFloatStars: { display: "flex", gap: 2, color: "#E8B14A", marginBottom: 8 },
  heroFloatLabel: {
    fontFamily: '"Fraunces", serif', fontSize: 16, lineHeight: 1.3,
    fontStyle: "italic", marginBottom: 8,
  },
  heroFloatAuthor: { fontSize: 11, color: "#B59A7F", letterSpacing: "0.02em" },

  // ===== TRUST BAR ======================================
  trust: {
    background: "#1B1612",
    color: "#FAF6F0",
    padding: "48px 0",
  },
  trustInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
  },
  trustItem: { padding: "8px 32px 8px 32px", borderLeftColor: "rgba(250,246,240,0.10) !important" },
  trustKicker: {
    fontFamily: 'ui-monospace, "SF Mono", monospace',
    fontSize: 11, color: "#E8B14A", marginBottom: 12, fontWeight: 600,
    letterSpacing: "0.08em",
  },
  trustTitle: {
    fontFamily: '"Fraunces", serif',
    fontSize: 22, fontWeight: 500, lineHeight: 1.2,
    color: "#FAF6F0", marginBottom: 8,
    letterSpacing: "-0.015em",
  },
  trustDesc: {
    fontSize: 13, lineHeight: 1.5, color: "#B59A7F",
  },

  // ===== SHARED SECTION HEAD ============================
  sectionHead: { marginBottom: 64, maxWidth: 720 },
  h1: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400, fontSize: 56,
    lineHeight: 1.05, letterSpacing: "-0.025em",
    color: "#1B1612", margin: "20px 0 16px",
    textWrap: "balance",
  },
  lede: {
    fontSize: 18, lineHeight: 1.55, color: "#5A4F46",
    maxWidth: 600, margin: 0,
  },

  // ===== ATRAÇÕES =======================================
  atracoes: { padding: "120px 0" },
  atracoesInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
  },
  atracoesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
  },
  atrBody: { padding: "24px 24px 28px" },
  atrIcoRow: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    marginBottom: 16,
  },
  atrIcon: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 36, height: 36, borderRadius: 10,
    background: "#F2EBDD", color: "#C8395E",
  },
  atrIndex: {
    fontFamily: 'ui-monospace, "SF Mono", monospace',
    fontSize: 11, color: "#8A7B6D", letterSpacing: "0.06em", fontWeight: 600,
  },

  // ===== COMO FUNCIONA ==================================
  como: { padding: "120px 0", background: "#F2EBDD" },
  comoInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
  },
  comoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 56,
  },
  comoItem: {
    display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start",
    position: "relative",
  },
  comoNumWrap: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center" },
  comoNum: {
    width: 56, height: 56, borderRadius: "50%",
    background: "#1B1612", color: "#FAF6F0",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: '"Fraunces", serif', fontSize: 20, fontWeight: 500,
    flexShrink: 0,
  },
  comoLine: {
    position: "absolute", top: 56, left: "50%",
    width: 1, height: 80, background: "#C8395E", opacity: 0.3,
    transform: "translateX(-50%)",
  },
  comoTitle: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 500, fontSize: 26, lineHeight: 1.2,
    letterSpacing: "-0.02em", color: "#1B1612",
    margin: "8px 0 12px",
  },
  comoDesc: { fontSize: 15, lineHeight: 1.55, color: "#5A4F46", margin: 0 },

  // ===== CAPACIDADE + HIGIENIZAÇÃO =======================
  capWrap: { padding: "120px 0" },
  capInner: {
    maxWidth: MAXW, margin: "0 auto 120px",
    padding: `0 ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 96, alignItems: "center",
  },
  capLeft: {},
  capNumberRow: {
    display: "flex", alignItems: "flex-end", gap: 24,
    marginTop: 20, marginBottom: 32,
  },
  capNumber: {
    fontFamily: '"Fraunces", serif',
    fontSize: 192, fontWeight: 400,
    color: "#C8395E", lineHeight: 0.8,
    letterSpacing: "-0.06em",
  },
  capNumberSide: { paddingBottom: 20 },
  capNumberLabel: {
    fontFamily: '"Fraunces", serif',
    fontSize: 28, fontWeight: 400, fontStyle: "italic",
    color: "#1B1612", lineHeight: 1.2,
    letterSpacing: "-0.015em",
  },
  capDesc: {
    fontSize: 17, lineHeight: 1.55, color: "#5A4F46",
    maxWidth: 480, marginBottom: 40,
  },
  capFacts: { display: "flex", flexDirection: "column", gap: 0 },
  capFact: {
    display: "flex", justifyContent: "space-between",
    padding: "16px 0", borderTop: "1px solid #E8E2D7",
  },
  capFactK: { fontSize: 13, color: "#8A7B6D", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 },
  capFactV: { fontFamily: '"Fraunces", serif', fontSize: 18, color: "#1B1612", fontWeight: 500 },
  capRight: {},

  higInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 96, alignItems: "center",
  },
  higLeft: {},
  higRight: {},

  // ===== PACOTES ========================================
  pkgWrap: { padding: "120px 0", background: "#1B1612", color: "#FAF6F0" },
  pkgInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
  },
  pkgGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  },
  pkgCard: {
    borderRadius: 20,
    padding: 32,
    display: "flex", flexDirection: "column",
  },
  pkgHead: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginBottom: 16,
  },
  pkgName: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400, fontSize: 32, lineHeight: 1.1,
    letterSpacing: "-0.02em", margin: "0 0 24px",
  },
  pkgPrice: {
    display: "flex", flexDirection: "column", gap: 4,
    paddingBottom: 24, marginBottom: 24, borderBottom: "1px solid rgba(138,123,109,0.25)",
  },
  pkgPriceTag: {
    fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em",
    fontWeight: 600,
  },
  pkgPriceValor: {
    fontFamily: '"Fraunces", serif',
    fontSize: 40, fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1,
  },
  pkgList: {
    listStyle: "none", padding: 0, margin: "0 0 32px",
    display: "flex", flexDirection: "column", gap: 12,
    flex: 1,
  },
  pkgListItem: {
    display: "flex", alignItems: "start", gap: 10,
    fontSize: 14, lineHeight: 1.45,
    color: "inherit",
  },

  // 'pkgListItem check icon' needs to be raspberry on white card, honey on featured
  // (handled inline by parent color via currentColor)

  // ===== HEADER STYLES ABOVE / SHARED H ETC =============

  // Section heads use sectionHead/h1/lede above

  // ===== OLIMPIO ========================================
  olimpioWrap: { padding: "120px 0" },
  olimpioInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "0.85fr 1fr",
    gap: 96, alignItems: "center",
  },
  olimpioPhotoWrap: { position: "relative" },
  olimpioSticker: {
    position: "absolute", right: -20, bottom: -20,
    background: "#E8B14A", color: "#1B1612",
    padding: "20px 24px", borderRadius: 12,
    transform: "rotate(-2deg)",
    boxShadow: "0 8px 24px rgba(27,22,18,0.15)",
  },
  olimpioStickerL1: {
    fontFamily: '"Fraunces", serif', fontStyle: "italic",
    fontSize: 14, color: "#5A4F46",
  },
  olimpioStickerL2: {
    fontFamily: '"Fraunces", serif',
    fontSize: 22, fontWeight: 500, color: "#1B1612",
    letterSpacing: "-0.015em",
  },
  olimpioCopy: {},
  olimpioBody: {
    fontSize: 18, lineHeight: 1.6,
    color: "#5A4F46", margin: "0 0 16px",
    maxWidth: 540,
  },

  // ===== GALERIA ========================================
  galWrap: { padding: "120px 0", background: "#F2EBDD" },
  galInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
  },
  galHead: {
    display: "flex", justifyContent: "space-between", alignItems: "end",
    marginBottom: 56,
  },
  galGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridAutoRows: 220,
    gap: 16,
  },
  galCell: { position: "relative", overflow: "hidden" },
  galCap: {
    position: "absolute", left: 16, bottom: 16,
    color: "#FAF6F0", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.02em",
    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
    zIndex: 5,
  },

  // ===== FAQ ============================================
  faqWrap: { padding: "120px 0" },
  faqInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "0.7fr 1fr",
    gap: 96, alignItems: "start",
  },
  faqLeft: { position: "sticky", top: 120 },
  faqList: {},
  faqRow: {
    padding: "28px 0",
    borderTop: "1px solid #E8E2D7",
  },
  faqHeader: {
    display: "flex", justifyContent: "space-between", alignItems: "start", gap: 24,
  },
  faqQ: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 500, fontSize: 22, lineHeight: 1.25,
    letterSpacing: "-0.015em", color: "#1B1612",
    margin: 0, transition: "color 200ms ease-out",
  },
  faqIcon: {
    color: "#1B1612", flexShrink: 0,
    width: 32, height: 32,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    border: "1px solid #E8E2D7", borderRadius: "50%",
  },
  faqA: {
    fontSize: 15, lineHeight: 1.6, color: "#5A4F46",
    overflow: "hidden",
    transition: "max-height 320ms cubic-bezier(.2,.7,.2,1), opacity 320ms ease-out, margin-top 320ms ease-out",
    maxWidth: 600,
  },

  // ===== CTA FINAL ======================================
  ctaWrap: {
    padding: "120px 0",
    background: "#1B1612", color: "#FAF6F0",
  },
  ctaInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `0 ${PADX}px`,
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 96, alignItems: "center",
  },
  ctaCopy: {},
  ctaHeadline: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400, fontSize: 88, lineHeight: 0.98,
    letterSpacing: "-0.035em", color: "#FAF6F0",
    margin: "20px 0 24px",
  },
  ctaBody: {
    fontSize: 19, lineHeight: 1.55, color: "#B59A7F",
    maxWidth: 480, margin: "0 0 40px",
  },
  ctaActions: { display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" },

  ctaSide: {},
  ctaSideCard: {
    background: "rgba(250,246,240,0.05)",
    border: "1px solid rgba(250,246,240,0.12)",
    borderRadius: 20, padding: 28,
    backdropFilter: "blur(10px)",
  },
  ctaSideHead: {
    fontSize: 11, fontWeight: 700, letterSpacing: "0.10em",
    textTransform: "uppercase", color: "#E8B14A",
    paddingBottom: 16, borderBottom: "1px solid rgba(250,246,240,0.10)",
    marginBottom: 8,
  },
  ctaSideGrid: { display: "flex", flexDirection: "column" },
  ctaSideRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "14px 0",
    borderBottom: "1px solid rgba(250,246,240,0.06)",
  },
  ctaSideDate: { fontFamily: '"Fraunces", serif', fontSize: 18, color: "#FAF6F0" },
  ctaSideStatus: { fontSize: 12, fontWeight: 600, letterSpacing: "0.02em" },

  // ===== FOOTER =========================================
  footer: { background: "#FAF6F0", color: "#1B1612", borderTop: "1px solid #E8E2D7" },
  footerInner: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `80px ${PADX}px 40px`,
    display: "grid",
    gridTemplateColumns: "1.2fr 2fr",
    gap: 80,
  },
  footerBrand: {},
  footerLogo: {
    fontFamily: '"Fraunces", serif', fontSize: 26, fontWeight: 500,
    letterSpacing: "-0.02em", marginBottom: 12,
  },
  footerTag: { fontSize: 14, lineHeight: 1.55, color: "#5A4F46", maxWidth: 320 },
  footerCols: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32,
  },
  footerColHead: {
    fontSize: 11, fontWeight: 700, color: "#8A7B6D",
    letterSpacing: "0.10em", textTransform: "uppercase",
    marginBottom: 16,
  },
  footerLink: {
    display: "flex", alignItems: "center", gap: 8,
    padding: "6px 0", fontSize: 14, color: "#1B1612",
    textDecoration: "none",
  },
  footerBottom: {
    maxWidth: MAXW, margin: "0 auto",
    padding: `24px ${PADX}px`,
    borderTop: "1px solid #E8E2D7",
    display: "flex", justifyContent: "space-between",
    fontSize: 12, color: "#8A7B6D",
  },
};

Object.assign(window, { dStyles, DESKTOP_W });
