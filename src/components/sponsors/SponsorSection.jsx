import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground, Rows, Row } from '@lib/Containers'
import background from '@assets/sponsor_bg.svg'
import Button from '../hero/Button'
import { scale } from '@constants/measurements'

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
`
const StyledButton = styled(Button)`
  width: 12vw;
  height: 3.5vw;
`
const PlatniumImg = styled.img`
  max-width: 900px;
  max-height: 300px;
  margin-left: 2rem;
`
const GoldImg = styled.img`
  max-width: 700px;
  max-height: 250px;
  margin-left: 2rem;
`

const SilverImg = styled.img`
  max-width: 500px;
  max-height: 200px;
  margin-left: 2rem;
`

const BronzeImg = styled.img`
  max-width: 300px;
  max-height: 150px;
  margin-left: 2rem;
`

const InkindImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-left: 2rem;
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
    >
      <h1>Sponsors</h1>
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
      <StyledButton>Become a Sponsor</StyledButton>
    </SectionContainer>
  )
}

export default SponsorSection
