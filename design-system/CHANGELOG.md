# Changelog — Facial Scale Design System

Todas as mudanças relevantes deste design system são registradas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o
versionamento segue [SemVer](https://semver.org/lang/pt-BR/):

- **MAJOR** — muda ou remove um token/API público (quebra compatibilidade).
- **MINOR** — adiciona de forma retrocompatível (novo componente/token/variante).
- **PATCH** — correções que não mudam a API (bug, contraste, ajuste fino).

---

## [Não lançado]

_Nada pendente no momento._

## [1.2.1] — 2026-08-28
### Alterado
- Menu "Design systems" agora inclui a Fotografia na HOF, nova marca do
  ecossistema (sete marcas no seletor).

## [1.2.0] — 2026-08-25
### Adicionado
- Favicon da página: badge arredondado na cor da marca com o ícone oficial do
  logo em branco, embutido como SVG data-URI no `<head>` (a página segue
  self-contained, sem requisição extra).

## [1.1.1] — 2026-08-25
### Corrigido
- Anel de foco em duas camadas: `--focus` agora é `0 0 0 2px var(--bg),
  0 0 0 4px var(--focus-ring)`, com `--focus-ring` sólido por tema (escuro
  `#CDA29B`, claro `#3E1968`). O anel antigo (accent com 55% de opacidade, valor
  único pros dois temas) media abaixo de 3:1 contra os fundos e reprovava a
  WCAG 1.4.11. Sincronizado em showcase, CSS do pacote, tokens.json e docs.
- Guard de alto contraste (`forced-colors`) com `outline` `!important`: o
  indicador de foco não é mais anulado pelo `outline:none` dos componentes.

## [1.1.0] — 2026-08-25
### Adicionado
- Menu "Design systems" na navegação do showcase: acesso direto aos design
  systems das seis marcas (Facial Academy, Facial Class, Facial Scale,
  Workshops Facial, Corporal Academy, Corporal Class), com a marca atual
  sinalizada e acordeão próprio no menu mobile.
### Corrigido
- Registro retroativo (2026-06-22): borda `1px solid var(--gold-ink)` no botão
  gold preenchido do showcase, para passar WCAG 1.4.11 (contraste não-textual)
  no tema claro.
- A mesma borda sincronizada agora no CSS do pacote (`.fs-btn.fs-gold`), que
  ainda não a trazia.

## [1.0.0] — 2026-06-19

Primeira versão do Design System da **Facial Scale**, marca-irmã da Facial Class e da Corporal Class no ecossistema Facial Academy. Mesma arquitetura dos DS irmãos, recolorida e re-ambientada para o domínio comercial do programa de aceleração.

### Identidade
- Paleta institucional Facial Scale: **roxo profundo** `#3E1968`, roxo claro `#644389`, variação `#8A5EBA`, **rosé** `#CDA29B` (accent quente), **nude** `#E8D5CE` (accent quente), grafite `#2B2730`, branco quente `#FBF6F4`. A marca não usa branco nem preto puro em fundos.
- CTA (botão preenchido): **roxo** `#3E1968` (texto branco) no tema **claro** e **champanhe** `#E1C9AC` (texto roxo escuro `#2A1149`) no tema **escuro** — o champanhe dá destaque/contraste no fundo escuro. Tokens `--cta-grad` / `--cta-solid` / `--cta-ink`. Rosé e nude são apenas accents quentes, não CTA.
- Logotipo "facialSCALE" embutido em SVG (sem ícone/símbolo isolado — a marca é só logotipo). Versão em cor (gradiente, SVG real) para fundo claro e escuro como tratamento principal; versão 1-cor (branco quente, roxo profundo ou grafite), que segue `--logo`/`currentColor`, apenas em "Cores oficiais".

### Fundações
- Arquitetura de tokens em 3 camadas (`primitive → semantic/intent → component`), prefixo de classe `fs-`, chave de tema `fs-theme`.
- Theming **dark/light** com paridade total e contraste **WCAG AA** em dois níveis: (1) texto ≥ 4.5:1; (2) componente/botão vs fundo ≥ 3:1 (WCAG 1.4.11). O CTA (roxo no claro, champanhe no escuro) passa nos dois níveis. Numerais `tabular-nums`; tokens de foundation (opacidade, border-width, blur, breakpoints, elevação, sizing/touch ≥ 44px, aspect-ratio).
- Tipografia Silka (fallback Poppins → system-ui), escala fluida com `clamp()`.

### Produto
- Forms (input, textarea, select, checkbox/radio/toggle, validação), feedback (alert, toast, spinner, skeleton, empty), overlays (modal, tooltip, popover), estrutura (tabs, accordion, avatar, breadcrumb, paginação, cartões), e componentes avançados (data table, command palette, app shell, date picker).
- Conteúdo de demo no **domínio comercial**: Painel ROI, Tarefas Críticas (caixa novo por semana), encontros semanais, Diagnóstico.

### Maturidade
- Seção "Voz e tom" no showcase + `voz-e-tom.md` (generalista) + `glossario-marca.md` (domínio comercial da FS) + `copy-deck.facial-scale.json`.
- `CONTRIBUTING.md` (governança, regra das 3 equipes, SemVer) + `IMPLEMENTACAO.md` (documentação técnica) + `THEME.md`.

[Não lançado]: #não-lançado
[1.0.0]: #100--2026-06-19
