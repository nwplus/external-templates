import styled, { keyframes } from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import SponsorContainer from '@components/SponsorContainer'
import { Header2 } from '@components/Typography'
import React, { useEffect, useState } from 'react'
import fireDb from '@utilities/firebase'
import Button from '@components/Button'

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/sponsors/background.png'), #150C27;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1440/1630;
  overflow-y: visible;
  z-index: 99;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/sponsors/background.svg') #150C27;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio: 412/632;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #fff;
  font-size: 3rem;
  padding-top: 33rem;
  position: relative;
  z-index: 3;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2em;
    padding-top: 12rem;
  }
`

const colorChange = keyframes`
  0% {
    filter: brightness(1) saturate(100%);
  }
  25% {
    filter: brightness(1) saturate(150%);
  }
  50% {
    filter: brightness(1.2) saturate(150%);
  }
  75% {
    filter: brightness(1) saturate(150%);
  }
  100% {
    filter: brightness(1) saturate(100%);
  }
`

const UFO = styled.div`
background: url('assets/background/sponsors/ufo.png') no-repeat center;
width: 100vw;
height: 100vw;
aspect-ratio: 1293/564.05;
transform: translateY(-15vw);
position: absolute;
z-index:2;

${(p) => p.theme.mediaQueries.mobile} {
  display:none;
}
`

const UFOLight = styled.div`
background: url('assets/background/sponsors/light.png') no-repeat center;
width: 100vw;
height: 100vw;
aspect-ratio: 1/1.5;
top: 15%;
position: absolute;
z-index:-1;
animation: ${colorChange} 5s infinite; // apply the animation
${(p) => p.theme.mediaQueries.mobile} {
  display:none;
}
`

const Sponsors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  padding-top: 2.5vw;
  position: relative;
  z-index: 3;
  margin: auto;
`

const SponsorLogo = styled.img`
  width: 50%;
  flex: 50%;
`

const PushinP = styled.p`
  color: #fff;
  text-align: left;
  width: 30vw;
  min-width: 500px;
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 800px;
  position: relative;
  z-index: 3;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const ButtonContainer = styled.p`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;
`

const Skip = styled.div`
  height: 10rem;
  background: linear-gradient(to bottom, #8C5050, #220639);
  
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

export default function Sponsor () {
  const [sponsors, setSponsors] = useState(null)

  useEffect(async () => {
    const data = await fireDb.getCollection('HackCamp2023', 'Sponsors')
    if (data) {
      setSponsors(data)
    }
  }, [])

  return sponsors?.length > 0
    ? (
    <BgSectionContainer id="sponsors">
      <UFO></UFO>
      <UFOLight/>
      <StyledTitle>
        Sponsors
      </StyledTitle>
      <Sponsors>
        {sponsors.map((sponsor) => (
          <SponsorLogo src={sponsor.imgURL}/>
        ))}
      </Sponsors>
      <PushinP>
      Sponsors make this event happen. If you are interested in working with us, joining us or speaking at one of our events, please reach out to us!
      </PushinP>
      <ButtonContainer>
      <Button
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:sponsorship@nwplus.io?Subject=Sponsorship"
              width='205px'
              height='50px'
              borderRadius='6px'
              textColor='#FFFFFF'
              backgroundColor='linear-gradient(to left, #959AFB, #9AD4DE)'
              isHover>
              Sponsor HackCamp!
            </Button>
            </ButtonContainer>
    </BgSectionContainer>
      )
    : <Skip />
}
