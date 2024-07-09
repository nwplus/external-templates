import { useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { SectionContainer } from '@lib/Containers'
import styled, { keyframes } from 'styled-components'
import { Header2 } from './Typography'

const gallery = [
  '/assets/gallery/1.png',
  '/assets/gallery/2.png',
  '/assets/gallery/3.png',
  '/assets/gallery/4.png',
  '/assets/gallery/5.png',
  '/assets/gallery/6.png',
  '/assets/gallery/7.png'
]

const BgSectionContainer = styled(SectionContainer)`
  background: #150C27;
  display: grid;
  align-items: center;
  width: 100%;
  aspect-ratio: 1440/1415;
  position: relative;

  z-index: 15;
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {    
    aspect-ratio: 412/709;
  }
`

const BgScroll = styled(SectionContainer)`
  background: url('assets/background/stats/background.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/stats/background.png');
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
  background: url('assets/background/stats/stems.svg');
  background-size: 100vw;
  transform: scale(1.205);
  background-repeat: no-repeat;

  position: absolute;
  top: 46.25vw;
  left: -1.0vw;
  width: 100%;
  height: 100%;
  z-index: 12;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/stats/stems.svg');
    background-repeat: no-repeat;
    background-size: 100vw;
    transform: scale(1.4);
    left: 5px;
    top: 67%;
  }

`

const FgScroll = styled(SectionContainer)`
  background: url('assets/background/stats/foreground.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;

  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 98;
  top: 1vw;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/stats/foreground.png');
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position: center bottom;
  }
`

const ContentInner = styled.div`
  display: flex;
  margin-bottom: auto;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding-top: 4.5rem;
  overflow-x: hidden;
  z-index: 99;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding-top: 2.5rem;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #FFFAFA;
  font-size: 3.75vw;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem 40% 0;
  gap: 2rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 3.5rem 35% 0;
    gap: 2.5rem;
  }
`

const StatTop = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  font-size: 1.5vw;
  font-weight: 700;
  word-spacing: 200px;
  max-width: 200px;
  line-height: 33px;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 0.55rem;
    line-height: 10px;
  }
`

const StatBottom = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFD7D9;
  font-size: 1.5vw;
  font-weight: 700;
  word-spacing: 200px;
  max-width: 200px;
  line-height: 33px;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 0.55rem;
    line-height: 10px;
  }
`

const Number = styled.div`
  font-size: 3.75vw;
  font-weight: 900;
  margin-bottom: 0.5rem;

  ${(p) => p.theme.mediaQueries.mobile} {
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
    transform: translateX(-1120.92px); 
  }
`
// animation translation matches full width of images + gap

const Gallery = styled.div`
  background: #150C27;
  animation: ${scroll} 40s linear infinite;
  display: flex;
  position: absolute;
  top: 73.5%;
  z-index: 97;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 20%;
    top: 80%;
    animation: ${mobileScroll} 40s linear infinite;
  }
`

const GalleryImage = styled.img`
  margin: 10px 15px;
`

export default function Stats() {
  // const { ref: ref1 } = useParallax({
  //   speed: -20,
  // });

  // const { ref: ref2 } = useParallax({
  //   speed: -10,
  // });
  //   const observer = new IntersectionObserver(function (entries) {
  //     entries.forEach((entry) => {
  //       if (entry.isVisible) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stats = window.document.querySelector('.stats')
      const renderCountAnimation = () => {
        const valueDisplays = window.document.querySelectorAll('.num')
        const interval = 500
        valueDisplays.forEach((valueDisplay) => {
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
      <ContentInner>
        <StyledTitle>
          Last year we had:
          <StatsGrid className="stats">
            <StatTop>
              <Number className="num" data-val="57">0</Number>
              Projects
            </StatTop>
            <StatTop>
              <Number className="num" data-val="250">0</Number>
              Participants
            </StatTop>
            <StatBottom>
              <Number className="num" data-val="570" id="moneysign">0</Number>
              rasied for charity
            </StatBottom>
            <StatBottom>
              <Number className="num" data-val="100" id="percent">0</Number>
              First-Time Hackers
            </StatBottom>
          </StatsGrid>
        </StyledTitle>
      </ContentInner>
      <Gallery>
        {gallery.map((img) => (
          <GalleryImage
            key={img}
            src={img}
          />
        ))}
        {gallery.map((img) => (
          <GalleryImage
            key={`${img}2`}
            src={img}
          />
        ))}
      </Gallery>
    </BgSectionContainer>
  )
}
