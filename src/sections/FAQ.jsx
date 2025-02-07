import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import FaqBox from '@components/FaqBox'

const FaqContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    aspect-ratio: 1280 / 886;
    z-index: 0;
  }

  ${p => p.theme.mediaQueries.tablet} {
    &::before {
      aspect-ratio: 834 / 1049;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    &::before {
      aspect-ratio: 393 / 1112;
    }
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

  ${p => p.theme.mediaQueries.tablet} {
    grid-column: 2 / span 12;
    min-width: 0;
  }
`

// faq grid
const FaqGrid = styled.div`
  padding-top: calc(100vw * (50 / 1280));
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 50px;

  ${p => p.theme.mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    gap: calc(100vw * (80 / 834));
    margin-top: 50px;
    padding-bottom: 4rem;
  }

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (40 / 487));
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

const CollectionName = styled.div`
  font-size: calc(100vw * (50 / 1920));
  font-family: 'HappyTime';
  font-weight: 500;
  padding-bottom: calc(100vw * (60 / 1920));
  text-align: center;
  color: #a6321e;

  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (35 / 834));
    padding-bottom: calc(100vw * (20 / 834));
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (24 / 487));
    padding-bottom: calc(100vw * (20 / 487));
  }
`

const StyledTitle = styled.p`
  font-family: 'Gloock';
  font-size: calc(100vw * (80 / 1920));
  color: #a6321e;
  text-align: center;

  ${p => p.theme.mediaQueries.tablet} {
    display: block;
    margin-top: calc(100vw * (50 / 834));
    font-size: calc(100vw * (56 / 834));
    text-align: center;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (56 / 487));
    margin-top: calc(100vw * (50 / 487));
  }
`

const FaqDecorations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  ${p => p.theme.mediaQueries.mobile} {
    justify-content: center;
    margin-top: calc(100vw * (20 / 487));
  }

  img {
    width: calc(100% / 6 - 20px);
  }

  img:nth-child(1) {
    height: 320px;
    ${p => p.theme.mediaQueries.mobile} {
      display: none;
    }
  }
  img:nth-child(2) {
    position: relative;
    top: 130px;
    ${p => p.theme.mediaQueries.mobile} {
      width: 100px;
      top: 70px;
    }
  }
  img:nth-child(3) {
    width: 270px;
    margin-right: -30px;
    ${p => p.theme.mediaQueries.mobile} {
      width: 130px;
    }
  }
  img:nth-child(4) {
    width: 270px;
    ${p => p.theme.mediaQueries.mobile} {
      width: 150px;
    }
  }
  img:nth-child(5) {
    width: 210px;
    position: relative;
    top: -30px;
    ${p => p.theme.mediaQueries.mobile} {
      width: 100px;
      top: 50px;
    }
  }
  img:nth-child(6) {
    position: relative;
    top: 120px;
    ${p => p.theme.mediaQueries.mobile} {
      display: none;
    }
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
    const data = await fireDb.getCollection('cmd-f2023', 'FAQ') // TODO: change to 2025
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <div>
      <FaqDecorations>
        <img src="/assets/images/faq/headphones.svg" alt="Headphones decoration" />
        <img src="/assets/images/faq/croissant.svg" alt="Croissant decoration" />
        <img src="/assets/images/faq/donut.svg" alt="Donut decoration" />
        <img src="/assets/images/faq/swinging-animation.gif" alt="Swinging cookie decoration" />
        <img src="/assets/images/faq/laptop.svg" alt="Laptop decoration" />
        <img src="/assets/images/faq/mochiDonut.svg" alt="Mochi Donut decoration" />
      </FaqDecorations>
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
                    category="Teams & Projects"
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
    </div>
  )
}

export default Faq
