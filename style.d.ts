import 'styled-components'

import {DarkTheme} from './helpers/Theme'

export type Theme = typeof DarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}