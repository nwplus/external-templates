import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${p => p.isGradient ? 'linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%)' : p.backgroundColor};
  color: ${p => p.textColor};  
  height: ${p => p.height};
  width: ${p => p.width};
  border-radius: ${p => p.borderRadius};
  border: none;

  ${p => {
    if (p.isHover) return
    `&:hover {
      color: #224B5C;
      background: none;
    }
    `
  }}

  ${p => !p.isHover} {
    &:hover {
      color: #224B5C;
      background: none;
    }
  }
`;

export default function Button({ backgroundColor, textColor, height, width, borderRadius, onClick, children, fontSize, isGradient = false, isHover = false }) {
  return (
    <StyledButton backgroundColor={backgroundColor} textColor={textColor} height={height} width={width} borderRadius={borderRadius} fontSize={fontSize} isGradient={isGradient} isHover={isHover}>
      {children}
    </StyledButton>
  )
}