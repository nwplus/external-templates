import React, { useState } from 'react'
import styled from 'styled-components'

const FaqAnswerContainer = styled.div`
  display: ${p => (p.shouldDisplay ? 'block' : 'none')};
  overflow: hidden;
  margin: auto;
  margin-bottom: 2%;
`

const Accordion = styled.button`
  width: 100%;
  cursor: pointer;
  text-align: left;
  outline: none;
  border: 0px;
  color: #4a5759;
  font-size: 18px;
  font-weight: 700;
  line-height: 23.44px;
  background-color: transparent;
  padding: 2vh 2vw 2vh 2vw;
`

const FaqQuestionContainer = styled.div``

const ExpandableFaq = ({ question, answer }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <Accordion onClick={() => toggleExpansion(!isExpanded)}>
      <FaqQuestionContainer>{question}</FaqQuestionContainer>
      <FaqAnswerContainer shouldDisplay={isExpanded}>{answer}</FaqAnswerContainer>
    </Accordion>
  )
}

export default ExpandableFaq
