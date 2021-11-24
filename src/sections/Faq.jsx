import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Header1, Header3 } from "@components/Typography";
import { SectionContainer } from "@lib/Containers"
import fireDb from '@utilities/firebase'
import FaqBox from '../components/FaqBox'

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/faq-top.png') top/100vw no-repeat, 
              linear-gradient(to bottom, #081F42, #3F758F);
  min-height: 100vh;
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
`

// faq grid
const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 76px;
  margin-top: 64px;

  ${p => p.theme.mediaQueries.mobile} {
      display: flex;
      flex-direction: column;
      gap: 24px;
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

`;

const CollectionName = styled.div`

`;

const FaqCollection = ({ category, faqs }) => (
  <CollectionContainer>
    <CollectionName>{category}</CollectionName>
    {faqs.map(q => <FaqBox key={q.question} question={q.question} answer={q.answer} />)}
  </CollectionContainer>
);

const Faq = () => {
  const [faqData, setFaqData] = useState(null);

  function processData(data) {
    // categorize questions 

    const categories = {};
    // dict/object where key = category, value = array of questions of category
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
                {faqData.Logistics &&
                  <FaqCollection category="Logistics" faqs={faqData.Logistics} />
                }
                {faqData['Teams & Projects'] &&
                  <FaqCollection category="Teams & Projects" faqs={faqData['Teams & Projects']} />
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