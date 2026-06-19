# Tema claro/escuro — Facial Scale Design System

**Versão:** 1.0.0

Desenvolvido por **Edegar Junior**.

**Regra:** o **dark é a base**; o **light é a variante**. O site/app **segue automaticamente a aparência do sistema do visitante** (`prefers-color-scheme`). Opcionalmente, um **toggle** deixa o usuário escolher e a escolha é **lembrada** (`localStorage`).

Toda cor é um token com par **Light/Dark**. Componentes consomem tokens — nunca hex solto — então trocam de tema sozinhos.

---

## 1. Web (HTML/CSS) — já implementado em `facial-scale-design-system.css`

Três camadas, nesta ordem:

```css
/* 1) Base = dark (padrão) */
:root{ --bg:#0C0A12; --txt:#FBF6F4; /* … todos os tokens dark … */ color-scheme:dark; }

/* 2) Segue o sistema: se o SO está em light e o usuário NÃO escolheu manualmente */
@media (prefers-color-scheme: light){
  :root:not([data-theme="dark"]){ --bg:#FBF6F4; --txt:#2B2730; /* … light … */ color-scheme:light; }
}

/* 3) Escolha manual do usuário (toggle) vence o sistema */
[data-theme="light"]{ --bg:#FBF6F4; --txt:#2B2730; /* … light … */ color-scheme:light; }
[data-theme="dark"]{ /* herda o :root dark */ }
```

Resultado:
- SO dark + sem escolha → **dark**
- SO light + sem escolha → **light** (automático)
- `data-theme` definido → **vence** o sistema

### Toggle (anti-flash + persistente)
No `<head>`, **antes** da pintura, pra não piscar:
```html
<script>(function(){try{var t=localStorage.getItem('fs-theme');
if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();</script>
```
Botão que alterna e salva:
```js
btn.addEventListener('click',function(){
  var n=document.documentElement.getAttribute('data-theme')==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',n);
  localStorage.setItem('fs-theme',n);
});
```

> `color-scheme` em cada tema faz scrollbars/controles nativos acompanharem. No light, dourado/rosa como **texto** usam as variantes `-ink`.
>
> **CTA por tema (botão sólido):** no tema **claro** o botão é **roxo** (`--cta-solid:#3E1968`, texto branco `--cta-ink:#fff`); no tema **escuro** ele vira **champanhe** (`--cta-solid:#E1C9AC`, texto roxo `--cta-ink:#2A1149`) — o champanhe dá destaque/contraste sobre o fundo escuro. Tokens: `--cta-grad` / `--cta-solid` / `--cta-ink`.
>
> **Acessibilidade (WCAG AA, dois níveis):** (1) **texto** ≥ 4.5:1 contra o fundo; (2) **componente/botão** vs fundo ≥ 3:1 (SC 1.4.11 — Non-text Contrast). Tanto o CTA roxo (claro) quanto o champanhe (escuro) precisam atender ao nível 2 contra o respectivo fundo, além do contraste de texto interno (nível 1).

---

## 2. Framer — como deve ser feito

1. **Color Styles com Light + Dark** (já subidos em `Facial Scale/…`): cada estilo tem valor de Light e de Dark. ✅
2. **Aplique os Color Styles** nos fills/textos das camadas (não use hex solto). Como o estilo carrega os dois valores, a camada troca de tema sozinha.
3. **Ativação por tema do visitante:** o site publicado **segue o `prefers-color-scheme`** do sistema automaticamente quando as cores usam Color Styles com variante Dark. Não precisa de código.
4. **Toggle manual no Framer (opcional):** crie uma Variable de tema (ou use um Component com variantes Light/Dark) ligada a um botão; ela sobrepõe o tema do sistema, equivalente ao `data-theme` da web. Persistência fica por conta do toggle.

> Importante: o que faz o tema funcionar é **tudo usar os Color Styles**. Qualquer cor hardcoded não troca. Mesma regra da web (tokens, nunca hex solto).

---

## 3. Checklist
- [ ] Todas as superfícies/textos usam Color Styles (web: tokens; Framer: Color Styles).
- [ ] `prefers-color-scheme` ativo (web: o `@media`; Framer: Color Styles com Dark).
- [ ] Toggle opcional persiste a escolha (`fs-theme`) e sobrepõe o sistema.
- [ ] No light, texto dourado/rosa usa `-ink` (contraste AA).
- [ ] WCAG AA nível 1: texto ≥ 4.5:1 contra o fundo (nos dois temas).
- [ ] WCAG AA nível 2: botões/componentes têm contraste ≥ 3:1 contra o fundo (SC 1.4.11 — Non-text Contrast), incluindo CTA roxo (claro) e champanhe (escuro).
- [ ] Testar nos dois temas (contraste e legibilidade).
