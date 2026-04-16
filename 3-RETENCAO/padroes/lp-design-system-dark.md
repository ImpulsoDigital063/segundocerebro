# LP Design System — Dark Premium (Padrão Validado)

> Validado no AgendaPRO v2, abril 2026.
> Usar em todas as LPs da Impulso Digital e projetos de clientes.

## Paleta base

```
Background:     #050713 (quase preto-azul)
Glass bg:       rgba(255,255,255,0.03) com border rgba(255,255,255,0.08)
Glass hover:    rgba(255,255,255,0.06)
Accent brand:   #3B82F6 (blue-500)
Accent ciano:   #06B6D4 (cyan-500)
Accent roxo:    #8B5CF6 (violet-500)
Accent green:   #10B981 (emerald-500)
Accent amber:   #F59E0B (amber-500)
Accent pink:    #EC4899 (pink-500)
Text primary:   white
Text secondary: #94A3B8 (slate-400)
Text muted:     #64748B (slate-500)
```

## Componentes reutilizáveis

### Glass Card
```css
background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 1rem; /* rounded-2xl */
backdrop-filter: blur(12px);
```

### Pill / Badge
```css
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 9999px;
padding: 6px 14px;
font-size: 12px;
```

### Gradient text
```css
background: linear-gradient(135deg, #3B82F6, #06B6D4);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Botão primário
```css
background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
box-shadow: 0 0 20px rgba(59,130,246,0.4);
/* + shimmer animation overlay */
```

### Stat badge (dentro de card)
```css
background: {cor}15;  /* 15% da cor do módulo */
color: {cor};
border: 1px solid {cor}30;
border-radius: 0.5rem;
padding: 4px 8px;
font-size: 10px;
font-weight: 900;
```

### Lift card (hover)
```css
transition: transform 300ms, box-shadow 300ms;
&:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
}
```

## Mini-UIs realistas (o diferencial)

O padrão que diferencia nossas LPs: cards com **fundo branco (#fff)** dentro de LP escura, imitando a UI real de produtos conhecidos.

### Google style
```
Text:        #202124
Secondary:   #5F6368
Muted:       #9AA0A6
Border:      #F1F3F4
Background:  #F8F9FA
Link:        #1A73E8
Success:     #188038
Error:       #D93025
Star:        #FBBC04
Search bar:  border 1px solid #dfe1e5, border-radius 24px
```

### WhatsApp style
```
Header:      #075E54
Chat bg:     #ECE5DD
Green:       #25D366
Message:     white card com border-radius e sombra sutil
```

### Calendar/Agenda style
```
OK slot:     #F0FDF4 (green-50)
Cancelou:    #FEF2F2 (red-50)
Pendente:    #FFFBEB (amber-50)
Vazio:       #F9FAFB (gray-50)
```

### Dashboard financeiro
```
KPI card:    white bg, border #F1F3F4, sombra sutil
Positive:    #188038 (verde Google)
Negative:    #D93025 (vermelho Google)
Table:       alternate rows #F8F9FA
```

## Avatares

Iniciais coloridas em círculo, sem fotos genéricas:
```
Azul:    #1A73E8
Red:     #EA4335
Amarelo: #FBBC04
Verde:   #34A853
Roxo:    #8B5CF6
```

## Animações

- **AnimatedGradient**: 3 radiais animando em loop 20s no hero
- **SectionReveal**: IntersectionObserver com translateY(30px→0) + opacity
- **Stagger**: delay 100ms entre cards filhos
- **Gradient flow**: background-position animando 200% em 10s (announcement bar)
- **Pulse glow**: box-shadow pulsando no CTA final

## Tipografia

- Hero h1: `font-weight: 900`, `font-size: clamp(2.2rem, 7vw, 4.5rem)`, `line-height: 1.05`
- Section h2: `font-weight: 900`, `font-size: clamp(1.8rem, 5vw, 3rem)`
- Body: `font-weight: 400-700`, `text-sm` ou `text-base`
- Stats: `font-weight: 900`, cor do módulo, tamanho grande

## Responsivo

- Mobile-first sempre
- Pill/badges: text-[10px] mobile → text-xs desktop
- Grid: 1 col mobile → 2 col tablet → layout final desktop
- Stats complementares: `hidden sm:inline` (mostra número no mobile, contexto no desktop)
- CTA: `w-full sm:w-auto` (full-width no mobile)
