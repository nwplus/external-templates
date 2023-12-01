import React, { useState } from 'react'
import styled from 'styled-components'
import { Body, Header2 } from '@components/Typography'
import Healthcare from '@assets/images/card_healthcare.svg'
import Community from '@assets/images/card_community.svg'
import Sustainability from '@assets/images/card_sustainability.svg'
import Wildcard from '@assets/images/card_wildcard.svg'

const TrackContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
`

const TrackInner = styled.div`
  width: 72vw;
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  padding-bottom: 5rem;

  ${p => p.theme.mediaQueries.mobile} {
    padding-bottom: 7rem;
    gap: 2rem;
    min-width: 300px;
  }
`

const TextElements = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  ${p =>
    p && p.bias && p.bias === 'left'
      ? `
    margin-right: auto;
  `
      : `
    margin-left: auto;
  `}

  ${p => p.theme.mediaQueries.mobile} {
    max-width: 100vw;
    margin: 0;
    padding: 0 6vw;
  }
`

const Header = styled(Header2)`
  color: #f3f5f4;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
    margin-top: 1rem;
    width: 100%;
    text-align: left;
  }
`

const Description = styled(Body)`
  padding-top: 2rem;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 150%;
  color: #f3f5f4;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
    padding-top: 0.4rem;
    width: 100%;
    text-align: left;
  }
`

const Instruction = styled.h3`
  padding-top: 8rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 150%;
  color: #f3f5f4;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  width: fit-content;
`

const CardImg = styled.img`
  box-shadow: #0f212c -12px 12px;
  border-radius: 15px;
  transition: 300ms;

  ${p => p.theme.mediaQueries.mobile} {
    width: 200px;
    margin-bottom: 1rem;
  }
`

const MobileContent = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
  }
`
const MobileItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DesktopContent = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CONTENT = {
  default: {
    heading: 'What can I make at nwHacks?',
    description: (
      <Description>
        This year, we’re introducing nwTracks! We’ll be rewarding the top projects in each category. You can submit to
        just one of the tracks - choose wisely!
      </Description>
    ),
  },
  healthcare: {
    heading: 'Healthcare & Accessibility',
    description: (
      <Description>
        Whether it&apos;s developing assistive technologies, improving healthcare accessibility, promoting mental health
        awareness, or supporting wellbeing, this track is all about fostering a world where everyone can thrive.
      </Description>
    ),
    card: Healthcare,
  },
  sustainability: {
    heading: 'Sustainability & Environment',
    description: (
      <Description>
        Find creative solutions to pressing environmental issues, including climate change, conservation, and
        sustainable practices. Develop technologies that can contribute to a greener and more sustainable future!
      </Description>
    ),
    card: Sustainability,
  },
  community: {
    heading: 'Community & Connection',
    description: (
      <Description>
        Explore ways to bring people closer and foster connection (in-person or online!). Build online communities,
        virtual spaces or social platforms that strengthen bonds.
      </Description>
    ),
    card: Community,
  },
  wildcard: {
    heading: 'Wild Card',
    description: (
      <Description>
        Let your creativity run wild! There are no boundaries or limitations here; you&apos;re free to come up with
        innovative ideas that might not fit neatly into traditional categories. Explore new technologies, try out a new
        API, and build something unique!
      </Description>
    ),
    card: Wildcard,
  },
}

const Track = () => {
  const [selection, setSelection] = useState('default')

  const getProps = (key, hover) => ({
    src: CONTENT[key].card,
    alt: CONTENT[key].heading,
    onMouseOver: () => {
      setSelection(key)
    },
    style: { filter: hover && !['default', key].includes(selection) ? 'grayscale(1)' : undefined },
  })

  return (
    <TrackContainer id="tracks">
      <TrackInner>
        <MobileContent>
          {Object.entries(CONTENT).map(([k, v]) => (
            <MobileItem>
              {v.card && <CardImg {...getProps(k)} />}
              <Header style={{ marginTop: '1rem' }}>{v.heading}</Header>
              <Description>{v.description}</Description>
            </MobileItem>
          ))}
        </MobileContent>

        <DesktopContent>
          <TextElements bias="left">
            <Header>{CONTENT[selection].heading}</Header>
            {CONTENT[selection].description}

            {selection === 'default' && <Instruction>▶ Hover over each card to learn more!</Instruction>}
          </TextElements>

          <CardGrid
            onMouseLeave={() => {
              setSelection('default')
            }}
          >
            <CardImg {...getProps('healthcare', true)} />
            <CardImg {...getProps('sustainability', true)} />
            <CardImg {...getProps('community', true)} />
            <CardImg {...getProps('wildcard', true)} />
          </CardGrid>
        </DesktopContent>
      </TrackInner>
    </TrackContainer>
  )
}

export default Track
