import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainerWithBackground, Rows, Row } from '@lib/Containers'
import background from '@assets/sponsor_bg.svg'
import Button from '../hero/Button'

const GreenTextDiv = styled.div`
  color: green;
  font-style: italic;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const ImgDiv = styled.img`
  width: 10rem;
  height: 10rem;
`
const SponsorImgDiv = styled.img`
  max-width: 700px;
`

const TitleImg = styled.img`
  margin-bottom: ${p => p.marginBottom};
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

// in-kind -> bronze -> silver -> gold -> platinum
const SponsorSection = ({ sponsorData }) => {
  const [categorizedSponsorMap, setSponsorMap] = useState(new Map())

  const categorizeSponsor = sponsorList => {
    sponsorList.forEach(({ imgName, imgURL, link, name, tier }) => {
      const reducedSponsor = { imgURL, link }

      const currSponsorList = categorizedSponsorMap.get(tier)
      const updatedSponsorList = currSponsorList ? [reducedSponsor, ...currSponsorList] : [reducedSponsor]

      const updatedMap = categorizedSponsorMap.set(tier, updatedSponsorList)
      setSponsorMap(new Map(updatedMap))
    })
  }

  useEffect(() => {
    categorizeSponsor(sponsorData)
  }, [sponsorData])

  return (
    <SectionContainerWithBackground
      src={background}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <h1>Sponsors</h1>
      <Rows>
        {categorizedSponsorMap.get('platinum')?.map(({ imgURL, link }) => (
          <>
            <Row>
              <a href={link} target="_blank">
                <SponsorImgDiv src={imgURL} />
              </a>
            </Row>
            <Row />
          </>
        ))}
        <Row>
          {categorizedSponsorMap.get('gold')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <SponsorImgDiv src={imgURL} />
            </a>
          ))}
        </Row>
        <Row>
          {categorizedSponsorMap.get('silver')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <SponsorImgDiv src={imgURL} />
            </a>
          ))}
        </Row>
        <Row>
          {categorizedSponsorMap.get('bronze')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <SponsorImgDiv src={imgURL} />
            </a>
          ))}
        </Row>
        <Row>
          {categorizedSponsorMap.get('Inkind')?.map(({ imgURL, link }) => (
            <a href={link} target="_blank">
              <SponsorImgDiv src={imgURL} />
            </a>
          ))}
        </Row>
        {/* <Row>
          categorizedSponsorMap.get('gold')
        </Row>
        <Row>
          categorizedSponsorMap.get('silver')
        </Row>
        <Row>
          categorizedSponsorMap.get('bronze')
        </Row>
        <Row>
          categorizedSponsorMap.get('Inkind')
        </Row> */}
      </Rows>
      <Button>Become a Sponsor</Button>
    </SectionContainerWithBackground>
  )
}

export default SponsorSection
