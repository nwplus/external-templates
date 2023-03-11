import SponsorSection from '@components/SponsorSection'
import styled from 'styled-components'

const SponsorsContainer = styled.div`
    background: url('/assets/sponsors/desktopBookshelf.svg'), linear-gradient(to bottom, #697280, #645F70);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center top;
    padding: 5rem 1rem;

    min-height: 500px;
    padding-top: calc(calc(250 / 1440) * 100vw);
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
