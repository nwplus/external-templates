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
  top: -60vw;
  /* height: ${props => props.height - 10}vw; */
  height: 110vw;
  justify-content: center;
  align-items: center;
  overflow-y: visible;
  z-index: 99;

  ${p => p.theme.mediaQueries.mobile} {
    background-size: 100vw;
    /* height: ${props => props.height + 45}vw; */
    height: 162vw;
    background-repeat: no-repeat;
    background-position: center center;
    top: -37vw;
  }

  @media (min-width: 300px) and (max-width: 378px) {
    top: -1vw;
  }

  @media (min-width: 379px) and (max-width: 500px) {
    top: -18vw;
  }

  /*
  @media (min-width: 390px) and (max-width: 410px) {
    top: 41vw;
  }

  @media (min-width: 411px) and (max-width: 429px) {
    top: 10vw;
  }

  @media (min-width: 430px) and (max-width: 449px) {
    top: 10vw;
  }

  @media (min-width: 450px) and (max-width: 479px) {
    top: 1vw;
  }

  @media (min-width: 480px) and (max-width: 510px) {
    top: -1vw;
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
  } */

  @media (min-width: 701px) and (max-width: 769px) {
    top: -34vw;
  }

  @media (min-width: 770px) and (max-width: 888px) {
    top: -80vw;
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
  top: 4vw;
  transform: translateX(-50%);
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2em;
    height: 11vw;
    background-size: 68vw;
    width: 68vw;
    top: 10vw;
  }
`

const TitleSponsorContainer = styled.div`
  background: url('assets/background/sponsors/title-sponsor-container.svg') no-repeat right;
  background-size: 62vw;
  width: 62vw;
  height: 29vw;
  position: absolute;
  z-index: 10;
  left: 25vw;
  top: 8vw;
  transform: translateX(-50%);
  ${p => p.theme.mediaQueries.mobile} {
    top: 22vw;
    width: 62vw;
    width: 62vw;
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
    padding: 8px 5px;
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
  top: 9vw;
  right: 39vw;
  z-index: 1000;
  ${p => p.theme.mediaQueries.mobile} {
    top: 15vw;
    right: 43.5vw;
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
  width: 53.6vw;
  color: black;
  max-height: 15vh;
  overflow-y: auto;
  font-weight: 400;
  position: absolute;
  top: 13.7vw;
  right: 3.9vw;
  font-family: 'HK Grotesk';
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.05vw;
    width: 53.6vw;
    max-height: 11vh;
    /* width: 66vw; */
    right: 3.9vw;
    top: 19vw;
  }
`

const TitleSponsorLogo = styled.img`
  position: absolute;
  width: 15vw;
  ${p => p.theme.mediaQueries.mobile} {
    width: 24vw;
  }
`

const SponsorLogo = styled.img`
  background-color: white;
  border-radius: 8px;
  height: 6vw;
  width: 100%;
  padding: 1vw;
  object-fit: contain;
  ${p => p.theme.mediaQueries.mobile} {
    /* width: 21vw; */
    width: 100%;
    height: 10vw;
  }
`

const PushinP = styled.p`
  padding-bottom: 4vw;
  color: #fff;
  font-size: 1.4vw;
  text-align: center;
  width: 44vw;
  /* min-width: 500px; */
  margin: 0 auto;
  padding-top: 1vw;
  position: relative;
  top: 13vw;
  z-index: 30;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2.9vw;
    min-width: 0px;
    width: 74vw;
    top: 28vw;
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

const Button = styled.button`
  background-size: cover;
  border: none;
  border-radius: 50%;
  width: 3vw;
  height: 3vw;
  position: relative;
  left: 5.5vw;
  top: 15vw;
  font-size: 1.5vw;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ${p => p.theme.mediaQueries.mobile} {
    display: none;
  } */


`

const LeftButton = styled(Button)`
  background: url('assets/background/sponsors/sponsor-blurb-left.svg') no-repeat center center;
  background-size: cover;
  z-index: 2000;
  left: -4vw;
  top: 13vw;
  ${p => p.theme.mediaQueries.mobile} {
    top: 18vw;
  }
`

const RightButton = styled(Button)`
  background: url('assets/background/sponsors/sponsor-blurb-right.svg') no-repeat center center;
  background-size: cover;
  left: 60vw;
  top: 13vw;
  ${p => p.theme.mediaQueries.mobile} {
    top: 18vw;
  }
`

// eslint-disable-next-line react/prop-types
export default function Sponsor () {
  const [sponsors, setSponsors] = useState({})
  const [height, setHeight] = useState(60)

  const [currSponsorBlurb, setCurrSponsorBlurb] = useState(0)

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
      setHeight(60 + additionalHeight)
    }
  }, [])

  const handleNext = (maxBlurbs) => {
    setCurrSponsorBlurb((prev) => (prev + 1) % maxBlurbs)
  }

  const handlePrev = (maxBlurbs) => {
    setCurrSponsorBlurb((prev) => (prev - 1 + maxBlurbs) % maxBlurbs)
  }

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
                      <SponsorText>{sponsor.blurb[currSponsorBlurb]}</SponsorText>
                    </>
                  ))}
                  <LeftButton onClick={() => handlePrev(sponsors[key][0].blurb.length)} />
                  <RightButton onClick={() => handleNext(sponsors[key][0].blurb.length)} />
                </TitleSponsorContainer>
              )
            } else {
              const sponsorCount = sponsors[key].length

              const ContainerSVG = 'assets/background/sponsors/3-sponsors.svg'

              return (
                <SponsorTier
                  key={key}
                  count={sponsorCount}
                  style={{
                    backgroundImage: `url(${ContainerSVG})`,
                    width: '62vw',
                    height: `${isMobile ? 18 : 14}vw`,
                    // backgroundImage: 'url(assets/background/sponsors/sponsor-film-roll.svg)',
                    // background: `url('assets/background/sponsors/sponsor-film-roll.svg')`,
                    backgroundRepeat: 'no-repeat',
                    top: `${isMobile ? 37 + row * 19 : 21 + row * 15}vw`,
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
