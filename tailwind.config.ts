import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette measured from the source Elementor global kit
        cocoa: { DEFAULT: "#7E5A4E", 600: "#654033", 700: "#55250A" },
        chocolate: "#55250A",
        espresso: "#020101",
        gold: "#C99B44",
        brand: { yellow: "#FBE703", yellowSoft: "#F7D746" },
        cream: { DEFAULT: "#FEF7E9", 200: "#F6ECD9" },
        rose: "#C68D7A",
        ink: "#1A1A1A",
        // Tinted warm neutral (toward cocoa hue) — 5.3:1 vs cream, 5.5:1 vs white (WCAG AA)
        muted: "#6F6863",
        // Third-party brand colors used in CTAs and review widgets
        whatsapp: { DEFAULT: "#25D366", hover: "#1DB954" },
        star: { google: "#FBBC04", amber: "#F59E0B", empty: "#E3E3E3" },
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        script: ["var(--font-italianno)", "cursive"],
      },
      maxWidth: { container: "1140px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 28s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
