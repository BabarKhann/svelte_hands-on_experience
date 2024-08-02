/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FF3E00",
        primary: "#3498DB",
        success: "#27AE60",
      },
    },
  },
  plugins: [],
};
