import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useParallax } from 'react-scroll-parallax';

const GalleryContainer = styled.div`
  min-height: calc(calc(900 / 1280) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const Title = styled.p`
  font-family: 'LT Museum';
  color: black;
  font-size: calc(100vw * (50 / 1280));
  font-weight: 700;
  position: relative;
  top: 120px;
  left: 10%;
  z-index: 1;
`;

const VideoContainer = styled.div`
  width: 580px;
  height: 335px;
  border: 10px solid #151515;
  display: block;
  margin: 0 auto;
  background: #151515;
`
const VideoFooter = styled.div`
  position: relative;
  top: -14px;
  z-index: 1;
  float: right;
  gap:10px;
`
const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: ${props => (props.red ? "#F20F0F" : "#737373")};
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
`

const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <Title>Gallery</Title>

        <VideoContainer>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/C_1ygFqM_oo?si=4HRmb4xcuXGdeZkp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <VideoFooter>
            <Dot></Dot>
            <Dot></Dot>
            <Dot red={true}></Dot>
          </VideoFooter>
        </VideoContainer>
      </GalleryContainer>

      {/* <MobileGalleryContainer src={MobileGallerySVG} /> */}
    </>
  );
};

export default Gallery;