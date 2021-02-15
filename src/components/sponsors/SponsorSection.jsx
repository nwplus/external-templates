import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground, Rows, Row } from '@lib/Containers'
import background from '@assets/sponsor_bg.svg'
import { TABLET } from '@constants/measurements'
import { scale } from '@utilities/format'

const SectionContainer = styled(SectionContainerWithBackground)`
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;

  h1 {
    text-align: center;
    font-family: 'Fira Mono', monospace;
    font-size: ${() => scale(787, 1440, 28, 48)};
  }

  ${({ empty }) => empty && `
    height: 100vh;
    `}
`

const StyledH1 = styled.h1`
  margin-bottom: 5rem;

  @media only screen and (max-width: ${TABLET}) {
    margin-bottom: 3rem;
  }
`

const Button = styled.button.attrs(({ applyActive }) => ({
  type: 'button',
  disabled: applyActive,
}))`
  background: #b95d1d;
  border-radius: 5px;
  border: none;
  width: 12vw;
  height: 3.5vw;
  color: white;
  transition-duration: 0.2s;
  cursor: pointer;
  font-size: ${() => scale(320, 1440, 6, 18)};
  font-family: 'DM Sans', sans-serif;
  margin-top: 2rem;
  margin-bottom: 1rem;

  &:hover {
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  }

  @media only screen and (max-width: ${TABLET}) {
    height: 6vw;
    width: 14vw;
  }
`

const PlatniumImg = styled.img`
  max-width: 900px;
  max-height: 300px;
  margin-left: 2rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    max-width: 50vw;
    max-height: 20vh;
  }
`
const GoldImg = styled.img`
  max-width: 700px;
  max-height: 250px;
  margin-left: 2rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    max-width: 45vw;
    max-height: 20vh;
  }
`

const SilverImg = styled.img`
  max-width: 500px;
  max-height: 200px;
  margin-left: 2rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    max-width: 40vw;
    max-height: 20vh;
  }
`

const BronzeImg = styled.img`
  max-width: 300px;
  max-height: 150px;
  margin-left: 2rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    max-width: 35vw;    
    max-height: 15vh;
  }
`

const InkindImg = styled.img`
  max-width: 200px;
  max-height: 150px;
  margin-left: 2rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    max-width: 30vw;
    max-height: 15vh;
  }
`

// Inkind -> bronze -> silver -> gold -> platinum
const SponsorSection = ({ sponsorData }) => {
  const [categorizedSponsorMap, setSponsorMap] = useState(new Map())

  const categorizeSponsor = sponsorList => {
    sponsorList.forEach(({ imgURL, link, tier }) => {
      const reducedSponsor = { imgURL, link }

      const currSponsorList = categorizedSponsorMap.get(tier)
      const updatedSponsorList = currSponsorList ? [reducedSponsor, ...currSponsorList] : [reducedSponsor]

      const updatedMap = categorizedSponsorMap.set(tier, updatedSponsorList)
      setSponsorMap(new Map(updatedMap))
    })
  }

  useEffect(() => {
    categorizeSponsor(sponsorData)
  }, [sponsorData])

  const SponsorsComponent = ({ tier }) => {
    return (
      <Row>
        {categorizedSponsorMap.get(tier)?.map(({ imgURL, link }) => (
          <a href={link} target="_blank">
            {tier === 'platinum' ? <PlatniumImg src={imgURL} /> : tier === 'gold' ? <GoldImg src={imgURL} /> :
              tier === 'silver' ? <SilverImg src={imgURL} /> : tier === 'bronze' ? <BronzeImg src={imgURL} /> : tier === 'Inkind' ? <InkindImg src={imgURL} /> : void 0
            }
          </a>
        ))}
      </Row>
    )
  }

  return (
    <SectionContainer
      src={background}
      empty={categorizedSponsorMap.size == 0}
    >
      <StyledH1>Sponsors</StyledH1>
      <Rows>
        <SponsorsComponent tier='platinum' />
        <SponsorsComponent tier='gold' />
        <SponsorsComponent tier='silver' />
        <SponsorsComponent tier='bronze' />
        <SponsorsComponent tier='Inkind' />
      </Rows>
      <a href="mailto:sponsorship@nwplus.io?Subject=Sponsorship">
        <Button>Become a Sponsor</Button>
      </a>
    </SectionContainer>
  )
}

export default SponsorSection
