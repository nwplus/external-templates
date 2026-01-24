import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faMediumM, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Team from '@components/Team'
import Newsletter from '@components/Newsletter'

const FooterContainer = styled.div`
  background: linear-gradient(to bottom, #c1e8fe 0%, #ffc4c5cc 80%);
  position: relative;
  aspect-ratio: 1512/1400;
  font-family: 'Space Grotesk';

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

const ClosingCard = styled.div`
  z-index: 2000;
  position: relative;
  top: calc(100vw * (0 / 1512));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: calc(100vw * (150 / 1512));
  gap: calc(100vw * (30 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (290 / 393));
    padding-left: calc(100vw * (30 / 393));
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  gap: calc(100vw * (60 / 1920));

  a {
    width: calc(100vw * (72 / 1920));
    text-decoration: none;
    color: #000000;

    &:hover {
      color: #c63359;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
  }
`

const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: calc(100vw * (30 / 1920));
  font-size: calc(100vw * (35 / 1920));
  cursor: pointer;

  a {
    font-weight: 600;
    color: #000000;

    &:hover {
      color: #C63359;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (10 / 393));
    font-size: calc(100vw * (5 / 393));
  }
}
`

const TeamContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: calc(100vw * (60 / 1512));
  text-align: center;
  width: 100%;
  z-index: 5;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: calc(100vw * (70 / 393));
  }
`

const LandAcknowledgementText = styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  padding: 5% 0;
  text-align: center;
  bottom: calc(100vw * (-1050 / 1920));
  color: #000000;
  font-size: calc(100vw * (25 / 1920));
  width: calc(100vw * (1234 / 1512));
  margin: 0 auto;

  a {
    color: #000000;
    text-decoration: underline;
    font-weight: bold;
    &:hover {
      color: #000000;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    padding: 4% 10%;
    font-size: calc(100vw * (18 / 487));
    bottom: calc(100vw * (-350 / 393));
  }
`

const CopyRight = styled.div`
  font-family: 'Space Grotesk';
  font-weight: 600;
  text-align: center;
  position: absolute;
  bottom: calc(100vw * (20 / 1512));
  left: 0;
  width: 100%;
  color: #ffffff;
  font-size: calc(100vw * (25 / 1920));
  z-index: 5;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
    bottom: calc(100vw * (20 / 393));
  }
`
const NewsletterBox = styled.div`
  margin-top: calc(100vw * (35 / 1512));
  display: flex;
  flex-direction: column;
  gap: calc(100vw * (25 / 1512));
`

const NewsletterP = styled.p`
  font-size: calc(100vw * (23 / 1512));
  font-weight: 500;
`

// BACKGROUND
const GreenFrontBg = styled.img`
  width: calc(100vw * (1600 / 1512));
  position: absolute;
  bottom: calc(100vw * (-10 / 1512));
  z-index: 3;
`

const GreenBackBg = styled.img`
  width: calc(100vw * (1600 / 1512));
  position: absolute;
  bottom: calc(100vw * (200 / 1512));
  right: calc(100vw * (-115 / 1512));
  z-index: 2;
`

const Clouds = styled.img`
  width: calc(100vw * (1600 / 1512));
  position: absolute;
  bottom: calc(100vw * (200 / 1512));
  z-index: 0;
`

const Castle = styled.img`
  width: calc(100vw * (200 / 1512));
  position: absolute;
  bottom: calc(100vw * (550 / 1512));
  left: calc(100vw * (460 / 1512));
  z-index: 1;
`

const RedQueen = styled.img`
  width: calc(100vw * (50 / 1512));
  position: absolute;
  bottom: calc(100vw * (480 / 1512));
  left: calc(100vw * (645 / 1512));
  z-index: 3;
`

const LeftMaze = styled.img`
  width: calc(100vw * (220 / 1512));
  position: absolute;
  bottom: calc(100vw * (260 / 1512));
  left: calc(100vw * (0 / 1512));
  z-index: 4;
`

const RightMaze = styled.img`
  width: calc(100vw * (650 / 1512));
  position: absolute;
  bottom: calc(100vw * (200 / 1512));
  right: calc(100vw * (0 / 1512));
  z-index: 4;
`

const DeerHeartTree = styled.img`
  width: calc(100vw * (300 / 1512));
  position: absolute;
  bottom: calc(100vw * (240 / 1512));
  left: calc(100vw * (60 / 1512));
  z-index: 5;
`

const WhiteHeartTree = styled.img`
  width: calc(100vw * (170 / 1512));
  position: absolute;
  bottom: calc(100vw * (60 / 1512));
  right: calc(100vw * (0 / 1512));
  z-index: 7;
`

const RightHeartTree = styled.img`
  width: calc(100vw * (458 / 1512));
  position: absolute;
  bottom: calc(100vw * (270 / 1512));
  right: calc(100vw * (40 / 1512));
  z-index: 6;
`

const Alice = styled.img`
  width: calc(100vw * (91 / 1512));
  position: absolute;
  bottom: calc(100vw * (340 / 1512));
  left: calc(100vw * (400 / 1512));
  z-index: 6;
`

const ButterflyOne = styled.img`
  width: calc(100vw * (90 / 1512));
  position: absolute;
  bottom: calc(100vw * (980 / 1512));
  right: calc(100vw * (300 / 1512));
  z-index: 10;
`

const ButterflyTwo = styled.img`
  width: calc(100vw * (122 / 1512));
  position: absolute;
  bottom: calc(100vw * (900 / 1512));
  right: calc(100vw * (100 / 1512));
  z-index: 10;
`

const Footer = () => (
  <div>
    <FooterContainer id="footer">
      <FooterBackground>
        <LandAcknowledgementText>
          cmd-f takes place on the xʷməθkʷəy̓əm (Musqueam) and səlilwətaɬ (Tsleil-Waututh) territory. As we build
          tomorrow&apos;s tech community, we recognize our responsibility to understand and respect Indigenous
          histories. To learn more, visit{' '}
          <a href="https://guides.library.ubc.ca/xwi7xwaresearchguide" target="_blank" rel="noreferrer">
            xwi7xwa&apos;s Research Guide.
          </a>
        </LandAcknowledgementText>
        <ClosingCard>
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
          <NewsletterBox>
            <NewsletterP>Sign up for our newsletter!</NewsletterP>
            <Newsletter />
          </NewsletterBox>
        </ClosingCard>

        <TeamContainer>
          <Team />
        </TeamContainer>
        <CopyRight>Copyright &copy; cmd-f 2026</CopyRight>
      </FooterBackground>
      <GreenFrontBg src="/assets/images/footer/green_front_bg.svg" />
      <GreenBackBg src="/assets/images/footer/green_back_bg.svg" />
      <Clouds src="/assets/images/footer/clouds.svg" />
      <Castle src="/assets/images/footer/castle.svg" />
      <RedQueen src="/assets/images/footer/red_queen.svg" />
      <LeftMaze src="/assets/images/footer/left_maze.svg" />
      <RightMaze src="/assets/images/footer/right_maze.svg" />
      <DeerHeartTree src="/assets/images/footer/deer_heart_tree.svg" />
      <WhiteHeartTree src="/assets/images/footer/white_tree.svg" />
      <RightHeartTree src="/assets/images/footer/right_heart_tree.svg" />
      <Alice src="/assets/images/footer/alice.svg" />
      <ButterflyOne src="/assets/images/footer/butterfly_one.svg" />
      <ButterflyTwo src="/assets/images/footer/butterfly_two.svg" />
    </FooterContainer>
  </div>
)

export default Footer
