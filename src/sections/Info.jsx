import { useParallax } from 'react-scroll-parallax';
import { Header2 } from "@components/Typography"
import { SectionContainer } from "@lib/Containers"
import styled from "styled-components"

const InfoContainer = styled.div`
  background: linear-gradient(to bottom, #83F6F7 0%, #A9D7EF 100%);
  position: relative;
  height: auto;

  overflow: hidden;
  z-index: 12;
  
  width: 100%;
  aspect-ratio: 1440 / 1375;
`

const BgScroll = styled(SectionContainer)`
  background: url('assets/background/about/background.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center mid;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const MgScroll = styled(SectionContainer)`
  background: url('assets/background/about/midground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center mid;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

`
const FgScroll = styled(SectionContainer)`
  background: url('assets/background/about/foreground_tall.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center mid;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  padding-left: 45vw;
  padding-right: 10vw;
  padding-bottom: 5rem;

  position: relative;
  z-index: 2;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0em 3em;
    padding: 5em 0em 0em;
  }
`

const StyledTitle = styled(Header2)`
  color: #002F4D;
  font-size: 3rem;
  padding-bottom: 1rem;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const PushinP = styled.p`
  color: #002F4D;
`

const Info = () => {

  const { ref: ref1 } = useParallax({
    speed: -30,
  });

  const { ref: ref2 } = useParallax({
    speed: -20,
  });

  const { ref: ref3 } = useParallax({
    speed: -10,
  });

  return (
    <InfoContainer id="about">
      <BgScroll ref={ref1} />
      <MgScroll ref={ref2} />
      <FgScroll ref={ref3} />

      <TextContainer>
        <StyledTitle>Welcome to HackCamp</StyledTitle>
        <PushinP>
          HackCamp revolves around inclusivity, diversity, and
          accessibility&mdash;we want you to bring your unique
          perspectives and experiences to the table!
          <br />
          <br />
          Over the past 4 years, HackCamp, or formerly UBC
          Local Hack Day, has been focused on encouraging
          beginners and people who are curious about technology
          to work on a project that focuses on these three main pillars.
        </PushinP>
      </TextContainer>
    </InfoContainer>
  )
}

export default Info