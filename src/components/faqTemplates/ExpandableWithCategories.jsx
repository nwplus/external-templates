import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledFaqBox = styled.div``

const ExpandableFaq = ({ question, answer }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  // const [width, setWidth] = useState()

  const FaqQuestionContainer = styled.div``

  const FaqAnswerContainer = styled.div`
    display: ${isExpanded ? 'block' : 'none'};
    overflow: hidden;
    border: 3px solid black;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: auto;
    margin-bottom: 2%;
  `

  const Accordion = styled.button`
    cursor: pointer;
    text-align: left;
    outline: none;
    border: 3px solid black;
    border-radius: 10px;
    background-color: transparent;
    border-bottom: ${isExpanded && 'none'};
    border-bottom-left-radius: ${isExpanded && '0px'};
    border-bottom-right-radius: ${isExpanded && '0px'};
    margin-bottom: ${isExpanded && '-1px'};
    padding-bottom: ${isExpanded && '10px'};
  `

  return (
    <>
      <Accordion onClick={() => toggleExpansion(!isExpanded)}>
        {/* <img src="expandArrow" alt="expand-arrow" /> */}
        <FaqQuestionContainer>{question}</FaqQuestionContainer>
      </Accordion>
      <FaqAnswerContainer display={isExpanded}>{answer}</FaqAnswerContainer>
    </>
  )
}

const FaqContainer = props => {
  const [generalBin, setGeneralBin] = useState([])
  const [logisticsBin, setLogisticsBin] = useState([])
  const [teamsBin, setTeamsBin] = useState([])

  const distributeFaq = faq => {
    faq.forEach(item => {
      switch (item.category) {
        case 'General':
          setGeneralBin([...generalBin, item])
          break
        case 'Logistics':
          setLogisticsBin([...logisticsBin, item])
          break
        case 'Teams & Projects':
          setTeamsBin([...teamsBin, item])
          break
        default:
          throw new Error(`FAQ category ${item.category} not found`)
      }
    })
  }

  const generalFaq = generalBin.map(({ question, answer }, idx) => (
    <StyledFaqBox key={idx}>
      <ExpandableFaq question={question} answer={answer} />
    </StyledFaqBox>
  ))
  const logisticsFaq = logisticsBin.map(({ question, answer }, idx) => (
    <StyledFaqBox key={idx}>
      <ExpandableFaq question={question} answer={answer} />
    </StyledFaqBox>
  ))
  const teamsFaq = teamsBin.map(({ question, answer }, idx) => (
    <StyledFaqBox key={idx}>
      <ExpandableFaq question={question} answer={answer} />
    </StyledFaqBox>
  ))

  useEffect(() => {
    try {
      const { faq } = props
      distributeFaq(faq)
    } catch (e) {
      console.error(e)
    }
  }, [props])

  return (
    <div className="columns">
      <div className="column column-left">{generalFaq}</div>
      <div className="column column-right">
        {logisticsFaq}
        {teamsFaq}
      </div>
    </div>
  )
}

export default FaqContainer
