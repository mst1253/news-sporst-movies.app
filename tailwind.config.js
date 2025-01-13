const flowbite = require("flowbite-react/tailwind");
//const { transform } = require("next/dist/build/swc");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/compons/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      translate:{
        d:"5px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
     keyframes:{
         bounceCustome:{
          '0%':{transform:'rotateY(0deg)'},
          '100%':{transform:'rotateY(360deg)'},
         },
          translateAnime:{
           transform:'translateY(-4px)',
           transform:'transition(.5s)',
         },
      },
      animation: {
        bounceCustome:'bounceCustome 7s linear infinite',
      },
    },
  },
  plugins: [
    flowbite.plugin({
      only: ["DarkThemeToggle",
        "Navbar","NavbarBrand",
        "NavbarCollapse","NavbarToggle",
        "Carousel","Footer","Card","Button","List","Spinner","TextInput"
        ,"Textarea"
        ,"Label"
        ,"FileInput"], 
    }),
  ],
};
