import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background: ${p => p.isGradient ? 'linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%)' : p.backgroundColor};
  ${p => p.weight && `font-weight: ${p.weight};`}
  color: ${p => p.textColor ? p.textColor : p.theme.colors.text};  
  height: ${p => p.height};
  width: ${p => p.width};
  border-radius: ${p => p.borderRadius};
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

  ${(p) =>
    p.isHover &&
    `&:hover {
      color: ${p.backgroundColor};
      background: none;
      border: solid;
    }`
  }

  ${p =>
    p.disabled &&
    `{
      background: ${p.theme.colors.disabledButton};
      pointer-events: none;
    }`
  }
`;

const StyledButtonWrapper = styled.div`
  ${p => p.disabled && 'cursor: not-allowed;'}
`;

export default function Button({
  backgroundColor,
  textColor,
  height,
  width,
  borderRadius,
  children,
  fontSize,
  weight,
  href,
  target,
  disabled,
  isGradient = false,
  isHover = false }) {
  return (
    <StyledButtonWrapper disabled={disabled}>
      <StyledButton
        backgroundColor={backgroundColor}
        textColor={textColor}
        height={height}
        width={width}
        weight={weight}
        borderRadius={borderRadius}
        fontSize={fontSize}
        href={href}
        target={target}
        disabled={disabled}
        isGradient={isGradient}
        isHover={isHover}>
        {children}
      </StyledButton>
    </StyledButtonWrapper>
  )
}