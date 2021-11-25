import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20vw;
`

const Row = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80vw;
`

const Rows = styled.div`
  display: flex;
  flex-direction: column;  
`

const PlatinumImg = styled.img`
  max-width: 24vw;
  max-height: 24vw;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  ${(p) => p.theme.mediaQueries.tablet} {
    max-width: 50vw;
    max-height: 20vh;
  }
`

const GoldImg = styled.img`
  max-width: 18vw;
  max-height: 18vw;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  ${(p) => p.theme.mediaQueries.tablet} {
    max-width: 45vw;
    max-height: 20vh;
  }
`

const SilverImg = styled.img`
  max-width: 15vw;
  max-height: 15vw;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  ${(p) => p.theme.mediaQueries.tablet} {
    max-width: 40vw;
    max-height: 20vh;
  }
`

const BronzeImg = styled.img`
  max-width: 12vw;
  max-height: 12vw;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  ${(p) => p.theme.mediaQueries.tablet} {
    max-width: 35vw;
    max-height: 15vh;
  }
`

const InkindImg = styled.img`
  max-width: 10vw;
  max-height: 10vw;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2vw;
  ${(p) => p.theme.mediaQueries.tablet} {
    max-width: 30vw;
    max-height: 15vh;
  }
`

// startup/Inkind -> bronze -> silver -> gold -> platinum
const SponsorContainer = () => {
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
    const data = await fireDb.getCollection('nwHacks2022', 'Sponsors')
    if (data) {
      categorizeSponsor(data)
    }
  }, [])

  const SponsorsComponent = ({ tier }) => (
    <Row>
      {categorizedSponsorMap.get(tier)?.map(({ imgURL, link }) => (
        <a href={link} target="_blank" rel="noreferrer">
          {(() => {
            switch (tier) {
              case 'platinum':
                return <PlatinumImg src={imgURL} />

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

export default SponsorContainer