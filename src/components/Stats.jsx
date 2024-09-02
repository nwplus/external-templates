import { useEffect, useState } from 'react'
import { SectionContainer } from '@lib/Containers'
import styled, { keyframes } from 'styled-components'
import { Header1 } from './Typography'

const gallery = [
  '/assets/gallery/1.JPG',
  '/assets/gallery/2.jpg',
  '/assets/gallery/3.jpg',
  '/assets/gallery/4.jpg',
  '/assets/gallery/5.jpg',
  '/assets/gallery/6.jpg',
  '/assets/gallery/7.jpg',
  '/assets/gallery/8.jpg',
  '/assets/gallery/9.jpg',
  '/assets/gallery/10.jpg',
  '/assets/gallery/11.jpg',
  '/assets/gallery/12.jpg',
  '/assets/gallery/13.jpg',
  '/assets/gallery/14.jpg',
  '/assets/gallery/15.jpg',
  '/assets/gallery/16.jpg',
  '/assets/gallery/17.jpg',
  '/assets/gallery/18.jpg',
  '/assets/gallery/19.jpg',
  '/assets/gallery/20.jpg',
]

const BgSectionContainer = styled(SectionContainer)`
  display: grid;
  align-items: center;
  width: 100%;
  top: -31.3vw;
  aspect-ratio: 1440/1415;
  position: relative;
  z-index: 15;
  /* overflow: hidden; */
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
  color: #ffecc5;
  font-size: 3.95vw;
  transform: rotate(-1.8deg);
  position: relative;
  top: 4.2vw;
  left: 15.8vw;
  z-index: 100;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const scroll = keyframes`
  0% { 
    transform: translateX(0); 
  }
  100% { 
    transform: translateX(-2568.38px); 
  }
`
const mobileScroll = keyframes`
  0% { 
    transform: translateX(0); 
  }
  100% { 
    transform: translateX(-2568.38px); 
  }
`
const ticketScroll = shift => keyframes`
  0% {
    // here
    transform: translateX(${shift}px);
  }
  100% {
    transform: translateX(-2568.38px);
  }
`
const ticketMobileScroll = shift => keyframes`
  0% {
    transform: translateX(${shift}px);
  }
  100% {
    transform: translateX(-2568.38px);
  }
`
const TicketBackgroundScroll = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  left: -775px;
  /* width: 108%; */
  width: 100%;
  /* height: 120%; */
  height: 100%;
  animation: ${({ shift }) => ticketScroll(shift)} 9000s linear infinite;
  z-index: -1;
  ${p => p.theme.mediaQueries.mobile} {
    animation: ${({ shift }) => ticketMobileScroll(shift)} 9000s linear infinite;
  }
`
// Styled component for each ticket background image
const TicketBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`
// animation translation matches full width of images + gap
const Gallery = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  position: absolute;
  top: -6vw;
  z-index: 97;
  gap: 51.3px;
  ${p => p.theme.mediaQueries.mobile} {
    height: 20%;
    top: 80%;
    animation: ${mobileScroll} 40s linear infinite;
  }
`
const GalleryImage = styled.img`
  margin: 20px 20px;
  background-color: pink;
  /* width: 430.5px; */
  /* height: 203px; */
  width: 280px;
  height: 160px;
  object-fit: cover;
  border-radius: 15px;
  border: 0.4vw solid white;
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
  color: #cf0a1f;
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
  color: #cf0a1f;
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
  color: #0d5d7b;
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
  color: #9c1f82;
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

export default function Stats() {
  const [shiftAmount, setShiftAmount] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setShiftAmount(prevShift => prevShift + 0.2)
    }, 40000) // Match the duration of the animation (40s)

    return () => clearInterval(interval) // Clean up on component unmount
  }, [])

  return (
    <BgSectionContainer id="statistics">
      <BgScroll />
      <Stems />
      <FgScroll />
      <StyledTitle>Last Year We Had...</StyledTitle>
      <ProjectTicketContainer className="stats">
        <ProjectTicket src="assets/background/stats/projects-ticket.svg" alt="Projects Ticket" />
        <ProjectText>
          <ProjectAnimatedNumber className="num" data-val="57">
            0
          </ProjectAnimatedNumber>
          <ProjectLabel>Projects</ProjectLabel>
        </ProjectText>
      </ProjectTicketContainer>
      <ParticipantTicketContainer className="stats">
        <ParticipantTicket src="assets/background/stats/participants-ticket.svg" alt="Participants Ticket" />
        <ParticipantText>
          <ParticipantAnimatedNumber className="num" data-val="250">
            0
          </ParticipantAnimatedNumber>
          <ParticipantLabel>Participants</ParticipantLabel>
        </ParticipantText>
      </ParticipantTicketContainer>
      <HackersTicketContainer className="stats">
        <HackersTicket src="assets/background/stats/hackers-ticket.svg" alt="Hackers Ticket" />
        <HackersText>
          <HackersAnimatedNumber className="num" data-val="100" id="percent">
            0
          </HackersAnimatedNumber>
          <HackersLabel>First-time Hackers</HackersLabel>
        </HackersText>
      </HackersTicketContainer>
      <CharityTicketContainer className="stats">
        <CharityTicket src="assets/background/stats/charity-ticket.svg" alt="Charity Ticket" />
        <CharityText>
          <CharityAnimatedNumber className="num" data-val="570" id="moneysign">
            0
          </CharityAnimatedNumber>
          <CharityLabel>Raised for Charity</CharityLabel>
        </CharityText>
      </CharityTicketContainer>
      <Gallery>
        <TicketBackgroundScroll shift={shiftAmount}>
          <TicketBackgroundImage src="assets/background/stats/tickets.svg" alt="ticket background" />
          <TicketBackgroundImage src="assets/background/stats/tickets.svg" alt="ticket background" />
        </TicketBackgroundScroll>
        {gallery.map(img => (
          <GalleryImage key={img} src={img} />
        ))}
        {gallery.map(img => (
          <GalleryImage key={`${img}2`} src={img} />
        ))}
      </Gallery>
    </BgSectionContainer>
  )
}
