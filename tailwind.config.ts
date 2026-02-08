import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: "var(--font-anton)",
        geist: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        permanent_marker: "var(--font-permanent-marker)",
        nb: "var(--font-nb)",
      },
      colors: {
        sultan: {
          black: "#050505",
          gold: "#D4AF37",
          dark: "#0a0a0a",
          charcoal: "#1a1a1a",
        },
        zen: {
          midnight: "#1E293B",
          slate: "#64748B",
          sky: "#0EA5E9",
          light: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(212, 175, 55, 0.4)",
        "gold-glow-lg": "0 0 40px rgba(212, 175, 55, 0.6)",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #D4AF37, #B8860B)",
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
