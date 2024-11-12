import React, { useState } from 'react'
import styled from 'styled-components'
import ChevronLeft from '@assets/images/chevron_left.svg'

// const PAGE_FRAC_MOBILE = 90 // width: ?vw for the carousel component on mobile
const PAGE_FRAC_DESKTOP = 60 // width: ?vw for the carousel component on desktop

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: calc(${PAGE_FRAC_DESKTOP}vw * (20 / 889));
`

const ContentContainer = styled.div`
  width: ${PAGE_FRAC_DESKTOP}vw;
  aspect-ratio: 889 / 431;
  position: relative;

  display: flex;
  padding: calc(${PAGE_FRAC_DESKTOP}vw * (15 / 889));

  background-image: url('/assets/images/sponsor_tv.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  ${p => p.theme.mediaQueries.mobile} {
  }
`

const LeftContainer = styled.div`
  flex: 285;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LeftInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(100vw * (10 / 1280));
  width: 80%;
`

const RightContainer = styled.div`
  flex: 574;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RightInnerContainer = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5%;
`

const ActiveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw * (40 / 1280));
  height: calc(100vw * (40 / 1280));

  border-radius: 50%;
  background-color: ${props => (props.visible ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
  cursor: ${props => (props.visible ? 'pointer' : 'default')};
  transition: 200ms ease-in-out;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  &:hover {
    background-color: ${props => (props.visible ? 'rgba(255, 255, 255, 0.4)' : 'transparent')};
  }
`

const ChevronImg = styled.img`
  width: calc(100vw * (20 / 1280));
  height: calc(100vw * (20 / 1280));
  transform: ${props => (props.flip ? 'scaleX(-1)' : 'none')};
`

const Dots = styled.div`
  position: absolute;
  bottom: calc(100vw * (30 / 1280));

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: calc(100vw * (10 / 1280));
`

const Dot = styled.div`
  width: calc(100vw * (10 / 1280));
  height: calc(100vw * (10 / 1280));
  border-radius: 50%;
  background-color: white;
  transition: 300ms;
  cursor: pointer;
  opacity: ${props => (props.viewing ? 1 : 0.2)};
`

const Logo = styled.img`
  width: 100%;
`

const SponsoredByText = styled.div`
  font-size: calc(100vw * (20 / 1280));
  font-weight: 600;
  color: white;
  text-align: center;
`

const Blurb = styled.div`
  font-size: calc(100vw * (16 / 1280));
  font-family: 'HK Grotesk Medium';
  font-weight: 500;
  max-height: 70%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
`

const LearnMoreButton = styled.a`
  font-size: calc(100vw * (12 / 1280));
  font-weight: 600;
  background: #883030;
  color: white;
  text-decoration: none;
  padding: calc(100vw * (10 / 1280)) calc(100vw * (15 / 1280));
  border-radius: calc(100vw * (8 / 1280));
`

const Carousel = ({ sponsors }) => {
  const [viewing, setViewing] = useState(0)
  const showLeftButton = viewing > 0
  const showRightButton = viewing < sponsors.length - 1

  return (
    <CarouselContainer>
      <ActiveButton
        visible={showLeftButton}
        onClick={() => {
          if (showLeftButton) {
            setViewing(prev => Math.max(0, prev - 1))
          }
        }}
      >
        <ChevronImg src={ChevronLeft} />
      </ActiveButton>

      <ContentContainer>
        <LeftContainer>
          <LeftInnerContainer>
            <SponsoredByText>
              PROUDLY <br /> SPONSORED BY
            </SponsoredByText>
            <Logo src={sponsors[viewing]?.imgURL} />
          </LeftInnerContainer>
          {sponsors.length >= 1 && (
            <Dots>
              {sponsors.map((sponsor, i) => (
                <Dot key={sponsor.name} viewing={i === viewing} onClick={() => setViewing(i)} />
              ))}
            </Dots>
          )}
        </LeftContainer>

        <RightContainer>
          <RightInnerContainer>
            <Blurb>{sponsors[viewing]?.blurb}</Blurb>
            <LearnMoreButton href={sponsors[viewing]?.link}>Learn More</LearnMoreButton>
          </RightInnerContainer>
        </RightContainer>
      </ContentContainer>

      <ActiveButton
        visible={showRightButton}
        onClick={() => {
          if (showRightButton) {
            setViewing(prev => Math.min(sponsors.length - 1, prev + 1))
          }
        }}
      >
        <ChevronImg src={ChevronLeft} flip />
      </ActiveButton>
    </CarouselContainer>
  )
}

export default Carousel
