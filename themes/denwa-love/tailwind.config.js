/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'hard-down': '0 5px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};