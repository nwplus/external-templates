/* eslint-disable dot-notation */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import FaqBox from '@components/FaqBox'
import { Header3 } from '@components/Typography'
import Anchor from '@components/Anchor'

const Title = styled.p`
  position: absolute;
  left: 1112.42vh;
  top: 9.7vh;

  color: #202020;
  text-align: center;
  font-family: "Yatra One";
  font-size: 5.49vh;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 4vh;
  margin-top: 5vh;

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
  color: #202020;
  font-size: calc(1.5rem + 1.75vh);
  font-weight: 900;
  padding-bottom: 4.5vh;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.2rem;
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
    const data = await fireDb.getCollection('cmd-f2024', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <>
      <Anchor id="faq" x="1035" />
      <Title>FAQ</Title>
      <FaqContainer>
        <Wrapper>
          {faqData ? (
            <FaqGrid>
              <FaqColumn>
                {faqData['General'] && 
                  <FaqCollection category="General" faqs={faqData['General']}
                    expandedQuestion={expandedQuestion}
                    setExpandedQuestion={setExpandedQuestion} />
                  }
                </FaqColumn>

              <FaqColumn>
                {faqData['Teams & Projects'] &&
                  <FaqCollection category="Teams & Projects" faqs={faqData['Teams & Projects']}
                    expandedQuestion={expandedQuestion}
                    setExpandedQuestion={setExpandedQuestion} />
                }
              </FaqColumn>
            </FaqGrid>
          ) : (
            ''
          )}
        </Wrapper>
      </FaqContainer>
    </>)
}

export default Faq
