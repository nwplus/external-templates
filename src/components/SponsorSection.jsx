import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TABLET } from '@constants/measurements'
import { Body, Header2 } from "@components/Typography";
import Button from '@components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media only screen and (max-width: ${TABLET}) {
    width: 80%
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`

const Row = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 55vw;
`

const Rows = styled.div`
  display: flex;
  flex-direction: column;  
`

const PlatniumImg = styled.img`
  max-width: 250px;
  max-height: 300px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  @media only screen and (max-width: ${TABLET}) {
    max-width: 50vw;
    max-height: 20vh;
  }
`

const GoldImg = styled.img`
  max-width: 200px;
  max-height: 250px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  @media only screen and (max-width: ${TABLET}) {
    max-width: 45vw;
    max-height: 20vh;
  }
`

const SilverImg = styled.img`
  max-width: 150px;
  max-height: 200px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  @media only screen and (max-width: ${TABLET}) {
    max-width: 40vw;
    max-height: 20vh;
  }
`

const BronzeImg = styled.img`
  max-width: 100px;
  max-height: 150px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  @media only screen and (max-width: ${TABLET}) {
    max-width: 35vw;
    max-height: 15vh;
  }
`

const InkindImg = styled.img`
  max-width: 50px;
  max-height: 150px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  @media only screen and (max-width: ${TABLET}) {
    max-width: 30vw;
    max-height: 15vh;
  }
`

// startup/Inkind -> bronze -> silver -> gold -> platinum
const SponsorSection = ({ sponsorData }) => {
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
    if (sponsorData) {
      categorizeSponsor(sponsorData)
    }
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
    <Container>
      <Header2 id="sponsor">Sponsors</Header2>
      <TextContainer>
        <Body>nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us, or speaking at one of our events, feel free to reach out to us at info@nwplus.io</Body>
      </TextContainer>
      <ButtonContainer>
        <Button href="mailto:sponsorship@nwplus.io?Subject=Sponsorship" width='312px' height='60px' backgroundColor='#FFFFFF' borderRadius='8px' textColor='#0D3153' isHover>
          Become a Sponsor
        </Button>
      </ButtonContainer>
      <Rows>
        <SponsorsComponent tier="platinum" />
        <SponsorsComponent tier="gold" />
        <SponsorsComponent tier="silver" />
        <SponsorsComponent tier="bronze" />
        <SponsorsComponent tier="Inkind" />
      </Rows>
    </Container>
  )
}

export default SponsorSection
