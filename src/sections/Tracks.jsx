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
  aspect-ratio: 1440 / 779;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(1344 / 428) * 100vw);
    aspect-ratio: 428 / 1344;
    align-items: center;
  }
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
    padding-top: 10rem;
    padding-bottom: 0;
    gap: 2rem;
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
    font-size: 2rem;
  }
`

const Description = styled(Body)`
  padding-top: 2rem;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 150%;
  color: #f3f5f4;
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
`

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo consectetur ex cursus sagittis. Nam sit amet mi quis ipsum volutpat accumsan nec vitae nulla. Etiam lobortis tempus cursus. Nunc eu sem vitae risus porta iaculis sit amet eget ante. Fusce sed sem sit amet leo sagittis vehicula. Sed ac est aliquet, pharetra ligula vel, egestas orci. Aliquam aliquam arcu eget tristique pellentesque. Nunc nec risus non leo ullamcorper finibus. Aliquam imperdiet ac risus a auctor. Curabitur vehicula eu augue consectetur varius. Aenean ut ultricies velit. Mauris id elementum quam, vel lobortis urna.'

const CONTENT = {
  default: {
    heading: 'What can I make at nwHacks?',
    description: (
      <Description>{`This year, we’re introducing nwTracks! We’ll be rewarding the top projects in each category. You can submit to just one of the tracks - choose wisely!`}</Description>
    ),
  },
  healthcare: {
    heading: 'Healthcare & Accessibility',
    description: <Description>{LOREM}</Description>,
    card: Healthcare,
  },
  sustainability: {
    heading: 'Sustainability & Environment',
    description: <Description>{LOREM}</Description>,
    card: Sustainability,
  },
  community: {
    heading: 'Community & Connection',
    description: <Description>{LOREM}</Description>,
    card: Community,
  },
  wildcard: {
    heading: 'Wildcard',
    description: <Description>{LOREM}</Description>,
    card: Wildcard,
  },
}

const Track = () => {
  const [selection, setSelection] = useState('default')

  const getProps = key => ({
    src: CONTENT[key].card,
    alt: CONTENT[key].heading,
    onMouseOver: () => {
      setSelection(key)
    },
    style: { filter: !['default', key].includes(selection) ? 'grayscale(1)' : undefined },
  })

  return (
    <TrackContainer>
      <TrackInner>
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
          <CardImg {...getProps('healthcare')} />
          <CardImg {...getProps('sustainability')} />
          <CardImg {...getProps('community')} />
          <CardImg {...getProps('wildcard')} />
        </CardGrid>
      </TrackInner>
    </TrackContainer>
  )
}

export default Track
