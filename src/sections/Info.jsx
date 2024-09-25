/* eslint-disable react/react-in-jsx-scope */
import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'

const InfoContainer = styled.div`
  /* background: linear-gradient(to bottom, #81b4ff, #9ecbfd); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: relative;
  width: 100%;
  aspect-ratio: 1440/1000;
  z-index: 0;
  overflow: visible;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: #150c27; */
    background-repeat: no-repeat;
    text-align: center;
    aspect-ratio: 412/843;
  }
`

const BgScroll = styled(SectionContainer)`
  /* background: url('assets/background/about/background.png'); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 0;

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

  padding-left: 10.5vw;
  padding-right: 7.5vw;
  padding-bottom: 34.5vw;

  position: relative;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    margin: 0 3vw;
    padding: 0;
    height: 50%;
  }
`

const StyledTitle = styled(Header2)`
  color: #45171a;
  font-size: 2.9vw;
  font-weight: 700;
  padding-bottom: 2.5vw;
  padding-left: 0.6vw;
  line-height: 100%;
  z-index: 3;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    left: 4vw;
    top: 46.5vw;
    font-size: 5.1vw;
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
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(-0.4vw) rotate(-1deg);
    }
  }

  span:nth-child(4) {
    transform: translateY(-0.3vw) rotate(0deg);
  }

  span:nth-child(5) {
    transform: translateY(-0.2vw) rotate(1deg);
  }

  span:nth-child(6) {
    transform: translateY(-0.1vw) rotate(4deg);

    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(0.1vw) rotate(4deg);
    }
  }

  span:nth-child(7) {
    transform: translateY(0.1vw) rotate(4deg);

    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(0.4vw) rotate(4deg);
    }
  }

  span:nth-child(8) {
    transform: translateY(0.8vw) rotate(-11deg);
  }

  span:nth-child(9) {
    transform: translateY(0.3vw) rotate(6deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(0.7vw) rotate(6deg);
    }
  }

  span:nth-child(10) {
    transform: translateY(0.5vw) rotate(4deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.1vw) rotate(4deg);
    }
  }

  span:nth-child(11) {
    transform: translateY(0.5vw) rotate(5deg);
  }

  span:nth-child(12) {
    transform: translateY(0.7vw) rotate(5deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.5vw) rotate(5deg);
    }
  }

  span:nth-child(13) {
    transform: translateY(0.9vw) rotate(5deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.7vw) rotate(5deg);
    }
  }

  span:nth-child(14) {
    transform: translateY(1vw) rotate(1deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.9vw) rotate(1deg);
    }
  }

  span:nth-child(15) {
    transform: translateY(1vw) rotate(1deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.9vw) rotate(1deg);
    }
  }

  span:nth-child(16) {
    transform: translateY(1.1vw) rotate(0deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(2vw) rotate(0deg);
    }
  }

  span:nth-child(17) {
    transform: translateY(1vw) rotate(-3deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.8vw) rotate(-3deg);
    }
  }

  span:nth-child(18) {
    transform: translateY(0.9vw) rotate(-3deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.5vw) rotate(-4deg);
    }
  }

  span:nth-child(19) {
    transform: translateY(0.7vw) rotate(-5deg);
    ${p => p.theme.mediaQueries.mobile} {
    transform: translateY(1.2vw) rotate(-5deg);
    }
  }
`

const PushinP = styled.p`
  color: #45171a;
  font-size: 1.08vw;
  z-index: 3;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    width: 93vw;
    text-align: left;
    line-height: 1.7;
    font-size: 3.2vw;
    top: 58vw;
    padding-right: 1.3vw;
    padding-left: 2.5vw;
  }
`

const Coaster = styled.div`
  background: url('assets/Info/coaster.svg');
  background-repeat: no-repeat;
  background-size: 22.2vw;
  position: absolute;
  top: -4vw;
  left: 55.2vw;
  width: 30vw;
  height: 30vw;

  ${p => p.theme.mediaQueries.mobile} {
    top: 116.5vw;
    left: 44vw;
    width: 47vw;
    height: 47vw;
    background-size: 45vw;
  }
  
`
const Info = () => {
  // Define the parallax effect for the coaster image
  const coasterParallax = useParallax({
    translateX: ['52.5', '0'],
    translateY: ['0', '40.7'],
    easing: 'easeOutQuad'
  })

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
          <CurvedText text="Welcome to HackCamp" />
        </StyledTitle>
        <PushinP>
          HackCamp provides a space for hundreds of first-time hackers curious about technology to explore the field
          further through hands-on learning, regardless of whether you have coding experience or not!
          <br />
          <br />
          Over the past 7 years, HackCamp, or formerly UBC Local Hack Day, has revolved around accessibility,
          inclusivity, and diversity. We strive to help people break into hackathon spaces by providing
          beginner-oriented workshops, industry connections, and ultimately, encouraging you to bring your unique
          perspectives and experiences to work on a project focusing our three main pillars.
        </PushinP>
      </TextContainer>
      <Coaster ref={coasterParallax.ref} />
    </InfoContainer>
  )
}

export default Info
