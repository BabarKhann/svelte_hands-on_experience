/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#222",
        light: "#F7F8F9",
        grey: "#A3A5AB",
        accent: "#FF3E00",
        primary: "#3498DB",
        success: "#27AE60",
      },
    },
  },
  plugins: [],
};
