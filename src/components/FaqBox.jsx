import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: "HK Grotesk", sans-serif;
  text-align:left;
  background: white;
  border:1.5px solid #FFF;
  border-radius:5px;
  box-sizing:border-box;
  overflow:hidden;
  border-color: #556888;
  
  &:not(:last-child) {
    margin-bottom: 1.75vh;
  }
`

const Top = styled.div`
  color: #433860;
  padding:1.5vh;
  color: #252525;
  font-family: "HK Grotesk";
  font-size: 1.76vh;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display:flex;
  justify-content:space-between;
  border-bottom:solid;
  margin-bottom:-1.2px;
  border-width:1px;
  border-radius:5px 5px 0 0;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.8rem;
    color: #433860;
    font-weight: 600;
  }
  &:hover {
    cursor:pointer;
  }
`

const AnswerBox = styled.div`
  color: white;
  box-sizing:border-box;
  overflow:hidden;
  transition:0.2s max-height cubic-bezier(.6,0,.4,1);
  border-radius: 0 0 2px 2px;
  color: #FFF;
  font-family: "HK Grotesk";
  font-size: 1.37vh;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${p => p.isOpen ? 'max-height:500px; background-color: #323E52; border:1px solid clear; padding: 1.5vh;' : 'max-height: 0;'}
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.9rem;
    font-weight: 500;
  }
`

const TopExpand = styled.div`
  display:flex;
  align-items:center;
  transition:0.2s transform cubic-bezier(.6,0,.4,1);
`

// style={{ transform: `rotate(${false ? '0deg' : ''});` }}

const Arrow = ({ color }) => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.3145 10L9.47162 2L1.62879 10" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FaqBox = ({ question, answer, isExpanded, onExpand }) => (
    <Container
      expanded={isExpanded}>
      <Top
        expanded={isExpanded}
        onClick={onExpand}>
        {question}
        <TopExpand style={isExpanded ? { transform: 'rotate(0)' } : { transform: 'rotate(180deg)' }}>
          <Arrow color='#2C2543' />
        </TopExpand>
      </Top>
      <AnswerBox isOpen={isExpanded}>
        {answer}
      </AnswerBox>
    </Container>
  )

export default FaqBox