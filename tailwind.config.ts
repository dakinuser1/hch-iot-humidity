import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // 👈 เพิ่ม

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // 👈 แก้ตรงนี้

  daisyui: {
    themes: [
      {
        hchtheme: {
          "primary": "#0ea5e9", // 🔴 แดง
          "secondary": "#22c55e",
          "accent": "#f59e0b",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};

export default config;