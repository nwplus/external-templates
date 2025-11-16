import React from 'react'
import styled from 'styled-components'

// Styled Components
const GalleryContainer = styled.div`
  width: 100vw;
  aspect-ratio: 1280 / 870;
  position: relative;
  top: calc(100vw * (-600 / 1280));

  ${p => p.theme.mediaQueries.tablet} {
    aspect-ratio: 834 / 893;
    top: calc(100vw * (-300 / 834));
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1086;
    top: calc(100vw * (-450 / 487));
  }
`

const DesktopImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;

  ${p => p.theme.mediaQueries.tablet} {
    display: none;
  }
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const TabletImage = styled.img`
  display: none;
  ${p => p.theme.mediaQueries.tablet} {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
  }
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileImage = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
  }
`

const VideoContainer = styled.div`
  width: calc(100vw * (460 / 1280));
  height: calc(100vw * (293 / 1280));
  border: calc(100vw * (10 / 1280)) solid #151515;
  padding: calc(100vw * (12 / 1280));
  display: block;
  margin: 0 auto;
  background: #151515;
  position: relative;
  top: calc(100vw * (310 / 1280));
  overflow: visible;
  z-index: 2;

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
`

const VideoFooter = styled.div`
  position: absolute;
  bottom: calc(100vw * (-11 / 1280));
  right: calc(100vw * (5 / 1280));
  z-index: 2;
  float: right;
  gap: calc(100vw * (10 / 1280));

  ${p => p.theme.mediaQueries.tablet} {
    bottom: calc(100vw * (-12 / 893));
    right: calc(100vw * (2 / 893));
  }

  ${p => p.theme.mediaQueries.mobile} {
    bottom: calc(100vw * (-12 / 487));
    right: calc(100vw * (5 / 487));
  }
`

const Dot = styled.div`
  width: calc(100vw * (4 / 1280));
  height: calc(100vw * (4 / 1280));
  background: ${props => (props.red ? '#F20F0F' : '#737373')};
  border-radius: 50%;
  display: inline-block;
  margin-left: calc(100vw * (5 / 1280));

  ${p => p.theme.mediaQueries.tablet} {
    width: calc(100vw * (4 / 893));
    height: calc(100vw * (4 / 893));
  } 

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (4 / 487));
    height: calc(100vw * (4 / 487));
    margin-left: calc(100vw * (5 / 487));
  }
`

// Component
const Gallery = () => (
  <GalleryContainer>
    {/* Images for different screen sizes */}
    <DesktopImage src="/assets/images/desktopGallery.png" alt="Desktop Gallery" />
    <TabletImage src="/assets/images/tabletGallery.png" alt="Tablet Gallery" />
    <MobileImage src="/assets/images/mobileGallery.png" alt="Mobile Gallery" />

    {/* Video Container */}
    <VideoContainer>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/TtYBTPVJCwo?si=37fxyriIzo2NfKqj"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <VideoFooter>
        <Dot />
        <Dot />
        <Dot red />
      </VideoFooter>
    </VideoContainer>
  </GalleryContainer>
)

export default Gallery
