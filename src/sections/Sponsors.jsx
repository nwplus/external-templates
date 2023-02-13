import Button from '@components/Button'
import SponsorList from '@components/SponsorList'
import SVG from 'react-inlinesvg'
import styled from 'styled-components'

const SponsorText = styled.div`
  margin: 0 auto;
  margin-top: 400px;
  color: white;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  width: 80%;
  @media (max-width: 1280px) {
    margin-top: 30%;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: normal;
    margin-top: 28%;
  }
`

const AllSponsorContainer = styled.div`
  margin-top: 60px;
  @media (max-width: 900px) {
    margin-top: 3%;
  }
`

const BtnContainer = styled.div`
  margin-top: 2rem;
  @media (max-width: 700px) {
    transform: scale(0.8);
    margin-top: 1rem;
  }
`

const Sponsors = () => {
  const majorSponsorData = [
    { id: 0, variant: 'v1', svg: '/assets/sponsors/companyLogo.svg' },
    { id: 1, variant: 'v3', svg: '' },
    { id: 2, variant: 'v3', svg: '' },
    { id: 3, variant: 'v4', svg: '' },
    { id: 4, variant: 'v4', svg: '' },
    { id: 5, variant: 'v1', svg: '' },
  ]

  const minorSponsorData = [
    { id: 0, variant: 'v1', size: 'small' },
    { id: 1, variant: 'v3', svg: '/assets/sponsors/minorSponsorLogo.svg', size: 'small' },
    { id: 2, variant: 'v3', svg: '', size: 'small' },
    { id: 3, variant: 'v4', svg: '', size: 'small' },
    { id: 4, variant: 'v4', svg: '', size: 'small' },
    { id: 5, variant: 'v1', svg: '', size: 'small' },
  ]

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0 }}>
        <SponsorText>
          <p style={{ display: 'inline' }}>
            nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in
            sponsoring us, working with us, or speaking at one of our events, shoot us an email at&nbsp;
          </p>
          <a
            href="http://localhost:3000/"
            style={{ display: 'inline', textDecoration: 'underline', cursor: 'pointer', color: 'white' }}
          >
            sponsorship@nwplus.io.
          </a>
          <BtnContainer>
            <Button variant="solid" styles={{ margin: 'auto' }}>
              Become a Sponsor
            </Button>
          </BtnContainer>
        </SponsorText>

        <AllSponsorContainer>
          <SponsorList sponsorList={majorSponsorData} />
          <SponsorList sponsorList={minorSponsorData} variant="minor" />
        </AllSponsorContainer>
      </div>

      <SVG src="/assets/Sponsors + Footer.svg" />
    </div>
  )
}

export default Sponsors
