import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Team from '@components/Team'
import Newsletter from '@components/Newsletter'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const FooterContainer = styled.div`
  position: relative;
  aspect-ratio: 1280/800;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(180deg,
    #fdc182ff 0%,
    #D3999C 20%,
    #28083D 100%
  );

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 500/950;
    background: linear-gradient(180deg,
      #E3B2A3 0%,
      #D3999C 10%,
      #28083D 45%
    );
  }
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: calc(100vw * (40 / 1280));

  a {
    width: calc(100vw * (53 / 1280));
    height: calc(100vw * (53 / 1280));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ffffff;
    padding: calc(100vw * (6 / 1280)); /* increase tap target */

    &:hover {
      color: #FCDCCF;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    a {
      width: calc(100vw * (40 / 487));
      height: calc(100vw * (40 / 487));
      padding: calc(100vw * (6 / 487));
    }
    justify-content: space-evenly;
  }
`

const Links = styled.div`
  display: flex;
  gap: calc(100vw * (20 / 1280));
  font-size: calc(100vw * (27 / 1280));
  z-index: 2;

  a {
    font-weight: 600;
    color: #ffffffff;

    &:hover {
      color: #FCDCCF;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    font-size: calc(100vw * (13 / 487));
    flex-direction: row;
    align-items: center;
    gap: calc(100vw * (8 / 487));

    a {
      white-space: normal;
      text-align: center;
      display: block;
      width: 100%;
      padding: calc(100vw * (6 / 487)) 0;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  align-items: flex-start;
  padding-left: calc(100vw * (100 / 1280));
  padding-top: calc(100vw * (150 / 1280));
  gap: calc(100vw * (16 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    align-items: center;
    padding-left: 6vw;
    padding-right: 6vw;
    padding-top: calc(100vw * (250 / 487));
    gap: calc(100vw * (12 / 487));
  }
`

const SmallText = styled.div`
  user-select: none;
  padding-top: calc(100vw * (15 / 1280));
  text-align: center;

  color: #FCDCCF;
  font-size: calc(100vw * (14 / 1280));
  font-weight: 600;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (12 / 487));
    padding-top: calc(100vw * (10 / 487));
  }
`

const TeamContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: calc(100vw * (25 / 1280));
  text-align: center;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    position: relative;
    bottom: 0;
    padding: 2rem 0 1rem 0;
  }
`

const StaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
  }
`

const LandAcknowledgementText = styled.div`
  color: #FFF8F5;
  font-size: calc(100vw * (16 / 1280));
  font-weight: 500;

  a {
    color: #FFF8F5;
    text-decoration: underline;
    &:hover {
      color: #FCDCCF;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (13 / 487));
    margin-bottom: calc(100vw * (16 / 487));
    text-align: center;
    z-index: 2;
  }
`

const OrangeSphere = styled.img`
  position: absolute;
  right: 0;
  width: 45%;
  pointer-events: none;
  transition: transform 0.1s ease-out;
  animation: float 5s ease-in-out infinite;
  z-index: 0;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 70%;
    right: 0;
    top: 0;
  }
`

const NuggetCloud = styled.img`
  position: absolute;
  right: calc(100vw * (200 / 1280));
  top: calc(100vw * (250 / 1280));
  width: 20%;
  z-index: 1;
  pointer-events: none;
  transition: transform 0.1s ease-out;
  animation: float 5s ease-in-out infinite 1s;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    left: 0;
    top: calc(100vw * (75 / 487));
    width: 40%;
  }
`

const BlueSphere = styled.img`
  position: absolute;
  left: 0;
  bottom: calc(100vw * (100 / 1280));
  width: 20%;
  pointer-events: none;
  transition: transform 0.1s ease-out;
  animation: float 6s ease-in-out infinite 0.5s;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-25px);
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 50%;
    bottom: 7rem;
  }
`

const PinkSphere = styled.img`
  position: absolute;
  right: 0;  
  bottom: calc(100vw * (5 / 1280));
  width: 20%;
  pointer-events: none;
  transition: transform 0.1s ease-out;
  animation: float 5.5s ease-in-out infinite 2s;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-18px);
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    left: 0;
    bottom: 16rem;
  }
`

const NightIsland = styled.img`
  display: none;
  
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    right: 0;
    bottom: calc(100vw * (100 / 487));;
    width: 60%;
    z-Index: 0;
  }
`

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <FooterContainer id="footer">
      <OrangeSphere 
        src={isMobile ? "/assets/images/footer/mobile/orange_sphere.png" : "/assets/images/footer/orange_sphere.png"}
      />
      <NuggetCloud 
        src={isMobile ? "/assets/images/footer/mobile/nugget_cloud.png" : "/assets/images/footer/nugget_cloud.png"}
      />
      <BlueSphere 
        src={isMobile ? "/assets/images/footer/mobile/blue_sphere.png" : "/assets/images/footer/blue_sphere.png"}
      />
      <PinkSphere 
        src={isMobile ? "/assets/images/footer/mobile/pink_sphere.png" : "/assets/images/footer/pink_sphere.png"}
      />
      {isMobile && (
        <NightIsland 
          src="/assets/images/footer/mobile/night_island.png"
        />
      )}

      <StaticContainer>
        <TextContainer>
          <SocialMediaIcons>
            <a href="https://www.instagram.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/nwplus" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.youtube.com/c/nwPlusUBC" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://medium.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faMediumM} />
            </a>
            <a href="https://www.facebook.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </SocialMediaIcons>
          <Links>
            <a href="mailto:info@nwplus.io" target="_blank" rel="noreferrer">
              Email Us
            </a>
            <a href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel="noreferrer">
              Become a Sponsor
            </a>
            <a href="http://hackp.ac/coc" target="_blank" rel="noreferrer">
              Code of Conduct
            </a>
          </Links>
          <Newsletter />
          <LandAcknowledgementText>
            nwHacks 2026 will be taking place on xʷməθkʷəy̓əm (Musqueam) and səlilwətaɬ (Tsleil-Waututh) territory. As we
            build tomorrow&apos;s tech community, we recognize our responsibility to understand and respect Indigenous
            histories. To learn more, visit{' '}
            <a href="https://guides.library.ubc.ca/xwi7xwaresearchguide" target="_blank" rel="noreferrer">
              xwi7xwa&apos;s Research Guide
            </a>
            .
          </LandAcknowledgementText>
        </TextContainer>
        <TeamContainer>
          <Team />
          <SmallText>Copyright &copy; nwHacks 2026</SmallText>
        </TeamContainer>
      </StaticContainer>
    </FooterContainer>
  )
}
export default Footer