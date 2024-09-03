// import { useParallax } from 'react-scroll-parallax';
import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import { SectionContainer } from '@lib/Containers'
import fireDb from '@utilities/firebase'
import { Header2 } from '@components/Typography'
import FaqBox from '../components/FaqBox'
import { useParallax } from 'react-scroll-parallax'

const BgSectionContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 1.25rem;
  min-height: 100vh;
  position: relative;
  top: -51vw;
  

  width: 100%;
  aspect-ratio: 1440/1072;
  z-index: 17;
  overflow: hidden;

  /* background: #150c27; */

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/faq/background.svg') #150C27; */
    aspect-ratio: 412/1359;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

const BgScroll = styled(SectionContainer)`
  grid-column: 1 / span 14;
  /* background: url('assets/background/faq/background.png'); */
  /* background-size: 100vw; */
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1440/1072;

  ${p => p.theme.mediaQueries.mobile} {
    background: none;
    aspect-ratio: 412/1359;
  }
`

const FaqTitle = styled.div`
  background: url('assets/background/faq/faq-title.svg') no-repeat right;
  background-size: 42vw;
  height: 17vw;
  width: 42vw;
  z-index: 1;
  position: absolute;
  top: 4vw;
  right: 10vw;
  left: 50%;
  transform: translateX(-50%);
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const FgScroll = styled(SectionContainer)`
  grid-column: 1 / span 14;
  /* background: url('assets/background/faq/foreground.svg'); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1440/1723;
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    background: none;
    aspect-ratio: 482/1344;
  }
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
  padding: 10vw 0;
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
  margin-top: 8rem;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 100px;
    padding-bottom: 4rem;
  }
`

// for proper grid positioning
const FaqColumn = styled.div`
  display: flex;
  flex-direction: column;

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
  color: #f0eef2;
  font-size: 2.8vw;
  font-weight: 900;
  padding-bottom: 1rem;
  align-self: baseline;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.2rem;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #f0eef2;
  font-size: 3rem;
  padding-top: 1rem;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3.8em;
  }
`

const FaqCollection = ({ category, faqs, expandedQuestion, setExpandedQuestion }) => {
  return (
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
}

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
    const data = await fireDb.getCollection('HackCamp2024', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <BgSectionContainer>
      <BgScroll />
      <Wrapper id="faq">
        <FaqTitle />

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
          'loading...'
        )}
      </Wrapper>
    </BgSectionContainer>
  )
}

export default Faq
