import React from 'react'
import { ThemeProvider } from 'styled-components'

export const SCREEN_BREAKPOINTS = {
  xs: 576,
  mobile: 768,
  tablet: 992,
  tabletLarge: 1024,
  desktop: 1200,
  desktopLarge: 1440,
  xl: 1700,
  xxl: 2000,
  xxxl: 2500
}

const base = {
  colors: {
    background: '#3B7580',
    text: '#FFFFFF',
    primary: '#1D4CBD',
    light: '#D0FFFF',
    mobileBackground: 'linear-gradient(to bottom, rgba(81, 152, 158, 1), rgba(5, 20, 57, 1))'
  },
  typography: {
    headerFont: 'HK Grotesk',
    bodyFont: 'HK Grotesk',
    header1: {
      fontWeight: 700,
      fontSize: '2.2rem',
      lineHeight: '2.5rem',
      letterSpacing: '-0.05rem'
    },
    header2: {
      fontWeight: 800,
      fontSize: '2.625rem',
      lineHeight: '2.125rem',
      letterSpacing: '0.02375rem'
    },
    header3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: '1.75rem',
      letterSpacing: '-0.01625rem'
    },
    header4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: '1.5625rem',
      letterSpacing: '-0.028125rem'
    },
    body: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: '1.375rem',
      letterSpacing: '-0.026875rem'
    }
  },
  mediaQueries: {
    xs: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.xs}px)`,
    mobile: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.mobile}px)`,
    tablet: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tablet}px)`,
    tabletLarge: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tabletLarge}px)`,
    desktop: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.desktop}px)`,
    desktopLarge: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.desktopLarge}px)`,
    xl: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.xl}px)`,
    xxl: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.xxl}px)`,
    xxxl: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.xxxl}px)`
  },
  transition: {
    small: 'all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)'
  }
}

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={base}>{children}</ThemeProvider>
)

export default CustomThemeProvider