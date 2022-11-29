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
        background-image: linear-gradient(90deg, #FFF8F5, #FFF8F5), linear-gradient(263.82deg, #9ea4fc 38.58%, #9bd3df 78.17%);
        background-clip: padding-box, border-box;
        background-origin: border-box;
        border: 3px solid transparent;
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

  @media (max-width: ${TABLET}) {
    margin-top: 10px;
  }
  
  &:hover {
    filter: brightness(0.95);
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }

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

  ${p => p && p.variant === 'solid' && `
    color: white;
    padding: calc(0.6rem + 6px) calc(2rem + 6px);
  `}
`

const Button = ({
  href,
  children,
  variant
}) => (
  <ButtonContainer variant={variant} href={href}>
    <ButtonText variant={variant}>{children}</ButtonText>
  </ButtonContainer>
)

export default Button