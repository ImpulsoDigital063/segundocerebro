// ============================================================
// CARRETINHA — Landing Page · DESKTOP (1440px)
// One file, top to bottom, hero → footer.
// Inline <DesignNote/> comments justify each visual decision.
// ============================================================

const DesignNote = ({ children, side = "right", top = 0 }) => (
  <div className="ck-design-note" style={{
    [side]: -260,
    top,
    flexDirection: side === "left" ? "row-reverse" : "row",
  }}>
    <span>{children}</span>
  </div>
);

// ---------- HEADER ----------
const Header = () => (
  <header style={dStyles.header}>
    <div style={dStyles.headerInner}>
      <a href="#" style={dStyles.logo}>
        <span style={dStyles.logoMark}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="10" width="20" height="14" rx="2" fill="#C8395E"/>
            <path d="M22 14h5l3 4v6h-8z" fill="#C8395E"/>
            <circle cx="9" cy="25" r="3" fill="#1B1612"/>
            <circle cx="9" cy="25" r="1.2" fill="#FAF6F0"/>
            <circle cx="25" cy="25" r="3" fill="#1B1612"/>
            <circle cx="25" cy="25" r="1.2" fill="#FAF6F0"/>
            <path d="M6 7l2 3M13 5l1 4M20 7l-1 3" stroke="#E8B14A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        <span style={dStyles.logoText}>
          <span style={dStyles.logoTitle}>Carretinha Kids</span>
          <span style={dStyles.logoSub}>Alegria · Palmas-TO</span>
        </span>
      </a>
      <nav className="ck-nav" style={dStyles.nav}>
        {NAV.map(n => (
          <a key={n.href} href={n.href} style={dStyles.navLink}>{n.label}</a>
        ))}
      </nav>
      <a href={BRAND.whatsapp} className="ck-btn-secondary" style={uiStyles.btnSecondary}>
        <Icons.whatsapp size={16}/> WhatsApp direto
      </a>
    </div>
  </header>
);

// ---------- HERO ----------
const Hero = () => (
  <section style={dStyles.hero}>
    <div style={dStyles.heroInner}>
      <div style={dStyles.heroCopy}>
        <div style={uiStyles.eyebrow} className="ck-fade-up in">
          <span style={uiStyles.eyebrowDot}/> {HERO.eyebrow}
        </div>
        <h1 className="ck-fade-up in" style={dStyles.heroHeadline}>
          {HERO.headline.split("\n").map((l, i) => (
            <React.Fragment key={i}>{l}{i === 0 && <br/>}</React.Fragment>
          ))}
        </h1>
        <p className="ck-fade-up in" style={dStyles.heroSub}>{HERO.sub}</p>

        {/* FORM */}
        <form style={dStyles.heroForm} onSubmit={(e) => { e.preventDefault(); window.open(BRAND.whatsapp, "_blank"); }}>
          <div style={dStyles.heroFormHeader}>
            <div style={dStyles.heroFormLabel}>{HERO.formLabel}</div>
            <div style={dStyles.heroFormHint}>{HERO.formHint}</div>
          </div>
          <div style={dStyles.heroFormGrid}>
            {HERO.fields.map(f => (
              <div key={f.name} style={uiStyles.fieldGroup}>
                <label style={uiStyles.fieldLabel} htmlFor={`d-${f.name}`}>{f.label}</label>
                <input id={`d-${f.name}`} className="ck-input" style={uiStyles.fieldInput}
                  placeholder={f.placeholder} type={f.type || "text"} />
              </div>
            ))}
          </div>
          <div style={dStyles.heroFormCta}>
            <button type="submit" className="ck-btn-primary" style={uiStyles.btnPrimary}>
              {HERO.cta} <Icons.arrow size={16}/>
            </button>
            <a href={BRAND.whatsapp} className="ck-btn-ghost" style={uiStyles.btnGhost}>
              ou fala direto no WhatsApp <Icons.arrowDiag size={14}/>
            </a>
          </div>
        </form>
      </div>

      <div style={dStyles.heroMedia}>
        <PhotoPH label={HERO.photoLabel} seed="hero-carretinha-rosa" ratio="3 / 4"/>
        {/* floating mini-cards on top of photo for premium-app feel */}
        <div style={dStyles.heroFloat1}>
          <div style={dStyles.heroFloatNum}>15</div>
          <div style={dStyles.heroFloatTxt}>crianças<br/>brincando juntas</div>
        </div>
        <div style={dStyles.heroFloat2}>
          <div style={dStyles.heroFloatStars}>
            {[...Array(5)].map((_, i) => <Icons.star key={i} size={12}/>)}
          </div>
          <div style={dStyles.heroFloatLabel}>"Foi a melhor festa que a gente já fez."</div>
          <div style={dStyles.heroFloatAuthor}>— Camila R., mãe da Luiza</div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- TRUST BAR ----------
const TrustBar = () => (
  <section style={dStyles.trust}>
    <div style={dStyles.trustInner}>
      {TRUST.map((t, i) => (
        <div key={t.kicker} style={{...dStyles.trustItem, borderLeft: i === 0 ? "none" : "1px solid #E8E2D7"}}>
          <div style={dStyles.trustKicker}>{t.kicker}</div>
          <div style={dStyles.trustTitle}>{t.title}</div>
          <div style={dStyles.trustDesc}>{t.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

// ---------- ATRAÇÕES ----------
const Atracoes = () => (
  <section id="atracoes" style={dStyles.atracoes}>
    <div style={dStyles.atracoesInner}>
      <div style={dStyles.sectionHead}>
        <div style={uiStyles.eyebrow}>
          <span style={uiStyles.eyebrowDot}/> 06 atrações
        </div>
        <h2 style={dStyles.h1}>Tudo que cabe na carretinha rosa.</h2>
        <p style={dStyles.lede}>
          Estruturas inflávveis, escorregadores, piscina de bolinhas, iluminação e som — todos
          higienizados antes da entrega e montados pelo Olímpio em até 45 minutos.
        </p>
      </div>

      <div style={dStyles.atracoesGrid}>
        {ATRACOES.map((a, i) => {
          const Ico = ATRACAO_ICONS[i];
          return (
            <article key={a.name} className="ck-attr-card" style={compStyles.attrCard}>
              <div className="ck-attr-photo" style={{ position: "relative" }}>
                <PhotoPH label={a.photo} seed={`atr-${a.name}`} h={220}/>
              </div>
              <div style={dStyles.atrBody}>
                <div style={dStyles.atrIcoRow}>
                  <span style={dStyles.atrIcon}><Ico size={18}/></span>
                  <span style={dStyles.atrIndex}>0{i + 1}</span>
                </div>
                <h3 style={compStyles.attrCardTitle}>{a.name}</h3>
                <p style={compStyles.attrCardDesc}>{a.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

// ---------- COMO FUNCIONA ----------
const ComoFunciona = () => (
  <section id="como-funciona" style={dStyles.como}>
    <div style={dStyles.comoInner}>
      <div style={dStyles.sectionHead}>
        <div style={uiStyles.eyebrow}>
          <span style={uiStyles.eyebrowDot}/> Como funciona
        </div>
        <h2 style={dStyles.h1}>Três passos. Sem dor de cabeça.</h2>
      </div>

      <div style={dStyles.comoGrid}>
        {PASSOS.map((p, i) => (
          <div key={p.n} style={dStyles.comoItem}>
            <div style={dStyles.comoNumWrap}>
              <div style={dStyles.comoNum}>{p.n}</div>
              {i < PASSOS.length - 1 && <div style={dStyles.comoLine}/>}
            </div>
            <div>
              <h3 style={dStyles.comoTitle}>{p.title}</h3>
              <p style={dStyles.comoDesc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- CAPACIDADE + HIGIENIZAÇÃO (split row) ----------
const Capacidade = () => (
  <section style={dStyles.capWrap}>
    <div style={dStyles.capInner}>
      {/* Capacidade — large editorial number */}
      <div style={dStyles.capLeft}>
        <div style={uiStyles.eyebrow}>
          <span style={uiStyles.eyebrowDot}/> Capacidade
        </div>
        <div style={dStyles.capNumberRow}>
          <span style={dStyles.capNumber}>15</span>
          <div style={dStyles.capNumberSide}>
            <div style={dStyles.capNumberLabel}>crianças brincando</div>
            <div style={dStyles.capNumberLabel}>ao mesmo tempo</div>
          </div>
        </div>
        <p style={dStyles.capDesc}>
          A carretinha foi dimensionada pra atender festas médias de aniversário em Palmas. Acima
          de 15 simultâneas a gente conversa sobre rodízio ou estrutura extra — sem improvisar.
        </p>

        <div style={dStyles.capFacts}>
          {[
            { k: "Faixa etária", v: "3 a 10 anos" },
            { k: "Tempo de montagem", v: "45 minutos" },
            { k: "Espaço necessário", v: "5m × 4m no plano" },
          ].map(f => (
            <div key={f.k} style={dStyles.capFact}>
              <span style={dStyles.capFactK}>{f.k}</span>
              <span style={dStyles.capFactV}>{f.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={dStyles.capRight}>
        <PhotoPH label="FOTO_15_CRIANCAS_BRINCANDO.jpg" seed="capacidade-15-kids" ratio="4 / 5"/>
      </div>
    </div>

    {/* Higienização — gilded strip, segunda parte da seção */}
    <div style={dStyles.higInner}>
      <div style={dStyles.higLeft}>
        <PhotoPH label="FOTO_HIGIENIZACAO_PROCESSO.jpg" seed="higienizacao-clean" ratio="5 / 4"/>
      </div>
      <div style={dStyles.higRight}>
        <div style={uiStyles.eyebrow}>
          <span style={uiStyles.eyebrowDot}/> Higienização
        </div>
        <h2 style={dStyles.h1}>Limpa entre uma festa e a próxima.</h2>
        <p style={dStyles.lede}>
          Cada brinquedo é higienizado depois da última festa <em>e</em> testado antes da
          próxima. Se você quiser, a gente manda o vídeo da limpeza do dia anterior antes de sair
          de casa.
        </p>
        <a href={BRAND.whatsapp} className="ck-btn-ghost" style={{...uiStyles.btnGhost, marginTop: 16}}>
          Pedir o vídeo da higienização <Icons.arrowDiag size={14}/>
        </a>
      </div>
    </div>
  </section>
);

// ---------- PACOTES ----------
const Pacotes = () => (
  <section id="pacotes" style={dStyles.pkgWrap}>
    <div style={dStyles.pkgInner}>
      <div style={dStyles.sectionHead}>
        <div style={uiStyles.eyebrow}>
          <span style={uiStyles.eyebrowDot}/> Pacotes
        </div>
        <h2 style={dStyles.h1}>Três jeitos de fazer a festa.</h2>
        <p style={dStyles.lede}>
          Tudo inclui montagem, desmontagem e higienização. Sem taxa escondida, sem caução, sem
          combinado por baixo do pano.
        </p>
      </div>

      <div style={dStyles.pkgGrid}>
        {PACOTES.map((p, i) => {
          const featured = !!p.badge;
          return (
            <article key={p.name} className="ck-pkg-card" style={{
              ...dStyles.pkgCard,
              background: featured ? "#1B1612" : "#fff",
              color: featured ? "#FAF6F0" : "#1B1612",
              border: featured ? "1px solid #1B1612" : "1px solid #E8E2D7",
            }}>
              <div style={dStyles.pkgHead}>
                <div>
                  <div style={{ ...uiStyles.eyebrow, color: featured ? "#E8B14A" : "#8A7B6D" }}>
                    <span style={{...uiStyles.eyebrowDot, background: featured ? "#E8B14A" : "#C8395E", boxShadow: featured ? "0 0 0 3px rgba(232,177,74,0.20)" : "0 0 0 3px rgba(200,57,94,0.18)"}}/>
                    {p.duracao}
                  </div>
                </div>
                {p.badge && <span style={uiStyles.pillHoney}>{p.badge}</span>}
              </div>
              <h3 style={{...dStyles.pkgName, color: featured ? "#FAF6F0" : "#1B1612"}}>{p.name}</h3>
              <div style={dStyles.pkgPrice}>
                <span style={{ ...dStyles.pkgPriceTag, color: featured ? "#B59A7F" : "#8A7B6D" }}>{p.price}</span>
                <span style={{ ...dStyles.pkgPriceValor, color: featured ? "#FAF6F0" : "#1B1612" }}>{p.valor}</span>
              </div>
              <ul style={dStyles.pkgList}>
                {p.inclui.map(item => (
                  <li key={item} style={dStyles.pkgListItem}>
                    <Icons.check size={16}/> {item}
                  </li>
                ))}
              </ul>
              <a href={BRAND.whatsapp} style={{
                ...uiStyles.btnPrimary,
                width: "100%", justifyContent: "center",
                background: featured ? "#C8395E" : "transparent",
                color: featured ? "#FAF6F0" : "#1B1612",
                border: featured ? "1.5px solid #C8395E" : "1.5px solid #1B1612",
                boxShadow: featured ? uiStyles.btnPrimary.boxShadow : "none",
              }}>
                {p.cta} <Icons.arrow size={16}/>
              </a>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

// ---------- QUEM TE ATENDE (Olímpio) ----------
const Olimpio = () => (
  <section style={dStyles.olimpioWrap}>
    <div style={dStyles.olimpioInner}>
      <div style={dStyles.olimpioPhotoWrap}>
        <PhotoPH label="FOTO_OLIMPIO_RETRATO_REAL.jpg" seed="olimpio-dono" ratio="3 / 4"/>
        <div style={dStyles.olimpioSticker}>
          <div style={dStyles.olimpioStickerL1}>Sou eu que</div>
          <div style={dStyles.olimpioStickerL2}>recebo seu pedido</div>
        </div>
      </div>
      <div style={dStyles.olimpioCopy}>
        <div style={uiStyles.eyebrow}>
          <span style={uiStyles.eyebrowDot}/> Quem te atende
        </div>
        <h2 style={dStyles.h1}>Olímpio.<br/>O dono, o motorista, o monta-tudo.</h2>
        <p style={dStyles.olimpioBody}>
          Quem te responde no WhatsApp é o Olímpio. Quem chega na sua casa é o Olímpio. Quem testa
          o pula-pula antes da primeira criança subir é o Olímpio. <em>Não tem call center, não
          tem terceirizado.</em>
        </p>
        <p style={dStyles.olimpioBody}>
          Cinco anos atendendo festa em Palmas. Mais de 300 sábados sem ninguém ralar o joelho —
          essa é a meta, e a gente segue medindo.
        </p>
        <a href={BRAND.whatsapp} className="ck-btn-primary" style={uiStyles.btnPrimary}>
          <Icons.whatsapp size={16}/> Falar com o Olímpio agora
        </a>
      </div>
    </div>
  </section>
);

// ---------- GALERIA ----------
const Galeria = () => (
  <section style={dStyles.galWrap}>
    <div style={dStyles.galInner}>
      <div style={dStyles.galHead}>
        <div>
          <div style={uiStyles.eyebrow}>
            <span style={uiStyles.eyebrowDot}/> Festas de verdade
          </div>
          <h2 style={dStyles.h1}>Como ficou nas últimas festas.</h2>
        </div>
        <a href={BRAND.whatsapp} className="ck-btn-ghost" style={uiStyles.btnGhost}>
          Ver galeria completa no Instagram <Icons.arrowDiag size={14}/>
        </a>
      </div>

      {/* Asymmetric editorial grid — 6 photos, different sizes */}
      <div style={dStyles.galGrid}>
        <div style={{ ...dStyles.galCell, gridColumn: "1 / 4", gridRow: "1 / 3" }}>
          <PhotoPH label={GALERIA[0].photo} seed="gal-1" ratio="1 / 1"/>
          <div style={dStyles.galCap}>{GALERIA[0].caption}</div>
        </div>
        <div style={{ ...dStyles.galCell, gridColumn: "4 / 7", gridRow: "1 / 2" }}>
          <PhotoPH label={GALERIA[1].photo} seed="gal-2" ratio="3 / 2"/>
          <div style={dStyles.galCap}>{GALERIA[1].caption}</div>
        </div>
        <div style={{ ...dStyles.galCell, gridColumn: "4 / 5", gridRow: "2 / 3" }}>
          <PhotoPH label={GALERIA[2].photo} seed="gal-3" ratio="1 / 1"/>
          <div style={dStyles.galCap}>{GALERIA[2].caption}</div>
        </div>
        <div style={{ ...dStyles.galCell, gridColumn: "5 / 7", gridRow: "2 / 3" }}>
          <PhotoPH label={GALERIA[3].photo} seed="gal-4" ratio="3 / 2"/>
          <div style={dStyles.galCap}>{GALERIA[3].caption}</div>
        </div>
        <div style={{ ...dStyles.galCell, gridColumn: "1 / 4", gridRow: "3 / 4" }}>
          <PhotoPH label={GALERIA[4].photo} seed="gal-5" ratio="3 / 2"/>
          <div style={dStyles.galCap}>{GALERIA[4].caption}</div>
        </div>
        <div style={{ ...dStyles.galCell, gridColumn: "4 / 7", gridRow: "3 / 4" }}>
          <PhotoPH label={GALERIA[5].photo} seed="gal-6" ratio="3 / 2"/>
          <div style={dStyles.galCap}>{GALERIA[5].caption}</div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- FAQ ----------
const FaqSection = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={dStyles.faqWrap}>
      <div style={dStyles.faqInner}>
        <div style={dStyles.faqLeft}>
          <div style={uiStyles.eyebrow}>
            <span style={uiStyles.eyebrowDot}/> FAQ
          </div>
          <h2 style={dStyles.h1}>Dúvidas que aparecem antes de fechar.</h2>
          <p style={dStyles.lede}>
            O que não estiver aqui você manda direto pro WhatsApp. Olímpio responde no mesmo dia.
          </p>
        </div>
        <div style={dStyles.faqList}>
          {FAQ.map((f, i) => {
            const isOpen = i === open;
            return (
              <div key={i} className="ck-faq-row" style={dStyles.faqRow}
                   onClick={() => setOpen(isOpen ? -1 : i)}>
                <div style={dStyles.faqHeader}>
                  <h3 className="ck-faq-q" style={dStyles.faqQ}>{f.q}</h3>
                  <span style={dStyles.faqIcon}>
                    {isOpen ? <Icons.minus size={20}/> : <Icons.plus size={20}/>}
                  </span>
                </div>
                <div style={{
                  ...dStyles.faqA,
                  maxHeight: isOpen ? 400 : 0,
                  opacity: isOpen ? 1 : 0,
                  marginTop: isOpen ? 12 : 0,
                }}>
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ---------- CTA FINAL ----------
const CtaFinal = () => (
  <section style={dStyles.ctaWrap}>
    <div style={dStyles.ctaInner}>
      <div style={dStyles.ctaCopy}>
        <div style={{ ...uiStyles.eyebrow, color: "#E8B14A" }}>
          <span style={{...uiStyles.eyebrowDot, background: "#E8B14A", boxShadow: "0 0 0 3px rgba(232,177,74,0.25)"}}/>
          Vamos marcar
        </div>
        <h2 style={dStyles.ctaHeadline}>
          Pronto pra fazer<br/>a festa?
        </h2>
        <p style={dStyles.ctaBody}>
          Manda no WhatsApp a data e o bairro. A gente confirma disponibilidade na hora e segura a
          carretinha por 24h pra você decidir com calma.
        </p>
        <div style={dStyles.ctaActions}>
          <a href={BRAND.whatsapp} className="ck-btn-primary" style={{...uiStyles.btnPrimary, padding: "16px 26px", fontSize: 15}}>
            <Icons.whatsapp size={18}/> Falar agora no WhatsApp
          </a>
          <a href="#" className="ck-btn-ghost" style={{...uiStyles.btnGhost, color: "#FAF6F0", borderColor: "#FAF6F0"}}>
            Voltar ao orçamento <Icons.arrow size={14}/>
          </a>
        </div>
      </div>
      <div style={dStyles.ctaSide}>
        <div style={dStyles.ctaSideCard}>
          <div style={dStyles.ctaSideHead}>Sábados de junho 2026</div>
          <div style={dStyles.ctaSideGrid}>
            {[
              { d: "06/jun", s: "Disponível" },
              { d: "13/jun", s: "1 vaga" },
              { d: "20/jun", s: "Lotado" },
              { d: "27/jun", s: "Disponível" },
            ].map(s => (
              <div key={s.d} style={dStyles.ctaSideRow}>
                <span style={dStyles.ctaSideDate}>{s.d}</span>
                <span style={{
                  ...dStyles.ctaSideStatus,
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
        </div>
      </div>
    </div>
  </section>
);

// ---------- FOOTER ----------
const Footer = () => (
  <footer style={dStyles.footer}>
    <div style={dStyles.footerInner}>
      <div style={dStyles.footerBrand}>
        <div style={dStyles.footerLogo}>Carretinha Kids Alegria</div>
        <div style={dStyles.footerTag}>
          A festa pronta vai até você. Operação familiar em Palmas-TO desde 2021.
        </div>
      </div>
      <div style={dStyles.footerCols}>
        <div>
          <div style={dStyles.footerColHead}>Atendimento</div>
          <a href={BRAND.whatsapp} style={dStyles.footerLink}><Icons.whatsapp size={14}/> (63) 9 9999-9999</a>
          <a href="#" style={dStyles.footerLink}><Icons.instagram size={14}/> {BRAND.instagram}</a>
        </div>
        <div>
          <div style={dStyles.footerColHead}>Operação</div>
          <div style={dStyles.footerLink}><Icons.pin size={14}/> Palmas-TO · todos os Planos</div>
          <div style={dStyles.footerLink}><Icons.user size={14}/> Olímpio · responsável técnico</div>
        </div>
        <div>
          <div style={dStyles.footerColHead}>Navegação</div>
          {NAV.map(n => (
            <a key={n.href} href={n.href} style={dStyles.footerLink}>{n.label}</a>
          ))}
        </div>
      </div>
    </div>
    <div style={dStyles.footerBottom}>
      <span>© 2026 Carretinha Kids Alegria · Olímpio S.</span>
      <span>Desenvolvido pela Impulso Digital</span>
    </div>
  </footer>
);

// ============================================================
// MAIN COMPOSE
// ============================================================
const LPDesktop = () => (
  <div style={dStyles.root}>
    <Header/>
    <Hero/>
    <TrustBar/>
    <Atracoes/>
    <ComoFunciona/>
    <Capacidade/>
    <Pacotes/>
    <Olimpio/>
    <Galeria/>
    <FaqSection/>
    <CtaFinal/>
    <Footer/>
  </div>
);

Object.assign(window, { LPDesktop });
