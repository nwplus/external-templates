import styled, { css } from 'styled-components';

// mixins
const align = css`
  ${(p) => p.align ? `text-align: ${p.align};` : ''}
`;

// can manually override
const text = css`
  ${(p) => p.background && `background: ${p.background};`}
  ${(p) => `color: ${p.color || p.theme.colors.text};`}
    ${(p) => `
    font-family: ${p.theme.typography.bodyFont};
  `}
  ${(p) => p.isGradient && `-webkit-background-clip: text; -webkit-text-fill-color: transparent;`}
  ${align}
`;

const header = ({
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
}) => css`
  ${(p) => `
    font-family: ${p.theme.typography.headerFont};
  `}
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`;


// definitions
export const Header1 = styled.h1`
  ${text}
  ${(p) => header(p.theme.typography.header1)}
`;

export const Header2 = styled.h2`
  ${text}
  ${(p) => header(p.theme.typography.header2)}
`;

export const Header3 = styled.h3`
  ${text}
  ${(p) => header(p.theme.typography.header3)}
`;

export const Body = styled.p`
  ${text}
`;