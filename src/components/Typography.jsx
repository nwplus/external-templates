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
const text = css`
  ${(p) => p.background && `background: ${p.background}`};
  ${(p) => `color: ${p.color || p.theme.colors.text}`};
    ${(p) => `
    font-family: ${p.theme.typography.bodyFont}
  `}
  ${align}
`;

const header = ({
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
}) => css`
  ${(p) => `
    font-family: ${p.theme.typography.headerFont}
  `}
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  letterSpacing: ${letterSpacing};
`


// definitions
export const LargeTitle = styled.h1`
  ${text}
  ${(p) => header(p.theme.typography.largeTitle)}
`;

export const Title1 = styled.h1`
  ${text}
  ${(p) => header(p.theme.typography.title1)}
  ${underline}
  ${hover}
`;

export const Title2 = styled.h2`
  ${text}
  ${(p) => header(p.theme.typography.title2)}
`;

export const Body = styled.p`
  ${text}
`;
