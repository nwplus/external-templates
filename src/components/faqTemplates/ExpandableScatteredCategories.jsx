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

const AdjustmentContainer = styled.div`
  margin: ${p => p.shift};
`

// FAQ Section with two columns with layout:
// General    Logistics
//            Teams & Projects
const ExpandableWithCategories = ({ faq, config }) => {
  const [categorizedFaqMap, setFaqMap] = useState(new Map())

  const categorizeFaq = faq => {
    faq.forEach(({ category, question, answer }) => {
      const reducedFaq = { question, answer }

      const currFaqList = categorizedFaqMap.get(category)
      const updatedFaqList = currFaqList ? [reducedFaq, ...currFaqList] : [reducedFaq]

      const updatedMap = categorizedFaqMap.set(category, updatedFaqList)
      setFaqMap(new Map(updatedMap))
    })
  }

  useEffect(() => {
    categorizeFaq(faq)
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
          <AdjustmentContainer shift="2vh 0 0 -1vh">
            General
            <ExpandableFaqList list={categorizedFaqMap.get('General')} />
          </AdjustmentContainer>
        </Column>
        <Column>
          <AdjustmentContainer shift="0 0 0 2vh">
            Logistics
            <ExpandableFaqList list={categorizedFaqMap.get('Logistics')} />
          </AdjustmentContainer>
          <AdjustmentContainer shift="2vh 0 0 0vh">
            Teams &amp; Projects
            <ExpandableFaqList list={categorizedFaqMap.get('Teams & Projects')} />
          </AdjustmentContainer>
        </Column>
      </Columns>
    </SectionContainer>
  )
}

export default ExpandableWithCategories
