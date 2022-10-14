import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  background: ${p => p.secondary
    ? 'rgba(255, 183, 44, 0.15)'
    : p.backgroundColor};
  ${(p) => p.isOutline ? `border: solid; border-color: ${p.borderColor};` : 'border: none;'}
  margin: 10px;
  color: ${p => p.textColor};
  height: ${p => p.height};
  width: ${p => p.width};
  border-radius: ${p => p.borderRadius};
  display: flex;
  justify-content: center;
  font-size: 1.12rem;
  align-items: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    filter: brightness(0.9);
    color: ${p => p.textColor};
  }
  transition: filter 0.13s ease-in;
  ${(p) => p.secondary &&
    `border: solid;
    color: 'linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)';
    `
  }
  ${(p) =>
    p.isHover &&
    `&:hover {
      
    }`
  }
`

export default function Button({
  backgroundColor,
  textColor,
  height,
  width,
  borderRadius,
  children,
  fontSize,
  borderColor,
  href,
  secondary = false,
  isHover = false,
  isGradientText = false,
  isOutline = false
}) {
  return (
    <StyledButton
      href={href}
      backgroundColor={backgroundColor}
      textColor={textColor}
      height={height}
      width={width}
      borderRadius={borderRadius}
      fontSize={fontSize}
      borderColor={borderColor}
      secondary={secondary}
      isHover={isHover}
      isGradientText={isGradientText}
      isOutline={isOutline}>
      {children}
    </StyledButton>
  )
}
