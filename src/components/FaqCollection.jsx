import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FaqBox from '@components/FaqBox';
import { Header1, Header3 } from "@components/Typography";
import { chunkify } from '@utilities/chunkify';

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

const faqData = {
  General: [
    {
      title: 'What is hackcamp',
      description: 'Well it sure as hell aint learn day aha!Well it sure as hell aint learn day aha!Well it sure as hell aint learn day aha!Well it sure as hell aint learn day aha!'
    },
    {
      title: 'What is hackcamp',
      description: 'Well it sure as hell aint learn day aha!'
    },
    {
      title: 'What is hackcamp',
      description: 'Well it sure as hell aint learn day aha! Well it sure as hell aint learn day aha!'
    },
    {
      title: 'What is hackcamp???',
      description: 'Well it sure as hell aint learn day aha! Well it sure as hell aint learn day aha!'
    },
  ],
  "Two Words": [
    {
      title: 'What is hackcamp???',
      description: 'Well it sure as hell aint learn day aha!'
    },
    {
      title: 'What is hackcamp???',
      description: 'Well it sure as hell aint learn day aha! Well it sure as hell aint learn day aha! Well it sure as hell aint learn day aha!'
    },
    {
      title: 'What is hackcamp???',
      description: 'Well it sure as hell aint learn day aha! Well it sure as hell aint learn day aha!'
    },
    {
      title: 'What is hackcamp',
      description: 'Well it sure as hell aint learn day aha!'
    },
    {
      title: 'What is hackcamp',
      description: 'Well it sure as hell aint learn day aha!'
    },
  ],
}

const singleEntry = (entry) => (
  <FaqBox key={entry.title} title={entry.title}>{entry.description}</FaqBox>
)

export default function FaqCollection() {
  const [width, setWidth] = useState();
  const mobileBreakpoint = 768;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const COLUMNS_OF_FAQ = width > mobileBreakpoint ? 3 : 2;

  return (
    <Container>
      <Header1 id="faq">Frequently Asked Questions</Header1>

      {

        Object.entries(faqData).map(([title, content]) => (
          <>
            <CategoryTitle>{title}</CategoryTitle>
            <Columns>
              {chunkify(content, COLUMNS_OF_FAQ, true).map((chunk) => (
                <Column key={chunk[0].title}>{chunk.map(singleEntry)}</Column>
              ))}
            </Columns>
          </>

        ))
      }
    </Container>
  )
}
