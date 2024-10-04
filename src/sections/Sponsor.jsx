import styled from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import React, { useEffect, useState } from 'react'
import fireDb from '@utilities/firebase'

const sponsorTierOrder = {
  platinum: 1,
  gold: 2,
  silver: 3,
  startup: 4,
  bronze: 5,
  inkind: 6
}

const BgSectionContainer = styled(SectionContainer)`
  /* background: url('assets/background/sponsors/background.png'), #150C27; */
  background-size: 20vw;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  width: 100%;
  top: -53vw;
  /* height: ${props => props.height - 10}vw; */
  height: 110vw;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1440/1630;
  overflow-y: visible;
  z-index: 99;

  ${p => p.theme.mediaQueries.mobile} {
    background-size: 100vw;
    /* height: ${props => props.height + 45}vw; */
    height: 162vw;
    background-repeat: no-repeat;
    background-position: center center;
    top: 47vw;
  }

  @media (min-width: 370px) and (max-width: 378px) {
    top: 49vw;
  }

  @media (min-width: 390px) and (max-width: 410px) {
    top: 41vw;
  }

  @media (min-width: 411px) and (max-width: 429px) {
    top: 30vw;
  }

  @media (min-width: 430px) and (max-width: 449px) {
    top: 24vw;
  }

  @media (min-width: 450px) and (max-width: 479px) {
    top: 19vw;
  }

  @media (min-width: 480px) and (max-width: 510px) {
    top: 10vw;
  }

  @media (min-width: 511px) and (max-width: 540px) {
    top: -2vw;
  }

  @media (min-width: 541px) and (max-width: 570px) {
    top: -12vw;
  }

  @media (min-width: 571px) and (max-width: 600px) {
    top: -17vw;
  }

  @media (min-width: 601px) and (max-width: 630px) {
    top: -24vw;
  }

  @media (min-width: 631px) and (max-width: 700px) {
    top: -34vw;
  }

  /* ${p => p.theme.mediaQueries.xs} {
    top: 40vw;
  } */
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
    height: 11vw;
    top: 20vw;
    background-size: 58vw;
    width: 58vw;
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
  ${p => p.theme.mediaQueries.mobile} {
    top: 20vw;
    background-size: 90vw;
    width: 90vw;
    height: 40vw;
  }
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
  ${p => p.theme.mediaQueries.mobile} {
    /* height: 23vw; */
    background-size: ${props => 130 - (props.count * 3)}%;
    width: ${props => props.count * 23}vw;
    height: 22vw;
  }
`

const TitleSponsorLink = styled.a`
  display: flex;
  align-items: center;
  flex: 1 1 0px;
  position: absolute;
  top: 7vw;
  right: 33vw;
  z-index: 1000;
  ${p => p.theme.mediaQueries.mobile} {
    top: 12vw;
    right: 59vw;
  }
`

const SponsorLink = styled.a`
  display: flex;
  align-items: center;
  flex: 1 1 0px;
  justify-content: center;
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
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2.1vw;
    width: 66vw;
    right: 11.5vw;
    top: 17vw;
  }
`

const TitleSponsorLogo = styled.img`
  position: absolute;
  width: 17vw;
  ${p => p.theme.mediaQueries.mobile} {
    width: 24vw;
  }
`

const SponsorLogo = styled.img`
  /* max-width: 100%; */
  background-color: white;
  border-radius: 8px;
  height: 6vw;
  width: 15vw;
  padding: 1vw;
  object-fit: contain;
  ${p => p.theme.mediaQueries.mobile} {
    width: 21vw;
    height: 10vw;
  }
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
  z-index: 30;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2.9vw;
    min-width: 0px;
    width: 74vw;
    top: 32vw;
    text-align: center;
  }
`

const Skip = styled.div`
  height: 20vw;
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
export default function Sponsor () {
  const [sponsors, setSponsors] = useState({})
  const [height, setHeight] = useState(60)

  // used for calculating spacing of the sponsors
  // + check if window is available before using it
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const addHttpsIfMissing = (link) => {
    return link.startsWith('http://') || link.startsWith('https://')
      ? link
      : `https://${link}`
  }

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
          return acc + (organizedSponsors[key].length * 10)
        } else {
          return acc + (organizedSponsors[key].length * 3)
        }
      }, 0)

      // Update the body height
      const additionalHeight = rows + sponsorMultiplier
      // updateBodyHeight(`${465.5 + additionalHeight}vw`)
      setHeight(60 + additionalHeight)
    }
  }, [])

  // eslint-disable-next-line multiline-ternary
  return Object.keys(sponsors).length > 0 ? (
    <BgSectionContainer height={height} id="sponsors">
      <StyledTitle />
      <PushinP>
        nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with
        us, joining us or speaking at one of our events, feel free to reach out to us at{' '}
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
                      <TitleSponsorLink href={addHttpsIfMissing(sponsor.link)} target="_blank" rel="noreferrer">
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
                  count={sponsorCount}
                  style={{
                    backgroundImage: `url(${ContainerSVG})`,
                    backgroundRepeat: 'no-repeat',
                    top: `${isMobile ? 37 + row * 24 : 17 + row * 14}vw`,
                    backgroundPosition: 'center'
                  }}
                >
                  {sponsors[key].map(sponsor => (
                    // eslint-disable-next-line react/jsx-key
                    <SponsorLink href={addHttpsIfMissing(sponsor.link)} target="_blank" rel="noreferrer">
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
