import React from 'react';
import styled from 'styled-components';
import FaqBox from '@components/FaqBox';
import { chunkify } from '@utilities/chunkify';

const COLUMNS_OF_FAQ = 3;

const Container = styled.div`
  text-align: center;
`

const Columns = styled.div`
  display: flex;
  flex: 1 1 1em;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  width: 800px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.b`
  display: block;
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

const singleEntry = (entry, i) => {
  return (
    <FaqBox key={i} title={entry.title}>{entry.description}</FaqBox>
  )
}

export default function FaqCollection() {
  return (
    <Container>
      <h1>Frequently Asked Questions</h1>

      {

        Object.entries(faqData).map(([title, content]) => (
          <>
            {title}
            <Columns>
              {chunkify(content, COLUMNS_OF_FAQ, true).map((chunk, i) => (
                <Column key={i}>{chunk.map(singleEntry)}</Column>
              ))}
            </Columns>
          </>

        ))
      }
    </Container>
  )
}

