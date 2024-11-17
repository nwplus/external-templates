import React from 'react';
import styled from 'styled-components';

// Import gallery images
import desktopGalleryImage from '@assets/images/desktopGallery.svg';
import tabletGalleryImage from '@assets/images/tabletGallery.png';
import mobileGalleryImage from '@assets/images/mobileGallery.png';

// Styled Components
const GalleryContainer = styled.div`
  min-height: calc((900 / 1280) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;
`;

const DesktopImage = styled.img`
  width: 100vw;
  height: auto;
  position: absolute;
  top: -290px;
  display: block; /* Default is visible */

  ${p => p.theme.mediaQueries.tablet} {
    display: none; /* Hide on tablet */
  }
  ${p => p.theme.mediaQueries.mobile} {
    display: none; /* Hide on mobile */
  }
`;

const TabletImage = styled.img`
  width: 100vw;
  height: auto;
  position: absolute;
  top: -290px;
  display: none; /* Default hidden */

  ${p => p.theme.mediaQueries.tablet} {
    display: block; /* Show on tablet */
  }
  ${p => p.theme.mediaQueries.desktop} {
    display: none; /* Hide on desktop */
  }
  ${p => p.theme.mediaQueries.mobile} {
    display: none; /* Hide on mobile */
  }
`;

const MobileImage = styled.img`
  width: 100vw;
  height: auto;
  position: absolute;
  top: -290px;
  display: none; /* Default hidden */

  ${p => p.theme.mediaQueries.mobile} {
    display: block; /* Show on mobile */
  }
  ${p => p.theme.mediaQueries.tablet} {
    display: none; /* Hide on tablet */
  }
  ${p => p.theme.mediaQueries.desktop} {
    display: none; /* Hide on desktop */
  }
`;

const VideoContainer = styled.div`
  width: 580px;
  height: 335px;
  border: 10px solid #151515;
  display: block;
  margin: 0 auto;
  background: #151515;
  position: relative;
  top: 20vh;
`;

const VideoFooter = styled.div`
  position: relative;
  top: -14px;
  z-index: 1;
  float: right;
  gap: 10px;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: ${props => (props.red ? '#F20F0F' : '#737373')};
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
`;

// Component
const Gallery = () => (
    <GalleryContainer>
      {/* Images for different screen sizes */}
      <DesktopImage src={desktopGalleryImage} alt="Desktop Gallery" />
      <TabletImage src={tabletGalleryImage} alt="Tablet Gallery" />
      <MobileImage src={mobileGalleryImage} alt="Mobile Gallery" />

      {/* Video Container */}
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C_1ygFqM_oo?si=4HRmb4xcuXGdeZkp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
         />
        <VideoFooter>
          <Dot />
          <Dot />
          <Dot red />
        </VideoFooter>
      </VideoContainer>
    </GalleryContainer>
  );

export default Gallery;
