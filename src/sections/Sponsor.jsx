import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import SponsorContainer from '@components/SponsorContainer';
import React from 'react';

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/sponsor-background-desktop.png'), linear-gradient(180deg, #3E748E 0%, #356978 16.15%, #071B3F 100%);
  background-size: 100vw;
  background-repeat: no-repeat;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/background/sponsor-background-mobile.png'), linear-gradient(180deg, #3E748E 0%, #356978 16.15%, #071B3F 100%);
    background-size: 100vw;
    background-repeat: no-repeat;
  }
`

export default function Sponsor() {
  return (
    <BgSectionContainer>
      <SponsorContainer />
    </BgSectionContainer>
  )
}