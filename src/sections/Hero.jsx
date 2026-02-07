import styled from 'styled-components'
// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Countdown from '@components/hero/Countdown'
import CheshireCat from '../components/hero/CheshireCat'
import ToastButterflies from '../components/hero/ToastButterflies'
import Smoke from '../components/hero/Smoke'
import MidRightShrooms from '../components/hero/MidRightShrooms'

// gsap.registerPlugin(ScrollTrigger)

const HeroContainer = styled.div`
  --hero-padding: calc(100vw * (200 / 1920));
  --hero-padding-top: calc(100vw * (100 / 1080));

  position: relative;
  min-height: calc(100vw * (830 / 1080));
  padding: var(--hero-padding);
  padding-top: var(--hero-padding-top);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    --hero-padding: calc(100vw * (75 / 1920));
    --hero-padding-top: calc(100vw * (0 / 1080));
    flex-direction: column;
    text-align: center;
    min-height: 210vw;
    z-index: 2;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  flex: 2;
  width: fit-content;
  ${p => p.theme.mediaQueries.mobile} {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.5vh;
  }
`

const HeroTitle = styled.h1`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (44 / 1920));
  font-weight: 400;
  line-height: 1.2;
  color: black;
  margin: 1.5vw 0 3vw 0;
  width: calc(100vw * (700 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (24 / 393));
    width: 100%;
  }
`

const HeroHighlight = styled.span`
  color: #e64b73;
`

const HeroDescription = styled.p`
  font-family: 'Quicksand';
  font-size: calc(40vw * (56 / 1920));
  font-weight: 600;
  color: black;
  margin-bottom: 3vh;
  width: fit-content;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 393));
    margin-bottom: 0;
  }
`

const HeroDescriptionContainer = styled.div`
  display: contents;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    gap: 0.5vh;
    margin-bottom: 3vh;
    align-items: center;
  }
`

const HeroDescriptionDesktop = styled(HeroDescription)`
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const HeroDescriptionMobile = styled(HeroDescription)`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: fit-content;

  ${p => p.theme.mediaQueries.mobile} {
    gap: 3vw;
    margin-top: 1vh;
  }
`

const LogoContainer = styled.div`
  margin-bottom: 1vh;
  width: calc(100vw * (143 / 1920));
  height: auto;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (50 / 393));
    width: calc(100vw * (80 / 393));
  }
`
const SponsorText = styled.p`
  margin-top: calc(100vw * (20 / 1920));
  margin-bottom: calc(100vw * (60 / 1920));
  font-family: 'Quicksand';
  font-size: calc(100vw * (18 / 1920));
  font-weight: 600;
  color: black;
  width: fit-content;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
    font-weight: 400;
    width: 70vw;
    margin-top: 0.5rem;
  }
`

const TextLink = styled.a`
  color: black;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #ddb142;
  }
`

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.7vw 1vw;
  white-space: nowrap;

  font-family: 'Quicksand';
  font-size: calc(100vw * (18 / 1920));
  border-radius: 0.7vw;
  font-weight: 500;
  cursor: pointer;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  transition: all 0.3s ease;
  &.primary {
    background-color: #254cb7;
    color: white;
    border: none;

    &:hover {
      background-color: #3f71ff;
    }
  }

  &.secondary {
    background-color: #c63359;
    color: white;
    border: none;

    &:hover {
      background-color: #f25c93;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
    font-weight: 600;
    padding: 2vw 3vw;
    border-radius: 2vw;
  }
`

const HeroForegroundContainer = styled.div`
  position: absolute;
  top: var(--hero-padding-top);
  right: var(--hero-padding);
  bottom: var(--hero-padding);
  left: var(--hero-padding);
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    max-width: 100%;
    margin-top: -30px;
  }
`

const HeroBackground = styled.div`
  position: absolute;
  top: calc(100vw * (-380 / 1512));
  left: 0;
  width: 100vw;
  height: calc(100vw * (1900 / 1512));
  z-index: 2;

  background-image: url('/assets/images/hero_background.svg');
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    top: -45px;
    height: calc(100vw * (900 / 393));
    background-image: url('/assets/images/hero_background_mobile.svg');
  }
`

const LINKS = {
  mentor: 'https://forms.gle/rk8swTSA5dHcrKuq5',
  apply: 'https://portal.nwplus.io',
  sponsor: 'mailto:sponsorship@nwplus.io',
  volunteer: 'https://forms.gle/nQGvJJzcYsHaRRj87',
  photographer: 'https://forms.gle/NqqjwHQfyv78mWkq6',
}

const Hero = () => (
  <HeroContainer>
    <HeroBackground />
    <HeroContent>
      <LogoContainer>
        <img src="/assets/images/cmdfLogoBlack.svg" alt="cmd-f Logo" width="90%" height="100%" />
      </LogoContainer>
      <HeroTitle>
        Western Canada&apos;s largest hackathon{' '}
        <HeroHighlight>celebrating underrepresented genders in tech</HeroHighlight>
      </HeroTitle>
      <HeroDescriptionContainer>
        <HeroDescriptionDesktop>March 7-8, 2026 | In-person at Life Sciences Institute</HeroDescriptionDesktop>
        <HeroDescriptionMobile>March 7-8, 2026</HeroDescriptionMobile>
        <HeroDescriptionMobile>In-person at Life Sciences Institute</HeroDescriptionMobile>
      </HeroDescriptionContainer>

      <ButtonContainer>
        <Button className="primary" href={LINKS.mentor} target="_blank" rel="noopener noreferrer">
          Become a Mentor / Judge
        </Button>
        <Button className="secondary" href={LINKS.apply} target="_blank" rel="noopener noreferrer">
          Apply Now
        </Button>
      </ButtonContainer>

      <SponsorText>
        Become a{' '}
        <TextLink href={LINKS.sponsor} target="_blank" rel="noopener noreferrer">
          Sponsor
        </TextLink>
        {', '}
        <TextLink href={LINKS.volunteer} target="_blank" rel="noopener noreferrer">
          Volunteer
        </TextLink>
        {' or '}
        <TextLink href={LINKS.photographer} target="_blank" rel="noopener noreferrer">
          Photographer
        </TextLink>
      </SponsorText>

      <Countdown />
    </HeroContent>
    <HeroForegroundContainer>
      <Smoke />
      <MidRightShrooms />
      <CheshireCat />
      <ToastButterflies />
    </HeroForegroundContainer>
  </HeroContainer>
)

export default Hero
