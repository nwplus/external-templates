import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background: #150C27;
  position: relative;
  height: auto;

  overflow: hidden;
  z-index: 12;
  
  width: 100%;
  aspect-ratio: 1440 / 1100;
  

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/about/foreground_frame.svg'), linear-gradient(to bottom, #83F6F7, #A9D7EF);
    background-repeat: no-repeat;
    aspect-ratio: 428/1450;
  }
`

const BgScroll = styled(SectionContainer)`
  background: url('assets/background/about/background.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  padding-left: 50vw;
  padding-right: 7.5vw;
  padding-bottom: 20rem;

  position: relative;
  z-index: 2;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0em 3em;
    padding: 5em 0em 0em;
    display: none;
  }
`

const StyledTitle = styled(Header2)`
  color: #F0EEF2;
  font-size: 3.75vw;
  padding-bottom: 1rem;
  line-height: 100%;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const PushinP = styled.p`
  color: #F0EEF2;
  font-size: 1.45vw;
`

const FishingBear = styled.div`
  background: url('assets/background/about/fishing_bear.svg');
  background-size: 57.5vw;
  background-repeat: no-repeat;
  background-position: bottom left;

  position: absolute;
  top: -2vw;
  left 4.75vw;
  width: 100%;
  height: 100%;
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

  return (
    <InfoContainer id="about">
      <BgScroll />
      <TextContainer>
        <StyledTitle>Welcome to HackCamp</StyledTitle>
        <PushinP>
          HackCamp revolves around inclusivity, diversity, and
          accessibility &mdash; we want you to bring your unique
          perspectives and experiences to the table, regardless
          of whether you have coding experience or not!
          <br />
          <br />
          Over the past 6 years, HackCamp, or formerly UBC
          Local Hack Day, has been focused on encouraging
          beginners and people who are curious about technology
          to work on a project that focuses on these three main pillars.
        </PushinP>
      </TextContainer>
      <FishingBear />
    </InfoContainer>
  )
}

export default Info
