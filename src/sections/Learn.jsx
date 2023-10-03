import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import styled, { keyframes } from 'styled-components'

const InfoContainer = styled.div`
  background: #150C27;
  position: relative;

  width: 100%;
  aspect-ratio: 1440/989;
  z-index: 98;
  overflow: hidden;
  

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/events/background.svg');
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    
    aspect-ratio: 412/1154;
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/learn/background.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0em 10em;
  padding: 5em 0em;
  position: relative;
  z-index: 2;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0em 3em;
    padding: 5em 0em 0em;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #F0EEF2;
  font-size: 3rem;
  padding-top: 1rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2.8em;
  }
`

const PushinP = styled.p`
  color: #002F4D;
  text-align: center;
  width: 50vw;
  min-width: 500px;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 2rem;
`

const ContentInner = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    min-height: 0px;
    display: none;
  }
`

const CardContainer = styled.div`
  width: 75vw;
  min-width: 1000px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
  }
`

const Card = styled.div`
  width: 497px;
  height: 570px;
  aspect-ratio: 497 / 570;
  
  background: url('assets/largescroll_${p => p.type.toLowerCase()}.svg');
  color: #482C16;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 4rem;
  transform: scale(0.9);
`

const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: 900;
  padding-top: 260px;
`

const CardDate = styled.div`
  font-size: 1.35rem;
  font-weight: 800;
  padding-bottom: 2rem;
`

const CardContent = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 500;
  line-height: 150%;
`

const bubbleRise = keyframes`
  0% {
    transform: translateY(-25vw) translateX(-15vw);
    opacity: 1;
  }
  100% {
    transform: translateY(-30vw) translateX(-15vw);
    opacity: 0;
  }
`

const Bubbles = styled.div`
  background: url('assets/background/learn/bubbles.png') no-repeat center;
  width: 100vw;
  height: 100vw;
  z-index: 4; 
  position: absolute;
  aspect-ratio: 1 / 1.5;
  animation: ${bubbleRise} 5s infinite;
  ${(p) => p.theme.mediaQueries.mobile} {
    display:none;
  }
`

const Jellyfish = styled.div`
background: url('assets/background/learn/jellyfish.png') no-repeat center;
width: 100vw;
height: 100vw;
position: absolute;
aspect-ratio: 1 / 1.5;

${(p) => p.theme.mediaQueries.mobile} {
  display:none;
}
`

const Turtle = styled.div`
background: url('assets/background/learn/turtle.png') no-repeat center;
width: 100vw;
height: 100vw; 
position: absolute;
aspect-ratio: 1 / 1.5;

${(p) => p.theme.mediaQueries.mobile} {
  display:none;
}
`

const Learn = () => {
  const jellyfishParallax = useParallax({
    easing: 'easeOutQuad',
    translateX: ['-10vw', '-50vw'],
    translateY: ['0vw', '0vw'],
    scale: [1, 1]
  })

  const turtleParallax = useParallax({
    easing: 'easeOutQuad',
    translateX: ['10vw', '50vw'],
    translateY: ['0vw', '0vw'],
    scale: [1, 1]
  })
  return (
    <InfoContainer id="events">
      <BgScroll>
      <StyledTitle>
        Our Events
      </StyledTitle>
      <Jellyfish ref={jellyfishParallax.ref}></Jellyfish>
      <Turtle ref={turtleParallax.ref}></Turtle>
      <Bubbles></Bubbles>
      </BgScroll>
    </InfoContainer>
  )
}

export default Learn
