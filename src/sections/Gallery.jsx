import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable';

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

const PolaroidBase = styled(DraggableImage)`
  z-index: 5;
  width: calc(100vw * (375 / 1920));
`

const BreadBase = styled(DraggableImage)`
  width: calc(100vw * (155 / 1920));
  z-index: 15;
`

const BreadOne = styled(BreadBase)`
  top: calc(100vw * (60 / 1920));
  left: calc(100vw * (505 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (80 / 393));    
    top: calc(100vw * (200 / 1286));     
    left: calc(100vw * (135 / 393));      
  }
`

const BreadTwo = styled(BreadBase)`
  width: calc(100vw * (100 / 1920));
  top: calc(100vw * (600 / 1920));
  left: calc(100vw * (925 / 1920));
  z-index: 15;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (80 / 393));
    top: calc(100vw * (580 / 393));
    left: calc(100vw * (290 / 393));
  }
`

const BreadThree = styled(BreadBase)`
  width: calc(100vw * (105 / 1920));
  top: calc(100vw * (200 / 1920));
  left: calc(100vw * (1130 / 1920));
  z-index: 15;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (65 / 393));
    top: calc(100vw * (560 / 393));
    left: calc(100vw * (60 / 393));
  }
`

const Croissant = styled(DraggableImage)`
  width: calc(100vw * (280 / 1920));
  top: calc(100vw * (470 / 1920));
  left: calc(100vw * (1330 / 1920));
  z-index: 15;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (130 / 393));
    top: calc(100vw * (795 / 393));
    left: calc(100vw * (80 / 393));
    z-index: 15;
  }
`

const PolaroidSelfie = styled(PolaroidBase)`
  top: calc(100vw * (450 / 1920));
  left: calc(100vw * (80 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (240 / 393));   
    top: calc(100vw * (980 / 1286));     
    left: calc(100vw * (0 / 393));     
  }
`

const PolaroidCeremony = styled(PolaroidBase)`
  top: calc(100vw * (580 / 1920));
  left: calc(100vw * (720 / 1920));
  z-index: 6;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (220 / 393));
    top: calc(100vw * (350 / 393));  
    left: calc(100vw * (170 / 393));   
  }
`

const PolaroidPanel = styled(PolaroidBase)`
  width: calc(100vw * (400 / 1920));
  top: calc(100vw * (200 / 1920));
  left: calc(100vw * (930 / 1920));
  z-index: 14;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (270 / 393));
    top: calc(100vw * (830 / 393));
    left: calc(100vw * (-20 / 393));
  }
`

const PolaroidHeart = styled(PolaroidBase)`
  width: calc(100vw * (320 / 1920));
  top: calc(100vw * (500 / 1920));
  left: calc(100vw * (1040 / 1920));
  z-index: 7;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (215 / 393));
    top: calc(100vw * (570 / 393));
    left: calc(100vw * (-28 / 393));
  }
`

const PolaroidWinners = styled(PolaroidBase)`
  width: calc(100vw * (360 / 1920));
  top: calc(100vw * (50 / 1920));
  left: calc(100vw * (1240 / 1920));
  z-index: 8;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (240 / 393));
    top: calc(100vw * (800 / 393));
    left: calc(100vw * (200 / 393));
    z-index: 11;
  }
`

const PolaroidMerch = styled(PolaroidBase)`
  width: calc(100vw * (350 / 1920));
  top: calc(100vw * (320 / 1920));
  left: calc(100vw * (1450 / 1920));
  z-index: 9;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (220 / 393));
    top: calc(100vw * (985 / 393));
    left: calc(100vw * (-5 / 393));
    z-index: 14;
    rotate: -28deg;
  }
`

const PolaroidAtrium = styled(PolaroidBase)`
  width: calc(100vw * (400 / 1920));
  top: calc(100vw * (600 / 1920));
  left: calc(100vw * (1280 / 1920));
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (280 / 393));
    top: calc(100vw * (605 / 393));
    left: calc(100vw * (150 / 393));
  }
`

const Nugget = styled(DraggableImage)`
  width: calc(100vw * (300 / 1920));
  top: calc(100vw * (720 / 1920));
  left: calc(100vw * (1600 / 1920));
  z-index: 15;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (180 / 393));
    top: calc(100vw * (1050 / 393));
    left: calc(100vw * (210 / 393));
  }
`

const VideoComponent = styled.div`
  ${absolutePositionCSS}
  ${noDragCSS}
  width: calc(100vw * (830 / 1920));
  cursor: grab;
  z-index: 2;
  top: calc(100vw * (100 / 1920));
  left: calc(100vw * (180 / 1920));

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
    width: calc(100vw * (760 / 1920));
    height: calc(100vw * (446 / 1920));
    padding: calc(100vw * (12 / 1920));
    transform: rotate(-2.303deg);
    background: #151515;
    position: absolute;
    top: calc(100vw * (40 / 1920));
    left: calc(100vw * (35 / 1920));
    overflow: visible;

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
  background-color: #FEF9F3;
  width: 100vw;
  aspect-ratio: 1920 / 1142;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1286;
    top: 0;
  }
`

const InfiniteScrollWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  z-index: 20;
  background-color: #FEF9F3;
  padding: calc(100vw * (5 / 1920)) 0;

  ${p => p.theme.mediaQueries.mobile} {
    padding: calc(100vw * (8 / 393)) 0;
  }
`

const InfiniteScrollText = styled.div`
  display: inline-block;
  gap: 2rem;
  color: #98BCEC;
  font-family: Gloock;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  animation: scrollText 70s linear infinite;
  position: relative;
  top: 0;
  
  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (0 / 393));
  }

  @keyframes scrollText {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`

const RecapContainer = styled.div`
  background-color: #B8D2F3;
  width: 100vw;
  aspect-ratio: 1920 / 1054;
  height: auto;
  position: absolute;
  bottom: 0;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1286;
    top: calc(100vw * (50 / 487));
  }
`

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vw * (400 / 1920));
  top: 0;
  left: 0;
`

const TooltipText = styled.div`
  color: #FFF;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.15px;
  position: absolute;
  top: calc(100vw * (1000 / 1920));
  left: calc(100vw * (130 / 1920));
`

const TooltipImg = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (40 / 1920));
  top: calc(100vw * (983 / 1920));
  left: calc(100vw * (65 / 1920)); 
`

// Component
const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 487); // Using the mobile breakpoint from theme
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <GalleryContainer id="gallery">
      {isMobile ? (
        // Mobile view
        <>
          <InfiniteScrollWrapper>
            <InfiniteScrollText>
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
            </InfiniteScrollText>
          </InfiniteScrollWrapper>
          <RecapContainer>
            <BreadOne src="assets/images/gallery/bread_one.svg" />
            <BreadTwo src="assets/images/gallery/bread_two.svg" />
            <BreadThree src="assets/images/gallery/bread_three.svg" />
            <Croissant src="assets/images/gallery/croissant.svg" />
            <PolaroidSelfie src="assets/images/gallery/polaroid_selfie.png" />
            <PolaroidCeremony src="assets/images/gallery/polaroid_ceremony.png" />
            <PolaroidPanel src="assets/images/gallery/polaroid_panel.png" />
            <PolaroidHeart src="assets/images/gallery/polaroid_heart.png" />
            <PolaroidWinners src="assets/images/gallery/polaroid_winners.png" />
            <PolaroidMerch src="assets/images/gallery/polaroid_merch.png" />
            <PolaroidAtrium src="assets/images/gallery/polaroid_atrium.png" />
            <Nugget src="assets/images/gallery/nugget.svg" />
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
                    style={{ position: 'absolute', top: 0, left: 0 }} />
                </div>
              </VideoComponent>
            </VideoWrapper>
          </RecapContainer>
        </>
      ) : (
        // Desktop view
        <>
          <InfiniteScrollWrapper>
            <InfiniteScrollText>
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
              2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap 2024 Recap
            </InfiniteScrollText>
          </InfiniteScrollWrapper>
          <RecapContainer>
            <Draggable bounds="parent">
              <BreadOne src="assets/images/gallery/bread_one.svg" />
            </Draggable>
            <Draggable bounds="parent">
              <BreadTwo src="assets/images/gallery/bread_two.svg" />
            </Draggable>
            <Draggable bounds="parent">
              <BreadThree src="assets/images/gallery/bread_three.svg" />
            </Draggable>
            <Draggable bounds="parent">
              <Croissant src="assets/images/gallery/croissant.svg" />
            </Draggable>
            <Draggable bounds="parent">
              <PolaroidSelfie src="assets/images/gallery/polaroid_selfie.png" />
            </Draggable>
            <Draggable bounds="parent">
              <PolaroidCeremony src="assets/images/gallery/polaroid_ceremony.png" />
            </Draggable>
            <Draggable bounds="parent">
              <PolaroidPanel src="assets/images/gallery/polaroid_panel.png" />
            </Draggable>
            <Draggable bounds="parent">
              <PolaroidHeart src="assets/images/gallery/polaroid_heart.png" />
            </Draggable>
            <Draggable bounds="parent">
              <PolaroidWinners src="assets/images/gallery/polaroid_winners.png" />
            </Draggable>
            <Draggable bounds="parent">
              <PolaroidMerch src="assets/images/gallery/polaroid_merch.png" />
            </Draggable>
            <Draggable bounds="parent">
              <PolaroidAtrium src="assets/images/gallery/polaroid_atrium.png" />
            </Draggable>
            <Draggable bounds="parent">
              <Nugget src="assets/images/gallery/nugget.svg" />
            </Draggable>
            <VideoWrapper>
              <Draggable bounds="parent">
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
                      style={{ position: 'absolute', top: 0, left: 0 }} />
                  </div>
                </VideoComponent>
              </Draggable>
            </VideoWrapper>
            <TooltipImg src="assets/images/gallery/tooltip.svg" />
            <TooltipText>Drag the polaroids and magnets as you like.</TooltipText>
          </RecapContainer>
        </>
      )}
    </GalleryContainer>
  );
};

export default Gallery