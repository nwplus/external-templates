import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Body, Header2 } from "@components/Typography";
import Button from '@components/Button';
import fireDb from '@utilities/firebase';

const Container = styled.div`
  position: absolute;
  top: 5vh;
  left: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const TextContainer = styled.div`
  display: flex;
  width: 60%;
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
  margin-top: 10px;
  margin-bottom: 10px;
`

const Row = styled.div`
  height: 100%;  
  ${p => p.flex ? `
    display: flex;
    justify-content: center;
  ` : `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    justify-content: center;
  `}
  align-items: center;
  flex-wrap: wrap;
  max-width: 55vw;
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
  ${p => `background: url("/assets/sponsors/sponsorBoxV${p.variant + 1}.svg")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 500px;
  height: 400px;
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
const MediumBoi = styled.div`
  ${p => `background: url("/assets/sponsors/sponsorBoxV${p.variant + 1}.svg")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 450px;
  height: 390px;
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
const SilverBoi = styled.div`
  ${p => `background: url("/assets/sponsors/sponsorBoxV${p.variant + 1}.svg")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 400px;
  height: 350px;
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
const BronzeBoi = styled.div`
  ${p => `background: url("/assets/sponsors/sponsorBoxV${p.variant + 1}.svg")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 320px;
  height: 250px;
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
const SVBoi = styled.div`
  ${p => `background: url("/assets/sponsors/sponsorBoxV${p.variant + 1}.svg")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 275px;
  height: 220px;
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
  background-image: url("/assets/sponsors/smallSponsorBox.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 155px;
  padding: 1.5rem;
  background-position: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const StyledSponsorA = styled.a`
  display: flex;
  justify-content: center;
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
    const data = await fireDb.getCollection('cmd-f2024', 'Sponsors')
    if (data) {
      const lowerCasedData = data.map(sponsor => ({...sponsor, tier: sponsor.tier.toLowerCase()}))
      categorizeSponsor(lowerCasedData)
    }
  }, [])

  const SponsorsComponent = ({ tiers, flex }) => (
    <Row flex={flex}>
      {tiers.map((tier) => 
       categorizedSponsorMap.get(tier)?.map(({ imgURL, link, altImgURL }, index) => (
        <StyledSponsorA href={link} target="_blank" rel="noreferrer">
          {(() => {
            const tierlc = tier.toLowerCase()
            switch (tierlc) {
              case 'title':
                return (
                  <BigBoi variant={index % 4}>
                    <TitleImg src={altImgURL} onMouseOver={(e) => { e.currentTarget.src = imgURL }} onMouseOut={(e) => { e.currentTarget.src = altImgURL }} />
                  </BigBoi>
                )

              case 'platinum':
                return (
                  <MediumBoi variant={index % 4}>
                    <PlatniumImg src={imgURL} />
                  </MediumBoi>
                )

              case 'gold':
                return (
                  <MediumBoi variant={index % 4}>
                    <GoldImg src={imgURL} />
                  </MediumBoi>
                )

              case 'silver':
                return (
                  <SilverBoi variant={index % 4}>
                    <SilverImg src={imgURL} />
                  </SilverBoi>
                )

              case 'bronze':
                return (
                  <BronzeBoi variant={index % 4}>
                    <BronzeImg src={imgURL} />
                  </BronzeBoi>
                )

              case 'startup':
                return (
                  <SVBoi variant={index % 4}>
                    <BronzeImg src={imgURL} />
                  </SVBoi>
                )

              default:
                return (
                  <MicroscopicBoi>
                    <InkindImg src={imgURL} />
                  </MicroscopicBoi>
                )
            }
          })()}
        </StyledSponsorA>
      ))
      )}
    </Row>
  )

  return (
    <Container>
      <Header2 id="sponsors">Sponsors</Header2>
      <TextContainer>
        <Body>nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us, or speaking at one of our events, feel free to reach out to us at <a href="mailto:info@nwplus.io" target="_blank" rel='noreferrer'>info@nwplus.io</a></Body>
      </TextContainer>
      <ButtonContainer>
        <Button href="mailto:sponsorship@nwplus.io?Subject=Sponsorship" variant="solid" styles={{ margin: 'auto' }}>
          Become a Sponsor
        </Button>
      </ButtonContainer>
      <Rows>
        <SponsorsComponent tiers={['platinum']}  />
        <SponsorsComponent tiers={['gold']}  />
        <SponsorsComponent tiers={['silver']} />
        <SponsorsComponent tiers={['bronze']} />
        <SponsorsComponent tiers={['startup']} />
        <SponsorsComponent tiers={['inkind']} flex />
      </Rows>
    </Container>
  )
}

export default SponsorSection