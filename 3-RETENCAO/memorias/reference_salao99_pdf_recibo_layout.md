---
name: reference-salao99-pdf-recibo-layout
description: Layout do PDF de recibo do Salão99 cravado por Eduardo 25/05 · referência pra padrão de fatura no AgendaPRO
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

PDF de comanda do Salão99 (gerado pelo botão impressora → "Exportar PDF").
Padrão de fatura que Eduardo quer replicar no AgendaPRO.

**Estrutura visual (top-down):**

1. **Cabeçalho** (3 colunas: esquerda nome+cliente · direita data)
   - Esquerda: `Fatura #10751` (bold, grande) + linha abaixo com nome do cliente (médio)
   - Direita: `Geração da Fatura` (pequeno cinza) + data formato "23 de maio de 2026"

2. **Linha divisória fina**

3. **Tabela de itens** · 3 colunas só (sem Tipo/Qtd/Preço/Desconto)
   - Header: `Descrição` (esquerda) | `Profissional` (centro) | `Valor` (direita) · em cinza pequeno uppercase
   - Linhas: nome do item | nome do prof | R$ X · alinhamento esquerda/centro/direita

4. **Linha divisória fina**

5. **Resumo do valor** · alinhado à DIREITA, ocupando metade direita da página
   - Quantidade: N item
   - Utilização de Pacotes: N serviços (se houver)
   - Subtotal: R$ X
   - Descontos: R$ X
   - Itens Cancelados: R$ X (se houver)
   - Total da Fatura: R$ X (sem bold extra)

6. **Linha divisória fina**

7. **Formas de Pagamento** (esquerda · header em cinza)
   - Lista: método (ex: "Cartão de Crédito") + linha abaixo "Pago em: 23/mai/2026" + R$ X direita

8. **Linha divisória fina**

9. **Resumo de pagamento** · direita
   - Pagamentos: R$ X
   - Estornos: R$ X
   - Pendente Pagamento: R$ X
   - **Total Pago: R$ X** (bold)

**Estética:**
- 100% monocromático (preto + tons de cinza)
- SEM logo do negócio, SEM chip de status colorido, SEM cor primária
- Linhas divisórias finas (1px cinza claro)
- Tipografia limpa sans-serif
- A4 portrait
- Conteúdo só na coluna direita-esquerda · meio da página fica em branco (parece relatório formal)

**O que NÃO tem:**
- Status colorido tipo "PAGA" verde
- Logo / nome do estabelecimento (talvez tenha em outra versão)
- Cores fortes em qualquer lugar
- Botões / ações
- Telefone do cliente

**Why:** Eduardo cravou 25/05 que o PDF de recibo do AgendaPRO deve seguir
esse padrão · cliente recebe documento "formal de fatura", não tela do
sistema. Tabela enxuta (3 colunas) facilita leitura do cliente que só quer
saber "o que comprei e quanto custou", sem confundir com Tipo/Qtd/Desconto.

**How to apply:** ao criar componente de PDF de recibo (`PdfReciboTemplate`),
seguir essa estrutura. Renderizar OFFSCREEN (position absolute · left -9999px)
e capturar com html2pdf, separado da tela de detalhe da comanda (que continua
com seu próprio layout). Ver `src/components/admin/comandas/PdfReciboTemplate.tsx`.
