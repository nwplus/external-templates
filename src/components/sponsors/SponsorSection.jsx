import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground, Rows, Row } from '@lib/Containers'
import Button from '@lib/Button'
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

  ${({ empty }) =>
    empty &&
    `
    height: 100vh;
    `}
`

const StyledH1 = styled.h1`
  margin-bottom: 5rem;

  @media only screen and (max-width: ${TABLET}) {
    margin-bottom: 3rem;
  }
`

const PlatniumImg = styled.img`
  min-width: 450px;
  max-width: 900px;
  max-height: 450px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    min-width: 20vh;
    max-width: 50vw;
    max-height: 20vh;
  }
`
const GoldImg = styled.img`
  min-width: 350px;
  max-width: 700px;
  max-height: 350px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    min-width: 20vh;
    max-width: 45vw;
    max-height: 20vh;
  }
`

const SilverImg = styled.img`
  min-width: 250px;
  max-width: 500px;
  max-height: 250px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    min-width: 20vh;
    max-width: 40vw;
    max-height: 20vh;
  }
`

const BronzeImg = styled.img`
  width: 350px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    width: 35vw;
  }
`

const InkindImg = styled.img`
  width: 200px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;

  @media only screen and (max-width: ${TABLET}) {
    width: 30vw;
  }
`

const Buttons = styled.div.attrs(() => ({
  id: "mentors"
}))`
  display: flex;
  height: 15vw;

  @media (max-width: ${TABLET}) {
    height: 25vw;
  }
`

// Inkind -> bronze -> silver -> gold -> platinum
const SponsorSection = ({ sponsorData, mentorFlag }) => {
  const [categorizedSponsorMap, setSponsorMap] = useState(new Map())

  const categorizeSponsor = sponsorList => {
    const updatedSponsors = new Map()
    sponsorList.forEach(({ imgURL, link, tier }) => {
      const reducedSponsor = { imgURL, link }

      const currSponsorList = updatedSponsors.get(tier)
      const updatedSponsorList = currSponsorList ? [reducedSponsor, ...currSponsorList] : [reducedSponsor]

      updatedSponsors.set(tier, updatedSponsorList)
      setSponsorMap(new Map(updatedSponsors))
    })
  }

  useEffect(() => {
    categorizeSponsor(sponsorData)
  }, [sponsorData])

  const SponsorsComponent = ({ tier }) => (
    <Row>
      {categorizedSponsorMap.get(tier)?.map(({ imgURL, link }) => (
        <a href={link} target="_blank" rel="noreferrer">
          {(() => {
            switch (tier) {
              case 'platinum':
                return <PlatniumImg src={imgURL} />

              case 'gold':
                return <GoldImg src={imgURL} />

              case 'silver':
                return <SilverImg src={imgURL} />

              case 'bronze':
                return <BronzeImg src={imgURL} />

              default:
                return <InkindImg src={imgURL} />
            }
          })()}
        </a>
      ))}
    </Row>
  )

  return (
    <SectionContainer src={background} empty={categorizedSponsorMap.size === 0} id="sponsors">
      <StyledH1>Sponsors</StyledH1>
      <Rows>
        <SponsorsComponent tier="platinum" />
        <SponsorsComponent tier="gold" />
        <SponsorsComponent tier="silver" />
        <SponsorsComponent tier="bronze" />
        <SponsorsComponent tier="Inkind" />
      </Rows>
      <Buttons>
        <Button>
          <a href="mailto:sponsorship@nwplus.io?Subject=Sponsorship">Become a Sponsor</a>
        </Button>
        <Button applyActive={mentorFlag}>
          <a href="https://forms.gle/9ACGyWD9axtpp1wFA">Become a Mentor</a>
        </Button>
      </Buttons>
    </SectionContainer>
  )
}

export default SponsorSection
