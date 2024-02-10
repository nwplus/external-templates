import styled from "styled-components";
import { useEffect, useState } from 'react'
import fireDb from '@utilities/firebase';
import { v4 as uuidv4 } from 'uuid';
import Slide from "./Slide";

const SponsorTiers = styled.div`
  margin-top: 8rem;
  margin-left: 2rem;
  margin-right: 2rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  gap: 1rem;
`

const SilverBoi = styled.img`
  width: 50vw;
`

const SponsorColumn = styled.div`
  display: flex;
  felx-direction: column;
  justify-content: center;
  gap: 5vh;
`

const SponsorsLink = styled.a`
  display: flex;
  justify-content: center;
`

const SmallSponsorsSlide = () => {
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
      <SponsorsLink key={uuidv4()}  href={link} target="_blank" rel="noreferrer">
        <SilverBoi src={imgURL} />
      </SponsorsLink>
    ))}
    </SponsorColumn>)

  return (
      <Slide alignItems="center">
        <SponsorTiers>
          <SponsorsColumnComponent tier='bronze' />
        </SponsorTiers>
      </Slide>
  )
}

export default SmallSponsorsSlide;