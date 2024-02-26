import styled from "styled-components";
import { useEffect, useState } from 'react'
import fireDb from '@utilities/firebase';
import Anchor from "@components/Anchor";
import { v4 as uuidv4 } from 'uuid';
import Slide from "./Slide";

const SponsorsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SponsorTiers = styled.div`
  margin-top: 0;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const sizeFromTier = {
  "platinum": "90vw",
  "gold": "70vw",
  "silver": "50vw",
  "bronze": "30vw",
  "inkind": "10vw"
}

const SponsorImage = styled.img`
  width: ${p => sizeFromTier[p.tier]};
`

const SponsorColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  gap: 1rem;
`

const SponsorsLink = styled.a`
  display: flex;
  justify-content: center;
`

const SponsorsSlide = ({ tiers, isAnchor }) => {
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

  const SponsorsColumnComponent = ({ tier }) => (<SponsorColumn>
    {categorizedSponsorMap.get(tier)?.map(({ imgURL, link }) => (
      <SponsorsLink key={uuidv4()} href={link} target="_blank" rel="noreferrer">
        <SponsorImage src={imgURL} tier={tier} />
      </SponsorsLink>
    ))}
    </SponsorColumn>)

  return (
      <Slide alignItems="center">
        {isAnchor && <Anchor id="sponsors-mobile" x="0" />}
        <SponsorsContainer>
          <SponsorTiers>
            {tiers.map (tier => <SponsorsColumnComponent key={uuidv4()} tier={tier} />)}
          </SponsorTiers>
        </SponsorsContainer>
      </Slide>
  )
}

export default SponsorsSlide;