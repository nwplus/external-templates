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

const ParentContainer = styled.div`
  position: relative;
`

const PositionBlock = styled.div`
  top: ${p => p.top};
  left: ${p => p.left};
  right: ${p => p.right};
  bottom: ${p => p.top};
  position: absolute;
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
      <ParentContainer>
        <PositionBlock>
          General
          <ExpandableFaqList list={categorizedFaqMap.get('General')} />
        </PositionBlock>
        <PositionBlock>
          Logistics
          <ExpandableFaqList list={categorizedFaqMap.get('Logistics')} />
        </PositionBlock>
        <PositionBlock>
          Teams &amp; Projects
          <ExpandableFaqList list={categorizedFaqMap.get('Teams & Projects')} />
        </PositionBlock>
      </ParentContainer>
    </SectionContainer>
  )
}

export default ExpandableWithCategories
