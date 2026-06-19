// Facial Scale Design System — Button
// Desenvolvido por Edegar Junior.
// Code Component para Framer (também funciona em React puro).
// As cores usam as CSS variables do design system com fallback para o brand,
// então o botão acompanha o tema (dark/light) se o site carregar os tokens.

import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Button(props) {
    const {
        label = "Acelerar com a Facial Scale",
        variant = "fill",
        size = "md",
        showIcon = true,
        iconPosition = "right",
        link = "",
        newTab = false,
        disabled = false,
        style,
    } = props

    const sizes = {
        sm: { fontSize: 13, padding: "10px 18px", gap: 7, ico: 15 },
        md: { fontSize: 15, padding: "14px 26px", gap: 9, ico: 18 },
        lg: { fontSize: 16, padding: "17px 32px", gap: 9, ico: 19 },
    }
    const s = sizes[size] || sizes.md

    const variants: Record<string, React.CSSProperties> = {
        fill: {
            background:
                "linear-gradient(120deg,var(--lilas,#D6A99F),var(--peach,#DDB9AE))",
            color: "var(--bg,#14100E)",
            boxShadow: "0 10px 30px var(--sh,rgba(138,90,80,.40))",
        },
        solid: { background: "var(--rose,#E8D5CE)", color: "var(--bg,#14100E)" },
        outline: {
            background: "transparent",
            color: "var(--txt,#FBF6F4)",
            border: "1px solid var(--line,rgba(205,162,155,.16))",
        },
        ghost: { background: "transparent", color: "var(--lilas,#D6A99F)" },
        gold: { background: "var(--gold,#CDA29B)", color: "#14100E" },
        "gold-o": {
            background: "transparent",
            color: "var(--gold-ink,#CDA29B)",
            border: "1px solid var(--gold-line,rgba(205,162,155,.42))",
        },
    }

    const base: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: iconPosition === "left" ? "row-reverse" : "row",
        gap: s.gap,
        fontFamily:
            "'Silka',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif",
        fontSize: s.fontSize,
        fontWeight: 600,
        lineHeight: 1,
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        textDecoration: "none",
        borderRadius: variant === "ghost" ? 8 : 30,
        padding: variant === "ghost" ? "10px 14px" : s.padding,
        minHeight: 44,
        whiteSpace: "nowrap",
        transition: "transform .2s cubic-bezier(.2,.8,.2,1), box-shadow .2s",
        opacity: disabled ? 0.42 : 1,
        pointerEvents: disabled ? "none" : "auto",
        ...variants[variant],
        ...style,
    }

    const Arrow = (
        <svg
            width={s.ico}
            height={s.ico}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flex: "0 0 auto" }}
            aria-hidden="true"
        >
            <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
    )

    const content = (
        <>
            <span>{label}</span>
            {showIcon && Arrow}
        </>
    )

    if (link && !disabled) {
        return (
            <a
                href={link}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                style={base}
            >
                {content}
            </a>
        )
    }
    return (
        <button type="button" style={base} disabled={disabled}>
            {content}
        </button>
    )
}

addPropertyControls(Button, {
    label: { type: ControlType.String, title: "Texto", defaultValue: "Acelerar com a Facial Scale" },
    variant: {
        type: ControlType.Enum,
        title: "Variante",
        options: ["fill", "solid", "outline", "ghost", "gold", "gold-o"],
        optionTitles: ["Preenchido", "Sólido", "Contorno", "Inline", "Dourado", "Dourado contorno"],
        defaultValue: "fill",
    },
    size: {
        type: ControlType.Enum,
        title: "Tamanho",
        options: ["sm", "md", "lg"],
        optionTitles: ["Small", "Medium", "Large"],
        defaultValue: "md",
        displaySegmentedControl: true,
    },
    showIcon: { type: ControlType.Boolean, title: "Seta", defaultValue: true },
    iconPosition: {
        type: ControlType.Enum,
        title: "Posição da seta",
        options: ["left", "right"],
        optionTitles: ["Esquerda", "Direita"],
        defaultValue: "right",
        displaySegmentedControl: true,
        hidden: (p) => !p.showIcon,
    },
    link: { type: ControlType.Link, title: "Link" },
    newTab: { type: ControlType.Boolean, title: "Nova aba", defaultValue: false, hidden: (p) => !p.link },
    disabled: { type: ControlType.Boolean, title: "Desabilitado", defaultValue: false },
})
