import SponsorSection from '@components/SponsorSection'
import styled from 'styled-components'

// const majorSponsorData = [
//   { id: 0, variant: 'v1', svg: '/assets/sponsors/companyLogo.svg' },
//   { id: 1, variant: 'v3', svg: '' },
//   { id: 2, variant: 'v3', svg: '' },
//   { id: 3, variant: 'v4', svg: '' },
//   { id: 4, variant: 'v4', svg: '' },
//   { id: 5, variant: 'v1', svg: '' },
// ]

// const minorSponsorData = [
//   { id: 0, variant: 'v1', size: 'small' },
//   { id: 1, variant: 'v3', svg: '/assets/sponsors/minorSponsorLogo.svg', size: 'small' },
//   { id: 2, variant: 'v3', svg: '', size: 'small' },
//   { id: 3, variant: 'v4', svg: '', size: 'small' },
//   { id: 4, variant: 'v4', svg: '', size: 'small' },
//   { id: 5, variant: 'v1', svg: '', size: 'small' },
// ]

const SponsorsContainer = styled.div`
    background: url('/assets/sponsors/desktopBookshelf.svg'), linear-gradient(to bottom, #697280, #645F70);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center top;
    padding: 5rem; 0;

    min-height: 500px;
    padding-top: calc(calc(250 / 1440) * 100vw);
`

const Sponsors = () =>  (
    <SponsorsContainer id="sponsors">
      <SponsorSection />
    </SponsorsContainer>
  )

export default Sponsors
