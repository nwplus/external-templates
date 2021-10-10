import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${p => p.backgroundColor}
  background: ${p => p.backgroundColor}
  height: ${p => p.height}
  width: ${p => p.width}
  border-radius: ${p => p.borderRadius}
`;

export default function Button({ backgroundColor, textColor, height, width, borderRadius, onClick, children }) {
  return (<StyledButton backgroundColor={backgroundColor} height={height} width={width} />)
}