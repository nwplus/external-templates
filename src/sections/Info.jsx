import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import styled, { keyframes } from 'styled-components'

const InfoContainer = styled.div`
  /* background: #150c27; */
  position: relative;
  height: auto;

  overflow: visible;
  z-index: 99;

  width: 100%;
  aspect-ratio: 1440 / 1100;

  ${p => p.theme.mediaQueries.mobile} {
    background-repeat: no-repeat;
    aspect-ratio: 412/871;
  }
`

const BgScroll = styled(SectionContainer)`
  /* background: url('assets/background/about/background.png'); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/about/background.png'); */
    background-repeat: no-repeat;
    background-size: 100vw;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 60%;

  padding-left: 11vw;
  padding-right: 7.5vw;
  padding-bottom: 34.5rem;

  position: relative;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    margin: 0 3.2em;
    padding: 0;
    height: 50%;
  }
`

const StyledTitle = styled(Header2)`
  color: #45171A;
  font-size: 2.9vw;
  font-weight: 700;
  padding-bottom: 1rem;
  line-height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.75em;
    width: 100%;
    text-align: center;
  }


span {
  display: inline-block;
}

span:nth-child(1) {
  transform: translateY(-0.1vw) rotate(-7deg);
}

span:nth-child(2) {
  transform: translateY(-0.3vw) rotate(-3deg);
}

span:nth-child(3) {
  transform: translateY(-0.3vw) rotate(-1deg);
}

span:nth-child(4) {
  transform: translateY(-0.3vw) rotate(0deg);
}

span:nth-child(5) {
  transform: translateY(-0.2vw) rotate(1deg);
}

span:nth-child(6) {
  transform: translateY(-0.1vw) rotate(4deg);
}

span:nth-child(7) {
  transform: translateY(0.1vw) rotate(4deg);
}

span:nth-child(8) {
  transform: translateY(0.8vw) rotate(-11deg);
}

span:nth-child(9) {
  transform: translateY(0.3vw) rotate(6deg);
}

span:nth-child(10) {
  transform: translateY(0.5vw) rotate(4deg);
}

span:nth-child(11) {
  transform: translateY(0.5vw) rotate(5deg);
}

span:nth-child(12) {
  transform: translateY(0.7vw) rotate(5deg);
}

span:nth-child(13) {
  transform: translateY(0.9vw) rotate(5deg);
}

span:nth-child(14) {
  transform: translateY(1vw) rotate(1deg);
}

span:nth-child(15) {
  transform: translateY(1vw) rotate(1deg);
}

span:nth-child(16) {
  transform: translateY(1.1vw) rotate(0deg);
}

span:nth-child(17) {
  transform: translateY(1vw) rotate(-3deg);
}

span:nth-child(18) {
  transform: translateY(0.9vw) rotate(-3deg);
}

span:nth-child(19) {
  transform: translateY(0.7vw) rotate(-5deg);
}
`

const PushinP = styled.p`
  color: #45171A;
  font-size: 1.15vw;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
  }
`

const fishingBearBob = keyframes`
  0%, 100% {
    transform: translateY(0, 2vw);
  }

  50% {
    transform: translateY(1vw);
  }
`

const FishingBear = styled.div`
  animation: ${fishingBearBob} 4s linear infinite;
  /* background: url('assets/background/about/fishing_bear.svg'); */
  background-size: 57.5vw;
  background-repeat: no-repeat;
  background-position: bottom left;

  position: absolute;
  top: 0vw;
  left: 4vw;
  width: 100%;
  height: 100%;
  z-index: 99;

  ${p => p.theme.mediaQueries.mobile} {
    background-size: 67.5vw;
    left: -30px;
    top: -25px;
  }
`

const Deer = styled.div`
  /* background: url('assets/background/about/deer.svg'); */
  background-size: 37.5vw;
  background-repeat: no-repeat;
  background-position: bottom right;

  position: absolute;
  top: 21.5vw;
  left: 11vw;
  width: 100%;
  height: 100%;
  z-index: 99;
`

const Info = () => {
  // const { ref: ref1 } = useParallax({
  //   speed: -30
  // })

  // const { ref: ref2 } = useParallax({
  //   speed: -20
  // })

  // const { ref: ref3 } = useParallax({
  //   speed: -10
  // })

  const CurvedText = ({ text }) => {
    return text
      .split('')
      .map((char, index) => (char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>))
  }

  return (
    <InfoContainer id="about">
      <BgScroll />
      <TextContainer>
        <StyledTitle>
        <CurvedText text="Welcome to HackCamp"/>
        </StyledTitle>
        <PushinP>
        HackCamp provides a space for hundreds of first-time hackers curious about technology to explore the
        field further through hands-on learning, regardless of whether you have coding experience or not!
          <br />
          <br />
          Over the past 7 years, HackCamp, or formerly UBC Local Hack Day, has revolved around accessibility,
          inclusivity, and diversity. We strive to help people break into hackathon spaces by providing
          beginner-oriented workshops, industry connections, and ultimately, encouraging you to bring your
          unique perspectives and experiences to work on a project focusing our three main pillars.
        </PushinP>
      </TextContainer>
      <FishingBear />
      <Deer />
    </InfoContainer>
  )
}

export default Info
