import styled from 'styled-components'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Countdown from 'src/sections/Countdown'

gsap.registerPlugin(ScrollTrigger)

const HeroContainer = styled.div`
  min-height: 100vh;
  padding: calc(100vw * (150 / 1920));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    text-align: center;
  }
`

const HeroContent = styled.div`
  flex: 2;
  max-width: 800px;
  ${p => p.theme.mediaQueries.mobile} {
    //position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw * (300 / 393));
  }
`

const HeroTitle = styled.h1`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (44 / 1920));
  font-weight: 400;
  line-height: 1.2;
  color: black;
  margin: 16px 0;
  width: calc(100vw * (700 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
    width: calc(100vw * (300 / 393));
  }
`

const HeroHighlight = styled.span`
  color: #E64B73;
`

const HeroDescription = styled.p`
  font-family: 'Quicksand';
  font-size: calc(40vw * (56 / 1920));
  font-weight: 600;
  color: black;
  margin-bottom: 3rem;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    gap: 0.5em;
  }
`

const LogoContainer = styled.div`
  margin-bottom: 1rem;
  width: calc(100vw * (143 / 1920));
  max-width: 143px;
  height: auto;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (50 / 393));
    margin-bottom: 1em;
    width: calc(100vw * (80 / 393));
  }
`
const SponsorText = styled.p`
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-family: 'Quicksand';
  font-size: calc(100vw * (18 / 1920));
  font-weight: 600;
  color: black;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
  }
`

const TextLink = styled.a`
  color: black;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #DDB142;
  }
`

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 14px;
  white-space: nowrap;

  font-family: 'Quicksand';
  font-size: calc(100vw * (18 / 1920));
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.3s ease;
  &.primary {
    background-color: #254CB7;
    color: white;
    border: none;

    &:hover {
      background-color:rgb(69, 100, 184);
    }
  }

  &.secondary {
    background-color: #C63359;
    color: white;
    border: none;

    &:hover {
      color:rgb(210, 78, 113);
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (12 / 393));
    height: calc(100vw * (40 / 393));
    width: calc(100vw * (150 / 393));
  }
`

const HeroImageContainer = styled.div`
  flex: 1;
  position: relative;
  max-width: 400px;
  margin-top: -100px;

  ${p => p.theme.mediaQueries.mobile} {
    //max-width: 100%;
    margin-top: -30px;
  }
`

const HeroImage = styled.img`
  width: calc(100vw * (530 / 1920));
  height: auto;
  object-fit: cover;
  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (240 / 393));
    height: calc(100vw * (300 / 393));
  }
`

const LINKS = {
  mentor: 'https://forms.gle/ad67KnGec2yxvZwh9',
  apply: 'https://nwplus.io',
  sponsor: 'mailto:sponsorship@nwplus.io',
  volunteer: 'mailto:info@nwplus.io',
  photographer: 'mailto:info@nwplus.io',
}

const Hero = () => (
  <div id="home">
    <HeroContainer>
      <HeroContent>
        <LogoContainer>
          <img src="/assets/images/cmdfLogoBlack.svg" alt="cmd-f Logo" width="90%" height="100%" />
        </LogoContainer>
        <HeroTitle>Western Canada&apos;s largest hackathon <HeroHighlight>celebrating underrepresented genders in tech.</HeroHighlight></HeroTitle>
        <HeroDescription>
          March 8-9, 2026 | In-person at Life Sciences Institute
        </HeroDescription>

        <ButtonContainer>
          <Button className="primary" href={LINKS.mentor} target="_blank" rel="noopener noreferrer">
            Become a Mentor
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

      <HeroImageContainer>
        <HeroImage src="/assets/images/animations/hero-pancake.gif" alt="Hero pancakes gif" />
      </HeroImageContainer>
    </HeroContainer>
  </div>
)

export default Hero
