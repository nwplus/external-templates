import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParallax } from 'react-scroll-parallax';

import lightStatsImage from "@assets/images/LightStats.svg";
import unlightStatsImage from "@assets/images/UnlightStats.svg";
import tabletStatsImage from "@assets/images/tabletStats.png";
import mobileStatsImage from "@assets/images/mobileStats.png";

// Styled components
const StatsContainer = styled.div`
  min-height: calc(calc(900 / 1280) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const MobileTabletStatsContainer = styled.div`
  display: none;
  width: 100%;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.mobile}, ${p => p.theme.mediaQueries.tabletLarge} {
    display: block;
  }
`;

const StatsImg = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isHidden ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const MobileTabletImg = styled.img`
  width: 100%;
  height: auto;
`;

const HiddenTitle = styled.p`
  font-family: 'LT Museum';
  color: white;
  font-size: calc(100vw * (50 / 1280));
  font-weight: 700;
  position: absolute;
  top: 120px;
  left: 10%;
  z-index: 1;
  opacity: 0;
`;

// Stats component
const Stats = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const statsContainerRef = useRef(null);

  useEffect(() => {
    const updateDeviceType = () => {
      // Update state based on window width
      setIsMobileOrTablet(window.innerWidth <= 768);
    };

    updateDeviceType(); // Initial check
    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  const unlight = useParallax({});
  const light = useParallax({});

  return (
    <StatsContainer id="stats">
      {!isMobileOrTablet && (
        <StatsContainer ref={statsContainerRef}>
          <HiddenTitle>Last year we had...</HiddenTitle>
          <StatsImg src={unlightStatsImage} ref={unlight.ref} isHidden={false} />
          <StatsImg src={lightStatsImage} ref={light.ref} isHidden />
        </StatsContainer>
      )}

      {isMobileOrTablet && (
        <MobileTabletStatsContainer>
          <MobileTabletImg
            src={isMobileOrTablet ? mobileStatsImage : tabletStatsImage}
            alt="Mobile or Tablet Stats"
          />
        </MobileTabletStatsContainer>
      )}
    </StatsContainer>
  );
};

export default Stats;
