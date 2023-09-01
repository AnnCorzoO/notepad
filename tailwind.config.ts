import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    
  },

  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f9631d",
        
"secondary": "#efffa8",
        
"accent": "#c587ff",
        
"neutral": "#2e3338",
        
"base-100": "#e3e9f2",
        
"info": "#3358eb",
        
"success": "#55d89d",
        
"warning": "#f49e0b",
        
"error": "#fb3737",
        },
      },
    ],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;
