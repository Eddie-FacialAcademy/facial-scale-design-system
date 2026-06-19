# Handoff — Facial Scale Design System (estado em 2026-06-11)

Desenvolvido por **Edegar Junior**. Ponto de retomada; atualizar conforme avançar.

## ✅ Concluído

### Design system online (GitHub Pages)
- **URL pública:** https://eddie-facialacademy.github.io/facial-scale-design-system/
- Repo público `facial-scale-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz.
- `index.html`: showcase self-contained, dark/light automático + toggle, click-to-copy, **copiar/baixar SVG** do logotipo, **copiar SVG** dos ícones (Phosphor Thin, biblioteca de UI), **download PNG** dos gradientes.

### Pacote portátil (`design-system/`)
- `silka.css` · `facial-scale-design-system.css` · `facial-scale-design-tokens.json` · `Button.tsx` · `THEME.md` · `DESIGN-SYSTEM.md`.

### Marca (identidade própria da Facial Scale, ecossistema Facial Academy)
- **Predominantes (accent/CTA/links/foco):** rosé `#CDA29B` + nude `#E8D5CE`. **Roxo profundo `#3E1968`:** uso pontual (logo, --info, paleta institucional, gradiente-assinatura). Paleta institucional (7): rosé `#CDA29B` (accent), nude `#E8D5CE` (apoio), grafite `#2B2730`, branco quente `#FBF6F4`, e — pontuais — roxo profundo `#3E1968`, roxo claro `#644389`, variação `#8A5EBA`.
- **Logotipo** Facial Scale: versão COR (gradiente, SVG real) para fundo claro e para fundo escuro; versão 1-COR (branco quente / roxo profundo / grafite) só na seção Cores oficiais. SVG vetorial, escala sem perder nitidez. Sem ícone/símbolo isolado.
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
