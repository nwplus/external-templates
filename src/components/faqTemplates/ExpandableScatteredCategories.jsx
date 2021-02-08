import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground, Columns, Column } from '@lib/Containers'
import { Spacers } from '@lib/Helpers'
import { ExpandableFaqList } from './shared/FaqList'
import backgroundPlants from '@assets/faq__background_plants.svg'

const TitleImg = styled.img`
  margin-bottom: ${p => p.marginBottom};
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

const AdjustmentContainer = styled.div`
  margin: ${p => p.shift};
  background-color: #efedea;
  border: 5px solid #4a5759;
  border-radius: 8px;
`

const FaqTitle = styled.div`
  color: #192825;
  padding: 0.5vh 0 0.5vh 0;
  font-weight: 700;
  font-size: 19px;
  line-height: 21px;
  text-align: center;
  border-bottom: 5px solid #4a5759;
  background-color: #c8bfb6;
`

// FAQ Section with two columns with layout:
// General    Logistics
//            Teams & Projects
const ExpandableScatteredCategories = ({ faq, config }) => {
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
    <SectionContainerWithBackground
      width={config.containerWidth}
      margin={config.containerMargin}
      src={backgroundPlants}
    >
      <TitleImg
        src={config.titleImg}
        alt={config.titleAlt}
        marginBottom={config.marginBottomTitle}
      />
      <Spacers height={config.titleBottomSpacing} />
      <Columns>
        <Column>
          <AdjustmentContainer shift="2vh 9vh 0 3vh">
            <FaqTitle>general.faq</FaqTitle>
            <ExpandableFaqList list={categorizedFaqMap.get('General')} />
          </AdjustmentContainer>
        </Column>
        <Column>
          <AdjustmentContainer shift="0 2vw 0 6vw">
            <FaqTitle>teams&amp;projects.faq</FaqTitle>
            <ExpandableFaqList list={categorizedFaqMap.get('Teams & Projects')} />
          </AdjustmentContainer>
          <AdjustmentContainer shift="20vh 9vw 0 -8vh">
            <FaqTitle>logistics.faq</FaqTitle>
            <ExpandableFaqList list={categorizedFaqMap.get('Logistics')} />
          </AdjustmentContainer>
        </Column>
      </Columns>
    </SectionContainerWithBackground>
  )
}

export default ExpandableScatteredCategories
