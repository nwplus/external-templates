import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Body, Header2 } from "@components/Typography";
import Button from '@components/Button';
import fireDb from '@utilities/firebase';

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

  a {
    color: white;
  }

  ${(p) => p.theme.mediaQueries.tablet} {
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
const TitleImg = styled.img`
  max-width: 550px;
  max-height: 300px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  padding: 15px;
  ${(p) => p.theme.mediaQueries.tablet} {
    max-width: 80vw;
    max-height: 50vh;
  }
`
const PlatniumImg = styled.img`
  max-width: 250px;
  max-height: 300px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  ${(p) => p.theme.mediaQueries.tablet} {
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
  ${(p) => p.theme.mediaQueries.tablet} {
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
  ${(p) => p.theme.mediaQueries.tablet} {
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
  ${(p) => p.theme.mediaQueries.tablet} {
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
  ${(p) => p.theme.mediaQueries.tablet} {
    max-width: 30vw;
    max-height: 15vh;
  }
`

// startup/Inkind -> bronze -> silver -> gold -> platinum
const SponsorSection = () => {
  const [categorizedSponsorMap, setSponsorMap] = useState(new Map())

  const categorizeSponsor = sponsorList => {
    const updatedSponsors = new Map()

    sponsorList.forEach(({ imgURL, link, tier, altImgURL }) => {
      const reducedSponsor = { imgURL, link, altImgURL }

      const currSponsorList = updatedSponsors.get(tier)
      const updatedSponsorList = currSponsorList ? [reducedSponsor, ...currSponsorList] : [reducedSponsor]

      updatedSponsors.set(tier, updatedSponsorList)
      setSponsorMap(new Map(updatedSponsors))
    })
  }

  useEffect(async () => {
    const data = await fireDb.getCollection('HackCamp2021', 'Sponsors')
    if (data) {
      categorizeSponsor(data)
    }
  }, [])

  const SponsorsComponent = ({ tier }) => (
    <Row>
      {categorizedSponsorMap.get(tier)?.map(({ imgURL, link, altImgURL }) => (
        <a href={link} target="_blank" rel="noreferrer">
          {(() => {
            switch (tier) {
              case 'title':
                return <TitleImg src={altImgURL} onMouseOver={(e) => { e.currentTarget.src = imgURL }} onMouseOut={(e) => { e.currentTarget.src = altImgURL }} />

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
      <Header2 id="sponsors">Sponsors</Header2>
      <TextContainer>
        <Body>nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us, or speaking at one of our events, feel free to reach out to us at <a href="mailto:info@nwplus.io" target="_blank" rel='noreferrer'>info@nwplus.io</a></Body>
      </TextContainer>
      <ButtonContainer>
        <Button href="mailto:sponsorship@nwplus.io?Subject=Sponsorship" width='312px' height='60px' backgroundColor='#FFFFFF' borderRadius='8px' textColor='#0D3153' isHover>
          Become a Sponsor
        </Button>
      </ButtonContainer>
      <Rows>
        <SponsorsComponent tier="title" />
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
