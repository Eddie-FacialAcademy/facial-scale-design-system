# Facial Scale — Design System

Design system da **Facial Scale** (consultoria de aceleração comercial e vendas da Facial Academy, tom CEO/ROI). Identidade própria da Facial Scale (ecossistema Facial Academy); cores predominantes **rosé** e **nude**; roxo profundo `#3E1968` de uso pontual (logo/semântico/paleta institucional); tipografia **Silka** (embutida em woff2, headers em **Medium 500**).

Desenvolvido por **Edegar Junior**.

**Versão do Design System:** 1.0.0

## Entregas

- **index.html** — design system reutilizável (showcase navegável): paleta (institucional + derivada), temas **dark/light**, tipografia (Silka), **gradientes**, **ícones de UI** (biblioteca utilitária Phosphor Thin, copiar SVG — recurso auxiliar, **não** a marca: a Facial Scale é só logotipo, sem ícone/símbolo), **logo** (versão **cor** em gradiente, SVG real, para fundo claro e para fundo escuro; versão **1-cor** em branco quente / roxo profundo / grafite, exibida só em "Cores oficiais"; copiar/baixar SVG) e sistema de **botões** (variantes/tamanhos/estados). Click-to-copy em cores, valores e código; download PNG dos gradientes.
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

- **Cores:** derivadas das **7 cores institucionais** da Facial Scale (identidade própria da Facial Scale, ecossistema Facial Academy): roxo profundo `#3E1968`, roxo claro `#644389`, variação `#8A5EBA`, rosé `#CDA29B`, nude `#E8D5CE`, grafite `#2B2730`, branco quente `#FBF6F4`. Predominam **rosé** e **nude**; o roxo aqui documenta a paleta institucional (uso pontual).
- **Tipografia:** Silka (institucional), embutida em base64/woff2; Poppins como fallback (quando a Silka não estiver disponível), depois system-ui. **Headers em Medium (500)**; eyebrow 600; numeral 700; body 300.
- **Ícones (UI):** biblioteca utilitária **Phosphor**, peso **Thin** (stroke 1pt na grade 24), `currentColor`. Recurso auxiliar de interface apenas — **a marca Facial Scale não tem ícone/símbolo, é só logotipo**.
- **Tema:** dark por padrão; light via `data-theme="light"`; sem atributo segue `prefers-color-scheme`. Toggle persiste em `fs-theme`.

## Publicação

Repo público `facial-scale-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz, GitHub Pages. `.git` fora do OneDrive (`AppData\Local\gitdirs\`); line-endings LF (`.gitattributes`). Deploy: editar → `git add/commit/push` (credencial no Cofre do Windows, sem token). Ver `HANDOFF.md`.
