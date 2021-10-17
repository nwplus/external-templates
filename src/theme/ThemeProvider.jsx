import React from 'react'
import { ThemeProvider } from 'styled-components'

const SCREEN_BREAKPOINTS = {
    xs: 576,
    mobile: 768,
    tablet: 992,
    tabletLarge: 1024,
    desktop: 1200,
}

const base = {
    colors: {
        background: 'black',
        text: '#2D2937',
        gradient: '-webkit-linear-gradient(92deg, #19cbcb 1.55%, #78ff96 100%);',
    },
    typography: {
        headerFont: 'HK Grotesk',
        bodyFont: 'HK Grotesk',
        largeTitle: {
            fontWeight: 900,
            fontSize: '4em',
            lineHeight: '4em',
            letterSpacing: 'normal',
        },
        title1: {
            fontWeight: 800,
            fontSize: '3em',
            lineHeight: '3em',
            letterSpacing: 'normal',
        },
        title2: {
            fontWeight: 500,
            fontSize: '2em',
            lineHeight: '2em',
            letterSpacing: 'normal',
        },
        body: {
            fontWeight: 'normal',
            fontSize: '1em',
            lineHeight: '1em',
            letterSpacing: 'normal',
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