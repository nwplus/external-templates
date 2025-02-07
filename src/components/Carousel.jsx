import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import ChevronLeft from '@assets/images/chevron_left.svg'

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
  width: calc(100vw * (872 / 1920));
  height: calc(100vw * (450 / 1920));
  position: relative;
  background-color: #fffdfa;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(100vw * (60 / 1920)) 0;

  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  gap: calc(100vw * (60 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (340 / 393));
    height: calc(100vw * (360 / 393));
    padding: calc(100vw * (9.8 / 487)) calc(100vw * (7.43 / 487));
    aspect-ratio: 441 / 283;
  }
`

const TopContainer = styled.div`
  width: calc(100vw * (676.889 / 1920));
  height: calc(100vw * (120 / 1920));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (250 / 393));
    height: calc(100vw * (120 / 393));
    padding-top: calc(100vw * (30 / 393));
  }
`

const RightContainer = styled.div`
  width: calc(100vw * (793 / 1920));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95%;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (283 / 393));
    height: 95%;
  }
`

const ActiveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw * (40 / 1920));
  height: calc(100vw * (40 / 1920));

  border-radius: 50%;
  background-color: ${props => (props.visible ? 'rgba(69, 103, 116, 0.4)' : 'transparent')};
  cursor: ${props => (props.visible ? 'pointer' : 'default')};
  transition: 200ms ease-in-out;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    width: calc(100vw * (40 / 393));
    height: calc(100vw * (40 / 393));
    z-index: 10;
    ${props => (props.flip ? 'right: 3%;' : 'left: 3%;')};
  }
`

const ChevronImg = styled.img`
  height: calc(100vw * (19 / 1920));
  transform: ${props => (props.flip ? 'scaleX(-1)' : 'none')};
  ${p => p.theme.mediaQueries.mobile} {
    height: calc(100vw * (19 / 393));
  }
`

const Logo = styled.img`
  max-width: calc(100vw * (676.889 / 1920));
  max-height: calc(100vw * (150 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    max-width: calc(100vw * (254 / 393));
    max-height: calc(100vw * (120 / 393));
  }
`

const Blurb = styled.div`
  font-size: calc(100vw * (16 / 1920));
  font-family: Poppins;
  font-weight: 400;
  height: calc(100vw * (150 / 1920));
  overflow-y: auto;
  word-wrap: break-word;
  width: calc(100vw * (793 / 1920));

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
    width: calc(100vw * (283 / 393));
    font-size: calc(100vw * (15 / 393));
    height: calc(100vw * (150 / 393));
  }
`

const sanitizeBlurb = blurb =>
  blurb.replace(/<a\s+(?:[^>]*?)href=/g, '<a target="_blank" rel="noopener noreferrer" href=')

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
          <TopContainer>
            <Logo src={sponsors[viewing]?.imgURL} />
          </TopContainer>

          <RightContainer>
            <Blurb dangerouslySetInnerHTML={{ __html: sanitizeBlurb(sponsors[viewing]?.blurb) }} />
          </RightContainer>
        </ContentContainer>

        <ActiveButton
          visible={showRightButton}
          onClick={() => {
            if (showRightButton) {
              setViewing(prev => Math.min(sponsors.length - 1, prev + 1))
            }
          }}
          flip
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
  touch-action: pan-y;

  ${p => p.theme.mediaQueries.mobile} {
    user-select: none;
  }
`

export default Carousel
