const light = {
  bg: {
    primary: '#fff',
    secondary: '#f1f1f1',
    tertiary: '#ececec',
    quaternary: '#ccc',
    inset: '#4E4946',
    input: '#4E494629',
    shadow: '#4E494629',
    contrast: [ '#310a0d', '#581d22', '#79353b', '#a56066'],
  },
  text: {
    primary: '#000',
    secondary: '#010101',
    tertiary: '#444',
    quaternary: '#666',
    placeholder: '#999',
    onPrimary: '#ffffff',
  },
}

const dark = {
  bg: {
    primary: '#000',
    secondary: '#010101',
    tertiary: '#444',
    quaternary: '#666',
    inset: '#999',
    input: '#99999929',
    shadow: '#cccccc29',
    contrast: ['#7abbb9', '#52bbb7', '#30bbb6', '#0abab5'],
  },
  text: {
    primary: '#fff',
    secondary: '#f1f1f1',
    tertiary: '#ececec',
    quaternary: '#ccc',
    placeholder: '#a9a9a9',
    onPrimary: '#a9a9a96f',
  },
}

const defaultTheme = {
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '18px', // 2
    '22px', // 3
    '26px', // 4
    '32px', // 5
    '40px', // 6
  ],
  fontWeights: {
    body: 300,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }