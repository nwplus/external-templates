import { TABLET } from '@constants/measurements'
import React from 'react'
import styled from 'styled-components'

const getButtonStyles = (variant) => {
  switch (variant) {
    case 'solid':
      return `
        border: none;
        background: linear-gradient(265.48deg, #959afb 3.67%, #9ad4de 78.93%);
      `
    case 'outlined':
      return `
        box-sizing: border-box;
        background: transparent;
        background-image: linear-gradient(90deg, #F9E9E2, #F9E9E2), linear-gradient(263.82deg, #9ea4fc 38.58%, #9bd3df 78.17%);
        background-clip: padding-box, border-box;
        background-origin: border-box;
        border: 3px solid transparent;

        ${(p) => p.theme.mediaQueries.mobile} {
          border: 1.5px solid transparent;
        }
      `
    default:
      break;
  }
  return ``
}

const ButtonContainer = styled.a`
  transition: all 0.2s cubic-bezier(.03,.49,.39,.97);
  position: relative;
  cursor: pointer;
  display: table;
  text-decoration: none;
  border-radius: 12px;
  user-select: none;

  ${p => p.disabled && `
    cursor: default;
    background: #CCC !important;
  `}

  @media (max-width: ${TABLET}) {
    margin-top: 10px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    border-radius: 5px;
  }

  ${p => !p.disabled && `
  &:hover {
    filter: brightness(0.95);
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }

  `}
  ${p => p && getButtonStyles(p.variant)}
`

const ButtonText = styled.div`
  font-family: 'HK Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 26px;

  letter-spacing: -0.5px;
  background-clip: text;
  -webkit-background-clip: text;
  color: #8486e4;
  padding: 0.75rem 2rem;
  white-space: nowrap;

  ${p => p.disabled && `
    cursor: default;
    color: grey !important;
  `}

  ${p => p && p.variant === 'solid' && `
    color: white;
    padding: calc(0.6rem + 6px) calc(2rem + 6px);
  `}
  
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 1.1rem;
    padding: 0.5rem 2rem;
    min-width: 260px;
    text-align: center;

  ${p => p && p.variant === 'solid' && `
    color: white;
    padding: calc(0.5rem + 3px) calc(2rem + 3px);
    min-width: calc(260px + 0.5rem);
  `}
  }
`

const Button = ({
  href,
  children,
  variant,
  disabled
}) => (
  <ButtonContainer variant={variant} href={disabled ? '#' : href} disabled={disabled}>
    <ButtonText variant={variant} disabled={disabled}>{disabled ? 'Applications Open Dec. 5' : children}</ButtonText>
  </ButtonContainer>
)

export default Button