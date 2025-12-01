import React from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1512/1000;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding-top: calc(100vw * (200 / 1512));
  gap: calc(100vw * (200 / 1512));

  background: linear-gradient(to bottom, #1e0831 0%, #da9e9f 70%, #f6dbc8 100%);
  opacity: 1 !important;
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    position: relative;
    aspect-ratio: 487/935;
    min-height: calc(100vw * (935 / 487));
    padding-top: calc(100vw * (40 / 1512));
    flex-direction: column;
    align-items: center;
  }
`

// LEFT SIDE START
const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100vw * (230 / 1512));
  right: calc(100vw * (950 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (800 / 1512));
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    align-items: center;
    text-align: center;
    padding: calc(100vw * (20 / 1512)) calc(100vw * (20 / 1512));
  }
`

const Logo = styled.img`
  width: calc(100vw * (75 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Subheader = styled.p`
  color: white;
  font-size: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
  }
`

const SecondarySubheader = styled.p`
  color: white;
  font-size: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (16 / 487));
    font-size: calc(100vw * (14 / 487));
  }
`

const Title = styled.img`
  width: calc(100vw * (420 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (-200 / 1512));
    right: calc(100vw * (-70 / 487));
    width: calc(100vw * (273 / 487));
    transform: translateX(-50%);
    align-items: center;
    text-align: center;
    padding: calc(100vw * (20 / 1512)) calc(100vw * (20 / 1512));
  }
`

const Buttons = styled.div`
  display: flex;
  gap: calc(100vw * (15 / 1512));
  margin: calc(100vw * (15 / 1512)) 0px;

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (15 / 487));
    margin: calc(100vw * (30 / 487)) 0px;
  }
`

const Description = styled.div`
  margin: calc(100vw * (20 / 1512)) 0px;
  display: flex;
  flex-direction: column;
  gap: calc(100vw * (5 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    margin: calc(100vw * (50 / 1512)) 0px;
  }
`

const SponsorText = styled.a`
  font-size: calc(100vw * (20 / 1512));
  text-decoration: none;
  cursor: pointer;
  color: #421123;
  text-decoration: underline;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 487));
    color: #ffffff;
  }
`

const HackerButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: calc(100vw * (15 / 1512)) calc(100vw * (20 / 1512));
  font-size: calc(100vw * (20 / 1512));
  border-radius: calc(100vw * (9 / 1512));
  background: linear-gradient(to bottom, #fed3c1 0%, #e7a39d 100%) padding-box,
    linear-gradient(90deg, #ffffff 0%, #d0b5c2 100%) border-box;
  border: 1px solid transparent;
  color: #6b1b39;

  &:hover {
    box-shadow: inset 0 -8px 8px rgba(58, 13, 83, 0.25);
  }

  ${p => p.theme.mediaQueries.mobile} {
    border-radius: calc(100vw * (5 / 487));
    padding: calc(100vw * (8 / 487)) calc(100vw * (12 / 487));
    font-size: calc(100vw * (14 / 487));
  }
`

const MentorButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: calc(100vw * (15 / 1512)) calc(100vw * (20 / 1512));
  font-size: calc(100vw * (20 / 1512));
  border-radius: calc(100vw * (9 / 1512));
  background: linear-gradient(to bottom, #80344f 0%, #622a4d 100%) padding-box,
    linear-gradient(90deg, #f8c3e5 0%, #e69fdb 100%) border-box;
  border: 1px solid transparent;
  color: white;

  &:hover {
    box-shadow: inset 0 -8px 8px rgba(30, 4, 27, 0.45);
  }

  ${p => p.theme.mediaQueries.mobile} {
    border-radius: calc(100vw * (5 / 487));
    padding: calc(100vw * (8 / 487)) calc(100vw * (12 / 487));
    font-size: calc(100vw * (14 / 487));
  }
`

const VolunteerButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: calc(100vw * (15 / 1512)) calc(100vw * (20 / 1512));
  font-size: calc(100vw * (20 / 1512));
  border-radius: calc(100vw * (9 / 1512));
  background: linear-gradient(to bottom, #404721 0%, #1e2f0e 100%) padding-box,
    linear-gradient(90deg, #ffffff 0%, #9fc3be 100%) border-box;
  border: 1px solid transparent;
  color: white;

  &:hover {
    box-shadow: inset 0 -8px 8px rgba(30, 4, 27, 0.45);
  }

  ${p => p.theme.mediaQueries.mobile} {
    border-radius: calc(100vw * (5 / 487));
    padding: calc(100vw * (8 / 487)) calc(100vw * (12 / 487));
    font-size: calc(100vw * (14 / 487));
  }
`
// LEFT SIDE END

// IMAGES START
const HeroIslandWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: calc(100vw * (676.2 / 1512));
  top: calc(100vw * (170 / 1512));
  right: calc(100vw * (120 / 1512));

  height: clamp(400px, calc(100vw * (778 / 1512)), 1000px);
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (1600 / 1512));
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw * (338 / 528));
    z-index: 2;
    height: auto;
  }
`

const HeroIsland = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-position: top; /* ensure top stays visible when cropped */
  object-fit: cover; /* prevents the browser from scaling to fit differently */
  pointer-events: none;
  user-select: none;

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    height: auto;
  }
`

const HeroWind = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  pointer-events: none;
  width: calc(100vw * (951 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CloudOne = styled.img`
  position: absolute;
  top: calc(100vw * (285 / 1512));
  right: calc(100vw * (175 / 1512));
  z-index: 3;
  width: calc(100vw * (480 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CloudTwo = styled.img`
  position: absolute;
  z-index: 1;
  width: calc(100vw * (248 / 1512));
  top: calc(100vw * (290 / 1512));
  right: calc(100vw * (100 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CloudThree = styled.img`
  position: absolute;
  z-index: 5;
  width: calc(100vw * (190 / 1512));
  top: calc(100vw * (580 / 1512));
  right: calc(100vw * (570 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const TrainTracks = styled.img`
  position: absolute;
  z-index: 0;
  width: calc(100vw * (159 / 1512));
  top: calc(100vw * (400 / 1512));
  right: calc(100vw * (150 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (1940 / 1512));
    left: 75%;
    transform: translateX(-50%);
    width: calc(100vw * (89 / 528));
  }
`

const MiniIsland = styled.img`
  position: absolute;
  z-index: 0;
  width: calc(100vw * (135 / 1512));
  top: calc(100vw * (630 / 1512));
  right: calc(100vw * (150 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CloudFour = styled.img`
  position: absolute;
  z-index: 2;
  width: calc(100vw * (115 / 1512));
  top: calc(100vw * (640 / 1512));
  right: calc(100vw * (220 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`
// IMAGES END

const Hero = () => (
  <div id="home">
    <HeroContainer>
      <ContentSide>
        <Logo src="./assets/images/hero/nwhacks_logo.svg" />
        <Title src="./assets/images/hero/nwhacks_title.svg" />
        <Description>
          <Subheader>Western Canada&apos;s Premier Hackathon</Subheader>
          <SecondarySubheader>January 17-18 @ UBC Life Sciences Institute</SecondarySubheader>
        </Description>
        <Subheader>Apply to be a:</Subheader>
        <Buttons>
          <HackerButton href="https://portal.nwplus.io/" target="_blank">
            Hacker
          </HackerButton>
          <MentorButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSed4X4CvZI3NoeOF5xjhMEISiM3RR6W96reEB-uFn_3IUVhzg/viewform"
            target="_blank"
          >
            Mentor
          </MentorButton>
          <VolunteerButton
            href="https://docs.google.com/forms/d/e/1FAIpQLScTRJmFJLBG8fGFSlSBJmR_O2Jk2_mZjZ-EBNYpoFhrkoczFg/viewform"
            target="_blank"
          >
            Volunteer
          </VolunteerButton>
        </Buttons>
        <SponsorText href="mailto:sponsorship@nwplus.io?subject=Sponsorship Inquiry">Become a Sponsor</SponsorText>
      </ContentSide>
      <HeroIslandWrapper>
        <HeroIsland src="./assets/images/hero/hero_island.svg" alt="hero island" />
      </HeroIslandWrapper>
      <TrainTracks src="./assets/images/hero/hero_tracks.svg" />
      <HeroWind src="./assets/images/hero/hero_wind.svg" />
      <CloudOne src="./assets/images/hero/hero_cloud_one.svg" />
      <CloudTwo src="./assets/images/hero/hero_cloud_two.svg" />
      <CloudThree src="./assets/images/hero/hero_cloud_three.svg" />
      <MiniIsland src="./assets/images/hero/hero_mini_island.svg" />
      <CloudFour src="./assets/images/hero/hero_cloud_four.svg" />
    </HeroContainer>
  </div>
)

export default Hero
