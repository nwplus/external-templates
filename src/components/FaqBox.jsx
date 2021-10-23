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


const BoxContent = styled.div`

`


export default function FaqBox({ title = "AHDSJDAKSKDKKKK JASJDJ", description = "asdasd", children }) {
  return (
    <Container>
      <BearPaw />
      <BoxContent>
        <b>{title}</b>
        <br />
        {description}
      </BoxContent>
    </Container >
  )
}

