import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable';

// Styled Components
const GalleryContainer = styled.div`
  background-color: #FEF9F3;
  width: 100vw;
  aspect-ratio: 1920 / 1142;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.tablet} {
    aspect-ratio: 834 / 893;
    top: calc(100vw * (-300 / 834));
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1086;
    top: calc(100vw * (-450 / 487));
  }
`

const InfiniteScrollWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

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
  top: calc(100vw * (5 / 1142));
  
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

  ${p => p.theme.mediaQueries.tablet} {
    aspect-ratio: 834 / 893;
    top: calc(100vw * (-300 / 834));
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1086;
    top: calc(100vw * (-450 / 487));
  }
`

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vw * (400 / 1920));
  top: 0;
  left: 0;
`

const VideoComponent = styled.div`
  position: relative;
  width: calc(100vw * (830 / 1920));
  height: auto;
  cursor: grab;
  z-index: 2;
  position: absolute;
  top: calc(100vw * (100 / 1920));
  left: calc(100vw * (180 / 1920));

  .polaroid {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }

  .video-container {
    width: calc(100vw * (760 / 1920));
    height: calc(100vw * (446 / 1920));
    padding: calc(100vw * (12 / 1920));
    transform: rotate(-2.303deg);
    background: #151515;
    position: absolute;
    top: calc(100vw * (40 / 1920));
    left: calc(100vw * (35 / 1920));
    overflow: visible;

    ${p => p.theme.mediaQueries.tablet} {
      top: calc(100vw * (350 / 893));
      width: calc(100vw * (446 / 893));
      height: calc(100vw * (296 / 893));
      border: calc(100vw * (10 / 893)) solid #151515;
    }

    ${p => p.theme.mediaQueries.mobile} {
      top: calc(100vw * (500 / 487));
      width: calc(100vw * (446 / 487));
      height: calc(100vw * (296 / 487));
      border: calc(100vw * (10 / 487)) solid #151515;
    }
  }
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

const BreadOne = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (155 / 1920));
  top: calc(100vw * (60 / 1920));
  left: calc(100vw * (505 / 1920)); 
  z-index: 4;
  cursor: grab;
`

const BreadTwo = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (100 / 1920));
  top: calc(100vw * (600 / 1920));
  left: calc(100vw * (925 / 1920)); 
  z-index: 13;
  cursor: grab;
`

const BreadThree = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (105 / 1920));
  top: calc(100vw * (200 / 1920));
  left: calc(100vw * (1130 / 1920)); 
  z-index: 15;
  cursor: grab;
`

const Croissant = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (280 / 1920));
  top: calc(100vw * (470 / 1920));
  left: calc(100vw * (1330 / 1920));
  z-index: 12;
  cursor: grab;
`

const PolaroidSelfie = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (375 / 1920));
  top: calc(100vw * (450 / 1920));
  left: calc(100vw * (80 / 1920)); 
  z-index: 5;
  cursor: grab;
`

const PolaroidCeremony = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (375 / 1920));
  top: calc(100vw * (580 / 1920));
  left: calc(100vw * (720 / 1920)); 
  z-index: 6;
  cursor: grab;
`

const PolaroidPanel = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (400 / 1920));
  top: calc(100vw * (200 / 1920));
  left: calc(100vw * (930 / 1920)); 
  z-index: 14;
  cursor: grab;
`

const PolaroidHeart = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (320 / 1920));
  top: calc(100vw * (500 / 1920));
  left: calc(100vw * (1040 / 1920)); 
  z-index: 7;
  cursor: grab;
`

const PolaroidWinners = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (360 / 1920));
  top: calc(100vw * (50 / 1920));
  left: calc(100vw * (1240 / 1920)); 
  z-index: 8;
  cursor: grab;
`

const PolaroidMerch = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (350 / 1920));
  top: calc(100vw * (320 / 1920));
  left: calc(100vw * (1450 / 1920)); 
  z-index: 9;
  cursor: grab;
`

const PolaroidAtrium = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (400 / 1920));
  top: calc(100vw * (600 / 1920));
  left: calc(100vw * (1280 / 1920)); 
  z-index: 10;
  cursor: grab;
`

const Nugget = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (300 / 1920));
  top: calc(100vw * (720 / 1920));
  left: calc(100vw * (1600 / 1920));
  z-index: 11;
  cursor: grab;
`

// Component
const Gallery = () => (
  <GalleryContainer>
    <InfiniteScrollWrapper>
      <InfiniteScrollText>
        2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded
        2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded
        2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded
        2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded 2024 Unfolded
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
  </GalleryContainer>
)

export default Gallery
