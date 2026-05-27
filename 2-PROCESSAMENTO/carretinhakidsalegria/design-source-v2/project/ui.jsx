// ============================================================
// CARRETINHA — Shared UI atoms + styles
// Used by tokens.jsx and the LP. One source of truth for the
// button, input, pill, photo-placeholder, eyebrow look.
// ============================================================

// Picsum is used as a seeded photo placeholder. Each photo has
// a visible label overlay declaring the FOTO_NAME.jpg slot it
// represents — so swapping with real Olímpio photos later is
// unambiguous for the Verbo.
const PhotoPH = ({ label, h, ratio, seed, dark = true, blend = "default", className }) => {
  const seedKey = (seed || label || "carretinha").replace(/[^a-z0-9]/gi, "");
  const style = ratio
    ? { aspectRatio: ratio, width: "100%" }
    : { height: h || 240, width: "100%" };
  return (
    <div className={className} style={{ ...style, ...photoStyles.root }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(https://picsum.photos/seed/${seedKey}/1200/900)`,
        backgroundSize: "cover", backgroundPosition: "center",
        filter: blend === "muted" ? "saturate(0.85) contrast(0.95)" : "saturate(1.0)",
      }}/>
      {/* warm overlay to unify the stock photos visually */}
      <div style={{
        position: "absolute", inset: 0,
        background: dark
          ? "linear-gradient(180deg, rgba(27,22,18,0) 40%, rgba(27,22,18,0.55) 100%)"
          : "linear-gradient(180deg, rgba(250,246,240,0) 50%, rgba(250,246,240,0.25) 100%)",
        mixBlendMode: "multiply",
      }}/>
      {/* The label sticker — only visible during design; the
          Verbo removes when real photos arrive */}
      {label && (
        <div style={photoStyles.label}>
          <span style={photoStyles.labelDot}/>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
};

const photoStyles = {
  root: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 16,
    background: "#1B1612",
  },
  label: {
    position: "absolute",
    top: 12, left: 12,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 12px 6px 10px",
    background: "rgba(27,22,18,0.78)",
    color: "#FAF6F0",
    fontSize: 10,
    fontFamily: 'ui-monospace, "SF Mono", monospace',
    fontWeight: 600,
    letterSpacing: "0.04em",
    borderRadius: 100,
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(250,246,240,0.18)",
    zIndex: 2,
  },
  labelDot: {
    width: 6, height: 6, borderRadius: "50%",
    background: "#E8B14A",
    boxShadow: "0 0 0 3px rgba(232,177,74,0.25)",
  },
};

// =================== UI STYLES ============================

const uiStyles = {
  // BUTTONS ------------------------------------------------
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "14px 22px",
    background: "#C8395E", color: "#FAF6F0",
    border: "none", borderRadius: 999,
    fontFamily: '"Inter", sans-serif',
    fontSize: 14, fontWeight: 600,
    letterSpacing: "-0.005em",
    cursor: "pointer",
    transition: "transform 150ms ease-out, box-shadow 320ms cubic-bezier(.2,.7,.2,1), background 150ms ease-out",
    boxShadow: "0 1px 2px rgba(200,57,94,0.20), 0 8px 24px rgba(200,57,94,0.18)",
  },
  btnSecondary: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "13px 21px",
    background: "transparent", color: "#1B1612",
    border: "1.5px solid #1B1612", borderRadius: 999,
    fontFamily: '"Inter", sans-serif',
    fontSize: 14, fontWeight: 600,
    cursor: "pointer",
    transition: "background 150ms ease-out, color 150ms ease-out",
  },
  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "8px 0",
    background: "transparent", color: "#1B1612",
    border: "none",
    fontFamily: '"Inter", sans-serif',
    fontSize: 14, fontWeight: 600,
    cursor: "pointer",
    borderBottom: "1.5px solid #1B1612",
    transition: "color 150ms ease-out",
  },
  // INPUT (underline) --------------------------------------
  fieldGroup: { display: "flex", flexDirection: "column", gap: 6, width: "100%" },
  fieldLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "#8A7B6D",
  },
  fieldInput: {
    padding: "10px 0",
    background: "transparent",
    border: "none",
    borderBottom: "1.5px solid #1B1612",
    fontFamily: '"Inter", sans-serif',
    fontSize: 15, color: "#1B1612",
    fontWeight: 500,
    outline: "none",
  },
  // PILLS / BADGES -----------------------------------------
  pillHoney: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "4px 12px",
    background: "#E8B14A", color: "#1B1612",
    fontSize: 11, fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
    borderRadius: 999,
  },
  pillInk: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "4px 12px",
    background: "transparent", color: "#1B1612",
    fontSize: 11, fontWeight: 600,
    letterSpacing: "0.08em", textTransform: "uppercase",
    borderRadius: 999,
    border: "1px solid #D5CDC0",
  },
  // EYEBROW ------------------------------------------------
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 10,
    fontSize: 11, fontWeight: 600,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "#8A7B6D",
  },
  eyebrowDot: {
    width: 6, height: 6, borderRadius: "50%",
    background: "#C8395E",
    boxShadow: "0 0 0 3px rgba(200,57,94,0.18)",
  },
};

// =================== COMP STYLES ===========================
const compStyles = {
  attrCard: {
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid #E8E2D7",
    transition: "transform 320ms cubic-bezier(.2,.7,.2,1), box-shadow 320ms cubic-bezier(.2,.7,.2,1)",
    cursor: "pointer",
  },
  attrCardTitle: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 500, fontSize: 22, lineHeight: 1.15,
    letterSpacing: "-0.015em",
    color: "#1B1612", margin: "0 0 6px",
  },
  attrCardDesc: {
    fontSize: 14, lineHeight: 1.5,
    color: "#5A4F46", margin: 0,
  },
};

// Global hover/focus styles via injected stylesheet (cleaner
// than per-element handlers for hover)
function injectGlobalStyles() {
  if (document.getElementById("ck-global-styles")) return;
  const s = document.createElement("style");
  s.id = "ck-global-styles";
  s.textContent = `
    .ck-btn-primary:hover { transform: translateY(-1px); background: #B22E51 !important; box-shadow: 0 2px 4px rgba(200,57,94,0.24), 0 14px 36px rgba(200,57,94,0.28) !important; }
    .ck-btn-secondary:hover { background: #1B1612 !important; color: #FAF6F0 !important; }
    .ck-btn-ghost { position: relative; }
    .ck-btn-ghost:hover { opacity: 0.7; }
    .ck-input:focus { border-bottom-color: #C8395E !important; }
    .ck-attr-card:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(27,22,18,.06), 0 14px 32px rgba(27,22,18,.10); }
    .ck-attr-card:hover .ck-attr-photo > div:first-child { transform: scale(1.04); }
    .ck-attr-photo > div:first-child { transition: transform 600ms cubic-bezier(.2,.7,.2,1); }
    .ck-nav a { position: relative; }
    .ck-nav a::after { content: ""; position: absolute; left: 0; right: 0; bottom: -4px; height: 1px; background: currentColor; transform: scaleX(0); transform-origin: left; transition: transform 200ms ease-out; }
    .ck-nav a:hover::after { transform: scaleX(1); }
    .ck-pkg-card { transition: transform 320ms cubic-bezier(.2,.7,.2,1), box-shadow 320ms cubic-bezier(.2,.7,.2,1); }
    .ck-pkg-card:hover { transform: translateY(-3px); box-shadow: 0 2px 4px rgba(27,22,18,.06), 0 18px 40px rgba(27,22,18,.10); }
    .ck-faq-row { cursor: pointer; }
    .ck-faq-row:hover .ck-faq-q { color: #C8395E; }
    .ck-fade-up { opacity: 0; transform: translateY(12px); transition: opacity 640ms cubic-bezier(.2,.7,.2,1), transform 640ms cubic-bezier(.2,.7,.2,1); }
    .ck-fade-up.in { opacity: 1; transform: translateY(0); }
    .ck-hero-zoom { animation: ckHeroZoom 8s ease-out forwards; }
    @keyframes ckHeroZoom { from { transform: scale(1); } to { transform: scale(1.05); } }
    .ck-design-note { position: absolute; pointer-events: none; font-family: ui-monospace, "SF Mono", monospace; font-size: 10px; color: #C8395E; letter-spacing: 0.03em; display: flex; align-items: flex-start; gap: 6px; line-height: 1.4; max-width: 220px; }
    .ck-design-note::before { content: ""; width: 14px; height: 1px; background: #C8395E; margin-top: 7px; flex-shrink: 0; }
  `;
  document.head.appendChild(s);
}

Object.assign(window, { PhotoPH, photoStyles, uiStyles, compStyles, injectGlobalStyles });
