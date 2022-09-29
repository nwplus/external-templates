import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import SponsorContainer from '@components/SponsorContainer';
import { Header2 } from '@components/Typography';
import React, { useEffect, useState } from 'react';
import fireDb from '@utilities/firebase';

const BgSectionContainer = styled(SectionContainer)`
  background: url('assets/background/sponsors/background.svg'), linear-gradient(to bottom, #8C5050 0%, #8C5050 70%, #220639 100%) ;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  aspect-ratio: 1440/2093;
  overflow-y: hidden;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/sponsors/background.svg') #8C5050;
    background-repeat: no-repeat;
    aspect-ratio: auto;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #FFF;
  font-size: 3rem;
  padding-top: 18rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 3em;
    padding-top: 10rem;
  }
`

const PushinP = styled.p`
  color: #FFF;
  text-align: center;
  width: 50vw;
  min-width: 500px;
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 800px;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Skip = styled.div`
  height: 10rem;
  background: linear-gradient(to bottom, #8C5050, #220639);
  
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

export default function Sponsor() {
  const [sponsors, setSponsors] = useState(null)

  useEffect(async () => {
    const data = await fireDb.getCollection('HackCamp2022', 'Sponsors')
    if (data) {
      setSponsors(data)
    }
  }, [])

  return sponsors?.length > 0 ? (
    <BgSectionContainer>
      <StyledTitle>
        Sponsors
      </StyledTitle>
      <PushinP>
        nwPlus is always looking for new ventures, opportunities, and connections.
        If you are interested in working with us, joining us, or speaking at one of
        our events, feel free to reach out to us at logistics@nwplus.io
      </PushinP>
      <SponsorContainer sponsors={sponsors} />
    </BgSectionContainer>
  ) : <Skip />
}