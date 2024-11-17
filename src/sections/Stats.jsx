import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useParallax } from 'react-scroll-parallax';

import lightStatsImage from "@assets/images/LightStats.svg";
import unlightStatsImage from "@assets/images/UnlightStats.svg";

const StatsContainer = styled.div`
  min-height: calc(calc(900 / 1280) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const StatsImg = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isHidden ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

// const MobileStatsContainer = styled.img`
//   min-height: calc(calc(439 / 414) * 100vw);
//   width: 100vw;
//   height: auto;
//   position: relative;
//   top: -60px;
//   display: none;
//   ${p => p.theme.mediaQueries.mobile} {
//     display: block;
//   }
// `;

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

const Stats = () => {
  const [isUnlightHidden, setIsUnlightHidden] = useState(false);
  const statsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsUnlightHidden(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current);
    }

    return () => {
      if (statsContainerRef.current) {
        observer.unobserve(statsContainerRef.current);
      }
    };
  }, []);

  const unlight = useParallax({});
  const light = useParallax({});

  return (
    <>
      <StatsContainer ref={statsContainerRef}>
        <HiddenTitle>Last year we had...</HiddenTitle>
        <StatsImg src={unlightStatsImage} ref={unlight.ref} isHidden={isUnlightHidden} />
        <StatsImg src={lightStatsImage} ref={light.ref} isHidden={!isUnlightHidden} />
      </StatsContainer>

      {/* <MobileStatsContainer src={MobileStatsSVG} /> */}
    </>
  );
};

export default Stats;