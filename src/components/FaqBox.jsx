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
  ${p => p.expanded
    ? `
    border-color: #FFFFFF;
  `
    : `
    border-color: #CE7A68;
  `}
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Top = styled.div`
  color: #433860;
  padding:1rem;
  font-size:1.2rem;
  display:flex;
  justify-content:space-between;
  border-bottom:solid;
  margin-bottom:-1.2px;
  font-weight: 400;
  border-width:1px;
  border-radius:5px 5px 0 0;
  ${p => p.expanded && `
    color:#FFF;
    background-color: #CE7A68;
    border: 1px solid white;
  `}
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.8rem;
    color: ${p => p.expanded ? '#FFFFFF' : '#433860'};
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
  border-radius: 0 0 5px 5px;
  font-weight: 700;
  ${p => p.isOpen ? 'max-height:500px; background-color: #95574E; border:1px solid white; padding: 1rem;' : 'max-height: 0;'}
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

const FaqBox = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Container
      expanded={isExpanded}>
      <Top
        expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}>
        {question}
        <TopExpand style={isExpanded ? { transform: 'rotate(0)' } : { transform: 'rotate(180deg)' }}>
          <Arrow color={isExpanded ? '#FFFFFF' : '#2C2543'} />
        </TopExpand>
      </Top>
      <AnswerBox isOpen={isExpanded}>
        {answer}
      </AnswerBox>
    </Container>
  )
}

export default FaqBox