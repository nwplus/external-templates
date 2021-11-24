import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { SectionContainer } from "@lib/Containers"
import fireDb from '@utilities/firebase'
import FaqBox from '../components/FaqBox'

const BgSectionContainer = styled(SectionContainer)`


  display:grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 1.25rem;

  background: url('assets/background/faq-top.png') top/100vw no-repeat, 
              linear-gradient(to bottom, #081F42, #3F758F);
  
  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/background/faq-top-mobile.png') top/100vw no-repeat, 
                linear-gradient(to bottom, #081F42, #3F758F);
  }
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
  padding:10vw 0;
  
  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 2 / span 12;
  }
`

// faq grid
const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 50px;
  margin-top: 84px;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 100px;
  }
`;

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
`;

// Collection -> questions of specific category
const CollectionContainer = styled.div`
  text-align:center;
  display:flex;
  flex-direction:column;
`;

const CollectionName = styled.div`
  color:#BCFCF8;
  font-size:1.75rem;
  padding-bottom:1rem;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.2rem;
  }
`;

const FaqCollection = ({ category, faqs }) => (
  <CollectionContainer>
    <CollectionName>{category}</CollectionName>

    {faqs.map(q => <FaqBox key={q.question} question={q.question} answer={q.answer} />)}
  </CollectionContainer>
);

const Faq = () => {
  const [faqData, setFaqData] = useState(null);

  // (@htdf processData)
  // (@signature Array -> Object)
  // produces a dict where key = category, value = array of questions of category from array of questions and data
  function processData(data) {
    // categorize questions 

    const categories = {};
    data.forEach((faq) => {
      if (!categories[faq.category]) {
        categories[faq.category] = [];
      }
      categories[faq.category].push(faq);
    });
    return categories;
  }

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2022', 'FAQ');
    const processedData = processData(data);
    setFaqData(processedData);
  }, [])

  return (
    <>
      <BgSectionContainer>
        <Wrapper>

          {faqData ? (
            <FaqGrid>

              <FaqColumn>
                {faqData.General &&
                  <FaqCollection category="General" faqs={faqData.General} />
                }
              </FaqColumn>

              <FaqColumn>
                {faqData['Teams & Projects'] &&
                  <FaqCollection category="Teams & Projects" faqs={faqData['Teams & Projects']} />
                }
                {faqData.Logistics &&
                  <FaqCollection category="Logistics" faqs={faqData.Logistics} />
                }
              </FaqColumn>

            </FaqGrid>
          ) : 'loading...'}

        </Wrapper>
      </BgSectionContainer>
    </>
  );
}

export default Faq;