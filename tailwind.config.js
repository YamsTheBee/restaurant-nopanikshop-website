/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
          colors: {
      "np-orange": "#e85d3f",
      "np-teal": "#4a9a93",
      "np-dark": "#1b2b2a",
    },
    },
  },
  plugins: [],
};
