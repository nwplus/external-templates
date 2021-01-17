import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainer, Columns, Column } from '@lib/Containers'
import { Spacers } from '@lib/Helpers'
import { ExpandableFaqList } from './shared/FaqList'

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
const ExpandableWithCategories = ({ faq, config }) => {
  const [generalBin, setGeneralBin] = useState([])
  const [logisticsBin, setLogisticsBin] = useState([])
  const [teamsBin, setTeamsBin] = useState([])

  const distributeFaq = faq => {
    faq.forEach(({ category, question, answer }) => {
      const reducedFaq = { question, answer }
      switch (category) {
        case 'General':
          setGeneralBin([...generalBin, reducedFaq])
          break
        case 'Logistics':
          setLogisticsBin([...logisticsBin, reducedFaq])
          break
        case 'Teams & Projects':
          setTeamsBin([...teamsBin, reducedFaq])
          break
        default:
          throw new Error(`FAQ category ${category} not found`)
      }
    })
  }

  useEffect(() => {
    try {
      distributeFaq(faq)
    } catch (e) {
      console.error(e)
    }
  }, [faq])

  return (
    <SectionContainer width={config.containerWidth} margin={config.containerMargin}>
      <TitleImg
        src={config.titleImg}
        alt={config.titleAlt}
        marginBottom={config.marginBottomTitle}
      />
      <Spacers height={config.titleBottomSpacing} />
      <Columns>
        <Column>
          General
          <ExpandableFaqList list={generalBin} />
        </Column>
        <Column>
          Logistics
          <ExpandableFaqList list={logisticsBin} />
          Teams &amp; Projects
          <ExpandableFaqList list={teamsBin} />
        </Column>
      </Columns>
    </SectionContainer>
  )
}

export default ExpandableWithCategories
