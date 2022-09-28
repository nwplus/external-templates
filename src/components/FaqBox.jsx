import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align:left;
  background: white;
  border:1.5px solid #FFF;
  border-radius:5px;
  box-sizing:border-box;
  overflow:hidden;

  ${p => p.expanded ? `
    border-color: #FFF;
  ` : `
    border-color: #78FF96;
  `}
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Top = styled.div`
  color:#252525;
  padding:1rem;
  font-size:1.2rem;
  display:flex;
  justify-content:space-between;

  border-bottom:solid;
  margin-bottom:-1.2px;
  border-width:1px;

  ${p => p.expanded && `
    color:#FFF;
    background-color: #DB693B;
  `}
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.8rem;
  }

  &:hover {
    cursor:pointer;
  }
`;

const AnswerBox = styled.div`

  box-sizing:border-box;
  overflow:hidden;
  transition:0.2s max-height cubic-bezier(.6,0,.4,1);

  ${p => p.isOpen ? 'max-height:500px; background-color: #FF9D66;' : 'max-height: 0;'}

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.9rem;
  }
`;

const TopExpand = styled.div`
  display:flex;
  align-items:center;
  transition:0.2s transform cubic-bezier(.6,0,.4,1);
`;

// style={{ transform: `rotate(${false ? '0deg' : ''});` }}

const Arrow = ({ color }) => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.3145 10L9.47162 2L1.62879 10" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FaqBox = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div style={{ padding: '1rem' }}>
          {answer}
        </div>
      </AnswerBox>
    </Container>
  );
}

export default FaqBox;