import React from 'react'
import styled from "styled-components";
import { Body, Header3 } from "@components/Typography";

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
`

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #FFFF;
`

const Date = styled.h4`
`

export default function EventBox({ title, dateString, body, imgSrc, imgAlt }) {
  return (
    <Container>
      <Image src={imgSrc} alt={imgAlt} />
      <Card>
        <Header>
          <Header3>{title}</Header3>
          <Date>
            <Header3>{dateString}</Header3>
          </Date>
        </Header>
        <Body>{body}</Body>
      </Card>
    </Container>
  )
}
