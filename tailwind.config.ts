import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        search: '#E6E6E6',
        'c1-white': '#EDE9E6',
        'c1-brown': '#C9996B',
        'c1-darkbrown': '#5C4F4A',
        'c1-darkteal': '#5C766D',
      },
    },

    fontFamily: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
      arimo: 'var(--font-arimo)',
    }
  },
  plugins: [],
};

export default config;