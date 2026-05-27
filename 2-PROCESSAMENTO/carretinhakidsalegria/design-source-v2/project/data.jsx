// ============================================================
// CARRETINHA KIDS ALEGRIA — LP v2 · Dados compartilhados
// Copy preservada da v1, conforme briefing.
// ============================================================

const BRAND = {
  name: "Carretinha Kids Alegria",
  short: "Carretinha Kids",
  city: "Palmas · TO",
  whatsapp: "https://wa.me/5563999999999?text=Oi%20Ol%C3%ADmpio%2C%20quero%20um%20or%C3%A7amento",
  instagram: "@carretinhakidsalegria",
};

const NAV = [
  { label: "Atrações", href: "#atracoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "FAQ", href: "#faq" },
];

const HERO = {
  eyebrow: "Festa em casa · Palmas-TO",
  headline: "A festa pronta\nvai até você.",
  sub: "A carretinha rosa equipada chega na sua casa, monta tudo e leva tudo. Você só decide a data, a gente faz o resto.",
  formLabel: "Comece pelo orçamento",
  formHint: "Olímpio te responde direto no WhatsApp em até 1h.",
  fields: [
    { name: "nome", label: "Seu nome", placeholder: "Como você se chama?" },
    { name: "data", label: "Data da festa", placeholder: "dd/mm/aaaa", type: "date" },
    { name: "bairro", label: "Bairro / cidade", placeholder: "Plano Diretor Sul, Palmas" },
    { name: "criancas", label: "Quantas crianças", placeholder: "Estimativa é suficiente", type: "number" },
  ],
  cta: "Quero meu orçamento agora",
  photoLabel: "FOTO_HERO_CARRETINHA_ROSA_EM_ACAO.jpg",
  photoAlt: "Carretinha rosa montada em frente a uma casa, com crianças brincando ao redor",
};

const TRUST = [
  { kicker: "01", title: "Cabe muita coisa aqui dentro", desc: "Pula-pula, tobogã, piscina de bolinhas, LED e som — tudo em uma carretinha só." },
  { kicker: "02", title: "Atendimento direto com o dono", desc: "Quem te responde no WhatsApp é o Olímpio. Sem intermediário, sem chatbot." },
  { kicker: "03", title: "Higienização entre festas", desc: "Limpeza profunda toda vez. Vídeo do processo sob pedido." },
  { kicker: "04", title: "Operação em Palmas-TO", desc: "Atendimento em todos os Planos. Outras cidades sob consulta." },
];

const ATRACOES = [
  { name: "Pula-pula", desc: "Estrutura inflada e ancorada. Aguenta as crianças mais agitadas.", photo: "FOTO_ATRACAO_PULAPULA.jpg" },
  { name: "Tobogã", desc: "Descida grande com colchão de proteção. O hit da festa.", photo: "FOTO_ATRACAO_TOBOGA.jpg" },
  { name: "Túnel", desc: "Para os pequenos que ainda preferem explorar a saltar.", photo: "FOTO_ATRACAO_TUNEL.jpg" },
  { name: "Escorregador", desc: "Versão menor, ideal pra galera de 3 a 5 anos.", photo: "FOTO_ATRACAO_ESCORREGADOR.jpg" },
  { name: "Piscina de bolinhas", desc: "Mais de mil bolinhas higienizadas a cada festa.", photo: "FOTO_ATRACAO_BOLINHAS.jpg" },
  { name: "LED + Som", desc: "Iluminação cênica e caixa de som — viram pista de dança fácil.", photo: "FOTO_ATRACAO_LED_SOM.jpg" },
];

const PASSOS = [
  { n: "01", title: "Você escolhe a data", desc: "Manda no WhatsApp a data, horário e o bairro. A gente confirma a disponibilidade na hora." },
  { n: "02", title: "A gente leva tudo", desc: "Carretinha chega 1h antes. Olímpio monta, testa, higieniza na frente de vocês." },
  { n: "03", title: "Vocês só assopram a vela", desc: "A festa rola. No fim, a gente desmonta, recolhe e some sem deixar sujeira." },
];

const PACOTES = [
  {
    name: "Festa Compacta",
    duracao: "3 horas",
    inclui: ["Pula-pula", "Tobogã", "Piscina de bolinhas", "Montagem e desmontagem", "Higienização prévia"],
    badge: null,
    price: "a partir de",
    valor: "R$ 1.200",
    cta: "Pedir orçamento",
  },
  {
    name: "Mega Festa",
    duracao: "5 horas",
    inclui: ["Todas as 6 atrações", "LED + Som incluso", "Montagem e desmontagem", "Higienização prévia", "Atendente durante a festa"],
    badge: "Mais pedido",
    price: "a partir de",
    valor: "R$ 1.900",
    cta: "Quero esse",
  },
  {
    name: "Sob Medida",
    duracao: "Você decide",
    inclui: ["Combinações fora do padrão", "Mais de uma festa no mesmo dia", "Pacote para condomínio ou escola", "Conversa direta com o Olímpio"],
    badge: null,
    price: "orçamento personalizado",
    valor: "Sob consulta",
    cta: "Conversar com o Olímpio",
  },
];

const GALERIA = [
  { photo: "FOTO_FESTA_01_QUINTAL.jpg", caption: "Festa no quintal · Plano Diretor Sul" },
  { photo: "FOTO_FESTA_02_GAROTA_TOBOGA.jpg", caption: "Mariana, 6 anos · Tobogã" },
  { photo: "FOTO_FESTA_03_PISCINA_BOLINHAS.jpg", caption: "Tarde de domingo · Aureny III" },
  { photo: "FOTO_FESTA_04_GRUPO_PULAPULA.jpg", caption: "15 crianças · Pula-pula simultâneo" },
  { photo: "FOTO_FESTA_05_LED_NOITE.jpg", caption: "Festa noturna · LED + som ligados" },
  { photo: "FOTO_FESTA_06_PAIS_FUNDO.jpg", caption: "Os pais relaxando · a gente cuida" },
];

const FAQ = [
  { q: "Quanto custa em média uma festa?", a: "Os pacotes vão de R$ 1.200 a R$ 1.900. Festas fora do padrão (mais horas, mais brinquedos, fora de Palmas) saem por orçamento. O preço inclui montagem, desmontagem e higienização — não cobramos taxa escondida." },
  { q: "Quanto tempo demora pra montar?", a: "A carretinha chega 1h antes do horário combinado. Em 45 minutos o Olímpio monta, infla, testa e higieniza tudo na frente de vocês. Desmontagem leva o mesmo tempo." },
  { q: "Em quais cidades vocês atendem?", a: "Operamos em Palmas-TO inteira: todos os Planos, Aurenys, Taquaralto e adjacências. Para Paraíso, Porto Nacional e demais cidades vizinhas, conversamos sobre frete." },
  { q: "Como funciona o pagamento?", a: "Reserva com 30% no PIX e o restante até o dia da festa. Aceitamos PIX, cartão (em até 3x sem juros) e dinheiro. Em caso de chuva forte, remarcamos sem custo." },
  { q: "Tem garantia de segurança?", a: "Todas as estruturas são ancoradas, infladas e testadas antes da festa começar. O Olímpio fica na operação o tempo todo. Recomendamos no mínimo um adulto responsável por faixa etária presente." },
  { q: "Cabem mesmo 15 crianças?", a: "Sim, até 15 crianças brincando ao mesmo tempo em todos os brinquedos. Acima disso a gente conversa sobre rodízio ou estrutura extra — sem improvisar." },
];

// Make available globally for other Babel scripts.
Object.assign(window, { BRAND, NAV, HERO, TRUST, ATRACOES, PASSOS, PACOTES, GALERIA, FAQ });
