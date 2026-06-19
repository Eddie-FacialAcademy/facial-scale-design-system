# Handoff — Facial Scale Design System v1.0.0 (estado em 2026-06-19)

Desenvolvido por **Edegar Junior**. Ponto de retomada; atualizar conforme avançar. Versão atual: **1.0.0** (igual aos arquivos canônicos `index.html` / `.css` / `.json`).

## ✅ Concluído

> **Direção v2 (1.0.0):** fundos escuros e **estrutura = roxo** (quase-preto roxo, nunca marrom); **CTA = roxo no tema claro e champanhe `#E1C9AC` no tema escuro**; **rosé + nude = accents quentes**. Sem marrom em lugar nenhum.

### Design system online (GitHub Pages)
- **URL pública:** https://eddie-facialacademy.github.io/facial-scale-design-system/
- Repo público `facial-scale-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz.
- `index.html`: showcase self-contained, dark/light automático + toggle, click-to-copy, **copiar/baixar SVG** do logotipo, **copiar SVG** dos ícones (Phosphor Thin, biblioteca de UI), **download PNG** dos gradientes.

### Pacote portátil (`design-system/`)
- `silka.css` · `facial-scale-design-system.css` · `facial-scale-design-tokens.json` · `Button.tsx` · `THEME.md` · `DESIGN-SYSTEM.md`.

### Marca (identidade própria da Facial Scale, ecossistema Facial Academy)
- **Estrutura = roxo.** Os fundos escuros (quase-preto roxo) e toda a estrutura são **roxo profundo `#3E1968`** (família `#2A1149` / `#644389`). No tema **claro** o **CTA também é roxo `#3E1968`** (texto branco). Roxo não é "pontual": é a base da marca. **Nunca marrom, nunca fundo quente/rosado.**
- **CTA (botão preenchido/sólido):** **ROXO no tema CLARO** (`--cta-solid #3E1968`, texto branco `--cta-ink #fff`) e **CHAMPANHE `#E1C9AC` no tema ESCURO** (texto roxo escuro `--cta-ink #2A1149`) — o champanhe dá destaque/contraste no fundo escuro. Tokens: `--cta-grad` / `--cta-solid` / `--cta-ink`.
- **Accents quentes:** **rosé** (`#CDA29B` no claro / `#D6A99F` no escuro) + **nude `#E8D5CE`**. **Links:** rosé no tema escuro, roxo no tema claro. **Foco:** `rgba(205,162,155,.55)`. Rosé/nude são accents, não a primária nem o CTA.
- **Pontual (--info):** `#A98AD0` no escuro / `#5B3A86` no claro — este é o uso realmente pontual da paleta.
- **Paleta institucional (7):** roxo profundo `#3E1968`, roxo claro `#644389`, variação `#8A5EBA`, rosé `#CDA29B`, nude `#E8D5CE`, grafite `#2B2730`, branco quente `#FBF6F4` (+ champanhe `#E1C9AC` = CTA no escuro, derivado).
- **Acessibilidade do CTA/botão (WCAG AA, 2 níveis):** (1) **texto ≥ 4.5:1** sobre o preenchimento; (2) **componente/botão vs. fundo ≥ 3:1** (WCAG 1.4.11 non-text contrast). O CTA roxo no claro e champanhe no escuro passa nos **dois** níveis.
- **Logotipo** Facial Scale: versão COR (gradiente, SVG real) para fundo claro e para fundo escuro; versão 1-COR (branco quente / roxo profundo `#3E1968` / grafite) só na seção Cores oficiais. SVG vetorial, escala sem perder nitidez. Sem ícone/símbolo isolado. Marca = só logotipo.
- **Tipografia** Silka — **headers em Medium (500)**; eyebrow 600; numeral 700; body 300.

## Deploy / git (durável)
- `.git` **fora do OneDrive**: `AppData\Local\gitdirs\` (fonte: `_online-design-system/`, espelho de `../facial-scale-brand-system.html`).
- **LF** travado (`.gitattributes`); `.gitignore` barra `desktop.ini`.
- **Auth:** Git Credential Manager (Cofre do Windows) — push **silencioso, sem token**. Republicar: editar → `git add/commit/push`.

## 🔜 Próximo (Framer)
- A landing já está montada na `/facialclass-v2` (Framer). Componentização em andamento — ver `../framer-api/FRAMER-BUILD-RECIPE.md` na pasta do projeto da landing.
- Aplicar os Text Styles (L/M/S = 1200/810/390) e Color Styles a partir deste design system — ver `design-system/DESIGN-SYSTEM.md`.

## Arquivos-chave
- Showcase: `index.html`
- Pacote portátil: `design-system/` (css, tokens.json, Button.tsx, silka.css, DESIGN-SYSTEM.md, THEME.md)
- Docs: `README.md`, `HANDOFF.md`
