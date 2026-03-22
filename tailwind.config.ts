import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // 👈 เพิ่ม
import themes from "daisyui/src/theming/themes";

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
          ...themes["light"],

          // 🔵 main brand (ปุ่ม / highlight)
          primary: "#6EC1C2",        // teal soft
          "primary-content": "#ffffff",

          // 🟣 humidity / secondary info
          secondary: "#B39DDB",      // pastel purple
          "secondary-content": "#ffffff",

          // 🔷 accent
          accent: "#7DD3FC",         // sky blue
          "accent-content": "#0f172a",

          // ⚫ sidebar
          neutral: "#2fa9de",        // ฟ้าน้ำเงินเทา
          "neutral-content": "#ffffff",

          // 🧊 background system
          "base-100": "#F8FAFC",     // main bg
          "base-200": "#EEF2F7",     // card bg
          "base-300": "#E2E8F0",     // border / layer
          "base-content": "#1E293B",

          // 🟢 status
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
},
};

export default config;