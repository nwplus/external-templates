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
  border: 3px solid black;
  border-radius: 10px;
  background-color: transparent;
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
