import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'HK Grotesk', sans-serif;
  text-align: left;
  background: white;
  border: 1.5px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  ${p =>
    p.expanded
      ? `
    border-color: #4B1B1B;
  `
      : `
    border-color: #4B1B1B;
  `}

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Top = styled.div`
  color: #252525;
  padding: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: solid;
  margin-bottom: -1.2px;
  font-weight: 700;
  border-width: 1px;
  border-radius: 5px 5px 0 0;
  ${p =>
    p.expanded &&
    `
    color:#252525;
    background-color: #FFF;
  `}

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.8rem;
  }
  &:hover {
    cursor: pointer;
  }
`

const AnswerBox = styled.div`
  color: white;
  box-sizing: border-box;
  overflow: hidden;
  height: ${p => (p.isOpen ? 'auto' : '0')};
  visibility: ${p => (p.isOpen ? 'visible' : 'hidden')};
  opacity: ${p => (p.isOpen ? 1 : 0)};
  transition: opacity 0.2s ease;
  background-color: #883030;
  border-radius: 0 0 5px 5px;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.9rem;
  }
`

const Answer = styled.div`
  padding: 1rem;
  height: fit-content;
`

const TopExpand = styled.div`
  display: flex;
  align-items: center;
  transition: 0.2s transform cubic-bezier(0.6, 0, 0.4, 1);
`

// style={{ transform: `rotate(${false ? '0deg' : ''});` }}

const Arrow = ({ color }) => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.3145 10L9.47162 2L1.62879 10"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const FaqBox = ({ question, answer, isExpanded, onExpand }) => (
  <Container expanded={isExpanded}>
    <Top expanded={isExpanded} onClick={onExpand}>
      {question}
      <TopExpand style={isExpanded ? { transform: 'rotate(180deg)' } : { transform: 'rotate(270deg)' }}>
        <Arrow color={isExpanded ? '#252525' : '#2C2543'} />
      </TopExpand>
    </Top>
    <AnswerBox isOpen={isExpanded}>
      <Answer>{answer}</Answer>
    </AnswerBox>
  </Container>
)

export default FaqBox
