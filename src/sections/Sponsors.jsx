import styled from 'styled-components'
import { useEffect, useState } from 'react'
import fireDb from '@utilities/firebase';
import Anchor from '@components/Anchor';

const Title = styled.p`
  position: absolute;
  left: 1331.76vh;
  top: 12.35vh;

  color: #FFF;
  font-family: "Yatra One";
  font-size: 5.49vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`

const SponsorTiers = styled.div`
  position: absolute;
  left: 1277.54vh;
  top: 27vh;
  width: 135.8vh;
  height: 70vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  gap: 2vh;
`

const SilverBoi = styled.img`
  width: 20vh;
  height: 10vh;
`

const SponsorRow = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 5vh;
`

const SponsorsLink = styled.a`
  display: flex;
  justify-content: center;
`

const Sponsors = () => {
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

  const SponsorsRowComponent = ({ tier }) => (<SponsorRow>
    {categorizedSponsorMap.get(tier)?.map(({ imgURL, link }) => (
      <SponsorsLink href={link} target="_blank" rel="noreferrer">
        <SilverBoi src={imgURL} />
      </SponsorsLink>
    ))}
    </SponsorRow>)

  return (
    <>
      <Anchor id="sponsors" x="1270"/>
      <Title>Sponsors</Title>
      <SponsorTiers>
        <SponsorsRowComponent tier='silver' />
      </SponsorTiers>
    </>
  )
}

export default Sponsors
