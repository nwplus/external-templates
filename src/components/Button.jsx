import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background: ${p => p.secondary
    ? 'rgba(255, 183, 44, 0.15)'
    : 'linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)'};
  ${(p) => p.isOutline ? `border: solid; border-color: ${p.borderColor};` : `border: none;`}
  margin: 10px;
  color: ${p => p.textColor};
  height: ${p => p.height};
  width: ${p => p.width};
  border-radius: ${p => p.borderRadius};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${p => p.textColor};
  }
  ${(p) => p.secondary &&
    `border: solid;
    color: 'linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)';
    `
  }
  ${(p) =>
    p.isHover &&
    `&:hover {
      color: ${p.isOutline ? p.borderColor : p.backgroundColor};
      background: ${p.isGradientText ? p.backgroundColor : "none"};
      border: solid;
      ${p.borderColor && `border-color: ${p.borderColor};`}
      ${p.isGradientText && `-webkit-background-clip: text; -webkit-text-fill-color: transparent;`}
    }`
  }
`;

export default function Button({
  backgroundColor,
  textColor,
  height,
  width,
  borderRadius,
  children,
  fontSize,
  borderColor,
  secondary = false,
  isHover = false,
  isGradientText = false,
  isOutline = false, }) {
  return (
    <StyledButton
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