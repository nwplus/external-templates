import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import FaqBox from '@components/FaqBox'
import { Header3 } from '@components/Typography'

const FaqContainer = styled.div`
  position: relative;
  background: #CAE1F5;
  padding-top: 100px;

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
    grid-column: 2 / span 12;
    min-width: 0;
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
    {/* <CollectionName>{category}</CollectionName> */}

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
    const data = await fireDb.getCollection('nwHacks2026', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <FaqContainer>
      <Wrapper id="faq">
        <div style={{
            position: "relative",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 40
          }}>
            <StyledTitle>FAQs</StyledTitle>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              {[FAQ_CATEGORIES.GENERAL, FAQ_CATEGORIES.TEAM, FAQ_CATEGORIES.LOGS].map((c) => (
                <button type="button" style={{
                  borderRadius: 12,
                  fontFamily: "Space Grotesk",
                  fontSize: "calc(100vw * (10 / 834))",
                  border: "2px solid white",
                  color: "#123250",
                  cursor: "pointer",
                  fontWeight: c === tab ? 500 : 400,
                  background: c === tab ? "white" : "#FFFFFF90",
                  padding: 12,
                }} onClick={()=>setTab(c)}>
                  {c}
                </button>
              ))}
            </div>
            {faqData && tab && (
              <FaqCollection
                category={tab}
                faqs={faqData[tab]}
                expandedQuestion={expandedQuestion}
                setExpandedQuestion={setExpandedQuestion}
              />
            )}
        </div>


        <div style={{
          position: "relative",
          aspectRatio: "600 / 690",
          maxWidth: 600
        }}>
          <FaqWindow />
        </div>
      </Wrapper>
    </FaqContainer>
  )
}

export default Faq
