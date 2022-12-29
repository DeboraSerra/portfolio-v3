import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components';

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  }
}