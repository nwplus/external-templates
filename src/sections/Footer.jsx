import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Team from '@components/Team'
import Newsletter from '@components/Newsletter'
import FooterDecor from '@assets/images/footer_objects.svg'

const FooterContainer = styled.div`
  background: linear-gradient(#612c25, #2f1713);
  position: relative;
  aspect-ratio: 1800/1800;
  margin-top: -250px;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 200/393;
    margin-top: -150px;
  }
`

const FooterBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const FooterDecorOverlay = styled.img`
  position: absolute;
  width: 100%;
  transform: translateY(calc(100vw * (-550 / 1920)));
  z-index: 1000;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 310/393;
  }
`

const ClosingCard = styled.div`
  z-index: 2000;
  position: relative;
  top: calc(100vw * (840 / 1920));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (240 / 393));
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(100vw * (60 / 1920));
  transform: rotate(-4deg);

  a {
    width: calc(100vw * (60 / 1920));
    text-decoration: none;
    color: #2f1713;

    &:hover {
      color: #612c25;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(100vw * (20 / 1280));
  font-size: calc(100vw * (27 / 1920));
  cursor: pointer;
  transform: rotate(-4deg);

  a {
    font-weight: 600;
    color: #2f1713;

    &:hover {
      color: #612c25;
    }
  }

 bottom: calc(100vw * (-500 / 393));
    width: 40%;
    justify-content: space-evenly;

    a {
      white-space: nowrap;
    }
  }
  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (-50 / 393));
    font-size: calc(100vw * (5 / 393));
    bottom: calc(100vw * (-300 / 393));
  }
}
`

const TeamContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: calc(100vw * (200 / 1920));
  text-align: center;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: calc(100vw * (70 / 393));
  }
`

const LandAcknowledgementText = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  padding: 0 5%;
  text-align: center;
  position: relative;
  bottom: calc(100vw * (-1050 / 1920));
  color: #ffffff;
  font-size: calc(100vw * (25 / 1920));

  a {
    color: #ffffff;
    text-decoration: underline;
    &:hover {
      color: #ffffff;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    padding: 4% 10%;
    font-size: calc(100vw * (18 / 487));
    bottom: calc(100vw * (-300 / 393));
  }
`

const CopyRight = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  text-align: center;
  position: relative;
  bottom: calc(100vw * (-1520 / 1920));
  color: #ffffff;
  font-size: calc(100vw * (25 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
    bottom: calc(100vw * (-500 / 393));
  }
`

const Footer = () => (
  <div>
    <FooterContainer id="footer">
      <FooterBackground>
        <FooterDecorOverlay src={FooterDecor} alt="Decorative cake illustrations" />
        <ClosingCard>
          <SocialMediaIcons>
            <a href="https://www.facebook.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/nwplusubc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
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
        </ClosingCard>
        <LandAcknowledgementText>
          cmd-f 2025 will be taking place on xʷməθkʷəy̓əm (Musqueam) and səlilwətaɬ (Tsleil-Waututh) territory. As we
          build tomorrow&apos;s tech community, we recognize our responsibility to understand and respect Indigenous
          histories. To learn more, visit{' '}
          <a href="https://guides.library.ubc.ca/xwi7xwaresearchguide" target="_blank" rel="noreferrer">
            xwi7xwa&apos;s Research Guide.
          </a>
        </LandAcknowledgementText>
        <TeamContainer>
          <Team />
        </TeamContainer>
        <CopyRight>Copyright &copy; cmd-f 2025</CopyRight>
      </FooterBackground>
    </FooterContainer>
  </div>
)

export default Footer
