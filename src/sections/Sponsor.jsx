import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import SponsorContainer from '@components/SponsorContainer';
import { Header2 } from '@components/Typography';
import React from 'react';

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/sponsors/background.svg'), linear-gradient(to bottom, #8C5050 0%, #8C5050 70%, #220639 100%) ;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  aspect-ratio: 1440/2093;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/background/sponsor-background-mobile.png'), #8C5050;
    background-size: 100vw;
    background-repeat: no-repeat;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #FFF;
  font-size: 3rem;
  padding-top: 18rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const PushinP = styled.p`
  color: #FFF;
  text-align: center;
  width: 50vw;
  min-width: 500px;
  margin: 0 auto;
  padding-top: 2rem;
`

export default function Sponsor() {
  return (
    <BgSectionContainer>
      <StyledTitle>
        Sponsors
      </StyledTitle>
      <PushinP>
        nwPlus is always looking for new ventures, opportunities, and connections.
        If you are interested in workign with us, joining us, or speaking at one of
        our events, feel free to reach out to us at logistics@nwplus.io
      </PushinP>
      <SponsorContainer />
    </BgSectionContainer>
  )
}