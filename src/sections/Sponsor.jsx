import styled from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import React, { useEffect, useState } from 'react'
import fireDb from '@utilities/firebase'

const sponsorTierOrder = {
  platinum: 1,
  gold: 2,
  silver: 3,
  bronze: 4,
  inkind: 5,
  startup: 6
}

const BgSectionContainer = styled(SectionContainer)`
  /* background: url('assets/background/sponsors/background.png'), #150C27; */
  background-size: 20vw;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  width: 100%;
  top: -53vw;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1440/1630;
  overflow-y: visible;
  z-index: 99;

  ${p => p.theme.mediaQueries.mobile} {
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio: 412/632;
  }
`

const StyledTitle = styled.div`
  background: url('assets/background/sponsors/sponsors-header.svg') no-repeat right;
  background-size: 40vw;
  width: 40vw;
  height: 10vw;
  /* font-size: 3rem; */
  position: absolute;
  z-index: 10;
  left: 50vw;
  top: 1vw;
  transform: translateX(-50%);
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const TitleSponsorContainer = styled.div`
  background: url('assets/background/sponsors/title-sponsor-container.svg') no-repeat right;
  background-size: 48vw;
  width: 48vw;
  height: 20vw;
  position: absolute;
  z-index: 10;
  left: 25vw;
  top: 12vw;
  transform: translateX(-50%);
`

const Sponsors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 20vw;
  padding-top: 30vw;
  position: relative;
  z-index: 3;
  margin: auto;
`

const SponsorTier = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #130f2a;
  padding: 8px 20px;
  height: 13vw;
  background-size: 100%;
  gap: 1.3vw;
`

const TitleSponsorLink = styled.a`
  display: flex;
  align-items: center;
  flex: 1 1 0px;
  position: absolute;
  top: 7vw;
  right: 33vw;
  z-index: 1000;
`

const SponsorLink = styled.a`
  display: flex;
  align-items: center;
  flex: 1 1 0px;
`

const SponsorText = styled.h1`
  font-size: 1vw;
  width: 40vw;
  color: black;
  position: absolute;
  top: 10.7vw;
  font-weight: lighter;
  right: 3.9vw;
  font-family: 'HK Grotesk';
`

const TitleSponsorLogo = styled.img`
  position: absolute;
  width: 17vw;
`

const SponsorLogo = styled.img`
  /* max-width: 100%; */
  background-color: white;
  border-radius: 8px;
  height: 6vw;
  width: 15vw;
  padding: 1vw;
  object-fit: contain;
`

const PushinP = styled.p`
  color: #fff;
  text-align: left;
  width: 39vw;
  min-width: 500px;
  margin: 0 auto;
  padding-top: 1vw;
  position: relative;
  top: 10vw;
  z-index: 3;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Skip = styled.div`
  height: 10vw;
  /* background: linear-gradient(to bottom, #8c5050, #220639); */

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const EmailBlurb = styled.a`
  color: #f5c745;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`

// eslint-disable-next-line react/prop-types
export default function Sponsor ({ updateBodyHeight }) {
  const [sponsors, setSponsors] = useState({})

  useEffect(async () => {
    const data = await fireDb.getCollection('HackCamp2024', 'Sponsors')
    // const data = []
    if (data) {
      const organizedSponsors = {}
      data.forEach(sponsor => {
        if (!organizedSponsors[sponsor.tier]) {
          organizedSponsors[sponsor.tier] = []
        }
        organizedSponsors[sponsor.tier].push(sponsor)
      })
      setSponsors(organizedSponsors)

      // Calculate the number of rows
      const uniqueTiers = Object.keys(organizedSponsors).length
      const rows = uniqueTiers * 5

      // Calculate additional height based on the number of sponsors
      const sponsorMultiplier = Object.keys(organizedSponsors).reduce((acc, key) => {
        if (key === 'platinum') {
          return acc + (organizedSponsors[key].length * 11)
        } else {
          return acc + (organizedSponsors[key].length * 8)
        }
      }, 0)

      // Update the body height
      const additionalHeight = rows + sponsorMultiplier
      updateBodyHeight(`${455.5 + additionalHeight}vw`)
    }
  }, [])

  // eslint-disable-next-line multiline-ternary
  return Object.keys(sponsors).length > 0 ? (
    <BgSectionContainer id="sponsors">
      <StyledTitle />
      <PushinP>
        nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with
        us, joining us or speaking at one of our events, feel free to reach out to use at{' '}
        <EmailBlurb href="mailto:sponsorship@nwplus.io" target="_blank" rel="noopener noreferrer">
          sponsorship@nwplus.io
        </EmailBlurb>
      </PushinP>
      <Sponsors>
        {Object.keys(sponsors)
          .sort((a, b) => sponsorTierOrder[a] - sponsorTierOrder[b])
          .map((key, index) => {
            const row = index
            if (key === 'platinum') {
              return (
                <TitleSponsorContainer key={key}>
                  {sponsors[key].map(sponsor => (
                    <>
                      <TitleSponsorLink href={sponsor.link} target="_blank" rel="noreferrer">
                        <TitleSponsorLogo src={sponsor.imgURL} />
                      </TitleSponsorLink>
                      <SponsorText>{sponsor.blurb}</SponsorText>
                    </>
                  ))}
                </TitleSponsorContainer>
              )
            } else {
              const sponsorCount = sponsors[key].length

              const ContainerSVG = `assets/background/sponsors/${sponsorCount}-sponsors.svg`

              return (
                <SponsorTier
                  key={key}
                  style={{
                    backgroundImage: `url(${ContainerSVG})`,
                    backgroundRepeat: 'no-repeat',
                    top: `${19 + row * 14}vw`,
                    backgroundPosition: 'center'
                  }}
                >
                  {sponsors[key].map(sponsor => (
                    // eslint-disable-next-line react/jsx-key
                    <SponsorLink href={sponsor.link} target="_blank" rel="noreferrer">
                      <SponsorLogo src={sponsor.imgURL} />
                    </SponsorLink>
                  ))}
                </SponsorTier>
              )
            }
          })}
      </Sponsors>
    </BgSectionContainer>
  ) : (
    <Skip />
  )
}
