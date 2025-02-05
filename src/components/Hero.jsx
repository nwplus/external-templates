import styled from 'styled-components'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import RegistrationCountdown from './RegistrationCountdown'
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider'

gsap.registerPlugin(ScrollTrigger)

const HeroContainer = styled.div`
  min-height: 100vh;
  padding: calc(100vw * (150 / 1920));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${SCREEN_BREAKPOINTS.md}) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`

const HeroContent = styled.div`
  flex: 2;
  max-width: 800px;
`

const HeroTitle = styled.h1`
  font-family: 'Gloock';
  font-size: calc(100vw * (64 / 1920));
  font-weight: 400;
  color: #a6321e;
  margin: 16px 0;
  width: calc(100vw * (1000 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 487));
  }
`

const HeroDescription = styled.p`
  font-family: 'Happy Time';
  font-style: italic;
  font-size: calc(40vw * (80 / 1920));
  color: #751c0d;
  margin-bottom: 2rem;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${SCREEN_BREAKPOINTS.md}) {
    justify-content: center;
  }
`

const LogoContainer = styled.div`
  margin-bottom: 2rem;
  width: calc(100vw * (143 / 1920));
  max-width: 143px;
  height: auto;

  @media (max-width: ${SCREEN_BREAKPOINTS.md}) {
    margin: 0 auto 2rem;
    width: calc(100vw * (143 / 487));
  }
`
const SponsorText = styled.p`
  margin-top: 1.5rem;
  font-family: 'Happy Time';
  font-style: italic;
  font-size: calc(100vw * (23 / 1920));
  color: #751c0d;

  @media (max-width: ${SCREEN_BREAKPOINTS.md}) {
    font-size: calc(100vw * (18 / 487));
  }
`

const TextLink = styled.a`
  color: #751c0d;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #456774;
  }
`

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 11px 21px;
  white-space: nowrap;

  font-family: 'Poppins';
  font-size: calc(100vw * (23 / 1920));
  border-radius: 15px;
  height: calc(100vw * (64 / 1920));
  width: calc(100vw * (280 / 1920));
  font-weight: 600;
  cursor: pointer;

  transition: all 0.3s ease;
  &.primary {
    background-color: #a6321e;
    color: #f0e9d7;
    border: none;

    &:hover {
      background-color: #456774;
    }
  }

  &.secondary {
    background-color: transparent;
    color: #a6321e;
    border: 2px solid #a6321e;

    &:hover {
      text-decoration: underline;
    }
  }
`

const HeroImageContainer = styled.div`
  flex: 1;
  position: relative;
  max-width: 400px;
  margin-top: -100px;

  @media (max-width: ${SCREEN_BREAKPOINTS.md}) {
    max-width: 100%;
    margin-top: 0;
  }
`

const HeroImage = styled.img`
  width: calc(100vw * (530 / 1920));
  height: auto;
  object-fit: cover;
`

const RegistrationCard = styled.img`
  position: absolute;
  bottom: calc(100vw * (-60 / 1920));
  left: calc(100vw * (-150 / 1920));
  width: calc(100vw * (500 / 1920));
  height: auto;
  z-index: 1;
`

const Hero = () => (
  <div id="home">
    <HeroContainer>
      <HeroContent>
        <LogoContainer>
          <img src="/assets/images/cmdfLogo.svg" alt="cmd-f Logo" width="100%" height="100%" />
        </LogoContainer>
        <HeroTitle>Western Canada&apos;s largest hackathon celebrating underrepresented genders in tech.</HeroTitle>
        <HeroDescription>March 8-9, 2025 | In-person at Life Sciences Institute</HeroDescription>
        <ButtonContainer>
          <Button className="primary" href="https://portal.nwplus.io" target="_blank">
            Apply Now!
          </Button>
          <Button className="secondary" href="https://forms.gle/LayNGN53S5Mdtin16">
            Become a mentor
          </Button>
        </ButtonContainer>
        <SponsorText>
          Become a{' '}
          <TextLink href="mailto:sponsorship@nwplus.io" target="_blank" rel="noopener noreferrer">
            sponsor
          </TextLink>{' '}
          or{' '}
          <TextLink href="https://forms.gle/ZxcXa5RrbZXPZPAE7" target="_blank" rel="noopener noreferrer">
            volunteer
          </TextLink>
          .
        </SponsorText>
      </HeroContent>
      <HeroImageContainer>
        <HeroImage src="/assets/images/animations/hero-pancake.gif" alt="Hero pancakes gif" />
        <RegistrationCard src="/assets/images/regClosesCard.svg" alt="Registration open card" />
        <RegistrationCountdown />
      </HeroImageContainer>
    </HeroContainer>
  </div>
)

export default Hero
