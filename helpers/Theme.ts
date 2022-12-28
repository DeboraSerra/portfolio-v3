const light = {
  bg: {
    primary: '#e8ccc7',
    secondary: '#f1b2b2',
    inset: '#e5857b',
    input: '#45496a6f',
  },
  text: {
    primary: '#45496a',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff',
  },
}

const dark = {
  bg: {
    primary: '#020408',
    secondary: '#15273c',
    inset: '#365475',
    input: '#5981b15a',
  },
  text: {
    primary: '#98bae3',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505',
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