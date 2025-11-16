import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import ChevronLeft from '@assets/images/sponsor/arrow_left.png'

const PAGE_FRAC_DESKTOP = 60 // % width of carousel content on desktop

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

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  position: relative;
  z-index: 2;
`

const ContentContainer = styled.div`
  width: ${PAGE_FRAC_DESKTOP}%;
  aspect-ratio: 864.75 / 476.62;
  position: relative;

  display: flex;

  background-image: url('/assets/images/sponsor/sponsor_card.svg');
  opacity: 1;
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
  height: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5%;
  padding-top: 2%;
`

const ActiveButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw * (40 / 1280));
  height: calc(100vw * (40 / 1280));

  border-radius: 12px;
  background-color: ${props => (props.visible ? 'rgba(255, 255, 255, 0.8)' : 'transparent')};
  cursor: ${props => (props.visible ? 'pointer' : 'default')};
  transition: 200ms ease-in-out;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  &:hover {
    background-color: ${props => (props.visible ? 'rgba(255, 255, 255, 1)' : 'transparent')};
  }

  ${props => props.left && `
    left: -2rem;
  `}
  ${props => props.right && `
    right: -2rem;
  `}

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

const Blurb = styled.div`
  font-size: 1rem;
  color: #381f1c;
  font-family: 'Space Grotesk';
  font-weight: 400;
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

  a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`

// const LearnMoreButton = styled.a`
//   font-size: 1rem;
//   font-weight: 600;
//   background: #883030;
//   color: white;
//   text-decoration: none;
//   padding: calc(100vw * (10 / 1280)) calc(100vw * (15 / 1280));
//   border-radius: calc(100vw * (8 / 1280));

//   ${p => p.theme.mediaQueries.mobile} {
//     font-size: 0.75rem;
//     padding: calc(100vw * (8 / 487)) calc(100vw * (15 / 487));
//     border-radius: calc(100vw * (8 / 487));
//   }
// `

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
        <ContentContainer>
          <ActiveButton
            visible={showLeftButton}
            left
            onClick={() => showLeftButton && setViewing(prev => Math.max(0, prev - 1))}
          >
            <ChevronImg src={ChevronLeft.src} />
          </ActiveButton>

          <LeftContainer>
            <LeftInnerContainer>
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
              <Blurb dangerouslySetInnerHTML={{ __html: sanitizeBlurb(sponsors[viewing]?.blurb) }} />
            </RightInnerContainer>
          </RightContainer>

          <ActiveButton
            visible={showRightButton}
            right
            onClick={() => showRightButton && setViewing(prev => Math.min(sponsors.length - 1, prev + 1))}
          >
            <ChevronImg src={ChevronLeft.src} flip />
          </ActiveButton>
        </ContentContainer>
      </CarouselContainer>
    </CarouselWrapper>
  )
}

export default Carousel
