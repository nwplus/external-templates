import { useEffect } from 'react'
import { SectionContainer } from '@lib/Containers'
import styled, { keyframes } from 'styled-components'
import { Header1 } from './Typography'

const BgSectionContainer = styled(SectionContainer)`
  display: grid;
  align-items: center;
  width: 100%;
  top: -31.3vw;
  aspect-ratio: 1440/1415;
  position: relative;
  z-index: 15;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 1vw; 

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 412/709;
  }
`
const BgScroll = styled(SectionContainer)`
  /* background: url('assets/background/stats/background.png'); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/stats/background.png'); */
    background-repeat: no-repeat;
    background-size: 100vw;
  }
`

const stemsGlow = keyframes`
  from {
    filter: brightness(1);
  }
  to {
    filter: brightness(1.4);
  }
`

const Stems = styled(SectionContainer)`
  animation: ${stemsGlow} 2s infinite alternate;
  /* background: url('assets/background/stats/stems.svg'); */
  background-size: 100vw;
  transform: scale(1.205);
  background-repeat: no-repeat;

  position: absolute;
  top: 46.25vw;
  left: -1vw;
  width: 100%;
  height: 100%;
  z-index: 12;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/stats/stems.svg'); */
    background-repeat: no-repeat;
    background-size: 100vw;
    transform: scale(1.4);
    left: 5px;
    top: 67%;
  }
`

const FgScroll = styled(SectionContainer)`
  /* background: url('assets/background/stats/foreground.png'); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;

  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 98;
  top: 1vw;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/stats/foreground.png'); */
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position: center bottom;
  }
`

const StyledTitle = styled(Header1)`
  text-align: center;
  color: #FFECC5;
  font-size: 3.95vw;
  transform: rotate(-1.8deg);
  position: relative;
  top: 4.2vw;
  left: 15.8vw;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const ProjectTicketContainer = styled.div`
  width: 33.5vw;
  height: 15.6vw;
  overflow: hidden; 
  position: relative;
  left: -36vw;
  top: 20vw;
  display: inline-block;
  transition: transform 0.3s ease;
  z-index: 301;

  :hover {
    transform: scale(1.1); 
  }
`

const ProjectTicket = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: transform 0.3s ease;
`

const ProjectText = styled.div`
  position: absolute;
  top: 8vw;  
  left: 21vw;  
  transform: translate(-50%, -50%) rotate(-4.2deg); 
  color: #CF0A1F;
  text-align: center;  
  font-size: 3.75vw;
  font-weight: 900;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const ProjectAnimatedNumber = styled.div`
  font-size: 3.8vw;
  font-weight: 900;
  line-height: 1;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const ProjectLabel = styled.div`
  font-size: 1.2vw;
  font-weight: 700;
  line-height: 1;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
  }
`

const ParticipantTicketContainer = styled.div`
  width: 33.5vw;
  height: 15.6vw;
  overflow: hidden; 
  position: relative;
  left: 50.6vw;
  top: -8.7vw;
  display: inline-block;
  transition: transform 0.3s ease;
  z-index: 300;

  :hover {
    transform: scale(1.1);
  }
`

const ParticipantTicket = styled.img`
  width: 100%; 
  height: 100%;
  object-fit: cover; 
  transition: transform 0.3s ease;
`

const ParticipantText = styled.div`
  position: absolute;
  top: 7.8vw;  
  left: 19.5vw; 
  transform: translate(-50%, -50%) rotate(8.2deg);  
  color: #CF0A1F;
  text-align: center;  
  font-size: 3.75vw;
  font-weight: 900;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const ParticipantAnimatedNumber = styled.div`
  font-size: 3.8vw;
  font-weight: 900;
  line-height: 1;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const ParticipantLabel = styled.div`
  font-size: 1.2vw; 
  font-weight: 700;
  line-height: 1;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
  }
`

const HackersTicketContainer = styled.div`
  width: 33.5vw;
  height: 15.6vw;
  overflow: hidden; 
  position: relative;
  left: -29vw;
  top: 7vw;
  display: inline-block;
  transition: transform 0.3s ease;
  z-index: 300;

  :hover {
    transform: scale(1.1); 
  }
`

const HackersTicket = styled.img`
  width: 100%; 
  height: 100%;
  object-fit: cover; 
  transition: transform 0.3s ease;
`

const HackersText = styled.div`
  position: absolute;
  top: 7.9vw; 
  left: 19.3vw;  
  transform: translate(-50%, -50%) rotate(7.1deg);
  color: #0D5D7B;
  text-align: center;
  font-size: 3.75vw;
  font-weight: 900;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const HackersAnimatedNumber = styled.div`
  font-size: 3.8vw;
  font-weight: 900;
  line-height: 1;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const HackersLabel = styled.div`
  font-size: 1.2vw;
  font-weight: 700;
  line-height: 1;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
  }
`

const CharityTicketContainer = styled.div`
  width: 46vw;
  height: 21.42vw;
  overflow: hidden; 
  position: relative;
  left: 39.5vw;
  top: -26.5vw;
  display: inline-block;
  transition: transform 0.3s ease;
  z-index: 301;

  :hover {
    transform: scale(1.1); 
  }
`

const CharityTicket = styled.img`
  width: 100%; 
  height: 100%;
  object-fit: cover; 
  transition: transform 0.3s ease;
`

const CharityText = styled.div`
  position: absolute;
  top: 11.2vw;
  left: 20vw;
  transform: translate(-50%, -50%) rotate(-7.9deg); 
  color: #9C1F82;
  text-align: center; 
  font-size: 3.75vw;
  font-weight: 900;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const CharityAnimatedNumber = styled.div`
  font-size: 3.8vw;
  font-weight: 900;
  line-height: 1;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const CharityLabel = styled.div`
  font-size: 1.2vw; 
  font-weight: 700;
  line-height: 1;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
  }
`

export default function Stats () {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stats = window.document.querySelector('.stats')
      const renderCountAnimation = () => {
        const valueDisplays = window.document.querySelectorAll('.num')
        const interval = 500
        valueDisplays.forEach(valueDisplay => {
          let startValue = 0
          const endValue = parseInt(valueDisplay.getAttribute('data-val'))
          const id = valueDisplay.getAttribute('id')
          const duration = Math.floor(interval / endValue)
          const counter = setInterval(function () {
            startValue += 1
            if (id === 'percent') {
              valueDisplay.textContent = `${startValue}%`
            } else if (id === 'moneysign') {
              valueDisplay.textContent = `$${startValue}`
            } else {
              valueDisplay.textContent = `${startValue}`
            }

            if (startValue === endValue) {
              clearInterval(counter)
            }
          }, duration)
        })
      }
      const observer = new window.IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          renderCountAnimation()
        }
      })
      observer.observe(stats)
    }
  })

  return (
    <BgSectionContainer id="statistics">
      <BgScroll />
      <Stems />
      <FgScroll />
      <StyledTitle>Last Year We Had...</StyledTitle>
      <ProjectTicketContainer className="stats">
        <ProjectTicket src='assets/background/stats/projects-ticket.svg' alt='Projects Ticket' />
        <ProjectText>
            <ProjectAnimatedNumber className="num" data-val="57">0</ProjectAnimatedNumber>
            <ProjectLabel>Projects</ProjectLabel>
        </ProjectText>
      </ProjectTicketContainer>
      <ParticipantTicketContainer className="stats">
        <ParticipantTicket src='assets/background/stats/participants-ticket.svg' alt='Participants Ticket' />
        <ParticipantText>
            <ParticipantAnimatedNumber className="num" data-val="250">0</ParticipantAnimatedNumber>
            <ParticipantLabel>Participants</ParticipantLabel>
        </ParticipantText>
      </ParticipantTicketContainer>
      <HackersTicketContainer className="stats">
        <HackersTicket src='assets/background/stats/hackers-ticket.svg' alt='Hackers Ticket' />
        <HackersText>
            <HackersAnimatedNumber className="num" data-val="100" id="percent">0</HackersAnimatedNumber>
            <HackersLabel>First-time Hackers</HackersLabel>
        </HackersText>
      </HackersTicketContainer>
      <CharityTicketContainer className="stats">
        <CharityTicket src='assets/background/stats/charity-ticket.svg' alt='Charity Ticket' />
        <CharityText>
            <CharityAnimatedNumber className="num" data-val="570" id="moneysign">0</CharityAnimatedNumber>
            <CharityLabel>Raised for Charity</CharityLabel>
        </CharityText>
      </CharityTicketContainer>
    </BgSectionContainer>
  )
}
