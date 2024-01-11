import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "mobile-menu": "calc(100vh - 4.125rem)",
      },
      spacing: {
        "step-line": "calc(50% - 1px)",
      },
      colors: {
        "dark-cyan": "#0e8784",
        "light-cyan": "#66D2CF",
        "graeyish-cyan": "#E2DEDB",
        "dark-grey-blue": "#333D4B",
        "grey-blue": "#2C343E",
        "pale-orange": "#FDD6BA",
        "light-cream": "#FEFCF7",
        grey: "#83888F",
      },
      fontFamily: {
        barlow: "var(--barlow)",
        fraunces: "var(--fraunces)",
      },
      fontSize: {
        title: [
          "9.375rem",
          {
            lineHeight: "4.5rem",
            fontWeight: 900,
          },
        ],
        h1: [
          "4.5rem",
          {
            lineHeight: "4.5rem",
            fontWeight: 700,
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "3rem",
            fontWeight: 700,
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "2.25rem",
            fontWeight: 700,
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: 700,
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.625rem",
          },
        ],
        "nav-menu": [
          "0.75rem",
          {
            lineHeight: "0.9375rem",
            fontWeight: 700,
            letterSpacing: "0.0625rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
