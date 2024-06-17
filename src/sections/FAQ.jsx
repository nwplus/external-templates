import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import { useParallax } from 'react-scroll-parallax'
import FaqBox from '@components/FaqBox'
import { Header2, Header3 } from '@components/Typography'

import flyingCardsImg from '../assets/images/flyingCards.svg'

const FaqContainer = styled.div`
  position: relative;
  min-height: 50vh;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: 0;
  }
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
  margin: 0 auto;
  width: 75vw;
  min-width: 900px;
  max-width: 1200px;
  z-index: 88;
  position: relative;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 2 / span 12;
    min-width: 0;
  }
`

// faq grid
const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 50px;
  margin-top: 4rem;
  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 50px;
    padding-bottom: 4rem;
  }

  & > div:nth-child(3) {
    grid-column: 2; // move the column to the right
    ${p => p.theme.mediaQueries.mobile} {
      grid-column: 1;
    }
  }
`

// for proper grid positioning
const FaqColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > div:not(:first-child) {
    margin-top: 40px;
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
  color: #F0EEF2;
  font-size: 1.75rem;
  font-weight: 900;
  padding-bottom: 1rem;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.2rem;
  }
`

const StyledTitle = styled(Header2)`
  font-size: 3rem;
  text-align: center;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3em;
  }
`

const FlyingCardsImgContainer = styled.img`
  position: absolute;  
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const FaqCollection = ({ category, faqs, expandedQuestion, setExpandedQuestion }) => (
  <CollectionContainer>
    <CollectionName>{category}</CollectionName>

    {faqs.map(q =>
      <FaqBox
        key={q.question}
        question={q.question}
        answer={q.answer}
        isExpanded={expandedQuestion === q.question}
        onExpand={() => {
          if (expandedQuestion === q.question) {
            setExpandedQuestion(null)
          } else {
            setExpandedQuestion(q.question)
          }
        }}
      />
    )}
  </CollectionContainer>
)

const Faq = () => {
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
    return categories
  }

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2025', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])


  const flyingCards = useParallax({
    speed: 1,
    translateY: ['-40px', '40px']
  });

  return (
    <FaqContainer>

      <FlyingCardsImgContainer src={flyingCardsImg} ref={flyingCards.ref} />

      <Wrapper id="faq">
        <StyledTitle color="#F0EEF2" fontSize="5rem">
          FAQ
        </StyledTitle>

        {faqData ? (
          <FaqGrid>
            <FaqColumn>{faqData.General && <FaqCollection category="General" faqs={faqData.General} expandedQuestion={expandedQuestion} setExpandedQuestion={setExpandedQuestion} />}</FaqColumn>

            <FaqColumn>
              {faqData['Teams & Projects'] && (
                <FaqCollection category="Teams & Projects" faqs={faqData['Teams & Projects']}
                  expandedQuestion={expandedQuestion}
                  setExpandedQuestion={setExpandedQuestion} />
              )}
            </FaqColumn>

            <FaqColumn>
              {faqData.Logistics && <FaqCollection category="Logistics" faqs={faqData.Logistics}
                expandedQuestion={expandedQuestion}
                setExpandedQuestion={setExpandedQuestion}
              />}
            </FaqColumn>
          </FaqGrid>
        ) : (
          ''
        )}
      </Wrapper>
    </FaqContainer>
  )
}

export default Faq
