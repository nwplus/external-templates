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
  transition: 0.25s ease-in-out;
  
  ${(p) =>
    p.isHover &&
    `&:hover {
      color: ${p.secondary ? '#7BFFCF' : '#00A399'};
      background: ${p.secondary ? 'rgba(188, 252, 248, 0.15)' : 'linear-gradient(90deg, #D7FFF0 0%, #7BFFCF 100%)'};      
      border-color: #7BFFCF;
    }
    `
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