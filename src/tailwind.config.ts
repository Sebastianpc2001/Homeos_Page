
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "#2A4178",
        input: "#2A4178",
        ring: "#1E3A8A",
        background: "#1E3A8A",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E3A8A",
        },
        secondary: {
          DEFAULT: "#2A4178",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0F172A",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#2A4178",
          foreground: "#C8C8C9",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
