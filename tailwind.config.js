/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbsans: ["Kumbh Sans", "san serif"],
      },
      borderColor: {
        orange: "hsl(26, 100%, 55%)",
        lightGray: "hsl(223, 64%, 98%)",
        lightGrayBlue: "hsl(220, 14%, 75%)",
      },
      backgroundColor: {
        orange: "hsl(26, 100%, 55%)",
        lightGray: "hsl(223, 64%, 98%)",
      },
      borderRadius: {
        borderRadius: "50%",
        borderRadius1: "42%",
      },
      colors: {
        gray: "hsl(219, 9%, 45%)",
        orange: "hsl(26, 100%, 55%)",
        lightGray: "hsl(220, 14%, 75%)",
      },
      padding: {
        pt: "90px",
      },
      width: {
        pw: "480px",
      },
      height: {
        ph: "480px",
      },
      spacing: {
        right: "30%",
      },
    },
  },
  plugins: [],
};
