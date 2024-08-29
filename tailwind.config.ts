import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#FD7B03",
        hover: "#FF9F47",
        "card-bg": "#fff4e0"
      },
      gray: {
        DEFAULT: "#8E8E8E",
        bg: "#f3f3f3",
        lighter: "#d6d6d6",
        light: "#949494",
        dark: "#1e1e1e",
        darker: "#141414",
        hover: "#272727"
      },
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent"
    },
    fontFamily: {
      sans: ["var(--font-be-vietnam-pro)"],
      mono: ["var(--font-roboto-mono)"]
    },
    extend: {
      borderRadius: {
        x10: "10px",
        x20: "20px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        cyborg: ""
      }
    }
  },
  plugins: []
};
export default config;
