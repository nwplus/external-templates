// import { useParallax } from 'react-scroll-parallax';
import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import { SectionContainer } from '@lib/Containers'
import fireDb from '@utilities/firebase'
import { Header2 } from '@components/Typography'
import FaqBox from '../components/FaqBox'
import { useParallax } from 'react-scroll-parallax'

const BgSectionContainer = styled(SectionContainer)`
  display:grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 1.25rem;
  min-height: 100vh;
  position: relative;
  
  width: 100%;
  aspect-ratio: 1440/1072;
  z-index: 17;
  overflow: hidden;

  background: #150C27;
  
  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/faq/background.svg') #150C27;
    aspect-ratio: 412/1359;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

const BgScroll = styled(SectionContainer)`
  grid-column: 1 / span 14;
  background: url('assets/background/faq/background.png');
  background-size: 100vw;
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

const bobbing = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const Nugget = styled.div`
  background: url('assets/background/faq/nugget.png') no-repeat;
  width: 100vw;
  height:100vw;
  z-index: 2;
  position: absolute;
  top:70%;
  animation: ${bobbing} 2s ease-in-out infinite;

${p => p.theme.mediaQueries.mobile} {
  display:none;
}
`

const FgScroll = styled(SectionContainer)`
  grid-column: 1 / span 14;
  background: url('assets/background/faq/foreground.svg');
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
  padding:10vw 0;
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
  text-align:center;
  display:flex;
  flex-direction:column;
`

const CollectionName = styled.div`
  color:#F0EEF2;
  font-size:1.75rem;
  font-weight: 900;
  padding-bottom:1rem;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.2rem;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #F0EEF2;
  font-size: 3rem;
  padding-top: 1rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 3.8em;
  }
`

const waving = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
`

const DeerArm = styled.div`
background: url('assets/background/faq/deerarm.png') no-repeat;
width: 3vw;
height:3vw;
z-index: 5;
position: absolute;
animation: ${waving} 1s infinite;
background-position: center center;
transform-origin: bottom left;
top: 68.5%;
left: 42.5%;

${p => p.theme.mediaQueries.mobile} {
display:none;
}
`
const BearArm = styled.div`
background: url('assets/background/faq/beararm.png') no-repeat;
width: 3vw;
height:3vw;
z-index: 4;
left: 60%;
top: 73.5%;
position: absolute;
animation: ${waving} 1s infinite;
transform-origin: bottom left;
background-position: center center;

${p => p.theme.mediaQueries.mobile} {
display:none;
}
`

const FaqCollection = ({ category, faqs }) => (
  <CollectionContainer>
    <CollectionName>{category}</CollectionName>

    {faqs.map(q => <FaqBox key={q.question} question={q.question} answer={q.answer} />)}
  </CollectionContainer>
)

const Faq = () => {
  const [faqData, setFaqData] = useState(null)

  // (@htdf processData)
  // (@signature (listof FAQ) -> Object)
  // produces a dict where key = category, value = array of questions from an array of FAQ objects
  function processData(data) {
    // categorize questions

    const categories = {}
    data.forEach((faq) => {
      if (!categories[faq.category]) {
        categories[faq.category] = []
      }
      categories[faq.category].push(faq)
    })
    return categories
  }

  useEffect(async () => {
    const data = await fireDb.getCollection('HackCamp2023', 'FAQ')
    const processedData = processData(data)
    setFaqData(processedData)
  }, [])

  return (
    <BgSectionContainer>
      <Nugget></Nugget>
      <BearArm />
      <DeerArm></DeerArm>
      <BgScroll/>
      <Wrapper id="faq">
        <StyledTitle>
          FAQ
        </StyledTitle>

        {faqData
          ? (
            <FaqGrid>

              <FaqColumn>
                {faqData.General &&
                  <FaqCollection category="General" faqs={faqData.General} />
                }
              </FaqColumn>

              <FaqColumn>
                {faqData["Teams & Projects"] &&
                  <FaqCollection category="Projects" faqs={faqData["Teams & Projects"]} />
                }
                {faqData.Logistics &&
                  <FaqCollection category="Logistics" faqs={faqData.Logistics} />
                }
              </FaqColumn>

            </FaqGrid>
          )
          : 'loading...'}

      </Wrapper>
    </BgSectionContainer>
  )
}

export default Faq
