import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground, Rows, Row } from '@lib/Containers'
import background from '@assets/sponsor_bg.svg'
import { LAPTOP, scale } from '@constants/measurements'

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

  @media (max-width: ${LAPTOP}) {
    width: 20vw;
    height: 5vw;
    font-size: ${() => scale(320, 1440, 9, 30)};
  }
`

const PlatniumImg = styled.img`
  max-width: 900px;
  max-height: 300px;
  margin-left: 2rem;
  margin-top: 2vw;
`
const GoldImg = styled.img`
  max-width: 700px;
  max-height: 250px;
  margin-left: 2rem;
  margin-top: 2vw;
`

const SilverImg = styled.img`
  max-width: 500px;
  max-height: 200px;
  margin-left: 2rem;
  margin-top: 2vw;
`

const BronzeImg = styled.img`
  max-width: 300px;
  max-height: 150px;
  margin-left: 2rem;
  margin-top: 2vw;
`

const InkindImg = styled.img`
  max-width: 200px;
  max-height: 150px;
  margin-left: 2rem;
  margin-top: 2vw;
`

// in-kind -> bronze -> silver -> gold -> platinum
const SponsorSection = ({ sponsorData }) => {
  const [categorizedSponsorMap, setSponsorMap] = useState(new Map())

  const categorizeSponsor = sponsorList => {
    sponsorList.forEach(({ imgName, imgURL, link, name, tier }) => {
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

  return (
    <SectionContainer
      src={background}
      empty={categorizedSponsorMap.size == 0}
    >
      <StyledH1>Sponsors</StyledH1>
      <Rows>
        <Row>
          {categorizedSponsorMap.get('platinum')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <PlatniumImg src={imgURL} />
            </a>
          ))}
        </Row>
        <Row>
          {categorizedSponsorMap.get('gold')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <GoldImg src={imgURL} />
            </a>
          ))}
        </Row>
        <Row>
          {categorizedSponsorMap.get('silver')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <SilverImg src={imgURL} />
            </a>
          ))}
        </Row>
        <Row>
          {categorizedSponsorMap.get('bronze')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <BronzeImg src={imgURL} />
            </a>
          ))}
        </Row>
        <Row>
          {categorizedSponsorMap.get('Inkind')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <InkindImg src={imgURL} />
            </a>
          ))}
        </Row>
      </Rows>
      <a href="mailto:sponsorship@nwplus.io?Subject=Sponsorship">
        <Button>Become a Sponsor</Button>
      </a>
    </SectionContainer>
  )
}

export default SponsorSection
