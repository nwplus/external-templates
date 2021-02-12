import React from 'react'
import styled from 'styled-components'
import btns from '@assets/btns.svg'

const WindowContainer = styled.div`
  max-width: 700px;
  background-color: #efedea;
  margin: auto;
  border: 4px solid #4a5759;
  border-radius: 4px;
`

const Header = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 4px solid #4a5759;
  padding: 4px;
  background-color: #c8bfb6;
`

const Body = styled.div`
  text-align: center;
  padding: 2em;
`

const BtnsImg = styled.img`
  position: absolute;
  right: 0.5em;
`

const Footer = ({ title, children }) => (
  <WindowContainer>
    <Header>
      {title}
      <BtnsImg src={btns} />
    </Header>
    <Body>{children}</Body>
  </WindowContainer>
)

export default Footer
