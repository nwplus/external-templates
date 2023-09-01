import SponsorSection from '@components/SponsorSection'
import styled from 'styled-components'

const SponsorsContainer = styled.div`
    background: url('/assets/sponsors/desktop_sponsor.svg'), linear-gradient(to bottom, #150C27, #150C27);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;

    min-height: 1740px;
    ${p => p.theme.mediaQueries.mobile} {
      background: linear-gradient(to bottom, #697280, #645F70);
    }
`

const Sponsors = () =>  (
    <SponsorsContainer id="sponsors">
      <SponsorSection />
    </SponsorsContainer>
  )

export default Sponsors
