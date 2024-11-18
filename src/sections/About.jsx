import styled from 'styled-components'
// import { TABLET } from '@constants/measurements'

const AboutContainer = styled.div`
  aspect-ratio: 1280/849;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 922;
  }
`

const AboutBackground = styled.div`
  background-image: url('./assets/images/about_background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${p => p.theme.mediaQueries.mobile} {
    background-image: url('./assets/images/mobile_about_background.png');
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: calc(calc(450 / 1280) * 100vw);
  left: calc(calc(140 / 1280) * 100vw);
  width: calc(100vw * (347 / 1280));
  color: white;

  display: flex;
  flex-direction: column;
  gap: calc(100vw * (24 / 1280));
  z-index: 11;
  transform: perspective(1000px) rotateX(2deg);
  transform-origin: center top;

  ${p => p.theme.mediaQueries.mobile} {
    left: 50%;
    transform: translateX(-50%);
    top: calc(100vw * (485 / 487));
    width: calc(100vw * (335 / 487));
    gap: calc(100vw * (20 / 487));
  }
`

const Title = styled.p`
  font-family: 'LT Museum';
  font-size: calc(100vw * (30 / 1280));
  font-weight: 700;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 487));
  }
`

const Description = styled.p`
  font-family: 'LT Museum';
  font-size: calc(100vw * (16 / 1280));
  font-weight: 400;
  line-height: 1.5;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
  }
`

const About = () => (
  <AboutContainer id="about">
    <AboutBackground />
    <TextContainer>
      <Title>One for the history books</Title>
      <Description>
        Celebrate the 10th anniversary of nwHacks with us! Everyone is welcome at nwHacks, whether you are just getting
        into tech or are a seasoned hacker. Join us in-person on January 18-19, 2025 for a weekend of creativity,
        community, and innovation. All you need is an open mind and an insatiable desire to learn - we&apos;ll take care
        of the rest. Create a project, learn new skills, and bond with friends, all in 24 hours! This one will go down
        in history.
      </Description>
    </TextContainer>
  </AboutContainer>
)

export default About
