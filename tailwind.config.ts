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
        // Slate + cyan accent scale — used consistently across the site.
        accent: {
          DEFAULT: "#5c6b73",
          50: "#eef4f5",
          100: "#e0fbfc",
          200: "#c2dfe3",
          300: "#9db4c0",
          400: "#7b909a",
          500: "#5c6b73",
          600: "#4a575e",
          700: "#3c474d",
          800: "#313b40",
          900: "#2a3236",
          950: "#253237",
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
