import React from 'react';
import styled from "styled-components";
import BearPaw from '@components/icons/bearpaw';

const Container = styled.div`
  border-radius: 20px;
  background-color: ${p => p.theme.colors.boxBackground};
  color: ${p => p.theme.colors.altText};
  padding: 1.2em;
  transition: all 100ms;
  width: 240px;
  margin: 0.3em;
  text-align: left;

  &:hover{
    transform: scale(1.05);
  }
`

const Title = styled.b`
  display: block;
  font-size: 1.2em;
`

export default function FaqBox({ title, children }) {
  return (
    <Container>
      <BearPaw />
      <div>
        <Title>{title}</Title>
        {children}
      </div>
    </Container >
  )
}

