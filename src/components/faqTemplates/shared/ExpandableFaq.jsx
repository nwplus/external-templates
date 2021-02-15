import React, { useState } from 'react'
import styled from 'styled-components'
import { TABLET } from '@constants/measurements'
import { scale } from '@utilities/format'

const Accordion = styled.button`
  position: relative;
  width: 90%;
  display: block;
  margin: auto;
  cursor: pointer;
  text-align: left;
  outline: none;
  border: 0px;
  color: #4a5759;
  font-size: ${() => scale(320, 1440, 15, 20)};
  line-height: 23.44px;
  background-color: transparent;
  padding: 1vh 3.5vw 1vh 3.5vw;
  @media only screen and (max-width: ${TABLET}) {
    padding: 1vh 6vw 1vh 6vw;
  }
`

const FaqQuestionContainer = styled.div`
  font-weight: 700;
`

const FaqAnswerContainer = styled.div`
  display: ${p => (p.shouldDisplay ? 'block' : 'none')};
  font-weight: 400px;
  margin: 0.5vh auto 0 auto;
`
const LeftFaqDecor = styled.img`
  position: absolute;
  top: 1.2vh;
  left: 0px;
`
const RightFaqDecor = styled.img`
  transform: ${p => (p.shouldDisplay ? 'rotate( -180deg )' : 'none')};
  transition: transform 100ms ease;
  position: absolute;
  top: 1.2vh;
  right: 0px;
`

const ExpandableFaq = ({ question, answer, decor }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <Accordion onClick={() => toggleExpansion(!isExpanded)}>
      <LeftFaqDecor src={decor?.leftDecor} />
      <FaqQuestionContainer>{question}</FaqQuestionContainer>
      <RightFaqDecor src={decor?.rightDecor} shouldDisplay={isExpanded} />
      <FaqAnswerContainer shouldDisplay={isExpanded}>{answer}</FaqAnswerContainer>
    </Accordion>
  )
}

export default ExpandableFaq
