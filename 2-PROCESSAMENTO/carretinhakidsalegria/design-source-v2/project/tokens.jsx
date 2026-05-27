// ============================================================
// CARRETINHA — Design System Tokens (artboard 1)
// All decisions justified inline. The Verbo reads this to
// implement the same values in Tailwind v4 theme config.
// ============================================================

const PALETTE = [
  { name: "cream", hex: "#FAF6F0", role: "background", note: "Calor sem competir com pink saturado. Substitui o branco TV da v1." },
  { name: "ink", hex: "#1B1612", role: "tipografia + ui", note: "Quase-preto com leve marrom. Sério, mas não corporativo frio." },
  { name: "raspberry", hex: "#C8395E", role: "accent primário", note: "Pink refinado (Pantone Viva Magenta-ish). Sinaliza a marca sem virar cotton-candy." },
  { name: "honey", hex: "#E8B14A", role: "accent secundário", note: "Mostarda quente. Usado pontualmente: badge \"Mais pedido\", grifo, eyebrow." },
  { name: "taupe", hex: "#8A7B6D", role: "supporting", note: "Cinza-marrom quente. Body secundário, bordas, captions de foto." },
];

const TYPE_SCALE = [
  { token: "display",   px: 96, lh: 1.0,  weight: 400, family: "Fraunces", note: "Hero. Só 1x por seção." },
  { token: "h1",        px: 56, lh: 1.05, weight: 400, family: "Fraunces", note: "Cabeçalhos de seção." },
  { token: "h2",        px: 32, lh: 1.15, weight: 500, family: "Fraunces", note: "Sub-headings." },
  { token: "h3",        px: 22, lh: 1.25, weight: 500, family: "Inter",    note: "Card titles, FAQ questions." },
  { token: "body-lg",   px: 18, lh: 1.55, weight: 400, family: "Inter",    note: "Subhead do hero, body editorial." },
  { token: "body",      px: 16, lh: 1.6,  weight: 400, family: "Inter",    note: "Corpo padrão." },
  { token: "ui",        px: 14, lh: 1.4,  weight: 500, family: "Inter",    note: "Nav, botões, labels." },
  { token: "caption",   px: 12, lh: 1.4,  weight: 500, family: "Inter",    note: "Eyebrows, número de passo, footer." },
];

const SPACING = [4, 8, 16, 24, 32, 48, 64, 96, 128];

const RADII = [
  { token: "sm", px: 4,  use: "Inputs, pills pequenas" },
  { token: "md", px: 8,  use: "Botões, cards pequenos" },
  { token: "lg", px: 16, use: "Cards grandes, fotos" },
  { token: "xl", px: 24, use: "Hero image, modals" },
];

const SHADOWS = [
  { token: "soft",   css: "0 1px 2px rgba(27,22,18,.04), 0 4px 12px rgba(27,22,18,.04)", note: "Padrão de card." },
  { token: "lift",   css: "0 2px 4px rgba(27,22,18,.06), 0 12px 32px rgba(27,22,18,.08)", note: "Hover de card." },
  { token: "focus",  css: "0 0 0 3px rgba(200,57,94,.20)",  note: "Ring de foco em inputs/botões." },
];

const TRANSITIONS = [
  { token: "swift",   value: "150ms ease-out",            use: "Hover de botões, links" },
  { token: "smooth",  value: "320ms cubic-bezier(.2,.7,.2,1)", use: "Card lift, image scale" },
  { token: "reveal",  value: "640ms cubic-bezier(.2,.7,.2,1)", use: "Fade-up no scroll" },
];

const TokensArtboard = () => (
  <div style={tokenStyles.root}>
    {/* HEADER */}
    <div style={tokenStyles.headerRow}>
      <div>
        <div style={tokenStyles.eyebrow}>Design System · v2.0</div>
        <h1 style={tokenStyles.title}>Carretinha Kids Alegria</h1>
        <p style={tokenStyles.lede}>
          LP premium editorial para pai/mãe planejando festa de R$ 1.000–3.000.
          O brilho vem da foto real e da tipografia, não da paleta saturada.
        </p>
      </div>
      <div style={tokenStyles.metaCard}>
        <div style={tokenStyles.metaLine}><span>Stack alvo</span><b>Next 16 · Tailwind v4 · Framer Motion</b></div>
        <div style={tokenStyles.metaLine}><span>Breakpoint base</span><b>390px (mobile-first)</b></div>
        <div style={tokenStyles.metaLine}><span>Acessibilidade</span><b>WCAG AA · contraste ≥ 4.5</b></div>
        <div style={tokenStyles.metaLine}><span>Ícones</span><b>SVG inline 1.5px · sem emoji</b></div>
      </div>
    </div>

    <Divider/>

    {/* PALETTE */}
    <Section label="01" title="Paleta" caption="5 cores. Ponto. Mais que isso vira a v1 cacofônica.">
      <div style={tokenStyles.paletteGrid}>
        {PALETTE.map(c => (
          <div key={c.name} style={tokenStyles.colorCard}>
            <div style={{...tokenStyles.swatch, background: c.hex, color: c.name === "cream" || c.name === "honey" ? "#1B1612" : "#FAF6F0"}}>
              <div style={tokenStyles.swatchName}>{c.name}</div>
              <div style={tokenStyles.swatchHex}>{c.hex}</div>
            </div>
            <div style={tokenStyles.colorMeta}>
              <div style={tokenStyles.colorRole}>{c.role}</div>
              <div style={tokenStyles.colorNote}>{c.note}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Divider/>

    {/* TYPOGRAPHY */}
    <Section label="02" title="Tipografia" caption="Fraunces (display editorial) + Inter (UI honesto). Caveat banida; Fredoka banida.">
      <div style={tokenStyles.typeStack}>
        {TYPE_SCALE.map(t => (
          <div key={t.token} style={tokenStyles.typeRow}>
            <div style={tokenStyles.typeMeta}>
              <div style={tokenStyles.typeToken}>{t.token}</div>
              <div style={tokenStyles.typeSpec}>{t.family} · {t.weight} · {t.px}/{(t.px * t.lh).toFixed(0)}</div>
              <div style={tokenStyles.typeNote}>{t.note}</div>
            </div>
            <div style={{
              fontFamily: t.family === "Fraunces" ? '"Fraunces", serif' : '"Inter", sans-serif',
              fontWeight: t.weight,
              fontSize: t.px > 56 ? 56 : t.px, // cap display em 56 pra caber
              lineHeight: t.lh,
              color: "#1B1612",
              letterSpacing: t.family === "Fraunces" ? "-0.02em" : "-0.01em",
            }}>
              {t.token === "display" ? "A festa pronta" : t.token === "h1" ? "A gente leva tudo" : t.token === "h2" ? "Como funciona" : t.token === "h3" ? "Mega Festa · 5 horas" : "Carretinha rosa equipada chega na sua casa."}
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Divider/>

    {/* SPACING */}
    <Section label="03" title="Espaçamento" caption="Escala 4/8/16/24/32/48/64/96/128. Generosa por design — respiração é o que separa premium de Canva.">
      <div style={tokenStyles.spacingRow}>
        {SPACING.map(n => (
          <div key={n} style={tokenStyles.spacingItem}>
            <div style={{...tokenStyles.spacingBar, width: n, height: n}}/>
            <div style={tokenStyles.spacingLabel}>{n}<span>px</span></div>
          </div>
        ))}
      </div>
    </Section>

    <Divider/>

    {/* RADII + SHADOWS + TRANSITIONS */}
    <div style={tokenStyles.triple}>
      <div>
        <SectionMini label="04" title="Raios"/>
        <div style={tokenStyles.radiiRow}>
          {RADII.map(r => (
            <div key={r.token} style={tokenStyles.radiusItem}>
              <div style={{...tokenStyles.radiusBox, borderRadius: r.px}}/>
              <div style={tokenStyles.radiusMeta}>
                <b>{r.token}</b> · {r.px}px
                <div style={tokenStyles.colorNote}>{r.use}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <SectionMini label="05" title="Sombras"/>
        <div style={tokenStyles.shadowsCol}>
          {SHADOWS.map(s => (
            <div key={s.token} style={{...tokenStyles.shadowItem, boxShadow: s.css}}>
              <b>{s.token}</b>
              <div style={tokenStyles.colorNote}>{s.note}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <SectionMini label="06" title="Transições"/>
        <div style={tokenStyles.transCol}>
          {TRANSITIONS.map(t => (
            <div key={t.token} style={tokenStyles.transItem}>
              <b>{t.token}</b>
              <code style={tokenStyles.code}>{t.value}</code>
              <div style={tokenStyles.colorNote}>{t.use}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Divider/>

    {/* COMPONENTS */}
    <Section label="07" title="Componentes base" caption="Os átomos que constroem a LP. Os mesmos em desktop e mobile.">
      <div style={tokenStyles.compsGrid}>
        <CompCell title="Botão primário" note="Raspberry sólido · uso reservado pra CTA principal">
          <button style={{...uiStyles.btnPrimary}}>Quero meu orçamento <Icons.arrow size={16}/></button>
        </CompCell>
        <CompCell title="Botão secundário" note="Ink outline · ações de apoio">
          <button style={{...uiStyles.btnSecondary}}>Falar no WhatsApp <Icons.whatsapp size={16}/></button>
        </CompCell>
        <CompCell title="Botão fantasma" note="Texto + sublinhado animado">
          <button style={{...uiStyles.btnGhost}}>Ver todas as atrações <Icons.arrowDiag size={14}/></button>
        </CompCell>
        <CompCell title="Input" note="Underline, não box · vibe editorial">
          <div style={{...uiStyles.fieldGroup}}>
            <label style={uiStyles.fieldLabel}>Seu nome</label>
            <input style={uiStyles.fieldInput} placeholder="Como você se chama?" defaultValue="Mariana Costa"/>
          </div>
        </CompCell>
        <CompCell title="Badge / Pill" note="Honey saturado-baixo · um por tela">
          <div style={{display: "flex", gap: 8}}>
            <span style={uiStyles.pillHoney}>Mais pedido</span>
            <span style={uiStyles.pillInk}>Festa em casa · Palmas-TO</span>
          </div>
        </CompCell>
        <CompCell title="Card de atração" note="Foto + nome + descrição. Hover lift sutil, 2px Y.">
          <div style={{...compStyles.attrCard, width: 240}}>
            <PhotoPH label="FOTO_PULAPULA.jpg" h={140}/>
            <div style={{padding: 16}}>
              <div style={compStyles.attrCardTitle}>Pula-pula</div>
              <div style={compStyles.attrCardDesc}>Estrutura ancorada. Aguenta as crianças mais agitadas.</div>
            </div>
          </div>
        </CompCell>
        <CompCell title="Eyebrow" note="Caption uppercase com tracejado · uso restrito">
          <div style={uiStyles.eyebrow}>
            <span style={uiStyles.eyebrowDot}/> Festa em casa · Palmas-TO
          </div>
        </CompCell>
        <CompCell title="Headline" note="Fraunces 56-96 · tracking apertado">
          <h1 style={{fontFamily: '"Fraunces", serif', fontWeight: 400, fontSize: 44, lineHeight: 1, letterSpacing: "-0.025em", color: "#1B1612", margin: 0}}>
            A festa pronta<br/>vai até você.
          </h1>
        </CompCell>
      </div>
    </Section>

    <Divider/>

    {/* MOTION */}
    <Section label="08" title="Padrões de microanimação" caption="Tudo discreto. Zero confete, zero wobble.">
      <div style={tokenStyles.motionGrid}>
        {[
          { name: "fade-up", desc: "Y +12px → 0, opacity 0 → 1. 640ms ease-out. Triggered por IntersectionObserver, threshold 0.15." , where: "Headlines, blocos de seção"},
          { name: "parallax leve", desc: "translateY(scrollY * -0.05). Só na foto do hero e da capacidade." , where: "Hero, Capacidade"},
          { name: "hover lift", desc: "translateY(-2px) + shadow soft → shadow lift. 320ms.", where: "Cards de atração, pacotes" },
          { name: "image zoom in", desc: "scale(1) → scale(1.04) em 6s linear. Apenas no hero image como respiração.", where: "Hero" },
          { name: "FAQ expand", desc: "height auto + opacity. 320ms ease-out. Sem rebote.", where: "FAQ" },
          { name: "underline reveal", desc: "scaleX(0) → scaleX(1) em links de nav e botão ghost. 200ms.", where: "Nav, botões ghost" },
        ].map(m => (
          <div key={m.name} style={tokenStyles.motionCard}>
            <div style={tokenStyles.motionName}>{m.name}</div>
            <div style={tokenStyles.motionDesc}>{m.desc}</div>
            <div style={tokenStyles.motionWhere}>Onde: {m.where}</div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

// ============= helpers =================
const Section = ({label, title, caption, children}) => (
  <section style={tokenStyles.section}>
    <div style={tokenStyles.sectionHead}>
      <div style={tokenStyles.sectionLabel}>{label}</div>
      <div>
        <h2 style={tokenStyles.sectionTitle}>{title}</h2>
        {caption && <p style={tokenStyles.sectionCaption}>{caption}</p>}
      </div>
    </div>
    <div>{children}</div>
  </section>
);

const SectionMini = ({label, title}) => (
  <div style={{display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16}}>
    <div style={tokenStyles.sectionLabel}>{label}</div>
    <h3 style={{...tokenStyles.sectionTitle, fontSize: 22}}>{title}</h3>
  </div>
);

const Divider = () => <div style={{height: 1, background: "#E8E2D7", margin: "64px 0"}}/>;

const CompCell = ({title, note, children}) => (
  <div style={tokenStyles.compCell}>
    <div style={tokenStyles.compHead}>
      <b>{title}</b>
      <div style={tokenStyles.colorNote}>{note}</div>
    </div>
    <div style={tokenStyles.compStage}>{children}</div>
  </div>
);

// ============= styles ==================
const tokenStyles = {
  root: { background: "#FAF6F0", padding: "80px 96px", fontFamily: '"Inter", sans-serif', color: "#1B1612" },
  headerRow: { display: "grid", gridTemplateColumns: "1fr 360px", gap: 80, alignItems: "end", marginBottom: 48 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A7B6D", marginBottom: 16 },
  title: { fontFamily: '"Fraunces", serif', fontWeight: 400, fontSize: 64, lineHeight: 1, letterSpacing: "-0.025em", margin: 0 },
  lede: { fontSize: 18, lineHeight: 1.55, color: "#5A4F46", marginTop: 16, maxWidth: 620 },
  metaCard: { background: "#fff", border: "1px solid #E8E2D7", borderRadius: 16, padding: 24 },
  metaLine: { display: "flex", justifyContent: "space-between", fontSize: 13, padding: "8px 0", borderBottom: "1px solid #F0EBE0", gap: 16 },

  section: { marginBottom: 0 },
  sectionHead: { display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, marginBottom: 40, alignItems: "baseline" },
  sectionLabel: { fontSize: 12, fontWeight: 600, color: "#C8395E", letterSpacing: "0.12em" },
  sectionTitle: { fontFamily: '"Fraunces", serif', fontWeight: 400, fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 },
  sectionCaption: { fontSize: 15, color: "#5A4F46", marginTop: 12, maxWidth: 720 },

  paletteGrid: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 },
  colorCard: { display: "flex", flexDirection: "column" },
  swatch: { aspectRatio: "1 / 1.1", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column", justifyContent: "flex-end" },
  swatchName: { fontSize: 13, fontWeight: 600, opacity: 0.7 },
  swatchHex: { fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 14, fontWeight: 500 },
  colorMeta: { padding: "16px 4px 0" },
  colorRole: { fontSize: 12, fontWeight: 600, color: "#1B1612", marginBottom: 6 },
  colorNote: { fontSize: 12, lineHeight: 1.5, color: "#8A7B6D" },

  typeStack: { display: "flex", flexDirection: "column", gap: 0 },
  typeRow: { display: "grid", gridTemplateColumns: "260px 1fr", gap: 32, padding: "20px 0", borderBottom: "1px solid #E8E2D7", alignItems: "baseline" },
  typeMeta: {},
  typeToken: { fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 13, fontWeight: 600, color: "#C8395E", marginBottom: 4 },
  typeSpec: { fontSize: 12, color: "#8A7B6D" },
  typeNote: { fontSize: 12, color: "#5A4F46", marginTop: 6, maxWidth: 240 },

  spacingRow: { display: "flex", gap: 32, alignItems: "flex-end", flexWrap: "wrap" },
  spacingItem: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 },
  spacingBar: { background: "#C8395E", opacity: 0.85, borderRadius: 2 },
  spacingLabel: { fontFamily: 'ui-monospace, monospace', fontSize: 12, color: "#1B1612", fontWeight: 600 },

  triple: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 },
  radiiRow: { display: "flex", flexDirection: "column", gap: 16 },
  radiusItem: { display: "flex", alignItems: "center", gap: 16 },
  radiusBox: { width: 56, height: 56, background: "#1B1612", flexShrink: 0 },
  radiusMeta: { fontSize: 13 },

  shadowsCol: { display: "flex", flexDirection: "column", gap: 20 },
  shadowItem: { background: "#fff", border: "1px solid #F0EBE0", borderRadius: 12, padding: 16, fontSize: 13 },

  transCol: { display: "flex", flexDirection: "column", gap: 16 },
  transItem: { fontSize: 13 },
  code: { display: "inline-block", marginLeft: 8, fontFamily: 'ui-monospace, monospace', fontSize: 12, background: "#F0EBE0", padding: "2px 8px", borderRadius: 4 },

  compsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 },
  compCell: { background: "#fff", border: "1px solid #E8E2D7", borderRadius: 16, padding: 28, minHeight: 160 },
  compHead: { marginBottom: 20 },
  compStage: { paddingTop: 8 },

  motionGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  motionCard: { background: "#fff", border: "1px solid #E8E2D7", borderRadius: 12, padding: 20 },
  motionName: { fontFamily: 'ui-monospace, monospace', fontSize: 13, fontWeight: 600, color: "#C8395E", marginBottom: 8 },
  motionDesc: { fontSize: 13, lineHeight: 1.5, color: "#1B1612", marginBottom: 12 },
  motionWhere: { fontSize: 12, color: "#8A7B6D" },
};

Object.assign(window, { TokensArtboard });
