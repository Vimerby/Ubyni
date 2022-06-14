module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {

    container: {
      center: true,
      padding: '30px', 
      screens: { 
        'desktop': '1480px',
      },
    },

    screens: {
      // => @media (min-width: ..px) { ... }
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'laptop': '1200px',
      'desktop': '1300px',
      'large': '1680px',
      // => @media (min-width: ..px and max-width: ..px) { ... }
      'md-desktop': { 'min': '768px', 'max': '1299px' },
      'desktop-large': { 'min': '1300px', 'max': '1680px' },
      // => @media (max-width: ..px) { ... }
      'mobile-sm': { 'max': '639px' },
      'mobile-md': { 'max': '767px' },
      'mobile-laptop': { 'max': '1023px' },
      'mobile-desktop': { 'max': '1299px' },
    },

    colors:{
      'current': 'currentColor',
      'transparent': 'transparent',
      'white': "#fff",
      'black': '#000',
      'primary': '#16406C',
      'secondary': '#FFD600',
    },
    fontFamily: {
      default: ['Barlow'],
      'roboto': ['Roboto'],
      'texturina': ['Texturina'],
    
    },
    fontSize: {  
      "sm": "12px",
      "sm-x": "14px",
      "sm-xx": "16px",      
      "sm-xxx": '18px',
      "md": "20px",
      "md-x": "24px",
      "lg": '36px',
      "xl": '64px',
      // Heading
      'h6': '20px',
      'h5': '20px',
      'h4': '24px',
      'h3': '32px',
      'h2': '35px',
      'h1': '50px',
    },

    lineHeight: {
      10: '1.0',
      109: '1.09',
      11: '1.1',
      12: '1.2',
      125: '1.25',
      128: '1.28',
      13: '1.3', 
      135: '1.35', 
      14: '1.4',
      15: '1.5',
      16: '1.6',
      18: '1.8',
      20: '2',
    },
    
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },




   

    maxWidth: {
      'none': 'none',
      16: '16px', // 1em
      23: '23px',
      36: '36px',
      45: '45px',
      48: '48px',
      60: '60px',
      64: '64px',
      85: '85px',
      116: '116px',
      140: '140px',
      165: '165px',
      275: '275px',
      345: '345px',
      465: '465px',
      540: '540px',
      600: '600px',
      665: '665px',
    },



    boxShadow: { 
      // sm: '',
      DEFAULT: '',
      md: '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
      lg: '0px 267.009px 114.842px rgba(0, 0, 0, 0.07), 0px 133.635px 57.4773px rgba(0, 0, 0, 0.0532233), 0px 80.4953px 34.6216px rgba(0, 0, 0, 0.0456112), 0px 51.5856px 22.1873px rgba(0, 0, 0, 0.0399626), 0px 33.4336px 14.3801px rgba(0, 0, 0, 0.035), 0px 21.0461px 9.05208px rgba(0, 0, 0, 0.0300374), 0px 12.0923px 5.20098px rgba(0, 0, 0, 0.0243888), 0px 5.32213px 2.28909px rgba(0, 0, 0, 0.0167767)',
      // xl: '',
      // '2xl': '',
    },

    // dropShadow: {
    //   'md': '0px 4px 4px rgba(0, 0, 0, 0.25)',
    //   'lgUA': '0px 0px 10px rgba(250, 255, 0.10)',

    // },

    variantOrder: [
      'first',
      'last',
      'odd',
      'even',
      'visited',
      'checked',
      'group-hover',
      'group-focus',
      'focus-within',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'group-disabled', // Custom variant
      'disabled',
    ],
    
    extend: {
      spacing: { 
        'header': '72px',
        'auto': 'auto',
        'full': '100%',
        0: '0px',
        5: '5px',
        10: "10px",
        12: '12px',
        15: '15px',
        20: '20px', 
        30: '30px', 
        40: '40px',
        45: '45px',
        50: '50px',
        60: "60px",
        80: "80px",
        90: "90px",
        100: '100px',
        120: '120px',
        150: "150px", 
      },

      width: {
        12: '12px',
        16: '16px',
        18: '18px',
        20: '20px',
        25: '25px', 
        28: '28px',
        30: '30px',
        34: '34px',
        48: '48px',
        60: '60px',
        140: '140px',
        165: '165px',
        440: '440px',
      },

      height: {
        2: '2px',
        12: '12px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        30: '30px',
        34: '34px',
        40: '40px',
        48: '48px',
        140: '140px',
        210: '210px',
      },

      minHeight: {
        'auto': 'auto',
        40: '40px',
        50: '50px',
      },

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

    },
  },
  plugins: [],
}
