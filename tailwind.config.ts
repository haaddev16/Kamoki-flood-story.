import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1F23",
        sky: "#2E3A46",
        flood: "#7C6A4E",
        floodlight: "#9C8968",
        paper: "#EFE9DD",
        warn: "#C97B2E",
        line: "#B8AA8E",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
