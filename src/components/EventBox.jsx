import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  background-color: #3D3F59;
  border-radius: 25px;
  height: 180px;
  width: 412px;
  word-wrap: break-word;
`

const Header = styled.div`
  display: flex;
  color: #FFFF;
  padding-top: 20px;
`

const Title = styled.h3`
  margin-left: 30px;
`

const Date = styled.h4`
  margin-left: auto;
  margin-right: 30px;
`

const Body = styled.p`
  color: #FFFF;
  margin: 20px 30px 0px 30px;
`

export default function EventBox({ title, dateString, body }) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Date>{dateString}</Date>
      </Header>
      <Body>{body}</Body>

    </Container>
  )
}
