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
  height: 80vh;
  width: 100vh;
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
  margin: 0 auto;
  width: 75vw;
  min-width: 75vh;
  max-width: 102vh;
  z-index: 88;
  position: relative;
`

// faq grid
const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 4vh;
  margin-top: 5vh;

  & > div:nth-child(3) {
    grid-column: 2;
  }
`

// for proper grid positioning
const FaqColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  // overflow-y: scroll;
  max-height: 80vh;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: auto;

  & > div:not(:first-child) {
    margin-top: 3vh;
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
  padding-top: 1rem;
  padding-bottom: 3vh;
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
    const data = await fireDb.getCollection('cmd-f2025', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <>
      <Anchor id="faq" x="1035" />
      <Title>FAQ</Title>
      <FaqContainer id="faq_container">
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
