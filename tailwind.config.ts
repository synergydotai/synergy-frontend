import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#FD7B03",
        hover: "#FF9F47",
        "card-bg": "#fff4e0",
      },
      gray: {
        DEFAULT: "#8E8E8E",
        bg: "#f3f3f3",
        lighter: "#d6d6d6",
        light: "#949494",
        dark: "#1e1e1e",
        darker: "#141414",
        hover: "#272727",
      },
      success: {
        DEFAULT: "#287D3C",
        lighter: "#EEFFE5",
        light: "#0BC613",
        text: "#44D24A",
      },
      error: { DEFAULT: "#DA1414", lighter: "#FEEFEF" },
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["var(--font-be-vietnam-pro)"],
      mono: ["var(--font-roboto-mono)"],
    },
    extend: {
      borderRadius: {
        x10: "10px",
        x20: "20px",
      },
      padding: {
        7.5: "1.875rem", //30px
      },
      gap: {
        7.5: "1.875rem", //30px
      },
      inset: {
        7.5: "1.875rem", // 30px
      },
    },
  },
  plugins: [],
};
export default config;
