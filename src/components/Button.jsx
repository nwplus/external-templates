import { TABLET } from '@constants/measurements'
import React from 'react'
import styled from 'styled-components'

const getButtonStyles = variant => {
  switch (variant) {
    case 'solid':
      return `
        border: none;
        background: #DCB551;
        transition: 0.3s;
        box-shadow: -4px 4px 0px 0px #142E3D;

        &:hover {
          box-shadow: -12px 12px 0px 0px #142E3D;
        }
      `
    case 'outlined':
      return `
        border: none;
        background: #F3F5F4;
        transition: 0.3s;
        box-shadow: -4px 4px 0px 0px #142E3D;

        &:hover {
          box-shadow: -12px 12px 0px 0px #142E3D;
        }
      `
    case `solidRed`:
      return `
        border: none;
        background: #AA4245;
        transition: 0.3s;
        box-shadow: -4px 4px 0px 0px #142E3D;

        &:hover {
          box-shadow: -12px 12px 0px 0px #142E3D;
        }
      `
    default:
      break
  }
  return ``
}

const ButtonContainer = styled.a`
  transition: all 0.2s cubic-bezier(0.03, 0.49, 0.39, 0.97);
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
  &:hover {
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
  color: #142E3D;
  padding: 0.75rem 2rem;
  white-space: nowrap;

  ${p =>
    p &&
    p.variant === 'outlined' &&
    `
    &:hover {
      color: #142E3D;
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
    color: #142E3D;
  `}
  
  ${p =>
    p &&
    p.variant === 'solidRed' &&
    `
    color: #F3F5F4;
  `}

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.1rem;
    padding: 0.5rem 2rem;
    min-width: 260px;
    text-align: center;
    padding: calc(0.5rem + 3px) calc(2rem + 3px);
    min-width: calc(260px + 0.5rem);

    ${p =>
    p &&
    p.variant === 'solid' &&
    `
    color: #142E3D;
  `}
  }
`

const Button = ({ href, children, variant, disabled }) => (
  <ButtonContainer variant={variant} href={disabled ? '#' : href} disabled={disabled} target="_blank">
    <ButtonText variant={variant} disabled={disabled}>
      {disabled ? 'Applications Open Dec. 5' : children}
    </ButtonText>
  </ButtonContainer>
)

export default Button
