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

## [1.0.0] — 2026-06-19

Primeira versão do Design System da **Facial Scale**, marca-irmã da Facial Class e da Corporal Class no ecossistema Facial Academy. Mesma arquitetura dos DS irmãos, recolorida e re-ambientada para o domínio comercial do programa de aceleração.

### Identidade
- Paleta institucional Facial Scale: **roxo profundo** `#3E1968`, roxo claro `#644389`, variação `#8A5EBA`, **rosé** `#CDA29B` (accent/CTA), **nude** `#E8D5CE` (accent/CTA), grafite `#2B2730`, branco quente `#FBF6F4`. A marca não usa branco nem preto puro em fundos.
- Logotipo "facialSCALE" embutido em SVG (sem ícone/símbolo isolado — a marca é só logotipo). Versão em cor (gradiente, SVG real) para fundo claro e escuro como tratamento principal; versão 1-cor (branco quente, roxo profundo ou grafite), que segue `--logo`/`currentColor`, apenas em "Cores oficiais".

### Fundações
- Arquitetura de tokens em 3 camadas (`primitive → semantic/intent → component`), prefixo de classe `fs-`, chave de tema `fs-theme`.
- Theming **dark/light** com paridade total e contraste **WCAG AA**; numerais `tabular-nums`; tokens de foundation (opacidade, border-width, blur, breakpoints, elevação, sizing/touch ≥ 44px, aspect-ratio).
- Tipografia Silka (fallback Poppins → system-ui), escala fluida com `clamp()`.

### Produto
- Forms (input, textarea, select, checkbox/radio/toggle, validação), feedback (alert, toast, spinner, skeleton, empty), overlays (modal, tooltip, popover), estrutura (tabs, accordion, avatar, breadcrumb, paginação, cartões), e componentes avançados (data table, command palette, app shell, date picker).
- Conteúdo de demo no **domínio comercial**: Painel ROI, Tarefas Críticas (caixa novo por semana), encontros semanais, Diagnóstico.

### Maturidade
- Seção "Voz e tom" no showcase + `voz-e-tom.md` (generalista) + `glossario-marca.md` (domínio comercial da FS) + `copy-deck.facial-scale.json`.
- `CONTRIBUTING.md` (governança, regra das 3 equipes, SemVer) + `IMPLEMENTACAO.md` (documentação técnica) + `THEME.md`.

[Não lançado]: #não-lançado
[1.0.0]: #100--2026-06-19
