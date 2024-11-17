// used for inkind and startup tiers since they're both displayed in a single card
import { memo } from 'react'
import styled from 'styled-components'
import Floor from './Floor'

const LongSponsorLevelContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 95vw;
  margin-bottom: calc(100vw * (25 / 1280));
`

const LongSponsorCard = styled.div`
  aspect-ratio: 941/204;
  background-image: url(./assets/images/long_sponsor_card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;

  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1%;
  margin-bottom: calc(100vw * (40 / 1280));
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  height: 60%;
`

const LongSponsorLink = styled.a`
  margin-top: 0;
  position: relative;

  height: 50%;
  max-height: 140px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LongSponsorImg = styled.img`
  height: 100%;
  object-fit: contain;
`

const LongSponsorList = memo(({ sponsors }) => (
  <>
    <LongSponsorLevelContainer>
      <Floor />
      <LongSponsorCard>
        <FlexContainer>
          {sponsors.map(sponsor => (
            <LongSponsor key={sponsor.name} link={sponsor.link} url={sponsor.imgURL} />
          ))}
        </FlexContainer>
      </LongSponsorCard>
    </LongSponsorLevelContainer>
  </>
))

const LongSponsor = ({ link, url }) => (
  <LongSponsorLink href={link} target="_blank" rel="noreferrer">
    <LongSponsorImg src={url} alt="Sponsor Logo" />
  </LongSponsorLink>
)

export default LongSponsorList
