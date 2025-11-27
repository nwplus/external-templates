import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import FaqBox from '@components/FaqBox'

const FaqContainer = styled.div`
  position: relative;
  background: #CAE1F5;
  padding-top: 0px;

  ${p => p.theme.mediaQueries.tablet} {
    &::before {
      background-image: url('./assets/images/faq_tablet.svg');
      aspect-ratio: 834 / 1049;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    &::before {
      aspect-ratio: 487 / 1060;
      background-image: url('./assets/images/faq_mobile.svg');
    }

    background: linear-gradient(to bottom, #CAE1F5, #E5E9E0)
  }
`

const FaqWindow = styled.div`
  height: 200%;
  width: 200%;
  position: absolute;
  top: 0;
  left: 0;
  aspect-ratio: 1319 / 1070;
  background-image: url('./assets/images/faq.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  width: 75vw;
  min-width: 900px;
  max-width: 1200px;
  z-index: 88;
  position: relative;

  ${p => p.theme.mediaQueries.tablet} {
    grid-template-columns: 1fr;
    min-width: 0;
    width: 85vw;
  }
`

// Collection -> questions of specific category
const CollectionContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const StyledTitle = styled.p`
  font-weight: 500;
  color: #123250;
  text-align: center;
  font-size: calc(100vw * (20 / 834));

  ${p => p.theme.mediaQueries.tablet} {
    display: block;
    margin-top: calc(100vw * (50 / 834));
    font-size: calc(100vw * (56 / 834));
    text-align: center;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (28 / 487));
    margin-top: calc(100vw * (50 / 487));
  }
`

const ContentColumn = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
`

const TabButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TabButton = styled.button`
  border-radius: 12px;
  font-family: "Space Grotesk";
  font-size: calc(100vw * (10 / 834));
  transition: all 0.13s ease;
  border: solid 2px rgba(255, 255, 255, 0.2);
  color: #123250;
  cursor: pointer;
  font-weight: ${props => props.$isActive ? 500 : 400};
  background: ${props => props.$isActive ? "white" : "#FFFFFF90"};
  padding: 12px;

  ${p => p.theme.mediaQueries.tablet} {
    font-size: 16px;
    padding: 7px 8px;
  }
`

const ImageColumn = styled.div`
  position: relative;
  aspect-ratio: 600 / 690;
  max-width: 600px;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const FaqCollection = ({ faqs, expandedQuestion, setExpandedQuestion }) => (
  <CollectionContainer>
    {faqs?.map(q => (
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

const FAQ_CATEGORIES = {
  GENERAL: "General",
  TEAM: "Teams & Projects",
  LOGS: "Logistics"
}

const Faq = () => {
  const [faqData, setFaqData] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const [tab, setTab] = useState(FAQ_CATEGORIES.GENERAL);

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
        <ContentColumn>
          <StyledTitle>FAQs</StyledTitle>
          <TabButtonContainer>
            {[FAQ_CATEGORIES.GENERAL, FAQ_CATEGORIES.TEAM, FAQ_CATEGORIES.LOGS].map((c) => (
              <TabButton 
                key={c}
                type="button" 
                $isActive={c === tab}
                onClick={() => setTab(c)}
              >
                {c}
              </TabButton>
            ))}
          </TabButtonContainer>
          {faqData && tab && (
            <FaqCollection
              faqs={faqData[tab]}
              expandedQuestion={expandedQuestion}
              setExpandedQuestion={setExpandedQuestion}
            />
          )}
        </ContentColumn>

        <ImageColumn>
          <FaqWindow />
        </ImageColumn>
      </Wrapper>
    </FaqContainer>
  )
}

export default Faq
