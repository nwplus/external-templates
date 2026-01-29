import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

const noDragCSS = `
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`

const absolutePositionCSS = `
  position: absolute;
  height: auto;
`

const DraggableImage = styled.img`
  ${absolutePositionCSS}
  ${noDragCSS}
  cursor: grab;
`

const Photo = styled(DraggableImage)`
  z-index: 5;
  width: calc(100vw * (375 / 1920));
`

const SelfiePhoto = styled(Photo)`
  width: calc(100vw * (250 / 1920));
  top: calc(100vw * (10 / 1920));
  left: calc(100vw * (1440 / 1920));
  z-index: 8;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (240 / 393));
    top: calc(100vw * (800 / 393));
    left: calc(100vw * (200 / 393));
    z-index: 11;
  }
`

const OpeningPhoto = styled(Photo)`
  width: calc(100vw * (220 / 1920));
  top: calc(100vw * (725 / 1920));
  left: calc(100vw * (775 / 1920));
  z-index: 6;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (220 / 393));
    top: calc(100vw * (350 / 393));
    left: calc(100vw * (170 / 393));
  }
`

const PanelPhoto = styled(Photo)`
  width: calc(100vw * (400 / 1920));
  top: calc(100vw * (750 / 1920));
  left: calc(100vw * (1440 / 1920));
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (280 / 393));
    top: calc(100vw * (605 / 393));
    left: calc(100vw * (150 / 393));
  }
`

const HeartPhoto = styled(Photo)`
  width: calc(100vw * (200 / 1920));
  top: calc(100vw * (400 / 1920));
  left: calc(100vw * (250 / 1920));
  z-index: 8;
`

const WinnersPhoto = styled(Photo)`
  width: calc(100vw * (350 / 1920));
  top: calc(100vw * (20 / 1920));
  left: calc(100vw * (700 / 1920));
  z-index: 8;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (240 / 393));
    top: calc(100vw * (800 / 393));
    left: calc(100vw * (200 / 393));
    z-index: 11;
  }
`

const JudgingPhoto = styled(Photo)`
  width: calc(100vw * (250 / 1920));
  top: calc(100vw * (750 / 1920));
  left: calc(100vw * (1125 / 1920));
  z-index: 10;
`

const AtriumPhoto = styled(Photo)`
  width: calc(100vw * (300 / 1920));
  top: calc(100vw * (0 / 1920));
  left: calc(100vw * (1100 / 1920));
  z-index: 8;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (240 / 393));
    top: calc(100vw * (800 / 393));
    left: calc(100vw * (200 / 393));
    z-index: 11;
  }
`

const SmilePhoto = styled(Photo)`
  width: calc(100vw * (350 / 1920));
  top: calc(100vw * (750 / 1920));
  left: calc(100vw * (300 / 1920));
  z-index: 12;
`

const BoothingPhoto = styled(Photo)`
  width: calc(100vw * (250 / 1920));
  top: calc(100vw * (400 / 1920));
  left: calc(100vw * (1440 / 1920));
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (280 / 393));
    top: calc(100vw * (605 / 393));
    left: calc(100vw * (150 / 393));
  }
`

const VideoComponent = styled.div`
  ${absolutePositionCSS}
  ${noDragCSS}
  width: calc(100vw * (550 / 1920));
  cursor: grab;
  z-index: 2;
  top: calc(100vw * (300 / 1920));
  left: calc(100vw * (500 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (350 / 393));
    top: calc(100vw * (100 / 393));
    left: calc(100vw * (20 / 393));
  }

  .polaroid {
    width: 100%;
    ${absolutePositionCSS}
    ${noDragCSS}
    top: 0;
    left: 0;

    ${p => p.theme.mediaQueries.mobile} {
      width: 100%;
    }
  }

  .video-container {
    ${noDragCSS}
    width: calc(100vw * (420 / 1920));
    height: calc(100vw * (280 / 1920));
    background: #000000;
    position: absolute;
    top: calc(100vw * (47 / 1920));
    left: calc(100vw * (64 / 1920));

    ${p => p.theme.mediaQueries.mobile} {
      width: calc(100vw * (315 / 393));
      height: calc(100vw * (180 / 393));
      top: calc(100vw * (18 / 393));
      left: calc(100vw * (17 / 393));
      padding: calc(100vw * (8 / 393));
    }
  }
`

// Styled Components
const GalleryContainer = styled.div`
  background-color: #c1e8fe;
  width: 100vw;
  aspect-ratio: 1920 / 1142;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1286;
    top: 0;
  }
`

const RecapContainer = styled.div`
  background-color: #c1e8fe;
  width: 100vw;
  aspect-ratio: 1920 / 1054;
  height: auto;
  position: absolute;
  bottom: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/assets/images/gallery/flying_cards.svg') left 100% / auto 80% no-repeat;
    z-index: 0;
    pointer-events: none;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1286;
    top: calc(100vw * (50 / 487));
  }
`

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vw * (399 / 1920));
  top: 0;
  left: 0;
`

const Title = styled.div`
  color: #000000;
  text-align: center;
  font-family: 'Bree Serif';
  font-size: calc(100vw * (65 / 1920));
  font-weight: 300;
  line-height: calc(100vw * (28 / 1920));
  letter-spacing: -0.15px;
  position: absolute;
  top: calc(100vw * (40 / 1920));
  left: calc(100vw * (120 / 1920));
`

const Subtitle = styled.div`
  color: #000000;
  text-align: left;
  font-family: 'Quicksand', sans-serif;
  font-size: calc(100vw * (22 / 1920));
  line-height: calc(100vw * (28 / 1920));

  position: absolute;
  top: calc(100vw * (150 / 1920));
  left: calc(100vw * (120 / 1920));
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  white-space: normal;
  max-width: calc(100vw * (460 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 393));
    top: calc(100vw * (92 / 393));
    left: calc(100vw * (20 / 393));
    gap: calc(100vw * (6 / 393));
    max-width: calc(100vw * (320 / 393));

    &::before {
      width: calc(100vw * (22 / 393));
      height: calc(100vw * (22 / 393));
    }
  }
`

const Tooltip = styled.div`
  color: #000000;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: calc(100vw * (18 / 1920));
  line-height: calc(100vw * (18 / 1920));
  position: absolute;
  top: calc(100vw * (105 / 1920));
  left: calc(100vw * (120 / 1920));

  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (8 / 1920));

  &::before {
    content: '';
    width: calc(100vw * (20 / 1920));
    height: calc(100vw * (20 / 1920));
    background: url('/assets/images/values/pointer.svg') center/contain no-repeat;
    flex: 0 0 auto;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
    top: calc(100vw * (70 / 393));
    left: calc(100vw * (20 / 393));
  }
`

// Component
const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 487) // Using the mobile breakpoint from theme
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <GalleryContainer id="gallery">
      {isMobile ? (
        // Mobile view
        <>
          <RecapContainer>
            {/* <BreadOne src="assets/images/gallery/bread_one.png" />
            <BreadTwo src="assets/images/gallery/bread_two.png" />
            <BreadThree src="assets/images/gallery/bread_three.png" />
            <Croissant src="assets/images/gallery/croissant.png" />
            <PolaroidSelfie src="assets/images/gallery/polaroid_selfie.png" />
            <PolaroidCeremony src="assets/images/gallery/polaroid_ceremony.png" />
            <PolaroidPanel src="assets/images/gallery/polaroid_panel.png" />
            <PolaroidHeart src="assets/images/gallery/polaroid_heart.png" />
            <PolaroidWinners src="assets/images/gallery/polaroid_winners.png" />
            <PolaroidMerch src="assets/images/gallery/polaroid_merch.png" />
            <PolaroidAtrium src="assets/images/gallery/polaroid_atrium.png" />
            <Nugget src="assets/images/gallery/nugget.png" />
            <VideoWrapper>
              <VideoComponent>
                <img className="polaroid" src="assets/images/gallery/video_polaroid.svg" alt="video polaroid" />
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/-N_ds4fcVL4?si=-4UJKRL8_e2l3u-P"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0 }}
                  />
                </div>
              </VideoComponent>
            </VideoWrapper> */}
          </RecapContainer>
        </>
      ) : (
        // Desktop view
        <>
          <RecapContainer>
            <Draggable bounds="parent">
              <SelfiePhoto src="assets/images/gallery/selfie.png" />
            </Draggable>
            <Draggable bounds="parent">
              <OpeningPhoto src="assets/images/gallery/opening.png" />
            </Draggable>
            <Draggable bounds="parent">
              <PanelPhoto src="assets/images/gallery/panel.png" />
            </Draggable>
            <Draggable bounds="parent">
              <HeartPhoto src="assets/images/gallery/heart.png" />
            </Draggable>
            <Draggable bounds="parent">
              <WinnersPhoto src="assets/images/gallery/winners.png" />
            </Draggable>
            <Draggable bounds="parent">
              <JudgingPhoto src="assets/images/gallery/judging.png" />
            </Draggable>
            <Draggable bounds="parent">
              <AtriumPhoto src="assets/images/gallery/atrium.png" />
            </Draggable>
            <Draggable bounds="parent">
              <SmilePhoto src="assets/images/gallery/smile.png" />
            </Draggable>
            <Draggable bounds="parent">
              <BoothingPhoto src="assets/images/gallery/boothing.png" />
            </Draggable>
            <VideoWrapper>
              <Draggable bounds="parent">
                <VideoComponent>
                  <img className="polaroid" src="assets/images/gallery/video_frame.png" alt="video polaroid" />
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/BxPQXbN2VCM?si=ykZ_PHVmU85np54n"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </VideoComponent>
              </Draggable>
            </VideoWrapper>
            <Title>2025 Unfolded</Title>
            <Tooltip>Drag the frames around as you like!</Tooltip>
            <Subtitle>Relive some of our favourite memories from last year!</Subtitle>
          </RecapContainer>
        </>
      )}
    </GalleryContainer>
  )
}

export default Gallery
