# Facial Scale — Design System

**Versão 1.0.0** · Desenvolvido por **Edegar Junior** · Identidade própria da **Facial Scale** (ecossistema Facial Academy).

Sistema de design portátil para web (HTML/CSS, React, Framer). Dark por padrão, light por troca de tema. Fundos escuros e estrutura são **roxo** (quase-preto roxo, `bg #0C0A12` / `bg2 #161120`) — **nunca marrom nem quase-preto rosado**. Esta pasta é a **fonte da verdade** para aplicar a marca em qualquer projeto.

## Arquivos

| Arquivo | Para quê |
|---|---|
| `silka.css` | **Fonte Silka** (pesos 300–700) embutida em woff2/base64, self-contained. Linke **antes** do CSS principal. |
| `facial-scale-design-system.css` | **Drop-in.** Tokens (dark/light) + reset + foco + motion + tipografia + botões + chips/badges/status. Basta linkar. |
| `facial-scale-design-tokens.json` | Tokens legíveis por máquina (Style Dictionary, Framer, plugins, agentes de IA). |
| `Button.tsx` | Code Component Framer/React do botão, com Property Controls. |
| `THEME.md` | Como o claro/escuro é configurado e **ativado pelo tema do sistema** do visitante (web + Framer). |
| `DESIGN-SYSTEM.md` | Este documento (spec + como usar + prompt para IA). |
| `CHANGELOG.md` | Histórico de versões (Keep a Changelog + SemVer). |
| `CONTRIBUTING.md` | Governança: como o sistema evolui (regra das 3 equipes, gate de pronto, SemVer, depreciação). |
| `IMPLEMENTACAO.md` | **Documentação técnica de implementação**: arquitetura (sem build), tokens e theming, fundamentos, botões e todos os estados/microinterações, componentes, comportamentos JS, acessibilidade, responsivo, consumo/Framer, deploy/infra e diferenças por marca. |
| `voz-e-tom.md` | **Guia de copy generalista** (voz, faça/não faça, estrangeirismos, separação de domínio, acessibilidade). Vale para todas as marcas. |
| `glossario-marca.md` | **Glossário de domínio desta marca** (termos exclusivos, regras de produto). Não cruza para outro DS. |
| `copy-deck.facial-scale.json` | Deck de copy do produto (hero, notas, microcopy, demos) usado no showcase. Fonte canônica das strings. |
| `../facial-scale-brand-system.html` | Showcase visual navegável (todas as cores, gradientes, tipografia, logo (logotipo), ícones de UI (Phosphor) e componentes ao vivo, com click-to-copy). |

---

## Como aplicar (3 caminhos)

### 1. HTML/CSS — drop-in
```html
<html lang="pt-BR">  <!-- dark por padrão; sem data-theme segue o sistema -->
<head>
  <link rel="stylesheet" href="silka.css">            <!-- fonte Silka -->
  <link rel="stylesheet" href="facial-scale-design-system.css">
</head>
<body>
  <h1 class="fs-h1">Pare de construir <span class="fs-hl">no escuro.</span></h1>
  <button class="fs-btn fs-fill">Acelerar <svg class="fs-ico">…</svg></button>  <!-- CTA: roxo no claro / champanhe no escuro -->
</body>
```
A fonte **Silka** vem em `silka.css` (woff2 embutido, self-contained) — linke antes do CSS principal. Sem ela, cai em **Poppins** (fallback) e, por fim, `system-ui` — sem quebrar.

### 2. Qualquer stack — via tokens
Importe `facial-scale-design-tokens.json` e gere variáveis no seu formato (CSS vars, JS, Tailwind theme, etc.). Regra de ouro: **componentes consomem tokens, nunca hex solto.**

### 3. Framer
- Crie cada cor como **Color Style** com valor **Light** e **Dark** (tabela na seção 09 do brand-system.html, com click-to-copy).
- Crie os **Text Styles** com **3 breakpoints (L/M/S)** — ver **"Framer — Text Styles responsivos"** na seção Tipografia (mecânica + valores exatos).
- Importe o botão via `Button.tsx` (Code Component) ou recrie com as variantes.
- Ícones: biblioteca **Phosphor**, peso **Thin**.

---

## Fundamentos

### Cores institucionais (base — não inventar fora disto)
`#3E1968` roxo profundo · `#644389` roxo claro · `#8A5EBA` variação · `#CDA29B` rosé · `#E8D5CE` nude · `#2B2730` grafite · `#FBF6F4` branco quente.

### Tema
- **Dark é o padrão.** Light ativa com `data-theme="light"` no `<html>`; sem atributo, segue `prefers-color-scheme`.
- Toggle (persistente + anti-flash): coloque no `<head>`, antes da pintura:
```html
<script>(function(){try{var t=localStorage.getItem('fs-theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();</script>
```
No light, **gold (rosé) e rosa como texto** usam variantes `-ink` (`--gold-ink`, `--rose-ink`); como preenchimento mantêm a cor institucional. (Os tokens chamam-se `--gold`/`--gold-ink`, mas o valor é **rosé** `#CDA29B` — não há dourado real na paleta.) Rosé e nude são **accents quentes** (não a cor primária): os **links** seguem `--lilas` — **roxo** `#3E1968` no claro, **rosé** `#D6A99F` no escuro. A marca usa por padrão a **versão COR** do logo (gradiente, SVG real) — uma para fundo claro e outra para fundo escuro. A versão **1-cor** (`--logo`: branco quente no dark / roxo profundo no light, ou grafite) é de **uso restrito**, documentada apenas em "Cores oficiais". A marca é **apenas logotipo** — não há ícone/símbolo de marca (Phosphor é só para UI).

### Tokens de sistema
- **Raio:** sm 8 · md 14 · lg 18 · pill 30
- **Espaçamento (base 4/8):** 4 · 8 · 12 · 16 · 24 · 32 · 48
- **Elevação:** `--elev-1..4` (sombras com matiz **roxo** sutis no light, mais densas no dark — `shadow rgba(62,25,104,.40)` no dark)
- **Z-index:** base 0 · raised 10 · sticky 40 · overlay 100 · toast 1000
- **Motion:** fast .15s · base .2s · slow .4s · ease `cubic-bezier(.2,.8,.2,1)`
- **Foco:** `--focus: 0 0 0 3px rgba(205,162,155,.55)` — o anel usa **rosé no escuro** e **roxo no claro** (via `--lilas`: `#D6A99F` no dark, `#3E1968` no light).
- **Foundations:** opacidade (disabled .45 / muted .66 / hover .08 / overlay .58) · border-width (hair/1/2) · blur (sm 6 / md 12 / lg 20) · breakpoints (390/810/1200) · sizing (ícone 16/20/24, control/touch 44px) · aspect-ratio (1:1 / 4:3 / 16:9).
- **Elevação semântica:** `--elev-raised` (=1) · `--elev-overlay` (=3) · `--elev-modal` (=4); use o papel, não o número. Sombras em **camadas**: matiz **roxo** em ambos os temas — dark `shadow rgba(62,25,104,.40)`, light com matiz roxo `rgba(62,25,104,.18)`.

### Cantos aninhados (nested corners)
Quando um elemento arredondado fica **dentro** de outro, os cantos devem ser **concêntricos** (mesmo centro de arco):

```
raio interno = raio externo − padding
```

Mantém o espaçamento uniforme inclusive nos cantos. Mesmo raio nos dois → o gap "estufa" nos cantos (efeito errado).

```css
.card{ --r:24px; --pad:16px; border-radius:var(--r); padding:var(--pad); }
.card > .inner{ border-radius:max(0px, calc(var(--r) - var(--pad))); } /* 24 - 16 = 8 */
```

Pares: card grande 24/16→8 · médio 16/8→8 · pequeno 12/8→4 · tile 8/8→0 (reto).

Regras: **padding ≥ raio** → interno 0 (reto); **borda/stroke** inverte (externo = interno + largura); **aninhamento profundo** subtrai o padding de cada nível; **pill** é exceção; com **corner smoothing/squircle** a fórmula vira aproximação (iguale o smoothing em pai e filho).

### Tipografia — Silka (escala responsiva)
`size = Desktop / Tablet / Phone (px)`

| Estilo | D / T / P | Peso | LH |
|---|---|---|---|
| Display / H1 | 60 / 44 / 34 | 500 | 1.03 |
| Heading / H2 | 38 / 32 / 26 | 500 | 1.12 |
| Sub / H3 | 24 / 22 / 20 | 500 | 1.2 |
| Sub / H4 | 20 / 19 / 18 | 500 | 1.25 |
| Sub / H5 | 17 / 16 / 16 | 500 | 1.3 |
| Sub / H6 | 15 / 14 / 14 | 500 | 1.35 |
| Eyebrow | 12 / 12 / 11 | 600 | 1.2 · UPPERCASE · tracking .18em · cor lilás |
| Lead | 18 / 17 / 16 | 300 | 1.5 · cor muted |
| Body | 16 / 16 / 16 | 300 | 1.65 |
| Body small | 14 / 13 / 13 | 300 | 1.6 |
| Numeral / Preço | 44 / 38 / 32 | 700 | 1 · tabular-nums |
| Legal | 12 / 11 / 11 | 300 | 1.5 |

No CSS use `clamp()` entre Phone e Desktop. Body **≥16px no mobile** (evita zoom no iOS). **Numerais sempre com `tabular-nums`** — ativado globalmente no `body` (dígitos de largura fixa, não encavalam: preços, stats, tabelas, contadores).

#### Framer — Text Styles responsivos (L / M / S, desktop-first)

O Facial Scale usa **3 breakpoints: L · M · S** (desktop-first). No editor: **L = Desktop ≥1200 (primário), M = Tablet 810–1199, S = Mobile 390–809**. Você edita o L e ele herda pra baixo; sobrescreve M/S onde precisar. **Tipografia não auto-escala** — os 3 tamanhos precisam existir no estilo.

**Editar à mão no editor (CONFIÁVEL — recomendado):** abra o estilo → painel *Breakpoints* → defina os 3 tamanhos. O Framer seta os `Min Width` certos (1200/810/390) sozinho e é WYSIWYG. O slot **S é a base** e seu Min Width fica **travado/cinza**; com só 3 tiers o Framer mostra o S como base — para o S exibir **390** explicitamente, existe um 4º tier (ver workaround).

> **⚠️ BUG da Server API `framer-api` (confirmado jun/2026, v0.1.14).** `TextStyle.setAttributes({ breakpoints })` **emparelha o `fontSize` com o `minWidth` errado — deslocado em 1 posição**. Lendo de volta (`style.breakpoints`) os dados parecem certos, mas o **editor renderiza os tamanhos rotacionados** (sintoma clássico: "o maior cai no M", "o S puxa o tamanho do L"). O objeto de Text Style **não** tem `getAttributes()` — leia pela propriedade `style.breakpoints` + o topo (`style.fontSize`/`style.minWidth` = tier primário).

**Mapa observado do bug** (como o editor exibe o que a API gravou):

| Slot | `fontSize` vem de | `minWidth` vem de |
|---|---|---|
| **L** | primário (topo) | `bp[0].minWidth` (maior) |
| **M** | `bp[0].fontSize` | `bp[1].minWidth` |
| **S** | `bp[1].fontSize` | `bp[2].minWidth` |
| **XS** | `bp[2].fontSize` | `0` |

(`bp[…]` = breakpoints ordenados do **maior pro menor** minWidth; o Framer reordena sozinho.)

**Workaround via API (pré-compensação)** — desloca os tamanhos de propósito pra cancelar o bug. Para exibir **L=1200/L, M=810/M, S=390/S**:

```js
await style.setAttributes({
  minWidth: 0, fontSize: `${L}px`, lineHeight, letterSpacing,   // primário → vira o L
  breakpoints: [
    { minWidth: 1200, fontSize: `${M}px`, lineHeight, letterSpacing },  // → vira o M
    { minWidth: 810,  fontSize: `${S}px`, lineHeight, letterSpacing },  // → vira o S
    { minWidth: 390,  fontSize: `${S}px`, lineHeight, letterSpacing },  // → vira XS@0 (dup do S, inofensivo)
  ],
})
```

Resultado no editor: **L 1200/L · M 810/M · S 390/S · XS 0/S**. O XS@0 é duplicata do S — pode apagar no editor. (Script de referência: `framer-api/facial-bp-precomp.ts`.) Editar à mão depois é seguro — o editor normaliza.

Valores oficiais (px) — gravados no projeto Facial Scale:

| Estilo | L (1200) | M (810) | S (390) | LH |
|---|---|---|---|---|
| Display H1 | 60 | 44 | 34 | 1.03 |
| Heading H2 | 38 | 32 | 26 | 1.12 |
| Sub H3 | 24 | 22 | 20 | 1.2 |
| Sub H4 | 20 | 19 | 18 | 1.25 |
| Sub H5 | 17 | 16 | 16 | 1.3 |
| Sub H6 | 15 | 14 | 14 | 1.35 |
| Eyebrow | 12 | 12 | 11 | 1.2 |
| Lead | 18 | 17 | 16 | 1.5 |
| Body | 16 | 16 | 16 | 1.65 |
| Body Small | 14 | 13 | 13 | 1.6 |
| Numeral | 44 | 38 | 32 | 1.0 |
| Legal | 12 | 11 | 11 | 1.5 |

**Botão Label** = 15px fixo (sem breakpoints, não escala).

### Ícones
Biblioteca **Phosphor**, peso **Thin** (traço de **1pt** / `stroke-width:1` na grade 24), cor por `currentColor`. Tamanhos: 16 / 20 / 24 / 32 / 48. Nunca emoji como ícone.

> **Marca x ícone:** a marca é **apenas logotipo** — não há ícone/símbolo de marca. "Ícone" aqui é sempre **ícone de UI** (Phosphor), nunca um ativo de identidade.

### Gradientes
Somente cores do brand. O **roxo é a estrutura** e o **CTA do tema claro**; o **champanhe** (`#E1C9AC`) é o **CTA do tema escuro** (destaque/contraste sobre o fundo roxo) — via `--cta`/`--cta-ink`. **Rosé/nude são accents quentes**, não o gradiente-assinatura de CTA. **Não usar conic, blob nem halo** — preferir **meshes** (radiais multiponto) e lineares. Variantes light sobre base branca. Biblioteca completa no brand-system.html.

---

## Componentes

### Botão — `fs-btn`
`class="fs-btn <variante> <tamanho>"`
- **Variantes:** `fs-fill` (CTA primário via `--cta`/`--cta-grad`/`--cta-ink` — **roxo** `#3E1968` no claro com texto branco; **champanhe** `#E1C9AC` no escuro com texto roxo `#2A1149`) · `fs-solid` · `fs-outline` · `fs-ghost` (texto) · `fs-gold` · `fs-gold-o` (accent **rosé** secundário — não o primário)
- **Tamanhos:** `fs-sm` · (md = padrão) · `fs-lg`
- **Estados:** hover · `:active` · `:focus-visible` · `:disabled` / `[aria-disabled]`
- **Regras:** altura mínima 44px, raio pill, ícone Phosphor opcional (`<svg class="fs-ico">`). Use `<button>` (não `<a>` sem href) para ser focável.
- **Acessibilidade (2 níveis):** (1) **texto ≥4.5:1** (label vs preenchimento); (2) **componente/botão vs fundo ≥3:1** (WCAG 1.4.11 Non-text Contrast). O CTA `fs-fill` passa os dois: roxo no claro (texto branco), champanhe no escuro (texto roxo `#2A1149`).

### Status / feedback — `fs-status is-success|is-warning|is-danger|is-info`
Sempre **ícone + texto**, nunca só cor. Verde/âmbar/vermelho saem da paleta de propósito (são funcionais).

### Outros
`fs-chip` · `fs-badge` (accent **rosé** secundário — token `--gold` = `#CDA29B`, não dourado real; o botão primário usa `--cta`, roxo no claro / champanhe no escuro) · `fs-card` · `fs-logo` — versão **1-cor** do logo em SVG com `fill="currentColor"` (uso restrito); o padrão da marca é a **versão COR** (gradiente, SVG real). A marca é **só logotipo**, sem ícone/símbolo.

---

## Acessibilidade (obrigatório)
- **Contraste WCAG AA (2 níveis):** (1) **texto ≥4.5:1** (texto grande ≥3:1); (2) **componente/botão vs fundo ≥3:1** (WCAG 1.4.11 Non-text Contrast). No light, gold (rosé)/rosa como texto = `-ink`.
- **Foco visível:** `outline:2px solid var(--lilas)` + `box-shadow var(--focus)`; guard `@media (forced-colors: active)`.
- **`prefers-reduced-motion`:** reduzir transições/animações.
- **Toque ≥44px.** **Cor nunca sozinha** (estados com ícone+texto).

## Faça / Não faça
✅ Consumir tokens · dark+light em paridade · Silka · Phosphor Thin · meshes do brand · foco visível.
🚫 **SEM MARROM em lugar nenhum** (regra dura) · Hex solto nos componentes · cor fora das 7 institucionais · conic/blob/halo · emoji como ícone · texto dourado claro no light (usar `-ink`) · botão `<a>` sem href.

---

## Processo & versionamento

O sistema evolui sob governança: veja **`CONTRIBUTING.md`** (princípios, regra das 3 equipes, gate de "pronto", SemVer e depreciação) e o **`CHANGELOG.md`** (histórico de versões). Regra de ouro dos tokens: `primitive → semantic/intent → component`, e o token semântico **nunca sugere valor**.

---

## Para agentes de IA (Claude e outros)

Ao aplicar este design system em um projeto, **leia `facial-scale-design-tokens.json`** e siga as regras acima. Prompt sugerido:

> Você vai aplicar o **Facial Scale Design System** (autor: Edegar Junior). Fonte da verdade: `facial-scale-design-tokens.json` + `facial-scale-design-system.css` desta pasta.
> Regras inegociáveis: (1) só use as 7 cores institucionais e seus derivados — nada de hex fora da paleta; fundos/estrutura = **roxo** (quase-preto roxo), **SEM MARROM** em lugar nenhum; CTA (`--cta`/`--cta-ink`) = **roxo no claro** (texto branco) / **champanhe `#E1C9AC` no escuro** (texto roxo `#2A1149`); rosé/nude são **accents quentes**, não a primária; (2) componha tudo com os tokens (nunca hex solto); (3) entregue **dark e light** com paridade, dark por padrão e light via `data-theme="light"`; (4) tipografia **Silka** com a escala responsiva por breakpoint (Desktop/Tablet/Phone) usando `clamp()`, body ≥16px no mobile; (5) ícones **Phosphor peso Thin** com `currentColor`; (6) gradientes **só meshes/lineares do brand — sem conic/blob/halo**; (7) acessibilidade WCAG AA em **2 níveis** (texto ≥4.5:1 e componente/botão vs fundo ≥3:1, 1.4.11), foco visível, `prefers-reduced-motion`, toque ≥44px, cor nunca sozinha; (8) botão = `<button>` com as variantes `fs-*`.
> Antes de finalizar, verifique contraste nos dois temas e ausência de scroll horizontal de 320px a 1440px.
