import styled from "styled-components";
import { useWindowWidth } from '@react-hook/window-size';
import { SectionContainer } from '@lib/Containers';
import { Header1 } from "@components/Typography";
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider';

const BgSectionContainer = styled(SectionContainer)`
  background: url('/assets/background/stats/mountains.png') bottom center, linear-gradient(180deg, #55597A 0%, #F36FFF 74.12%);
  background-repeat: no-repeat;
  height: 41vw;
  display: grid;
  align-items: center;
  background-size: 100% 100%;

  ${p => p.theme.mediaQueries.mobile} {
    background-size: auto 100%;
    min-height: 600px;
  }
`

const Image = styled.img`
  width: 100%;
  z-index: 2;
`

const Title = styled.div`
  margin-bottom: 100px;
  text-align: center;
`

const Wrapper = styled.div`
  grid-column: 3 / span 10;
  margin-bottom: 150px;
`

export default function Stats() {
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = SCREEN_BREAKPOINTS.mobile;

  return (
    <BgSectionContainer>
      <Wrapper>
        <Title>
          <Header1>Milestones</Header1>
        </Title>
        {windowWidth &&
          <Image
            src={windowWidth > mobileBreakpoint ? '/assets/stats.svg' : '/assets/stats_mobile.svg'}
            alt="$1200 donated to charity, 528 hackers registered, 48 projects submitted"
          />
        }
      </Wrapper>
    </BgSectionContainer>
  )
}
