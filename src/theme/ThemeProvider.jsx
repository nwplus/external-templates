import React from 'react'
import { ThemeProvider } from 'styled-components'

export const SCREEN_BREAKPOINTS = {
  xs: 576,
  mobile: 768,
  tablet: 992,
  tabletLarge: 1024,
  desktop: 1200,
}

const base = {
  colors: {
    background: '#2D2937',
    text: '#fff',
    primaryGradient: 'linear-gradient(92.58deg, #20FFAF 0%, #78FF96 100%)',
    disabled: 'rgba(255, 255, 255, 0.6)',
  },
  typography: {
    headerFont: 'HK Grotesk',
    bodyFont: 'HK Grotesk',
    header1: {
      fontWeight: 900,
      fontSize: '3.5em',
      lineHeight: '3.5em',
      letterSpacing: '0.025em',
    },
    header2: {
      fontWeight: 800,
      fontSize: '2.625em',
      lineHeight: '2.125em',
      letterSpacing: '0.02375em',
    },
    header3: {
      fontWeight: 600,
      fontSize: '2em',
      lineHeight: '1.75em',
      letterSpacing: '-0.01625em',
    },
    body: {
      fontWeight: 400,
      fontSize: '1.125em',
      lineHeight: '1.375em',
      letterSpacing: '-0.026875em',
    }
  },
  mediaQueries: {
    xs: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.xs}px)`,
    mobile: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.mobile}px)`,
    tablet: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tablet}px)`,
    tabletLarge: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tabletLarge}px)`,
    desktop: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.desktop}px)`,
  },
}

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={base}>{children}</ThemeProvider>
)

export default CustomThemeProvider;