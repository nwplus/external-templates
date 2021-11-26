import React from "react";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
width:'130px'
      height:'45px'
padding:11px 21px;
  border-radius:50px;
  font-weight:normal;
  background: linear-gradient(180deg, #FFD12C 0%, #FE800B 100%);
  color: #224260;

&::before {
  display:flex;
    align-items:center;
    justify-content:center;
    content: "Apply Now";
    color:#00A399;
    
    border-radius:50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;
    
    background: linear-gradient(90deg, #D7FFF0 0%, #7BFFCF 100%);
}

&:hover {
  cursor:pointer;
}

&:hover::before {
  opacity: 1;
}
`
const StyledButton2 = styled.a`
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
      color: ${p.secondary ? p.borderColor : '#00A399'};
      background: ${p.isGradientText ? 'linear-gradient(90deg, #D7FFF0 0%, #7BFFCF 100%)' : "none"};      
      opacity: 1;
    }
    
    &:hover::before {
      opacity: 0;
    }
    `
  }
`;

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
      color: ${p.secondary ? 'linear-gradient(90deg, #D7FFF0 0%, #7BFFCF 100%)' : '#00A399'};
      background: ${p.secondary ? 'rgba(188, 252, 248, 0.15)' : 'linear-gradient(90deg, #D7FFF0 0%, #7BFFCF 100%)'};      
      border-color: linear-gradient(90deg, #D7FFF0 0%, #7BFFCF 100%);
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
    // <StyledButtonContainer>Apply Now!</StyledButtonContainer>
  )
}