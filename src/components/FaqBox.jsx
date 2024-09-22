/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  background: white;
  border: 1.5px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;

  ${p =>
    p.expanded
      ? `
    border-color: #752420;
  `
      : `
    border-color: #752420;
  `}

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Top = styled.div`
  color: #252525;
  padding: 1.1vw;
  font-size: 1.2vw;
  display: flex;
  justify-content: space-between;

  border-bottom: solid;
  margin-bottom: -1.2px;
  border-width: 1px;

  ${p =>
    p.expanded &&
    `
    color:#252525;
    background-color: #FFFFFF;
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
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.2s max-height cubic-bezier(0.6, 0, 0.4, 1);
  font-size: 1.2vw;

  ${p => (p.isOpen ? 'max-height:300px; overflow-y: auto; background-color: #7C0F3B;' : 'max-height: 0;')}

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2.4vw;
  }
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

const FaqBox = ({ question, answer, isExpanded, onExpand }) => {
  return (
    <Container expanded={isExpanded}>
      <Top expanded={isExpanded} onClick={onExpand}>
        {question}
        <TopExpand style={isExpanded ? { transform: 'rotate(0)' } : { transform: 'rotate(180deg)' }}>
          <Arrow color={isExpanded ? '#2C2543' : '#2C2543'} />
        </TopExpand>
      </Top>
      <AnswerBox isOpen={isExpanded}>
        <div style={{ padding: '1.1vw' }}>{answer}</div>
      </AnswerBox>
    </Container>
  )
}

export default FaqBox
