/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: theme => ({
        'barlow-semi-condensed': ['Barlow Semi Condensed', 'sans-serif'] ,
      }),
      textColor: theme => ({
        'primary-violet':'var(--primary-violet)' ,
        'primary-grayish-blue':'var(--primary-grayish-blue)' ,
        'primary-blackish-blue':'var(--primary-blackish-blue)' ,
        'primary-light-gray':'var(--primary-light-gray)' ,
        'primary-light-grayish-blue':'var(--primary-light-grayish-blue)' ,
      }),
      backgroundColor: theme => ({
        'primary-violet':'var(--primary-violet)' ,
        'primary-grayish-blue':'var(--primary-grayish-blue)' ,
        'primary-blackish-blue':'var(--primary-blackish-blue)' ,
        'white':'var(--white)' ,
        'primary-light-gray':'var(--primary-light-gray)' ,
        'primary-light-grayish-blue':'var(--primary-light-grayish-blue)' ,
      }),
      backgroundImage: theme => ({
        'pattern-quotation': 'url("../images/bg-pattern-quotation.svg")'
      }),
      borderColor: theme => ({
        'primary-violet':'var(--primary-violet)' ,
      }),
    },
  },
  plugins: [],
}
