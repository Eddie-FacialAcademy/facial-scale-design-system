# Changelog: Facial Scale Design System

Todas as mudanças relevantes deste design system são registradas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o
versionamento segue [SemVer](https://semver.org/lang/pt-BR/):

- **MAJOR**: muda ou remove um token/API público (quebra compatibilidade).
- **MINOR**: adiciona de forma retrocompatível (novo componente/token/variante).
- **PATCH**: correções que não mudam a API (bug, contraste, ajuste fino).

---

## [Não lançado]

_Nada pendente no momento._

## [1.3.0] · 2026-09-29
### Alterado
- **Nomes de cor organizados em duas camadas.** Cores da marca (`--brand-*`) levam o nome real da cor nesta marca; tokens de uso têm nomes neutros e iguais em todos os DS do grupo (`--primary`, `--accent`, `--highlight`, `--support`, `--glow`), para o código continuar portável entre marcas. Valores não mudaram: comparação de cor computada em todos os elementos do showcase, antes e depois, nos dois temas, deu zero diferença.
- Tokens de uso: `--roxo-bright` → `--primary-bright`, `--lilas-soft` → `--accent-soft`, `--gold-deep` → `--highlight-deep`, `--gold-line` → `--highlight-line`, `--rose-line` → `--support-line`, `--gold-ink` → `--highlight-ink`, `--rose-ink` → `--support-ink`, `--roxo2` → `--primary`, `--lilas` → `--accent`, `--peach` → `--glow`, `--roxo` → `--primary-deep`, `--gold` → `--highlight`, `--rose` → `--support`.
- Cores da marca: `--brand-amarelo` → `--brand-rose`, `--brand-vermelho` → `--brand-nude`, `--brand-amarelado` → `--brand-pessego`.
- JSON de tokens: chaves renomeadas igual aos tokens (camelCase) e mapa de/para em `$deprecated`.
- Variantes de botão `fs-gold` e `fs-gold-o` viraram `fs-highlight` e `fs-highlight-o`; os nomes antigos continuam valendo no CSS de colar no site e no `Button.tsx`.
- Nomes exibidos no showcase ligados à cor real: acentos compartilhados do grupo como **Dourado claro**, **Rosa claro** e **Pêssego** (antes "Amarelo claro", "Vermelho claro" e "Amarelado", com a mesma cor chamada de formas diferentes entre DS); rótulos de gradiente gerados a partir das cores de cada gradiente.
- Documentação técnica: seção 13 virou "Relação com o molde", só com valores deste DS (a tabela anterior repetia valores de outra marca e desatualizava).
### Descontinuado
- Os nomes antigos listados acima continuam funcionando como apelidos no CSS de colar no site e saem na 2.0. Use os nomes novos em código novo.

## [1.2.4] · 2026-09-29
### Corrigido
- Sucesso no tema claro `#147A45` → `#12733F`: o texto do status sobre o fundo rosado da marca passa de 4.45:1 para 4.89:1.
- Dia selecionado do calendário usa `--cta-solid` e `--cta-ink` (o roxo base ficava abaixo de 3:1 contra o fundo do calendário no tema escuro).
- Prévia de tema (cartões escuro e claro) mostra o CTA real de cada tema.
- Tabela de acessibilidade do showcase remedida nos dois temas (alguns valores estavam desatualizados e o botão escuro era descrito como "branco no roxo") e linha nova "CTA contra o fundo" (nível 2).
### Alterado
- Seletor de design systems inclui a Facial Premium, na ordem única usada em todos os DS.
- Versão alinhada em todos os arquivos: tokens, CSS, copy-deck e documentação estavam presos em uma versão anterior ao CHANGELOG.
- Documentação sem travessão e sem "&", com valores de cor, contraste e classe conferidos contra o CSS e o JSON; referências a versões e arquivos inexistentes corrigidas.

## [1.2.3] · 2026-08-28
### Alterado
- Menu "Design systems" agora inclui HArmonyCa Performance e Expert em
  Lábios 2026 (nove marcas no seletor).
### Corrigido
- CSS do pacote: o bloco `prefers-color-scheme: light` não redefinia o
  `--focus-ring`; usuário com sistema claro e sem `data-theme` recebia o anel
  do tema escuro. Agora os dois caminhos do claro têm o anel certo.
- Tabela de Color Styles do showcase: a coluna Escuro de "text/Secundário"
  mostrava um valor que não era o token `--mut` real (drift do molde).

## [1.2.2] · 2026-08-28
### Corrigido
- Documentação de cor "Secundário": o swatch da seção Cores e a tabela de
  Color Styles mostravam um valor que não era o token `--mut` real do tema
  (drift herdado do molde). Agora exibem o valor vivo do token nos dois temas.
- Grafia: "antiimproviso" corrigido para "anti-improviso" e "pra o" para
  "para o" na seção Voz e tom.

## [1.2.1] · 2026-08-28
### Alterado
- Menu "Design systems" agora inclui a Fotografia na HOF, nova marca do
  ecossistema (sete marcas no seletor).

## [1.2.0] · 2026-08-25
### Adicionado
- Favicon da página: badge arredondado na cor da marca com o ícone oficial do
  logo em branco, embutido como SVG data-URI no `<head>` (a página segue
  self-contained, sem requisição extra).

## [1.1.1] · 2026-08-25
### Corrigido
- Anel de foco em duas camadas: `--focus` agora é `0 0 0 2px var(--bg),
  0 0 0 4px var(--focus-ring)`, com `--focus-ring` sólido por tema (escuro
  `#CDA29B`, claro `#3E1968`). O anel antigo (accent com 55% de opacidade, valor
  único pros dois temas) media abaixo de 3:1 contra os fundos e reprovava a
  WCAG 1.4.11. Sincronizado em showcase, CSS do pacote, tokens.json e docs.
- Guard de alto contraste (`forced-colors`) com `outline` `!important`: o
  indicador de foco não é mais anulado pelo `outline:none` dos componentes.

## [1.1.0] · 2026-08-25
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

## [1.0.0] · 2026-06-19

Primeira versão do Design System da **Facial Scale**, marca-irmã da Facial Class e da Corporal Class no ecossistema Facial Academy. Mesma arquitetura dos DS irmãos, recolorida e re-ambientada para o domínio comercial do programa de aceleração.

### Identidade
- Paleta institucional Facial Scale: **roxo profundo** `#3E1968`, roxo claro `#644389`, variação `#8A5EBA`, **rosé** `#CDA29B` (accent quente), **nude** `#E8D5CE` (accent quente), grafite `#2B2730`, branco quente `#FBF6F4`. A marca não usa branco nem preto puro em fundos.
- CTA (botão preenchido): **roxo** `#3E1968` (texto branco) no tema **claro** e **champanhe** `#E1C9AC` (texto roxo escuro `#2A1149`) no tema **escuro**; o champanhe dá destaque/contraste no fundo escuro. Tokens `--cta-grad` / `--cta-solid` / `--cta-ink`. Rosé e nude são apenas accents quentes, não CTA.
- Logotipo "facialSCALE" embutido em SVG (sem ícone/símbolo isolado: a marca é só logotipo). Versão em cor (gradiente, SVG real) para fundo claro e escuro como tratamento principal; versão 1-cor (branco quente, roxo profundo ou grafite), que segue `--logo`/`currentColor`, apenas em "Cores oficiais".

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
