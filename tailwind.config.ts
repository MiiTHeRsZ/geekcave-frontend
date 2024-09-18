import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      display: ['GeistSans', 'Inter', 'system-ui', 'sans-serif'],
      body: ['GeistSans', 'Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      gc_blue: {
        50: "#E0E9F5",
        100: "#C5D6EC",
        200: "#8CACD9",
        300: "#5283C7",
        400: "#325D9A",
        500: "#1F3A5F",
        600: "#192F4D",
        700: "#13233A",
        800: "#0D1726",
        900: "#060C13",
        950: "#030508"
      },
      gc_red: {
        50: "#FFE0E5",
        100: "#FFC7D0",
        200: "#FF8A9D",
        300: "#FF526F",
        400: "#FF1A40",
        500: "#DD0025",
        600: "#B3001E",
        700: "#850016",
        800: "#57000E",
        900: "#2E0008",
        950: "#140003"
      },
      gc_grey: {
        50: "#E8ECF3",
        100: "#CDD7E5",
        200: "#9BAFCA",
        300: "#6C8AB1",
        400: "#486489",
        500: "#2E4057",
        600: "#253346",
        700: "#1C2735",
        800: "#121821",
        900: "#090C11",
        950: "#05070A"
      },
      gc_purple: {
        50: "#F3F2FD",
        100: "#E4E1FA",
        200: "#C8C2F4",
        300: "#ADA4EF",
        400: "#9186E9",
        500: "#7768E4",
        600: "#432FDA",
        700: "#2E1EA9",
        800: "#1F1471",
        900: "#0F0A38",
        950: "#08051E"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config