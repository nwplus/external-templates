import React from 'react'
import styled from "styled-components";
import { Body, Header3 } from "@components/Typography";

const Container = styled.div`
  background-color: #3D3F59;
  border-radius: 25px;
  height: 180px;
  width: 412px;
  word-wrap: break-word;
`

const TextContainer = styled.div`
  margin-left: 30px;
`

const Header = styled.div`
  display: flex;
  color: #FFFF;
  padding-top: 20px;
`

const Date = styled.h4`
  margin-left: auto;
  margin-right: 30px;
`

export default function EventBox({ title, dateString, body }) {
  return (
    <Container>
      <TextContainer>
        <Header>
          <Header3>{title}</Header3>
          <Date>
            <Header3>{dateString}</Header3>
          </Date>
        </Header>
        <Body>{body}</Body>
      </TextContainer>
    </Container>
  )
}
