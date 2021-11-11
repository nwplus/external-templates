import React from 'react'
import styled from "styled-components";
import { Body, Header3, Header4 } from "@components/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  height: 40%;
  width: min-content;
  margin-bottom: 1rem;
`

const Card = styled.div`
  background-color: #3D3F59;
  border-radius: 25px;
  min-width: 300px;
  padding: 20px 30px;
  
  ${p => p.theme.mediaQueries.mobile} {
    min-width:100%;
    margin-bottom:-10vh;
  }
`

export default function EventBox({ title, dateString, body, imgSrc, imgAlt, footer, link }) {
  return (
    <Container>
      <Image src={imgSrc} alt={imgAlt} />
      <Card>
        <Header3 as="a" href={link}>{title}</Header3>
        <Header4>{dateString}</Header4>
        <Body>{body}</Body>
      </Card>
      <Body>{footer}</Body>
    </Container>
  )
}
