import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'linear-gradient(to right, #009696, #29D8FF, #FFFD80, #F89ABF, #6121AF)',
      },
      container: {
        padding: '1rem', 
        center: true,
      }
    },
  },
  plugins: [],
};
export default config;
