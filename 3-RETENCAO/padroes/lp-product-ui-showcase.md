# Padrão — Product UI Showcase em LPs

**Validação:** AgendaPRO v2, 15/04/2026.
**Playbook completo:** `4-EXPORTACAO/playbooks/LP-DESIGN-PLAYBOOK.md`

---

## A regra

Em qualquer card de feature numa LP, **mostrar fragmento real da UI do produto** dentro do card — não usar "ícone + título + descrição" genérico.

## Por que funciona

O lead enxerga o que vai ter acesso antes do CTA. Reduz fricção, aumenta conversão. Eduardo validou: *"Dessa forma o cliente já consegue visualizar ao que ele vai ter acesso, é isso que nossa LP tem que passar."*

## Aplicação rápida

| Seção da LP | Mini-UI sugerido |
|-------------|------------------|
| Hero | Mockup de dashboard flutuante (estilo Linear/Vercel, dark, perspective 3D) |
| Cards de feature | Fragment real da feature (lista, gráfico, form, link) |
| Timeline / "um dia" | 1 mini-UI por momento (notificação, toast, painel) |
| Cards de dor | Anti-screenshots da realidade do lead (WhatsApp lotado, agenda no caderno) |
| Cards de "como começar" | Mini-screenshot de cada passo |
| Comparação | Pictograma colorido por linha + ✓/✕ ao invés de tabela seca |

## Anti-patterns

- ❌ Mesma estrutura repetida 4x (vira template óbvio)
- ❌ Ícone genérico + texto = cara de "feito por IA"
- ❌ Dados placeholder (Lorem, R$XX, Cliente 1) — sempre nomes próprios e valores reais
- ❌ iPhone realista com bezel — datado
- ❌ Glassmorphism em 100% dos elementos — perde hierarquia

## Termos do mercado pra esse padrão

- **Product UI showcase** / **In-context product preview**
- **Bento grid** (Apple iOS 17, Vercel)
- **Glassmorphism**
- **Linear-style hero** / **Vercel-style hero**

## Referências

linear.app · vercel.com · stripe.com · arc.net · raycast.com · resend.com · clerk.com
