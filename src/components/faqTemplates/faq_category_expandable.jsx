import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledFaqBox = styled.div``

const ExpandableFaq = () => {}

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
      {question} {answer}
    </StyledFaqBox>
  ))
  const logisticsFaq = logisticsBin.map(({ question, answer }, idx) => (
    <StyledFaqBox key={idx}>
      {question} {answer}
    </StyledFaqBox>
  ))
  const teamsFaq = teamsBin.map(({ question, answer }, idx) => (
    <StyledFaqBox key={idx}>
      {question} {answer}
    </StyledFaqBox>
  ))

  useEffect(() => {
    try {
      const { faq } = props
      const faqObj = JSON.parse(faq)
      distributeFaq(faqObj)
    } catch (e) {
      console.error(e)
    }
  }, [props])

  return (
    <>
      <p>{generalFaq}</p>
      <p>{logisticsFaq}</p>
      <p>{teamsFaq}</p>
    </>
  )
}

export default FaqContainer
