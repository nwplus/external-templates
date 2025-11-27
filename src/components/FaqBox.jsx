import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'HK Grotesk', sans-serif;
  text-align: left;
  box-sizing: border-box;
  color: #123250;
  overflow: hidden;
  ${p =>
    p.expanded
      ? `
    font-weight: 600;
  `
      : `
  `}

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Top = styled.div`
  color: #123250;
  padding: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: -1.2px;
  ${p =>
    p.expanded &&
    `
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
  color: #123250;
  box-sizing: border-box;
  overflow: hidden;
    font-weight: 500;
  height: ${p => (p.isOpen ? 'auto' : '0')};
  visibility: ${p => (p.isOpen ? 'visible' : 'hidden')};
  opacity: ${p => (p.isOpen ? 1 : 0)};
  transition: opacity 0.2s ease;
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

const Plus = () => (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.005 13.6084H19.212M13.6085 8.00488V19.2119" stroke="#123250" strokeWidth="1.601" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.005 13.6084H19.212M13.6085 8.00488V19.2119" stroke="#123250" strokeWidth="1.601" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)

const Minus = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00488 13.6084H19.2119" stroke="#123250" strokeWidth="1.601" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)

const FaqBox = ({ question, answer, isExpanded, onExpand }) => (
  <Container expanded={isExpanded}>
    <Top expanded={isExpanded} onClick={onExpand}>
      {question}
      <TopExpand>
        {isExpanded ? <Minus /> : <Plus />}
      </TopExpand>
    </Top>
    <AnswerBox isOpen={isExpanded}>
      <Answer>{answer}</Answer>
    </AnswerBox>
  </Container>
)

export default FaqBox
