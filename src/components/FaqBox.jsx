import React from 'react';
import styled from "styled-components";
import BearPaw from '@components/icons/bearpaw';

const Container = styled.div`
  border-radius: 20px;
  background-color: ${p => p.theme.colors.boxBackground};
  padding: 1em;
  transition: all 100ms;

  color: ${p => p.theme.colors.altText};

  &:hover{
    transform: scale(1.05);
  }
`

const Title = styled.b`
  display: block;
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

