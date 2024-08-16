import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import styled, { keyframes } from 'styled-components'

const InfoContainer = styled.div`
  /* background: #150c27; */
  position: relative;

  width: 100%;
  aspect-ratio: 1440/989;
  z-index: 98;
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/events/background.svg'); */
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #150c27;

    aspect-ratio: 412/1154;
  }
`
const BgScroll = styled(SectionContainer)`
  /* background: url('assets/background/learn/background.png'); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
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

  ${p => p.theme.mediaQueries.mobile} {
    margin: 0em 3em;
    padding: 5em 0em 0em;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #f0eef2;
  font-size: 3rem;
  padding-top: 1rem;
  z-index: 5;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2.8em;
  }
`

const PushinP = styled.p`
  color: #002f4d;
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

  ${p => p.theme.mediaQueries.mobile} {
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

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
  }
`

const Card = styled.div`
  width: 497px;
  height: 570px;
  aspect-ratio: 497 / 570;

  /* background: url('assets/largescroll_${p => p.type.toLowerCase()}.svg'); */
  color: #482c16;

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
    transform: translateY(-42vw);
    opacity: .5;
  }
  50% {
    transform: translateY(-45vw);
    opacity: 1;
  }
  100% {
    transform: translateY(-48vw);
    opacity: 0;
  }
`

const Bubbles = styled.div`
  /* background: url('assets/background/learn/bubbles.png') no-repeat right; */
  width: 52vw;
  height: 60vw;
  z-index: 1;
  position: absolute;
  aspect-ratio: 1 / 1.5;
  animation: ${bubbleRise} linear 3s infinite;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20vw;
  margin-top: 24vw;
  z-index: 4;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    margin-top: 55vw;
    gap: 80vw;
  }
`

const Event = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.5vw;
  z-index: 4;

  ${p => p.theme.mediaQueries.mobile} {
    width: 50vw;
  }
`

const EventTitle = styled.div`
  color: var(--Space-500, #231048);
  text-align: center;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.38px;
  z-index: 4;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 6vw;
  }
`

const Date = styled.div`
  color: var(--Space-500, #231048);
  text-align: center;
  font-size: 1.35vw;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.45px;
  margin-top: 4px;
  margin-bottom: 16px;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 4vw;
    margin-top: 0;
    margin-bottom: 12px;
  }
`

const Description = styled.div`
  color: #1e4a73;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5vw;
  letter-spacing: -0.1px;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3vw;
    line-height: 3.5vw;
  }
`

const Jellyfish = styled.div`
  /* background: url('assets/background/learn/jellyfish.png') no-repeat center; */
  width: 45vw;
  height: 15vw;
  position: absolute;
  aspect-ratio: 1 / 1.5;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Turtle = styled.div`
  /* background: url('assets/background/learn/turtle.png') no-repeat center; */
  width: 30vw;
  height: 30vw;
  position: absolute;
  aspect-ratio: 1 / 1.5;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Learn = () => {
  const jellyfishParallax = useParallax({
    easing: 'easeOutQuad',
    translateX: ['0vw', '-25vw'],
    translateY: ['5vw', '5vw'],
    scale: [1, 1],
  })

  const turtleParallax = useParallax({
    easing: 'easeOutQuad',
    translateX: ['50vw', '90vw'],
    translateY: ['0vw', '0vw'],
    scale: [1, 1],
  })
  return (
    <InfoContainer id="events">
      <BgScroll>
        <StyledTitle>Our Events</StyledTitle>
        <StyledText>
          <Event>
            <EventTitle>Learn Day</EventTitle>
            <Date>Nov. 9, 2024</Date>
            <Description>
              A day of workshops and skill building in preparation for Build Day. With topics ranging from web
              development, git, machine learning, and more, we make sure to have something for you!
            </Description>
          </Event>
          <Event>
            <EventTitle>Build Day</EventTitle>
            <Date>Nov. 10, 2024</Date>
            <Description>
              A 12-hour hackathon focused around creating projects centered around inclusivity, diversity and
              accessibility. Each submission will donate $10 to a charity of your choice!
            </Description>
          </Event>
        </StyledText>
        <Jellyfish ref={jellyfishParallax.ref}></Jellyfish>
        <Turtle ref={turtleParallax.ref}></Turtle>
        <Bubbles></Bubbles>
      </BgScroll>
    </InfoContainer>
  )
}

export default Learn
