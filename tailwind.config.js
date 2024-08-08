/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Custom screen breakpoints for responsive design
      screens: {
        "Tablet_Design_View": { "max": "769px", "min": "426px" },  // Styles for tablet view
        "Large_Mobile_Design_View": { "max": "426px", "min": "374px" },  // Styles for large mobile view
        "Small_Mobile_Design_View": { "max": "374px" }  // Styles for small mobile view
      },
      // Custom colors for use in the project
      colors: {
        "White": "hsl(0, 0%, 100%)",  // Pure white color
        "Light_gray": "hsl(212, 45%, 89%)",  // Light gray color
        "Grayish_blue": "hsl(220, 15%, 55%)",  // Grayish-blue color
        "Dark_blue": "hsl(218, 44%, 22%)"  // Dark blue color
      },
      // Custom font family to be used in the project
      fontFamily: {
        "Outfit": ["Outfit", "sans-serif"]  // Outfit font with fallback to sans-serif
      }
    },
  },
  plugins: [],
}

