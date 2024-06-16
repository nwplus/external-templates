import styled from 'styled-components';

import CommyIslandImage from 'public/assets/islands/commy_island.svg'
import EduIslandImage from 'public/assets/islands/edu_island.svg'
import HelthIslandImage from 'public/assets/islands/helth_island.svg'

import CommyCloudImage from 'public/assets/clouds/commy_cloud.svg'
import EduCloudImage from 'public/assets/clouds/edu_cloud.svg'
import HelthCloudImage from 'public/assets/clouds/helth_cloud.svg'

import BridgeImage from 'public/assets/misc/bridge.svg'

import Anchor from '@components/Anchor';

const IslandImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Bridge = styled.img`
  position: absolute;
  left: 714.41vh;
  top: 60.49vh;
  width: 20.98vh;
  height: 4.5vh;
  z-index: 1001;
`

const CommunityTrackCloud = styled.div`
  position: absolute;
  left: 5vh;
  top: -21vh;
  width: 54.54vh;
  aspect-ratio: 2;
  z-index: -1;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

const CommunityTrackIsland = styled.div`
  position: absolute;
  left: 598.43vh;
  top: 41.66vh;
  width: 63.83vh;
  height: 29.17vh;
  z-index: 1000;

  &:hover ${CommunityTrackCloud} {
    opacity: 1;
    visibility: visible;
  }
`

const EducationTrackCloud = styled.div`
  position: absolute;
  left: 0vh;
  top: -24vh;
  width: 53.03vh;
  aspect-ratio: 1.93;
  z-index: -1;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

const EducationTrackIsland = styled.div`
  position: absolute;
  left: 667.35vh;
  top: 37.84vh;
  width: 53.76vh;
  height: 32.41vh;
  z-index: 1000;

  &:hover ${EducationTrackCloud} {
    opacity: 1;
    visibility: visible;
  }
`

const HealthTrackCloud = styled.div`
  position: absolute;
  left: 0vh;
  top: -20vh;
  width: 55.56vh;
  aspect-ratio: 2.03;
  z-index: -1;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

const HealthTrackIsland = styled.div`
  position: absolute;
  left: 726.76vh;
  top: 38.03vh;
  width: 48.93vh;
  height: 32.92vh;
  z-index: 1000;

  &:hover ${HealthTrackCloud} {
    opacity: 1;
    visibility: visible;
  }
`

const CloudImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const SectionTitle = styled.h2`
  position: absolute;
  left: 571.56vh;
  top: 28.52vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 5.88vh;
  font-style: normal;
  font-weight: 400;
  line-height: 93.33%;
  letter-spacing: 0.4px;
`

const ExplanationLabel = styled.p`
  position: absolute;
  left: 573.34vh;
  top: 34.6vh;
  width: 22.64vh;
  height: 5.49vh;

  color: #185A62;
  font-feature-settings: 'liga' off;
  font-size: 2.35vh;
  font-style: normal;
  font-weight: 700;
  line-height: 108.3%;
  letter-spacing: -0.45px;
`

const Tracks = () => (
    <>
      <Anchor id="tracks" x="560" />
      <SectionTitle />
      <ExplanationLabel />
      {/* <MouseIcon src={MouseIconImage}/> */}

      {/* Community track */}
      <CommunityTrackIsland>
        <CommunityTrackCloud>
          <CloudImage src={CommyCloudImage}/>
        </CommunityTrackCloud>
        <IslandImage src={CommyIslandImage}/>
      </CommunityTrackIsland>

      {/* Education track */}
      <EducationTrackIsland>
        <EducationTrackCloud>
          <CloudImage src={EduCloudImage}/>
        </EducationTrackCloud>
        <IslandImage src={EduIslandImage}/>
      </EducationTrackIsland>

      {/* Health track */}
      <HealthTrackIsland>
        <HealthTrackCloud>
          <CloudImage src={HelthCloudImage}/>
        </HealthTrackCloud>
        <IslandImage src={HelthIslandImage}/>
      </HealthTrackIsland>

      <Bridge src={BridgeImage}/>
    </>
);

export default Tracks;