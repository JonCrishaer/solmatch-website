import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00d4ff',
          500: '#00c8ff',
          600: '#00b8ff',
        },
      },
    },
  },
  plugins: [],
}
export default config
