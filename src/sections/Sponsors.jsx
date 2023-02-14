import Button from '@components/Button'
import SponsorList from '@components/SponsorList'
import Team from '@components/Team'
import { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'
import styled from 'styled-components'
import { SocialMediaContainer } from './Footer'

export const mobileWidth = 900

const SponsorText = styled.div`
  margin: 0 auto;
  margin-top: 16%;
  color: white;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  width: 80%;
`

const AllSponsorContainer = styled.div`
  margin-top: 60px;
  @media (max-width: 440px) {
    margin-top: 30px;
  }
`

const BtnContainer = styled.div`
  margin-top: 2rem;
`

const DesktopText = styled.div`
  display: block;
  margin-top: 12%;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileText = styled.div`
  display: none;
  margin-top: 12%;
  ${p => p.theme.mediaQueries.mobile} {
    text-align: center;
    font-size: 0.95rem;
    display: block;
    margin-top: 8%;
  }
`

const SponsorTitle = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 900;
  @media (max-width: 600px) {
    font-size: 42px;
    font-weight: 800;
  }
`

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

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < mobileWidth) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  const MobileSponsorText = () => (
    <MobileText>
      Sponsors make this event happen. If you are interested in working with us, joining us or speaking at one of our
      events, please reach out to us below!
    </MobileText>
  )
  const DesktopSponsorText = () => (
    <DesktopText>
      <p style={{ display: 'inline' }}>
        nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in sponsoring
        us, working with us, or speaking at one of our events, shoot us an email at&nbsp;
      </p>
      <a
        href="http://localhost:3000/"
        style={{ display: 'inline', textDecoration: 'underline', cursor: 'pointer', color: 'white' }}
      >
        sponsorship@nwplus.io.
      </a>
    </DesktopText>
  )

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0 }}>
        <SponsorText>
          <SponsorTitle>Sponsors</SponsorTitle>
          <DesktopSponsorText />
          <MobileSponsorText />
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

      <SVG src={isMobile ? '/assets/sponsors/MOBILE Sponsors + Footer.svg' : '/assets/Sponsors + Footer.svg'} />
      <SocialMediaContainer />
      <div style={{ position: 'absolute', bottom: '40px' }}>
        <Team />
      </div>
    </div>
  )
}

export default Sponsors
