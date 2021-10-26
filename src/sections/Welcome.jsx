import { useWindowWidth } from '@react-hook/window-size';
import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import { Body, Header1 } from '@components/Typography';

const Transition = styled.img`
  position: absolute;
  width: 100%;
  margin-top: -6vw;
  pointer-events: none;
  user-select: none;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: -10vw;
  }
`

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/welcome/welcome_2.png') center bottom, url('assets/background/welcome/welcome_1.png') center 28vw, radial-gradient(82.82% 82.82% at 50% 94%, rgba(87, 112, 121, 0) 0%, rgba(46, 30, 85, 0.5) 100%), #A1C1D9;
  background-size: 100vw;
  background-repeat: no-repeat;
  height: min-content;
  padding: 40vw 0 20%;

  ${p => p.theme.mediaQueries.mobile} {
    background: radial-gradient(82.82% 82.82% at 50% 94%, rgba(87, 112, 121, 0) 0%, rgba(46, 30, 85, 0.5) 100%), #A1C1D9;
    padding: 32vw 0 0;
    text-align: center;
  }
`

const GridContainer = styled.div`
  grid-column: 3 / span 4;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 3 / span 10;
  }
`

// Mobile styling to make the image extend past the container
const Image = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    width: 100%;
    grid-column: 1 / span 14;
    grid-row: 2;
    margin-bottom: -12%;
  }
`

export default function Welcome() {
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = 768;

  return (
    <>
      <Transition src="/assets/background/welcome/transition.png" />
      <BgSectionContainer>
        <GridContainer>
          {windowWidth <= mobileBreakpoint ?
            <div>
              <div>Welcome to</div>
              <Header1 id="about">HackCamp</Header1>
            </div>
            :
            <Header1 id="about">Welcome to HackCamp</Header1>
          }
          <Body>HackCamp revolves around inclusivity, diversity, and accessibility — we want you to bring your unique perspectives and experiences to the table!</Body>
          <Body>Over the past 4 years, HackCamp, or formerly UBC Local Hack Day, has been focused on encouraging beginners and people who are curious about technology to work on a project that focuses on these three main pillars.</Body>
        </GridContainer>
        <Image src="/assets/background/welcome/welcome_mobile.png" />
      </BgSectionContainer>
    </>
  )
}
