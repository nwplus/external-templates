import React, { useState, useEffect, useRef, useCallback } from 'react'
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
    width: calc(100vw * (180 / 393));
    top: calc(100vw * (1100 / 393));
    left: calc(100vw * (10 / 393));
    z-index: 11;
  }
`

const OpeningPhoto = styled(Photo)`
  width: calc(100vw * (220 / 1920));
  top: calc(100vw * (725 / 1920));
  left: calc(100vw * (775 / 1920));
  z-index: 6;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (160 / 393));
    top: calc(100vw * (1400 / 393));
    left: calc(100vw * (10 / 393));
  }
`

const PanelPhoto = styled(Photo)`
  width: calc(100vw * (400 / 1920));
  top: calc(100vw * (750 / 1920));
  left: calc(100vw * (1350 / 1920));
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (280 / 393));
    top: calc(100vw * (1600 / 393));
    left: calc(100vw * (0 / 393));
  }
`

const HeartPhoto = styled(Photo)`
  width: calc(100vw * (200 / 1920));
  top: calc(100vw * (400 / 1920));
  left: calc(100vw * (250 / 1920));
  z-index: 8;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (160 / 393));
    top: calc(100vw * (650 / 393));
    left: calc(100vw * (220 / 393));
  }
`

const WinnersPhoto = styled(Photo)`
  width: calc(100vw * (350 / 1920));
  top: calc(100vw * (20 / 1920));
  left: calc(100vw * (700 / 1920));
  z-index: 8;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (260 / 393));
    top: calc(100vw * (450 / 393));
    left: calc(100vw * (200 / 393));
    z-index: 11;
  }
`

const JudgingPhoto = styled(Photo)`
  width: calc(100vw * (250 / 1920));
  top: calc(100vw * (780 / 1920));
  left: calc(100vw * (1050 / 1920));
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (180 / 393));
    top: calc(100vw * (1375 / 393));
    left: calc(100vw * (190 / 393));
  }
`

const AtriumPhoto = styled(Photo)`
  width: calc(100vw * (250 / 1920));
  top: calc(100vw * (0 / 1920));
  left: calc(100vw * (1125 / 1920));
  z-index: 8;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (160 / 393));
    top: calc(100vw * (450 / 393));
    left: calc(100vw * (20 / 393));
    z-index: 11;
  }
`

const SmilePhoto = styled(Photo)`
  width: calc(100vw * (350 / 1920));
  top: calc(100vw * (750 / 1920));
  left: calc(100vw * (300 / 1920));
  z-index: 12;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (220 / 393));
    top: calc(100vw * (1200 / 393));
    left: calc(100vw * (200 / 393));
  }
`

const BoothingPhoto = styled(Photo)`
  width: calc(100vw * (250 / 1920));
  top: calc(100vw * (400 / 1920));
  left: calc(100vw * (1440 / 1920));
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (170 / 393));
    top: calc(100vw * (925 / 393));
    left: calc(100vw * (220 / 393));
  }
`

const CatPhotoContainer = styled.div`
  ${absolutePositionCSS}
  ${noDragCSS}
  width: calc(100vw * (250 / 1920));
  top: calc(100vw * (510 / 1920));
  left: calc(100vw * (1125 / 1920));
  z-index: 7;
  cursor: grab;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (200 / 393));
    top: calc(100vw * (850 / 393));
    left: calc(100vw * (10 / 393));
  }
`

const CatBaseImg = styled.img`
  width: 100%;
  display: block;
  ${noDragCSS}
`

const CatIris = styled.div`
  position: absolute;
  background-color: black;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
`

// SVG dimensions from viewBox
const CAT_SVG_WIDTH = 191

// Eye definitions in SVG coordinates (from the SVG file)
const CAT_LEFT_EYE = {
  cx: 85.85,
  cy: 89.91,
  rx: 8.34,
  ry: 8.34,
  rotation: (6.86441 * Math.PI) / 180,
}

const CAT_RIGHT_EYE = {
  cx: 111.12,
  cy: 84.95,
  rx: 8.78,
  ry: 8.34,
  rotation: (6.86441 * Math.PI) / 180,
}

const CAT_IRIS_RADIUS_SVG = 4.5

function calculateCatIrisPosition(mouseX, mouseY, eye, irisRadius) {
  const { cx, cy, rx, ry, rotation } = eye

  const dx = mouseX - cx
  const dy = mouseY - cy

  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < 0.001) {
    return { x: cx, y: cy }
  }

  const cosNeg = Math.cos(-rotation)
  const sinNeg = Math.sin(-rotation)
  const localX = dx * cosNeg - dy * sinNeg
  const localY = dx * sinNeg + dy * cosNeg

  const constraintRx = Math.max(rx - irisRadius, 0.1)
  const constraintRy = Math.max(ry - irisRadius, 0.1)

  const localDist = Math.sqrt(localX * localX + localY * localY)
  const ux = localX / localDist
  const uy = localY / localDist

  const t = 1 / Math.sqrt((ux * ux) / (constraintRx * constraintRx) + (uy * uy) / (constraintRy * constraintRy))

  let irisLocalX
  let irisLocalY
  if (localDist <= t) {
    irisLocalX = localX
    irisLocalY = localY
  } else {
    irisLocalX = ux * t
    irisLocalY = uy * t
  }

  const cosPos = Math.cos(rotation)
  const sinPos = Math.sin(rotation)
  const globalX = irisLocalX * cosPos - irisLocalY * sinPos + cx
  const globalY = irisLocalX * sinPos + irisLocalY * cosPos + cy

  return { x: globalX, y: globalY }
}

const CatPhoto = () => {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [irisPositions, setIrisPositions] = useState({
    left: { x: CAT_LEFT_EYE.cx - 3, y: CAT_LEFT_EYE.cy + 1 },
    right: { x: CAT_RIGHT_EYE.cx - 3, y: CAT_RIGHT_EYE.cy + 1 },
  })

  const updateScale = useCallback(() => {
    if (!containerRef.current) return
    const imgElement = containerRef.current.querySelector('img')
    if (!imgElement) return
    setScale(imgElement.getBoundingClientRect().width / CAT_SVG_WIDTH)
  }, [])

  useEffect(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [updateScale])

  useEffect(() => {
    const handleMouseMove = e => {
      if (!containerRef.current) return
      const imgElement = containerRef.current.querySelector('img')
      if (!imgElement) return

      const imgRect = imgElement.getBoundingClientRect()
      const currentScale = imgRect.width / CAT_SVG_WIDTH

      const mouseXSvg = (e.clientX - imgRect.left) / currentScale
      const mouseYSvg = (e.clientY - imgRect.top) / currentScale

      const leftIris = calculateCatIrisPosition(mouseXSvg, mouseYSvg, CAT_LEFT_EYE, CAT_IRIS_RADIUS_SVG)
      const rightIris = calculateCatIrisPosition(mouseXSvg, mouseYSvg, CAT_RIGHT_EYE, CAT_IRIS_RADIUS_SVG)

      setIrisPositions({ left: leftIris, right: rightIris })
      setScale(currentScale)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const irisSize = CAT_IRIS_RADIUS_SVG * 2 * scale

  return (
    <CatPhotoContainer ref={containerRef}>
      <CatBaseImg src="/assets/images/gallery/cat_desktop.svg" alt="Cat" />
      <CatIris
        style={{
          left: irisPositions.left.x * scale,
          top: irisPositions.left.y * scale,
          width: irisSize,
          height: irisSize,
        }}
      />
      <CatIris
        style={{
          left: irisPositions.right.x * scale,
          top: irisPositions.right.y * scale,
          width: irisSize,
          height: irisSize,
        }}
      />
    </CatPhotoContainer>
  )
}

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
    top: calc(100vw * (160 / 393));
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
    position: absolute;
    top: calc(100vw * (47 / 1920));
    left: calc(100vw * (64 / 1920));

    ${p => p.theme.mediaQueries.mobile} {
      width: calc(100vw * (280 / 393));
      height: calc(100vw * (192 / 393));
      top: calc(100vw * (23 / 393));
      left: calc(100vw * (34 / 393));
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
    aspect-ratio: 393 / 1750;
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
    aspect-ratio: 393 / 1750;
    top: calc(100vw * (50 / 487));
  }

  &::before {
    content: none;
  }
`

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vw * (700 / 1920));
  top: 0;
  left: 0;

  ${p => p.theme.mediaQueries.mobile} {
    height: 90%;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (38 / 393));
    top: calc(100vw * (20 / 393));
    left: calc(100vw * (90 / 393));
  }
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
    font-size: calc(100vw * (15 / 393));
    line-height: calc(100vw * (18 / 393));
    top: calc(100vw * (92 / 393));
    left: calc(100vw * (65 / 393));
    max-width: calc(100vw * (280 / 393));
    text-align: center;
    justify-content: center;
    align-items: center;
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
    font-size: calc(100vw * (15 / 393));
    top: calc(100vw * (60 / 393));
    left: calc(100vw * (75 / 393));

    &::before {
      width: calc(100vw * (15 / 393));
      height: calc(100vw * (15 / 393));
    }
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
            <Draggable bounds="parent">
              <CatPhoto />
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
            <Draggable bounds="parent">
              <CatPhoto />
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
