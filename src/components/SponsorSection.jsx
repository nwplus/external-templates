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
  padding-top: 36rem;
`

const TextContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 150%;
  a {
    color: white;
  }
  padding-top: calc(calc(80 / 1440) * 100vw);

  ${(p) => p.theme.mediaQueries.mobile} {
    padding-top: 1rem;
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
`

const Row = styled.div`
  height: 100%;  
  ${p => p.flex ? `
    display: flex;
  ` : `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    justify-content: center;
  `}
  align-items: center;
  flex-wrap: wrap;
  max-width: 50vw;
  gap: 0.5rem;

  ${(p) => p.theme.mediaQueries.tablet} {
    display: flex;
    justify-content: center;
  }
`

const Rows = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
`
const TitleImg = styled.img`
  // max-width: 550px;
  // max-height: 300px;
  // margin-left: 1rem;
  // margin-right: 1rem;
  // margin-top: 2vw;
  // padding: 15px;
  // ${(p) => p.theme.mediaQueries.tablet} {
  //   max-width: 80vw;
  //   max-height: 50vh;
  // }
`
const PlatniumImg = styled.img`
  // max-width: 250px;
  // max-height: 300px;
  // margin-left: 1rem;
  // margin-right: 1rem;
  // margin-top: 2vw;
  // ${(p) => p.theme.mediaQueries.tablet} {
  //   max-width: 50vw;
  //   max-height: 20vh;
  // }
`

const GoldImg = styled.img`
  // max-width: 200px;
  // max-height: 250px;
  // margin-left: 1rem;
  // margin-right: 1rem;
  // margin-top: 2vw;
  // ${(p) => p.theme.mediaQueries.tablet} {
  //   max-width: 45vw;
  //   max-height: 20vh;
  // }
`

const SilverImg = styled.img`
  // max-width: 150px;
  // max-height: 200px;
  // margin-left: 1rem;
  // margin-right: 1rem;
  // margin-top: 2vw;
  // ${(p) => p.theme.mediaQueries.tablet} {
  //   max-width: 40vw;
  //   max-height: 20vh;
  // }
`

const BronzeImg = styled.img`
  // max-width: 100px;
  // max-height: 150px;
  // margin-left: 1rem;
  // margin-right: 1rem;
  // margin-top: 2vw;
  // ${(p) => p.theme.mediaQueries.tablet} {
  //   max-width: 35vw;
  //   max-height: 15vh;
  // }
`

const InkindImg = styled.img`
  // max-width: 50px;
  // max-height: 150px;
  // margin-left: 1rem;
  // margin-right: 1rem;
  // margin-top: 2vw;
  // ${(p) => p.theme.mediaQueries.tablet} {
  //   max-width: 30vw;
  //   max-height: 15vh;
  // }
`

const BigBoi = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 400px;
  height: 280px;
  padding: 1.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  ${(p) => p.theme.mediaQueries.tablet} {
    width: 400px;
    height: 290px;
  }
`

const MicroscopicBoi = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 100px;
  padding: 1.5rem;
  background-position: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
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
    const data = await fireDb.getCollection('hackcamp2023', 'Sponsors')
    if (data) {
      categorizeSponsor(data)
    }
  }, [])

  const SponsorsComponent = ({ tiers, flex }) => (
    <Row flex={flex}>
      {tiers.map((tier) => 
       categorizedSponsorMap.get(tier)?.map(({ imgURL, link, altImgURL }, index) => (
        <a href={link} target="_blank" rel="noreferrer">
          {(() => {
            switch (tier) {
              case 'title':
                return (
                  <BigBoi variant={index % 4}>
                    <TitleImg src={altImgURL} onMouseOver={(e) => { e.currentTarget.src = imgURL }} onMouseOut={(e) => { e.currentTarget.src = altImgURL }} />
                  </BigBoi>
                )

              case 'platinum':
                return (
                  <BigBoi variant={index % 4}>
                    <PlatniumImg src={imgURL} />
                  </BigBoi>
                )

              case 'gold':
                return (
                  <BigBoi variant={index % 4}>
                    <GoldImg src={imgURL} />
                  </BigBoi>
                )

              case 'silver':
                return (
                  <MicroscopicBoi>
                    <SilverImg src={imgURL} />
                  </MicroscopicBoi>
                )

              case 'bronze':
                return (
                  <MicroscopicBoi>
                    <BronzeImg src={imgURL} />
                  </MicroscopicBoi>
                )

              default:
                return (
                  <MicroscopicBoi>
                    <InkindImg src={imgURL} />
                  </MicroscopicBoi>
                )
            }
          })()}
        </a>
      ))
      )}
    </Row>
  )

  return (
    <Container>
      <Header2 id="sponsors">Sponsors</Header2>
      <Rows>
        <SponsorsComponent tiers={['title', 'platinum', 'gold']} />
        <SponsorsComponent tiers={['silver', 'bronze', 'Inkind']} flex />
      </Rows>
      <TextContainer>
        <Body>Sponsors make this event happen. If you are interested in working with us, joining us or speaking at one of our events, please reach out to us! <a href="mailto:info@nwplus.io" target="_blank" rel='noreferrer'>info@nwplus.io</a></Body>
      </TextContainer>
      <ButtonContainer>
        <Button href="mailto:sponsorship@nwplus.io?Subject=Sponsorship" variant="solid" styles={{ margin: 'auto' }}>
          Sponsor HackCamp!
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default SponsorSection