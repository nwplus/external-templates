import { Body, Header2, Header3 } from "@components/Typography"
import styled from "styled-components"

const InfoContainer = styled.div`
  background: linear-gradient(277.65deg, #3B7580 11.84%, #172C52 100%);
  position: relative;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const StyledHeader3 = styled(Header3)`
  margin-top: 2em;
  margin-bottom: 1.25em;

  ${(p) => p.theme.mediaQueries.mobile} {
    text-align: center;
    font-size: 1.5em;
  }
`

const StyledBody = styled(Body)`
  ${(p) => p.theme.mediaQueries.mobile} {
    text-align: center;
  }
`

const RowContainer = styled.div`
  display: flex;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    ${p => p.isLastRow && 'margin-bottom: -4em'};
  }
`

const Paragraph2 = styled.div`
  padding-right: 2em;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding-right: 0em;
  }
`

const TopWave = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
  mix-blend-mode: soft-light;
`

const Seaweed = styled.img`
  position: absolute;
  bottom: -35px;
  right: 0px;
  z-index: 1;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Submarine = styled.img`
  position: relative;
  top: -50px;
  left: 80px;

  ${(p) => p.theme.mediaQueries.mobile} {
    position: inherit;
  }
`

const Orcas = styled.img`
  position: relative;
  top: 20px;
  margin-right: 4em;

  ${(p) => p.theme.mediaQueries.mobile} {
    order: 1;
    transform: scale(0.6);
    margin-right: 0em;
    top: -50px;
    right: -100px;
  }
`

const LeftCoral = styled.img`
  position: absolute;
  bottom: 10px;
  left: 0px;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Fish = styled.img`
  position: absolute;
  right: 0px;
  top: 45%;

  ${(p) => p.theme.mediaQueries.mobile} {
    transform: scale(0.35);
    right: -200px;
    top: 53%;
  }
`

const MiddleWave = styled.img`
  position: absolute;
  top: 30%;
  width: 100%;
  mix-blend-mode: soft-light;
  z-index: 0;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const LeftStars = styled.img`
  position: absolute;
  bottom: -20px;
  left: 0px;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const RightStars = styled.img`
  position: absolute;
  top: 60px;
  right: 0px;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileSeaweed = styled.img`
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    position: absolute;
    display: inherit;
    top: 75px;
    right: 10px;
    transform: scale(1.4);
  }
`

const MobileFish = styled.img`
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    position: absolute;
    display: inherit;
    bottom: 75px;
    left: -210px;
    transform: scale(0.5) scaleX(-1);
  }
`

const MobileTopStars = styled.img`
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    position: absolute;
    display: inherit;
    top: 0px;
    width: 100%;
    z-index: 0;
  }
`

const MobileMiddleStars = styled.img`
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    position: absolute;
    display: inherit;
    top: 25%;
    width: 100%;
    z-index: 0;
  }
`

const MobileBottomStars = styled.img`
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    position: absolute;
    display: inherit;
    top: 75%;
    width: 100%;
    z-index: 0;
  }
`

const Info = () => (
  <InfoContainer id="about">
    <TextContainer>
      <StyledTitle>About nwHacks</StyledTitle>
      <RowContainer>
        <div>
          <StyledHeader3>Connect, collaborate, create.</StyledHeader3>
          <StyledBody>Join us at nwHacks on Jan 15-16th 2022! Apply by Dec 27th, 2021 to participate as a hacker and apply by Dec 22nd, 2021 to participate as a mentor or a volunteer.</StyledBody>
          <StyledBody>Whether you&apos;re a seasoned hacker or a tech newbie, nwHacks welcomes you; just bring an open mind and an insatiable desire to learn, and we&apos;ll take care of the rest. Create a product, learn new skills, and have fun with friends, old and new — all in 24 hours.</StyledBody>
        </div>
        <Submarine src='assets/Info/submarine.svg' />
      </RowContainer>
      <RowContainer isLastRow>
        <Orcas src='assets/Info/orcas.svg' />
        <Paragraph2>
          <StyledHeader3>We&apos;re back in person!</StyledHeader3>
          <StyledBody>Last year we connected over 1200 of the brightest developers, engineers, and designers worldwide to collaborate and create amazing projects online. This year we are excited to invite everyone back in person!</StyledBody>
          <StyledBody>Please note: to attend nwHacks 2022, you must be fully vaccinated according to the British Columbia government guidelines by January 2022. Additional safety considerations include a lower capacity limit in attendees, social distancing guidelines, mask mandates, and sanitization stations. These decisions are subject to change depending on the provincial and UBC health guidelines.</StyledBody>
        </Paragraph2>
      </RowContainer>
    </TextContainer>
    <TopWave src='assets/Info/About-topwave.svg' />
    <Seaweed src='assets/Info/seaweed.svg' />
    <LeftCoral src='assets/Info/leftCoral.svg' />
    <Fish src='assets/Info/fish.svg' />
    <MiddleWave src='assets/Info/middleWave.svg' />
    <LeftStars src='assets/Info/leftStars.svg' />
    <RightStars src='assets/Info/rightStars.svg' />

    <MobileSeaweed src='assets/Info/mobileSeaweed.svg' />
    <MobileFish src='assets/Info/fish.svg' />
    <MobileTopStars src='assets/Info/mobileTopStars.svg' />
    <MobileMiddleStars src='assets/Info/mobileMiddleStars.svg' />
    <MobileBottomStars src='assets/Info/mobileBottomStars.svg' />
  </InfoContainer>
)

export default Info