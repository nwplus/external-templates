import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background: ${p => p.isMentor ? 'rgba(255, 183, 44, 0.15)' : 'linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)'};
  margin: 10px;
  color: ${p => p.textColor};  
  height: ${p => p.height};
  width: ${p => p.width};
  border-radius: ${p => p.borderRadius};
  font-weight: bold;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${p => p.textColor};
  }
  ${(p) => p.isMentor &&
    `border: solid;
    color: 'linear-gradient(180deg, #FFD12C 0%, #FE800B 100%)';
    `
  }  
  ${(p) =>
    p.isHover &&
    `&:hover {
      color: ${p.backgroundColor};
      background: none;
      border: solid;
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
  isMentor = false,
  isHover = false }) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      height={height}
      width={width}
      borderRadius={borderRadius}
      fontSize={fontSize}
      isMentor={isMentor}
      isHover={isHover}>
      {children}
    </StyledButton>
  )
}