import { TABLET } from '@constants/measurements'
import React from 'react'
import styled from 'styled-components'

const getButtonStyles = variant => {
  switch (variant) {
    case 'solid':
      return `
        border: none;
        background: linear-gradient(to right, #88B8E2 3.67%, #ACCFEB 100%);
        transition: 0.3s;

        &:hover {
          filter: brightness(0.95);
        }

      `
    case 'outlined':
      return `
        box-sizing: border-box;
        background: transparent;
        background-image: linear-gradient(0deg, #FFF8F5, #FFF8F5), linear-gradient(to right, #88B8E2 3.67%, #ACCFEB 100%);
        background-clip: padding-box, border-box;
        background-origin: border-box;
        transition: 0.3s;
        border: 3px solid transparent;
        
        ${p => p.theme.mediaQueries.mobile} {
          border: 2px solid transparent;
        }

        &:hover {
          filter: brightness(0.95);
        }
      `
    default:
      break
  }
  return ``
}

const ButtonContainer = styled.a`
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  display: table;
  text-decoration: none;
  border-radius: 12px;
  user-select: none;

  ${p =>
    p.disabled &&
    `
    cursor: default;
    background: #CCC !important;
  `}

  @media (max-width: ${TABLET}) {
    margin-top: 10px;
  }

  ${p => p.theme.mediaQueries.mobile} {
    border-radius: 5px;
  }

  ${p =>
    !p.disabled &&
    `
  &:active {
    transform: scale(0.98);
  }

  `}
  ${p => p && getButtonStyles(p.variant)}
  ${p => p.styles}
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

  ${p =>
    p &&
    p.variant === 'outlined' &&
    `
    color: #88B8E2;
    &:hover {
      color: #88B8E2;
    }
  `}

  ${p =>
    p.disabled &&
    `
    cursor: default;
    color: grey !important;
  `}

  ${p =>
    p &&
    p.variant === 'solid' &&
    `
    color: white;
    padding: calc(0.6rem + 6px) calc(2rem + 6px);
  `}
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.1rem;
    padding: 0.5rem 2rem;
    min-width: 260px;
    text-align: center;

    ${p =>
      p &&
      p.variant === 'solid' &&
      `
    color: white;
    padding: calc(0.5rem + 3px) calc(2rem + 3px);
    min-width: calc(260px + 0.5rem);
  `}
  }
`

const Button = ({ href, children, variant, disabled, styles }) => (
  <ButtonContainer variant={variant} href={disabled ? '#' : href} disabled={disabled} style={styles}>
    <ButtonText variant={variant} disabled={disabled}>
      {disabled ? 'Applications Open Dec. 5' : children}
    </ButtonText>
  </ButtonContainer>
)

export default Button
