import * as CSS from 'csstype'

export enum Modes {
  dark = 'dark',
  light = 'light'
}

export interface ThemeColors {
  primary: CSS.ColorProperty
  text: CSS.ColorProperty // added
  background: CSS.ColorProperty // added
  secondary: CSS.ColorProperty // added
  muted: CSS.ColorProperty // added
  gray: CSS.ColorProperty // added
  /// GENERAL
  highlight: CSS.ColorProperty // added
  success: CSS.ColorProperty
  info: CSS.ColorProperty
  warning: CSS.ColorProperty
  danger: CSS.ColorProperty
  listBg: CSS.ColorProperty
  listBgAlt: CSS.ColorProperty
  listContent: CSS.ColorProperty
  listHeader: CSS.ColorProperty
  // link: CSS.ColorProperty
  // success: CSS.ColorProperty
  // warning: CSS.ColorProperty
  // error: CSS.ColorProperty
  // heading: CSS.ColorProperty
  // text: CSS.ColorProperty
  // disabled: CSS.ColorProperty
  // border: CSS.ColorProperty
}

export interface ModeTypes {
  [Modes.light]: ThemeColors
  [Modes.dark]: ThemeColors
}

const mainColors = {
  blue: '#2780E3',
  indigo: '#6610f2',
  purple: '#613d7c',
  pink: '#e83e8c',
  red: '#FF0039',
  orange: '#f0ad4e',
  yellow: '#FF7518',
  green: '#3FB618',
  teal: '#20c997',
  cyan: '#9954BB'
}

const mains = {
  white: '#fff',
  gray100: '#f8f9fa',
  gray200: '#f7f7f9',
  gray300: '#eceeef',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#919aa1',
  gray700: '#55595c',
  gray800: '#343a40',
  gray900: '#1a1a1a',
  black: '#000',
  ...mainColors
}

const lightTheme = {
  ...mains,
  primary: mains.blue,
  text: mains.gray700, // added
  background: mains.gray100, // added
  secondary: mains.cyan, // added
  muted: mains.gray300, // added
  muted200: mains.gray400,
  mutedText: mains.gray600, // added
  gray: mains.gray700,
  logo: mains.gray700, // added
  logoActive: mains.white,
  headerActive: mains.gray900,
  headerMobile: mains.gray500,
  headerMobileActive: mains.gray200,
  headerMobileBg: mains.gray800,
  headerMobileBgActive: mains.gray400,
  /// GENERAL
  highlight: mains.pink, // added
  success: mains.green,
  info: mains.cyan,
  warning: mains.yellow,
  danger: mains.red,

  listBg: mains.gray300,
  listBgAlt: mains.gray500,
  listContent: mains.gray700,
  listHeader: mains.gray900
}

export const modes: ModeTypes = {
  [Modes.light]: {
    ...lightTheme
  },
  [Modes.dark]: {
    ...lightTheme,
    text: mains.gray400,
    logoActive: mains.gray300,
    headerActive: mains.gray300,
    headerMobile: mains.gray400,
    headerMobileActive: mains.gray200,
    headerMobileBg: mains.gray800,
    headerMobileBgActive: mains.gray300,

    logo: mains.gray400,
    background: mains.gray900,
    muted: mains.gray800,
    muted200: mains.gray700,
    mutedText: mains.gray600, // added
    gray: mains.gray600,
    listBg: mains.gray800,
    listBgAlt: mains.gray700,
    listContent: mains.gray600,
    listHeader: mains.gray100
  }
}

export const colors: ColorMode = {
  ...lightTheme
}
