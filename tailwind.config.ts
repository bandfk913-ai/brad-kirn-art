import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;
