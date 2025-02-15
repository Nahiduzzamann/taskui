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
        primaryText: '#1A1A19',   // Dark Black
        secondaryText: '#F9BE08', // Yellow
        primaryBg: '#F9F8F4',     // Light White
        secondaryBg: '#DFDFD9',   // Light Gray
        hoverBg: '#EFD30B',       // Golden Yellow
      },
    },
  },
  plugins: [],
} satisfies Config;
