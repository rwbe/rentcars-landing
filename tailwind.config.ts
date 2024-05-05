import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Adicione esta linha
      },
      screens: {
        sm: "640px",
        md: "762px",
        lg: "1024px",
        xl: "1300px",
      },
      colors: {
        secondary:"#9CA3AF",
        signin:"#DBEAFE",
        yellow:"#FBD46D",
        dark_green:"#4F8A8B",
        primary: "#07031A",
        footer: "#051C34",
        testimonials: "#EDF4FC",
        searchIcon: "#979797",
        description: "#6D6D6D",
        accent: {
          DEFAULT: "#4F8A8B", // Corrigido para 'DEFAULT'
          hover: "#dd242a",
        },
        body: "#dedede",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "map_bg": "url('../public/images/map_bg3.png')",
      },
    },
  },
  plugins: [],
};

export default config;
