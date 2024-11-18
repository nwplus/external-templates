import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import ChevronLeft from '@assets/images/chevron_left.svg'

// const PAGE_FRAC_MOBILE = 90 // width: ?vw for the carousel component on mobile
const PAGE_FRAC_DESKTOP = 80 // width: ?% for the carousel component on desktop

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  gap: 2%;

  z-index: 2;
`

const ContentContainer = styled.div`
  width: ${PAGE_FRAC_DESKTOP}%;
  aspect-ratio: 889 / 431;
  position: relative;

  display: flex;
  padding: 1.171875%; // the tv's border

  background-image: url('/assets/images/sponsor_tv.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  ${p => p.theme.mediaQueries.mobile} {
    width: 95%;
    background-image: url('/assets/images/sponsor_tv_mobile.svg');
    padding: calc(100vw * (9.8 / 487)) calc(100vw * (7.43 / 487));
    aspect-ratio: 441 / 283;
  }
`

const LeftContainer = styled.div`
  width: 33.178%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (150 / 487));
  }
`

const LeftInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(100vw * (10 / 1280));
  width: 80%;

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (20 / 487));
    width: 90%;
  }
`

const RightContainer = styled.div`
  width: 66.822%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 95%;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (295 / 487));
    height: 95%;
    max-height: 100%;
  }
`

const RightInnerContainer = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5%;
  padding-top: 2%;
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

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const ChevronImg = styled.img`
  height: 1.5625vw;
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

  ${p => p.theme.mediaQueries.mobile} {
    bottom: calc(100vw * (30 / 487));
    gap: calc(100vw * (10 / 487));
  }
`

const Dot = styled.div`
  width: calc(100vw * (10 / 1280));
  height: calc(100vw * (10 / 1280));
  border-radius: 50%;
  background-color: white;
  transition: 300ms;
  cursor: pointer;
  opacity: ${props => (props.viewing ? 1 : 0.2)};

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (10 / 487));
    height: calc(100vw * (10 / 487));
  }
`

const Logo = styled.img`
  width: 100%;
`

const SponsoredByText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`

const Blurb = styled.div`
  font-size: 1.25rem;
  font-family: 'HK Grotesk Medium';
  font-weight: 500;
  max-height: 75%;
  overflow-y: auto;
  word-wrap: break-word;
  width: 100%;

  ::-webkit-scrollbar {
    width: 0.5rem;
    -webkit-appearance: none;
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
  -webkit-overflow-scrolling: touch;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.75rem;
    padding-right: calc(100vw * (10 / 487));
  }
`

const LearnMoreButton = styled.a`
  font-size: 1rem;
  font-weight: 600;
  background: #883030;
  color: white;
  text-decoration: none;
  padding: calc(100vw * (10 / 1280)) calc(100vw * (15 / 1280));
  border-radius: calc(100vw * (8 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.75rem;
    padding: calc(100vw * (8 / 487)) calc(100vw * (15 / 487));
    border-radius: calc(100vw * (8 / 487));
  }
`

const Carousel = ({ sponsors }) => {
  const [viewing, setViewing] = useState(0)
  const showLeftButton = viewing > 0
  const showRightButton = viewing < sponsors.length - 1

  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const touchEndX = useRef(null)
  const touchEndY = useRef(null)

  const minSwipeDistance = 50

  const handleTouchStart = e => {
    touchEndX.current = null
    touchEndY.current = null
    touchStartX.current = e.targetTouches[0].clientX
    touchStartY.current = e.targetTouches[0].clientY
  }

  const handleTouchMove = e => {
    touchEndX.current = e.targetTouches[0].clientX
    touchEndY.current = e.targetTouches[0].clientY
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const deltaX = touchStartX.current - touchEndX.current
    const deltaY = touchStartY.current - touchEndY.current

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0 && showRightButton) {
        setViewing(prev => Math.min(sponsors.length - 1, prev + 1))
      } else if (deltaX < 0 && showLeftButton) {
        setViewing(prev => Math.max(0, prev - 1))
      }
    }
  }

  return (
    <CarouselWrapper onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
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
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  touch-action: pan-y; /* Allows vertical scrolling while handling horizontal swipes */
`

export default Carousel
