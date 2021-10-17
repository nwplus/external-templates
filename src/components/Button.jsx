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

  visibility: ${(p) => p.shouldRender === null ? 'hidden' : 'visible'};
  opacity: ${(p) => p.shouldRender === null ? '0' : '1'};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;


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
    `
    {
      pointer-events: none;
      cursor: not-allowed;
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
  weight,
  href,
  target,
  disabled,
  shouldRender,
  isGradient = false,
  isHover = false }) {
  return (
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
      shouldRender={shouldRender}
      isGradient={isGradient}
      isHover={isHover}>
      {children}
    </StyledButton>
  )
}