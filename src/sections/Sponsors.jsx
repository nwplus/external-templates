import styled from 'styled-components'
import { useEffect, useState } from 'react'
import fireDb from '@utilities/firebase';
import Anchor from '@components/Anchor';
import { v4 as uuidv4 } from 'uuid';

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
  left: 1282.54vh;
  top: 25vh;
  width: 124vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  gap: 4rem;
`

const sizeFromTier = {
  "platinum": "15vh",
  "gold": "12vh",
  "silver": "8vh",
  "bronze": "5vh",
  "inkind": "3vh"
}

const SponsorImage = styled.img`
  height: ${p => sizeFromTier[p.tier]};
`

const SponsorRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const SponsorsLink = styled.a`
  display: flex;
  justify-content: center;
`

const Sponsors = ({ tiers }) => {
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
      <SponsorsLink key={uuidv4()} href={link} target="_blank" rel="noreferrer">
        <SponsorImage src={imgURL} tier={tier} />
      </SponsorsLink>
    ))}
    </SponsorRow>)

  return (
    <>
      <Anchor id="sponsors" x="1270"/>
      <Title>Sponsors</Title>
      <SponsorTiers>
        {tiers.map (tier => <SponsorsRowComponent key={uuidv4()} tier={tier} />)}
      </SponsorTiers>
    </>
  )
}

export default Sponsors
