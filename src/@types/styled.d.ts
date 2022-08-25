import 'styled-components'
import { defaultTheme, defaultThemeDark } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
type ThemeTypeDark = typeof defaultThemeDark

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypeDark {}
}
