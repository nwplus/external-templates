import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground, Columns, Column } from '@lib/Containers'
import { Spacers } from '@lib/Helpers'
import { ExpandableFaqList } from './shared/FaqList'
import backgroundPlants from '@assets/faq__background_plants.svg'
import titleOptions from '@assets/faq__title_options.svg'
import questionLeftDecor from '@assets/faq__question_leftdecor.svg'
import questionRightDecor from '@assets/faq__question_rightdecor.svg'

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
  position: relative;
  z-index: 0;
  color: #192825;
  padding: 0.5vh 0 0.5vh 0;
  font-weight: 700;
  font-size: 19px;
  line-height: 21px;
  text-align: center;
  border-bottom: 5px solid #4a5759;
  background-color: #c8bfb6;
`

const FaqTitleBackground = styled.img`
  position: absolute;
  top: 8px;
  right: 1vw;
`

// FAQ Section with two columns and scattered layout:
// General    Logistics
//          Teams & Projects
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
          <AdjustmentContainer shift="2vh 4vw 0 4vw">
            <FaqTitle>
              general.faq
              <FaqTitleBackground src={titleOptions} />
            </FaqTitle>
            <ExpandableFaqList
              list={categorizedFaqMap.get('General')}
              decor={{ leftDecor: questionLeftDecor, rightDecor: questionRightDecor }}
            />
          </AdjustmentContainer>
        </Column>
        <Column>
          <AdjustmentContainer shift="0 3vw 0 5vw">
            <FaqTitle>
              teams&amp;projects.faq
              <FaqTitleBackground src={titleOptions} />
            </FaqTitle>
            <ExpandableFaqList
              list={categorizedFaqMap.get('Teams & Projects')}
              decor={{ leftDecor: questionLeftDecor, rightDecor: questionRightDecor }}
            />
          </AdjustmentContainer>
          <AdjustmentContainer shift="20vh 7vw 0 -5vw">
            <FaqTitle>
              logistics.faq
              <FaqTitleBackground src={titleOptions} />
            </FaqTitle>
            <ExpandableFaqList
              list={categorizedFaqMap.get('Logistics')}
              decor={{ leftDecor: questionLeftDecor, rightDecor: questionRightDecor }}
            />
          </AdjustmentContainer>
        </Column>
      </Columns>
    </SectionContainerWithBackground>
  )
}

export default ExpandableScatteredCategories
