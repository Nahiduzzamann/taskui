import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack : '#1A1A19',   // Dark Black
        yellow : '#F9BE08',      // Yellow
        lightWhite : '#F9F8F4',   // Light White
        lightGray : '#DFDFD9',   // Light Gray
        goldenYellow: '#EFD30B',       // Golden Yellow
      },
    },
  },
  plugins: [],
} satisfies Config;
