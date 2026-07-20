import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Periwinkle → indigo accent scale — used consistently across the site.
        accent: {
          DEFAULT: "#3b5bdb",
          50: "#eef1fd",
          100: "#dee4fb",
          200: "#c3ccf6",
          300: "#b4c4f0",
          400: "#7b93e9",
          500: "#3b5bdb",
          600: "#2f49c4",
          700: "#2a40a6",
          800: "#263a85",
          900: "#23346b",
          950: "#1e2439",
        },
        ink: {
          DEFAULT: "#253237",
          soft: "#46565d",
          faint: "#5c6b73",
        },
        paper: {
          DEFAULT: "#f7fcfd",
          soft: "#e0fbfc",
          sink: "#c2dfe3",
        },
        // Semantic tokens (shadcn-style), driven by CSS variables in globals.css.
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        border: "rgb(var(--border-token) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
