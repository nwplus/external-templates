import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FaqBox from '@components/FaqBox';
import { Header1, Header3 } from "@components/Typography";
import { chunkify } from '@utilities/chunkify';
import fireDb from '@utilities/firebase';

const Container = styled.div`
  text-align: center;
`

const CategoryTitle = styled(Header3)`
  margin: 2rem 0 1rem;
`

const Columns = styled.div`
  display: flex;
  flex: 1 1 1em;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 800px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const singleEntry = (entry) => (
  <FaqBox key={entry.title} title={entry.title}>{entry.description}</FaqBox>
)

export default function FaqCollection() {
  const [faqData, setFaqData] = useState(null);
  const [width, setWidth] = useState();
  const mobileBreakpoint = 768;

  function processData(data) {
    const processedData = {};
    data.forEach(faq => {
      // Initialize key and value if category hasn't been made yet
      if (!processedData[`${faq.category}`]) {
        processedData[`${faq.category}`] = [];
      }
      processedData[`${faq.category}`].push({
        title: faq.question,
        description: faq.answer,
      });
    })
    return processedData;
  }

  useEffect(async () => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    const data = await fireDb.getCollection('HackCamp2021', 'FAQ');
    const processedData = processData(data);
    setFaqData(processedData);
  }, []);

  const COLUMNS_OF_FAQ = width > mobileBreakpoint ? 3 : 2;

  return (
    <Container>
      <Header1 id="faq">Frequently Asked Questions</Header1>

      {faqData &&
        Object.entries(faqData).map(([title, content]) => (
          <>
            <CategoryTitle>{title}</CategoryTitle>
            <Columns>
              {chunkify(content, COLUMNS_OF_FAQ, true).map((chunk) => (
                <Column key={chunk[0]?.title}>{chunk.map(singleEntry)}</Column>
              ))}
            </Columns>
          </>

        ))
      }
    </Container>
  )
}

