/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { SectionContainer } from '@lib/Containers'
import fireDb from '@utilities/firebase'
import FaqBox from '../components/FaqBox'

const BgSectionContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 1.25rem;
  min-height: 141vh;
  height: fit-content;
  position: relative;
  top: -51.3vw;
  overflow: hidden;
  

  width: 100%;
  aspect-ratio: 1440/1072;
  z-index: 17;
  /* background: #150c27; */
  ${p => p.theme.mediaQueries.tabletLarge} {
    min-height: 127vh;
  }

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/faq/background.svg') #150C27; */
    /* aspect-ratio: 412/1359; */
    background-size: 100vw;
    min-height: 330vw;
    background-repeat: no-repeat;
    background-position: center center;
    top: 93.3vw;
  }

  ${p => p.theme.mediaQueries.xs} {
    min-height: 329vw;
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
    background-size: 50vw;
    top: 2vw;
    width: 50vw;
  }
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
  padding: 10vw 0;
  margin: 0 auto;
  width: 75vw;
  min-width: 800px;
  max-width: 1200px;
  z-index: 88;
  position: relative;

  ${p => p.theme.mediaQueries.tablet} {
    min-width: 700px;
  }

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
  margin-top: 10rem;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 60px;
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
    font-size: 5vw;
    padding-top: 2vw;
    align-self: auto;
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

// const FerrisCart = styled.div`
// background: url(assets/background/faq/ferris-cart.png) no-repeat;
// background-size: 10vw;
// width: 10vw;
// height: 10vw;
// position: absolute;
// transform-origin: top center;
// animation: ${({ reverse }) => (reverse ? 'reverseSwing' : 'swing')} 2.1s ease-in-out infinite;
// z-index: -50;

// top: ${({ top }) => top};
// left: ${({ left }) => left};

// @keyframes swing {
//   0% {
//     transform: rotate(-5deg);
//   }
//   50% {
//     transform: rotate(5deg);
//   }
//   100% {
//     transform: rotate(-5deg);
//   }
// }

// @keyframes reverseSwing {
//     0% {
//       transform: rotate(5deg);
//     }
//     50% {
//       transform: rotate(-5deg);
//     }
//     100% {
//       transform: rotate(5deg);
//     }
//   }

//   ${p => p.theme.mediaQueries.mobile} {
//     display: none;
//   }
// `

const HotAirBalloons = styled.div`
background: url(assets/background/faq/hot-air-balloons.png) no-repeat;
background-size: 28vw;
width: 28vw;
height: 33vw;
position: absolute;
top: 12vw;
left: 62vw;
animation: float 12s ease-in-out infinite;
z-index: -50;

@keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25vw);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const PurpleBanner = styled.div`
  background: url(assets/background/faq/purple-banner.png) no-repeat;
  background-size: 108vw;
  width: 108vw;
  height: 6.5vw;
  position: absolute;
  top: -3.3vw;
  left: -16.5vw;
  z-index: 100;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Faq = () => {
  const [faqData, setFaqData] = useState(null)
  const [expandedQuestion, setExpandedQuestion] = useState(null)

  // (@htdf processData)
  // (@signature (listof FAQ) -> Object)
  // produces a dict where key = category, value = array of questions from an array of FAQ objects
  function processData (data) {
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
        {/* <FerrisCart top="5.9vw" left="-10.3vw" />
        <FerrisCart top="14vw" left="10.3vw" reverse />
        <FerrisCart top="34.5vw" left="18.6vw" />
        <FerrisCart top="55vw" left="10.3vw" reverse /> */}
        <HotAirBalloons />
        <PurpleBanner />

        {faqData
          ? (
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
            )
          : (
              'loading...'
            )}
      </Wrapper>
    </BgSectionContainer>
  )
}

export default Faq
