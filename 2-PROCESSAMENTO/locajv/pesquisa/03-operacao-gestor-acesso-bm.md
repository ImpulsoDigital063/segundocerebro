# Operação de gestor de tráfego — acesso, pagamento, relatório, combinados
**Pesquisa:** 29/07/2026 · contexto: contrato 1 mês, honorário R$900, verba do cliente R$350-400/semana

## 1. Acesso — o caminho CERTO

✅ **Certo: Business Manager do CLIENTE + prestador como Parceiro via ID de Negócio.**

1. Cliente cria (ou já tem) BM próprio em business.facebook.com com os dados dele
2. No BM do cliente: **Configurações do negócio → Parceiros → Adicionar → "Conceder a um parceiro acesso aos seus recursos"** → inserir o **ID da empresa (Business ID)** do prestador → selecionar os ativos (página, conta de anúncio, pixel) → salvar
3. Nível de acesso: só o necessário (criar/editar anúncios), **não admin total**
4. Em nenhum momento se pede login ou senha

❌ **Errado (a) — prestador como usuário pessoal na conta do cliente.** Funciona, mas mistura a identidade pessoal do prestador com o negócio do cliente. Se o prestador perder o perfil pessoal (checkpoint, invasão), o cliente perde a gestão junto.

❌ **Errado (b) — cliente entrega login e senha.** Viola os Termos de Uso do Meta (uma pessoa só pode ter uma conta pessoal; logar como outra pessoa é tratado como comportamento suspeito). Riscos concretos:
- **Checkpoint de segurança** por dispositivo e local diferentes → conta trava e os dois perdem acesso
- Recuperação empaca porque o dono real não reconhece o local de acesso
- 2FA no celular do cliente impede o login remoto
- **Zero auditoria** — se algo for feito errado, não há como saber quem fez

Fontes: [adicionar parceiro no Meta Business](https://www.portalinsights.com.br/perguntas-frequentes/como-adicionar-um-parceiro-no-meta-business) · [configurar parceiros](https://ajuda.mlabs.com.br/pt-BR/articles/14845769-como-configurar-parceiros-dentro-do-meta-business) · [Central de Ajuda — desbloquear conta](https://www.facebook.com/help/669497174142663)

## 2. Propriedade dos ativos

- Página, conta de anúncio, pixel e Instagram **nascem e ficam dentro do BM do cliente** — nunca do prestador
- **Erro clássico:** criar a conta de anúncio dentro do BM da agência "pra facilitar". Prejuízo: o cliente não é dono; histórico do pixel e aprendizado do algoritmo ficam presos com o prestador. Se o contrato acabar mal, o cliente perde página/conta/dados e recomeça do zero
- **Ao fim do contrato:** remover o prestador dos Parceiros (não excluir ativos) — o cliente mantém tudo rodando

Fonte: [Business Manager é ativo da empresa](https://galore.agency/facebook-business-manager/)

## 3. Quem paga o anúncio

- Forma de pagamento cadastrada **no BM do cliente**, cartão/conta **do cliente** — nunca do prestador
- Aceito no Brasil: cartão de crédito, boleto (antecipado manual), débito automático. **Pix: confirmar na tela do momento** — não está disponível em todas as contas
- 🔒 **Limite de gasto da conta** — Configurações de pagamento → Limites de gastos da conta. Define um teto; ao chegar perto, as campanhas **pausam automaticamente**. É a proteção contra estourar a verba do cliente. ([doc oficial](https://pt-br.facebook.com/business/help/141820733085330) · [prática 2026](https://www.get-ryze.ai/blog/meta-ads-account-spending-limit-and-budget-tracking-best-practices))
- Conta nova começa com teto/limiar de cobrança baixo (ordem de USD 25-50) e sobe com histórico de pagamento em dia

## 4. Verificação e limites de conta nova

- **Business Verification** não é obrigatória pra rodar anúncio simples, mas é exigida pra destravar recursos (WhatsApp API, limites maiores, categorias sensíveis). Ter o CNPJ do cliente à mão
- Todo anúncio/edição passa por revisão de 1-2 dias
- **Conta nova com verba alta de cara é bandeira vermelha.** Subir o orçamento aos poucos ([fonte](https://www.edialog.com.br/meta-ads-2026-novas-regras/))

## 5. Relatório pro cliente (dono de locadora, não entende métrica)

**Métricas que importam:** custo por conversa/lead · nº de leads · taxa conversa→fechamento (dado que **só o cliente tem**) · custo por locação fechada

**Métricas de vaidade — não abrir o relatório com elas:** alcance, impressões, curtidas

**Formato:** check-in semanal rápido no WhatsApp com 3 números (gasto, leads, custo por lead) + 1 relatório escrito no fim do mês

⚠️ **Com R$350-400 de verba, tratar como PILOTO** — deixar explícito que é dado insuficiente pra conclusão estatística forte

Fontes: [relatório de tráfego pago](https://reportei.com/relatorio-de-trafego-pago/) · [KPIs](https://www.midiaetrafego.com.br/blog/kpis-trafego-pago)

## 6. Ritual de otimização

**Diário:** gasto de ontem bateu o previsto · todas as campanhas ativas gastando · nenhuma reprovada ou travada em revisão · leads chegando **e sendo respondidos pelo cliente**

**Semanal:** custo por lead por criativo e por público · pausar o pior · escalar o melhor (nunca >20% de uma vez) · trocar criativo com fadiga

**NÃO mexer:** nos primeiros dias (fase de aprendizado). Só editar em erro técnico grave (pixel quebrado, anúncio reprovado, conta suspensa). **Editar orçamento redistribui verba e reseta o aprendizado de todos os conjuntos, inclusive os que você não tocou** ([doc oficial](https://pt-br.facebook.com/business/help/316478108955072))

## 7. Combinados contratuais (1 mês, R$900)

- Escopo escrito: plataforma (Meta), nº de criativos no mês, otimização, relatório semanal + final
- **Verba paga direto pelo cliente na conta dele** — não passa pela mão do prestador
- **Quem responde o lead e em quanto tempo: o cliente**, máximo sugerido 1h em horário comercial
- **NÃO incluso:** atendimento ao lead, produção de vídeo profissional, gestão de outras redes, CRM
- 🔴 **Nunca prometer número de vendas/locações.** O entregável é volume e custo de lead qualificado — fechamento depende de preço, atendimento e estoque de motos. Prometer venda é risco de propaganda enganosa (CDC) e desgaste de reputação
- Formalizar em contrato simples com escopo, rescisão e confidencialidade

Fontes: [cláusulas essenciais](https://www.jusbrasil.com.br/artigos/top-5-clausulas-que-nao-podem-faltar-em-um-contrato-de-gestao-de-trafego/1519204639) · [pontos de atenção](https://vivianeresende.com/contrato-de-gestao-de-trafego-pontos-de-atencao/)

## 8. O lado do cliente

- Cobrar por escrito (WhatsApp) o compromisso dele: responder lead rápido, mandar fotos/vídeos das motos, aprovar criativo em até X horas
- **Registrar print com horário de cada lead entregue** — é a prova se depois vier "não funcionou"
- 🔴 **Lead não respondido pelo cliente é a causa nº1 de campanha "que não deu resultado".** Deixar isso explícito no relatório final, separando responsabilidade de mídia (gerar lead) da comercial (fechar) ([fonte](https://wsimarketingdigital.com.br/da-solicitacao-a-conversa-de-vendas-a-passagem-de-leads-que-empresas-em-crescimento-frequentemente-ignoram/))
