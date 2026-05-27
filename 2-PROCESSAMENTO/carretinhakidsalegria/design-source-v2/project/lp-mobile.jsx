// ============================================================
// CARRETINHA — Landing Page · MOBILE (390px, mobile-first)
// Mesma copy, mesmas seções. Layout reorganizado pra tela
// pequena: stack vertical, foto dominante, form em destaque.
// ============================================================

// ---------- MOBILE HEADER ----------
const MHeader = () => (
  <header style={mStyles.header}>
    <a href="#" style={mStyles.logo}>
      <span style={mStyles.logoMark}>
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <rect x="2" y="10" width="20" height="14" rx="2" fill="#C8395E"/>
          <path d="M22 14h5l3 4v6h-8z" fill="#C8395E"/>
          <circle cx="9" cy="25" r="3" fill="#1B1612"/>
          <circle cx="9" cy="25" r="1.2" fill="#FAF6F0"/>
          <circle cx="25" cy="25" r="3" fill="#1B1612"/>
          <circle cx="25" cy="25" r="1.2" fill="#FAF6F0"/>
        </svg>
      </span>
      <span style={mStyles.logoTitle}>Carretinha Kids</span>
    </a>
    <button style={mStyles.menuBtn} aria-label="Menu"><Icons.menu size={20}/></button>
  </header>
);

// ---------- MOBILE HERO ----------
const MHero = () => (
  <section style={mStyles.hero}>
    <div style={uiStyles.eyebrow}>
      <span style={uiStyles.eyebrowDot}/> {HERO.eyebrow}
    </div>
    <h1 style={mStyles.heroHeadline}>
      A festa pronta<br/>vai até você.
    </h1>
    <p style={mStyles.heroSub}>{HERO.sub}</p>

    {/* Photo dominante */}
    <div style={mStyles.heroPhoto}>
      <PhotoPH label={HERO.photoLabel} seed="hero-carretinha-rosa" ratio="4 / 5"/>
      <div style={mStyles.heroPhotoBadge}>
        <div style={mStyles.heroPhotoBadgeNum}>15</div>
        <div style={mStyles.heroPhotoBadgeTxt}>crianças<br/>brincando juntas</div>
      </div>
    </div>

    {/* Form */}
    <form style={mStyles.form} onSubmit={(e) => { e.preventDefault(); window.open(BRAND.whatsapp, "_blank"); }}>
      <div style={mStyles.formHead}>
        <div style={mStyles.formLabel}>{HERO.formLabel}</div>
        <div style={mStyles.formHint}>{HERO.formHint}</div>
      </div>
      <div style={mStyles.formStack}>
        {HERO.fields.map(f => (
          <div key={f.name} style={uiStyles.fieldGroup}>
            <label style={uiStyles.fieldLabel}>{f.label}</label>
            <input className="ck-input" style={uiStyles.fieldInput}
              placeholder={f.placeholder} type={f.type || "text"} />
          </div>
        ))}
      </div>
      <button type="submit" className="ck-btn-primary"
        style={{...uiStyles.btnPrimary, width: "100%", justifyContent: "center", marginTop: 24, padding: "16px 22px"}}>
        {HERO.cta} <Icons.arrow size={16}/>
      </button>
      <a href={BRAND.whatsapp} className="ck-btn-ghost"
        style={{...uiStyles.btnGhost, marginTop: 16, justifyContent: "center", width: "100%", borderBottom: "none", padding: 0, color: "#5A4F46"}}>
        ou fala direto no WhatsApp <Icons.arrowDiag size={14}/>
      </a>
    </form>
  </section>
);

// ---------- MOBILE TRUST ----------
const MTrust = () => (
  <section style={mStyles.trust}>
    {TRUST.map(t => (
      <div key={t.kicker} style={mStyles.trustItem}>
        <div style={mStyles.trustKicker}>{t.kicker}</div>
        <div style={mStyles.trustTitle}>{t.title}</div>
        <div style={mStyles.trustDesc}>{t.desc}</div>
      </div>
    ))}
  </section>
);

// ---------- MOBILE ATRAÇÕES (horizontal scroll) ----------
const MAtracoes = () => (
  <section id="atracoes" style={mStyles.atracoesWrap}>
    <div style={mStyles.atracoesHead}>
      <div style={uiStyles.eyebrow}>
        <span style={uiStyles.eyebrowDot}/> 06 atrações
      </div>
      <h2 style={mStyles.h1}>Tudo que cabe<br/>na carretinha.</h2>
      <p style={mStyles.lede}>
        Estruturas infláveis, escorregadores, piscina de bolinhas, LED e som — todos
        higienizados antes da entrega.
      </p>
    </div>

    <div style={mStyles.atrCarousel}>
      {ATRACOES.map((a, i) => {
        const Ico = ATRACAO_ICONS[i];
        return (
          <article key={a.name} style={mStyles.atrCard}>
            <div style={{position: "relative"}}>
              <PhotoPH label={a.photo} seed={`m-atr-${a.name}`} h={180}/>
            </div>
            <div style={mStyles.atrBody}>
              <div style={mStyles.atrIcoRow}>
                <span style={mStyles.atrIcon}><Ico size={16}/></span>
                <span style={mStyles.atrIndex}>0{i + 1}</span>
              </div>
              <h3 style={mStyles.atrTitle}>{a.name}</h3>
              <p style={mStyles.atrDesc}>{a.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
    <div style={mStyles.carouselHint}>
      <Icons.arrow size={14}/> <span>arrasta pro lado</span>
    </div>
  </section>
);

// ---------- MOBILE COMO FUNCIONA ----------
const MComo = () => (
  <section id="como-funciona" style={mStyles.comoWrap}>
    <div style={uiStyles.eyebrow}>
      <span style={uiStyles.eyebrowDot}/> Como funciona
    </div>
    <h2 style={mStyles.h1}>Três passos.<br/>Sem dor de cabeça.</h2>

    <div style={mStyles.comoStack}>
      {PASSOS.map((p, i) => (
        <div key={p.n} style={mStyles.comoItem}>
          <div style={mStyles.comoNumWrap}>
            <div style={mStyles.comoNum}>{p.n}</div>
            {i < PASSOS.length - 1 && <div style={mStyles.comoLine}/>}
          </div>
          <div style={mStyles.comoBody}>
            <h3 style={mStyles.comoTitle}>{p.title}</h3>
            <p style={mStyles.comoDesc}>{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ---------- MOBILE CAPACIDADE ----------
const MCapacidade = () => (
  <section style={mStyles.capWrap}>
    <div style={uiStyles.eyebrow}>
      <span style={uiStyles.eyebrowDot}/> Capacidade
    </div>
    <div style={mStyles.capNumberRow}>
      <span style={mStyles.capNumber}>15</span>
      <div style={mStyles.capNumberSide}>
        <div style={mStyles.capNumberLabel}>crianças brincando</div>
        <div style={mStyles.capNumberLabel}>ao mesmo tempo</div>
      </div>
    </div>
    <PhotoPH label="FOTO_15_CRIANCAS_BRINCANDO.jpg" seed="m-capacidade" ratio="4 / 3"/>
    <p style={mStyles.capDesc}>
      A carretinha foi dimensionada pra atender festas médias de aniversário. Acima de 15
      simultâneas a gente conversa sobre rodízio ou estrutura extra — sem improvisar.
    </p>
    <div style={mStyles.capFacts}>
      {[
        { k: "Faixa etária", v: "3 a 10 anos" },
        { k: "Montagem", v: "45 minutos" },
        { k: "Espaço necessário", v: "5m × 4m" },
      ].map(f => (
        <div key={f.k} style={mStyles.capFact}>
          <span style={mStyles.capFactK}>{f.k}</span>
          <span style={mStyles.capFactV}>{f.v}</span>
        </div>
      ))}
    </div>
  </section>
);

// ---------- MOBILE HIGIENIZAÇÃO ----------
const MHigienizacao = () => (
  <section style={mStyles.higWrap}>
    <PhotoPH label="FOTO_HIGIENIZACAO_PROCESSO.jpg" seed="m-higienizacao" ratio="5 / 4"/>
    <div style={{...uiStyles.eyebrow, marginTop: 32}}>
      <span style={uiStyles.eyebrowDot}/> Higienização
    </div>
    <h2 style={mStyles.h1}>Limpa entre uma<br/>festa e a próxima.</h2>
    <p style={mStyles.lede}>
      Cada brinquedo é higienizado e testado antes da próxima festa. Se quiser, a gente manda
      o vídeo da limpeza antes de sair de casa.
    </p>
    <a href={BRAND.whatsapp} className="ck-btn-ghost" style={{...uiStyles.btnGhost, marginTop: 16}}>
      Pedir o vídeo da higienização <Icons.arrowDiag size={14}/>
    </a>
  </section>
);

// ---------- MOBILE PACOTES ----------
const MPacotes = () => (
  <section id="pacotes" style={mStyles.pkgWrap}>
    <div style={{ ...uiStyles.eyebrow, color: "#E8B14A" }}>
      <span style={{...uiStyles.eyebrowDot, background: "#E8B14A", boxShadow: "0 0 0 3px rgba(232,177,74,0.20)"}}/>
      Pacotes
    </div>
    <h2 style={{...mStyles.h1, color: "#FAF6F0"}}>Três jeitos<br/>de fazer a festa.</h2>
    <p style={{...mStyles.lede, color: "#B59A7F"}}>
      Tudo inclui montagem, desmontagem e higienização. Sem taxa escondida.
    </p>

    <div style={mStyles.pkgStack}>
      {PACOTES.map((p, i) => {
        const featured = !!p.badge;
        return (
          <article key={p.name} style={{
            ...mStyles.pkgCard,
            background: featured ? "#C8395E" : "rgba(250,246,240,0.04)",
            border: featured ? "1px solid #C8395E" : "1px solid rgba(250,246,240,0.12)",
          }}>
            <div style={mStyles.pkgHead}>
              <div style={{ ...uiStyles.eyebrow, color: featured ? "#FAF6F0" : "#E8B14A" }}>
                <span style={{
                  ...uiStyles.eyebrowDot,
                  background: featured ? "#FAF6F0" : "#E8B14A",
                  boxShadow: featured ? "0 0 0 3px rgba(250,246,240,0.20)" : "0 0 0 3px rgba(232,177,74,0.20)",
                }}/>
                {p.duracao}
              </div>
              {p.badge && <span style={{...uiStyles.pillHoney, background: "#FAF6F0", color: "#C8395E"}}>{p.badge}</span>}
            </div>
            <h3 style={mStyles.pkgName}>{p.name}</h3>
            <div style={{ ...mStyles.pkgPriceTag, color: featured ? "rgba(250,246,240,0.7)" : "#8A7B6D" }}>{p.price}</div>
            <div style={mStyles.pkgPriceValor}>{p.valor}</div>
            <ul style={mStyles.pkgList}>
              {p.inclui.slice(0, 4).map(item => (
                <li key={item} style={mStyles.pkgListItem}>
                  <Icons.check size={14}/> {item}
                </li>
              ))}
              {p.inclui.length > 4 && (
                <li style={{...mStyles.pkgListItem, color: featured ? "rgba(250,246,240,0.7)" : "#8A7B6D"}}>
                  + {p.inclui.length - 4} itens
                </li>
              )}
            </ul>
            <a href={BRAND.whatsapp} style={{
              ...uiStyles.btnPrimary,
              width: "100%", justifyContent: "center",
              background: featured ? "#FAF6F0" : "transparent",
              color: featured ? "#1B1612" : "#FAF6F0",
              border: featured ? "1.5px solid #FAF6F0" : "1.5px solid #FAF6F0",
              boxShadow: "none",
              padding: "12px 18px",
              fontSize: 13,
            }}>
              {p.cta} <Icons.arrow size={14}/>
            </a>
          </article>
        );
      })}
    </div>
  </section>
);

// ---------- MOBILE OLÍMPIO ----------
const MOlimpio = () => (
  <section style={mStyles.olimpioWrap}>
    <div style={mStyles.olimpioPhotoWrap}>
      <PhotoPH label="FOTO_OLIMPIO_RETRATO_REAL.jpg" seed="m-olimpio" ratio="4 / 5"/>
      <div style={mStyles.olimpioSticker}>
        <div style={mStyles.olimpioStickerL1}>Sou eu que</div>
        <div style={mStyles.olimpioStickerL2}>recebo seu pedido</div>
      </div>
    </div>
    <div style={{...uiStyles.eyebrow, marginTop: 40}}>
      <span style={uiStyles.eyebrowDot}/> Quem te atende
    </div>
    <h2 style={mStyles.h1}>Olímpio.<br/>O dono, o motorista,<br/>o monta-tudo.</h2>
    <p style={mStyles.olimpioBody}>
      Quem te responde no WhatsApp é o Olímpio. Quem chega na sua casa é o Olímpio. Quem testa
      o pula-pula antes da primeira criança subir é o Olímpio.
    </p>
    <p style={mStyles.olimpioBody}>
      Cinco anos atendendo festa em Palmas. Mais de 300 sábados sem ninguém ralar o joelho.
    </p>
    <a href={BRAND.whatsapp} className="ck-btn-primary"
      style={{...uiStyles.btnPrimary, width: "100%", justifyContent: "center", marginTop: 8}}>
      <Icons.whatsapp size={16}/> Falar com o Olímpio
    </a>
  </section>
);

// ---------- MOBILE GALERIA ----------
const MGaleria = () => (
  <section style={mStyles.galWrap}>
    <div style={uiStyles.eyebrow}>
      <span style={uiStyles.eyebrowDot}/> Festas de verdade
    </div>
    <h2 style={mStyles.h1}>Como ficou<br/>nas últimas festas.</h2>
    <div style={mStyles.galGrid}>
      {GALERIA.slice(0, 4).map((g, i) => (
        <div key={i} style={mStyles.galCell}>
          <PhotoPH label={g.photo} seed={`m-gal-${i}`} ratio={i % 3 === 0 ? "3 / 4" : "1 / 1"}/>
          <div style={mStyles.galCap}>{g.caption}</div>
        </div>
      ))}
    </div>
    <a href="#" className="ck-btn-ghost" style={{...uiStyles.btnGhost, marginTop: 24}}>
      Ver galeria no Instagram <Icons.arrowDiag size={14}/>
    </a>
  </section>
);

// ---------- MOBILE FAQ ----------
const MFaq = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={mStyles.faqWrap}>
      <div style={uiStyles.eyebrow}>
        <span style={uiStyles.eyebrowDot}/> FAQ
      </div>
      <h2 style={mStyles.h1}>Dúvidas que aparecem<br/>antes de fechar.</h2>
      <div style={mStyles.faqList}>
        {FAQ.map((f, i) => {
          const isOpen = i === open;
          return (
            <div key={i} className="ck-faq-row" style={mStyles.faqRow}
                 onClick={() => setOpen(isOpen ? -1 : i)}>
              <div style={mStyles.faqHeader}>
                <h3 className="ck-faq-q" style={mStyles.faqQ}>{f.q}</h3>
                <span style={mStyles.faqIcon}>
                  {isOpen ? <Icons.minus size={16}/> : <Icons.plus size={16}/>}
                </span>
              </div>
              <div style={{
                ...mStyles.faqA,
                maxHeight: isOpen ? 500 : 0,
                opacity: isOpen ? 1 : 0,
                marginTop: isOpen ? 12 : 0,
              }}>
                {f.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ---------- MOBILE CTA FINAL ----------
const MCtaFinal = () => (
  <section style={mStyles.ctaWrap}>
    <div style={{ ...uiStyles.eyebrow, color: "#E8B14A" }}>
      <span style={{...uiStyles.eyebrowDot, background: "#E8B14A", boxShadow: "0 0 0 3px rgba(232,177,74,0.25)"}}/>
      Vamos marcar
    </div>
    <h2 style={mStyles.ctaHeadline}>Pronto pra fazer<br/>a festa?</h2>
    <p style={mStyles.ctaBody}>
      Manda no WhatsApp a data e o bairro. A gente confirma na hora e segura a carretinha por
      24h pra você decidir com calma.
    </p>
    <a href={BRAND.whatsapp} className="ck-btn-primary"
      style={{...uiStyles.btnPrimary, width: "100%", justifyContent: "center", padding: "16px 22px"}}>
      <Icons.whatsapp size={16}/> Falar agora no WhatsApp
    </a>

    <div style={mStyles.ctaSideCard}>
      <div style={mStyles.ctaSideHead}>Sábados de junho 2026</div>
      {[
        { d: "06/jun", s: "Disponível" },
        { d: "13/jun", s: "1 vaga" },
        { d: "20/jun", s: "Lotado" },
        { d: "27/jun", s: "Disponível" },
      ].map(s => (
        <div key={s.d} style={mStyles.ctaSideRow}>
          <span style={mStyles.ctaSideDate}>{s.d}</span>
          <span style={{
            ...mStyles.ctaSideStatus,
            color: s.s === "Lotado" ? "#8A7B6D" : s.s === "1 vaga" ? "#E8B14A" : "#9FCBA0",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", display: "inline-block",
              background: s.s === "Lotado" ? "#8A7B6D" : s.s === "1 vaga" ? "#E8B14A" : "#9FCBA0",
              marginRight: 6,
            }}/>
            {s.s}
          </span>
        </div>
      ))}
    </div>
  </section>
);

// ---------- MOBILE FOOTER ----------
const MFooter = () => (
  <footer style={mStyles.footer}>
    <div style={mStyles.footerLogo}>Carretinha Kids Alegria</div>
    <div style={mStyles.footerTag}>
      A festa pronta vai até você. Operação familiar em Palmas-TO desde 2021.
    </div>
    <div style={mStyles.footerLinks}>
      <a href={BRAND.whatsapp} style={mStyles.footerLink}><Icons.whatsapp size={14}/> (63) 9 9999-9999</a>
      <a href="#" style={mStyles.footerLink}><Icons.instagram size={14}/> {BRAND.instagram}</a>
      <div style={mStyles.footerLink}><Icons.pin size={14}/> Palmas-TO · todos os Planos</div>
    </div>
    <div style={mStyles.footerBottom}>
      © 2026 Carretinha Kids Alegria<br/>
      Desenvolvido pela Impulso Digital
    </div>
  </footer>
);

// ============================================================
// MAIN COMPOSE
// ============================================================
const LPMobile = () => (
  <div style={mStyles.root}>
    <MHeader/>
    <MHero/>
    <MTrust/>
    <MAtracoes/>
    <MComo/>
    <MCapacidade/>
    <MHigienizacao/>
    <MPacotes/>
    <MOlimpio/>
    <MGaleria/>
    <MFaq/>
    <MCtaFinal/>
    <MFooter/>
  </div>
);

Object.assign(window, { LPMobile });
