import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainer, Columns, Column } from '@lib/Containers'
import { Spacers } from '@lib/Helpers'

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

const TitleImg = styled.img`
  margin-bottom: ${p => p.marginBottom};
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

// FAQ Section with two columns with layout:
// General    Logistics
//            Teams & Projects
const FaqSection = props => {
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

  const renderFaq = list =>
    list.map(({ question, answer }, idx) => (
      <div key={idx}>
        <ExpandableFaq question={question} answer={answer} />
      </div>
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
    <SectionContainer width={props.config.containerWidth} margin={props.config.containerMargin}>
      <TitleImg
        src={props.config.titleImg}
        alt={props.config.titleAlt}
        marginBottom={props.config.marginBottomTitle}
      />
      <Spacers height={props.config.titleBottomSpacing} />
      <Columns>
        <Column>
          <div>General{renderFaq(generalBin)}</div>
        </Column>
        <Column>
          <div>
            Logistics
            {renderFaq(logisticsBin)}
            Teams &amp; Projects
            {renderFaq(teamsBin)}
          </div>{' '}
        </Column>
      </Columns>
    </SectionContainer>
  )
}

export default FaqSection
