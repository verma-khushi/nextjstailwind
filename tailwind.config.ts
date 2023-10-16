import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      blue: "#0000FF",
      lightorange:"#f9f3ee",
      lightred:"#d73b3b",
      lightblue:"#F3F6F9",
      lightgray:"#F6F6F6",
      gray:"#666666",
      darkgray:"#76797C",
    },
    fontSize: {
      xsm: "14px",
      sm:"16px",
      base: "20px",
      lg:"24px",
      xl: "32px",
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    fontFamily: {
      sans: ["Apercu", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
