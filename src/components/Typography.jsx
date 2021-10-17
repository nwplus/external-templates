import styled, { css } from 'styled-components';

// mixins
const align = css`
  ${(p) => p.align ? `text-align: ${p.align}` : ''};
`

const underline = css`
  ${(p) =>
    p.underline &&
    'text-decoration: underline;'
  }
`

const hover = css`
  ${(p) =>
    p.hover &&
    `&:hover {
      cursor: pointer;
      color: ${p.theme.colors.primary}
    }`
}
`

// can manually override
// props:
//  background  -> override background
//  color       -> override colour
//  withGradien -> use gradient
const text = css`
  ${(p) => p.background && `background: ${p.background}`};
  ${(p) => p.color && `color: ${p.color}`};
    ${(p) => `
    font-family: ${p.theme.typography.bodyFont}
  `}
  ${(p) =>
    p.withGradient &&
    `background: ${p.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`}
  ${align}
`;

const header = css`
  ${(p) => `
    font-family: ${p.theme.typography.headerFont}
  `}
`

// definitions
export const LargeTitle = styled.h1.attrs((p) => ({
    color: p.color || p.theme.colors.secondary,
    ...p.theme.typography.largeTitle,
}))`
  ${text}
  ${header}
`;

export const Title1 = styled.h1.attrs((p) => ({
    color: p.color || p.theme.colors.secondary,
}))`
  ${text}
  ${header}
  ${underline}
  ${hover}
`;

export const Title2 = styled.h2.attrs((p) => ({
    color: p.color || p.theme.colors.secondary,
}))`
  ${text}
  ${header}
`;

export const Body = styled.p.attrs((p) => ({
    color: p.color || p.theme.colors.text,
}))`
  ${text}
`;
