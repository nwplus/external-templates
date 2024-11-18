import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import FaqBox from '@components/FaqBox'
import { Header3 } from '@components/Typography'

const FaqContainer = styled.div`
  position: relative;
  min-height: 50vh;
  background-image: url('./assets/images/faq.svg');
  background-repeat: no-repeat;
  background-position: 0px -48px;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: 0;
    background-image: url('./assets/images/faq_mobile.svg');
    background-position: -100px -36px;
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
  color: white;
  font-size: calc(100vw * (35 / 1280));
  font-weight: 700;
  padding-bottom: calc(100vw * (20 / 1280));

  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (35 / 834));
    padding-bottom: calc(100vw * (20 / 834));
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (35 / 487));
    padding-bottom: calc(100vw * (20 / 487));
  }
`

const StyledTitle = styled.p`
  display: none;

  ${p => p.theme.mediaQueries.tablet} {
    display: block;
    color: white;
    margin-top: calc(100vw * (50 / 834));
    font-size: calc(100vw * (56 / 834));
    font-weight: 900;
    text-align: center;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (56 / 487));
    margin-top: calc(100vw * (50 / 487));
  }
`

const FaqCollection = ({ category, faqs, expandedQuestion, setExpandedQuestion }) => (
  <CollectionContainer>
    <CollectionName>{category}</CollectionName>

    {faqs.map(q => (
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
    ))}
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

  return (
    <FaqContainer>
      <Wrapper id="faq">
        <StyledTitle>FAQ</StyledTitle>

        {faqData ? (
          <FaqGrid>
            <FaqColumn>
              {faqData.General && (
                <FaqCollection
                  category="General"
                  faqs={faqData.General}
                  expandedQuestion={expandedQuestion}
                  setExpandedQuestion={setExpandedQuestion}
                />
              )}
            </FaqColumn>

            <FaqColumn>
              {faqData['Teams & Projects'] && (
                <FaqCollection
                  category="Projects"
                  faqs={faqData['Teams & Projects']}
                  expandedQuestion={expandedQuestion}
                  setExpandedQuestion={setExpandedQuestion}
                />
              )}
            </FaqColumn>

            <FaqColumn>
              {faqData.Logistics && (
                <FaqCollection
                  category="Logistics"
                  faqs={faqData.Logistics}
                  expandedQuestion={expandedQuestion}
                  setExpandedQuestion={setExpandedQuestion}
                />
              )}
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
