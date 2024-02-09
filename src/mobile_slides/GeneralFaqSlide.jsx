import styled from "styled-components";
import Slide from "./Slide";

import React, { useState, useEffect } from 'react'
import fireDb from '@utilities/firebase'
import FaqBox from '@components/FaqBox'
import { Header3 } from '@components/Typography'
import Anchor from '@components/Anchor'

const Title = styled.p`
  margin-top: 4rem;
  margin-left: 2rem;
  margin-right: 2rem;

  color: #202020;
  text-align: center;
  font-family: "Yatra One";
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`

const FaqContainer = styled.div`
  position: absolute;
  left: 1068vh;
  top: 10vh;
  min-height: 50vh;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: 0;
  }
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
  margin: 0 auto;
  width: 75vw;
  min-width: 75vh;
  max-width: 102vh;
  z-index: 88;
  position: relative;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 2 / span 12;
    min-width: 0;
  }
`

// faq grid
const FaqGrid = styled.div`
  margin-top: 0rem;
  margin-left: 2rem;
  margin-right: 2rem;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 4rem;
`

// for proper grid positioning
const FaqColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > div:not(:first-child) {
    margin-top: 3vh;
    ${p => p.theme.mediaQueries.mobile} {
      margin-top: 24px;
    }
  }
`

// Collection -> questions of specific category
const CollectionContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const CollectionName = styled(Header3)`
  margin-top: 1.5rem;
  color: #202020;
  font-size: 2rem;
  font-weight: 900;
  padding-bottom: 4.5vh;
`

const FaqCollection = ({ category, faqs, expandedQuestion, setExpandedQuestion }) => (
  <CollectionContainer>
    <CollectionName>{category}</CollectionName>

    {faqs.map(q =>
  <FaqBox
        key={q.question}
        question={q.question}
        answer={q.answer}
        onExpand={() => {
          if (expandedQuestion === q.question) {
            setExpandedQuestion(null)
          } else {
            setExpandedQuestion(q.question)
          }
        }}
        isExpanded={expandedQuestion === q.question}
      />
    )}
  </CollectionContainer>
)

const GeneralFaqSlide = () => {
  const [faqData, setFaqData] = useState(null)
  const [expandedQuestion, setExpandedQuestion] = useState(null)

  // (@htdf processData)
  // (@signature (listof FAQ) -> Object)
  // produces a dict where key = category, value = array of questions from an array of FAQ objects
  function processData(data) {
    // categorize questions

    const categories = {}
    data.forEach(faq => {
      if (!categories[faq.category]) {
        categories[faq.category] = []
      }
      categories[faq.category].push(faq)
    })
    console.log('categories', categories)
    return categories
  }

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2024', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (<Slide alignItems="left">
    <Title>FAQ</Title>
    {faqData ? (<FaqGrid>
      <FaqColumn>
        {faqData['General'] && 
          <FaqCollection category="General" faqs={faqData['General']}
            expandedQuestion={expandedQuestion}
            setExpandedQuestion={setExpandedQuestion} />
          }
      </FaqColumn>
    </FaqGrid>) : null}
  </Slide>)
}

export default GeneralFaqSlide;