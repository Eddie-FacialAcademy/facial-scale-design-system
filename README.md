# Facial Scale — Design System

Design system da **Facial Scale** (consultoria de aceleração comercial e vendas da Facial Academy, tom CEO/ROI). Identidade própria da Facial Scale (ecossistema Facial Academy); **estrutura e fundos escuros em roxo** (quase-preto roxo `#0C0A12` / `#2A1149`); **accents quentes em rosé e nude** (`#CDA29B`/`#D6A99F` e `#E8D5CE`); **CTA em roxo no tema claro e champanhe `#E1C9AC` no tema escuro**; tipografia **Silka** (embutida em woff2, headers em **Medium 500**).

Desenvolvido por **Edegar Junior**.

**Versão do Design System:** 1.0.0

## Entregas

- **index.html** — design system reutilizável (showcase navegável): paleta (institucional + derivada), temas **dark/light**, tipografia (Silka), **gradientes**, **ícones de UI** (biblioteca utilitária Phosphor Thin, copiar SVG — recurso auxiliar, **não** a marca: a Facial Scale é só logotipo, sem ícone/símbolo), **logo** (versão **cor** em gradiente, SVG real, para fundo claro e para fundo escuro; versão **1-cor** em branco quente / roxo profundo / grafite, exibida só em "Cores oficiais"; champanhe `#E1C9AC` como cor **derivada** do CTA no tema escuro; copiar/baixar SVG) e sistema de **botões** (variantes/tamanhos/estados). O **CTA** (botão preenchido/sólido) é **roxo no tema claro** (texto branco) e **champanhe `#E1C9AC` no tema escuro** (texto roxo escuro `#2A1149`), dando destaque/contraste no fundo escuro (tokens `--cta-grad` / `--cta-solid` / `--cta-ink`). **Acessibilidade do botão/CTA em 2 níveis WCAG AA:** (1) texto ≥ 4.5:1; (2) componente/botão vs fundo ≥ 3:1 (SC 1.4.11) — o CTA roxo (claro) e champanhe (escuro) passam nos dois níveis. Click-to-copy em cores, valores e código; download PNG dos gradientes.
  - 🌐 **Online (para compartilhar):** https://eddie-facialacademy.github.io/facial-scale-design-system/ — GitHub Pages (repo público `facial-scale-design-system`).

## Design System portátil (`design-system/`)

Pacote para aplicar a marca em **qualquer projeto/ferramenta** (web, React, Framer, agentes de IA).

- **silka.css** — fonte **Silka** (pesos 300–700) embutida em woff2/base64, self-contained; linke antes do CSS principal.
- **facial-scale-design-system.css** — drop-in (tokens dark/light + reset + foco + motion + tipografia + botões + chips/badges/status).
- **facial-scale-design-tokens.json** — tokens legíveis por máquina (Style Dictionary, Framer, IA).
- **Button.tsx** — Code Component Framer/React com Property Controls.
- **DESIGN-SYSTEM.md** — spec completa, 3 formas de aplicar e **prompt pronto para IA**.
- **THEME.md** — como o claro/escuro é configurado e ativado pelo tema do sistema do visitante (web + Framer).

## Notas técnicas

- **Cores:** derivadas das **7 cores institucionais** da Facial Scale (identidade própria da Facial Scale, ecossistema Facial Academy): roxo profundo `#3E1968`, roxo claro `#644389`, variação `#8A5EBA`, rosé `#CDA29B`, nude `#E8D5CE`, grafite `#2B2730`, branco quente `#FBF6F4` (+ champanhe `#E1C9AC` = CTA no escuro, derivado). O **roxo é a estrutura** (fundos escuros) e o **CTA no tema claro**; **rosé** e **nude** são os **accents quentes**; o **champanhe `#E1C9AC`** é o **CTA no tema escuro**.
- **Tipografia:** Silka (institucional), embutida em base64/woff2; Poppins como fallback (quando a Silka não estiver disponível), depois system-ui. **Headers em Medium (500)**; eyebrow 600; numeral 700; body 300.
- **Ícones (UI):** biblioteca utilitária **Phosphor**, peso **Thin** (stroke 1pt na grade 24), `currentColor`. Recurso auxiliar de interface apenas — **a marca Facial Scale não tem ícone/símbolo, é só logotipo**.
- **Tema:** dark por padrão; light via `data-theme="light"`; sem atributo segue `prefers-color-scheme`. Toggle persiste em `fs-theme`.

## Publicação

Repo público `facial-scale-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz, GitHub Pages. `.git` fora do OneDrive (`AppData\Local\gitdirs\`); line-endings LF (`.gitattributes`). Deploy: editar → `git add/commit/push` (credencial no Cofre do Windows, sem token). Ver `HANDOFF.md`.
