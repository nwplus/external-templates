import styled from 'styled-components';

import CommyIslandImage from 'public/assets/islands/commy_island.svg'
import EduIslandImage from 'public/assets/islands/edu_island.svg'
import HelthIslandImage from 'public/assets/islands/helth_island.svg'

import CommyCloudImage from 'public/assets/clouds/commy_cloud.svg'
import EduCloudImage from 'public/assets/clouds/edu_cloud.svg'
import HelthCloudImage from 'public/assets/clouds/helth_cloud.svg'

import MouseIconImage from 'public/assets/misc/mouse_icon.svg'
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

const CommunityTrackCloudTitle = styled.p`
  position: absolute;
  left: 7.24vh;
  top: 5.06vh;

  color: #0A323B;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.94vh;
  font-style: normal;
  font-weight: 800;
  line-height: 86.667%;
  letter-spacing: -0.45px;
`

const CommunityTrackCloudDescription = styled.p`
  position: absolute;
  left: 7.73vh;
  top: 8.69vh;
  right: 7.94vh;
  margin-top: 0.2vh;

  color: #0A323B;
  font-family: "HK Grotesk Medium";
  font-size: calc(0.2rem + 1.5vh);
  font-style: normal;
  font-weight: 500;
  line-height: 122.222%;
  letter-spacing: -0.1px;
`

const EducationTrackCloudTitle = styled.p`
  position: absolute;
  left: 6.13vh;
  top: 6.33vh;

  color: #0A323B;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.94vh;
  font-style: normal;
  font-weight: 800;
  line-height: 86.667%;
  letter-spacing: -0.45px;
`

const EducationTrackCloudDescription = styled.p`
  position: absolute;
  left: 6.62vh;
  top: 9.96vh;
  right: 6.47vh;
  margin-top: 0.2vh;

  color: #0A323B;
  font-family: "HK Grotesk Medium";
  font-size: calc(0.2rem + 1.5vh);
  font-style: normal;
  font-weight: 500;
  line-height: 122.222%;
  letter-spacing: -0.1px;
`

const HealthTrackCloudTitle = styled.p`
  position: absolute;
  left: 6.27vh;
  top: 6.27vh;

  color: #0A323B;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.94vh;
  font-style: normal;
  font-weight: 800;
  line-height: 86.667%;
  letter-spacing: -0.45px;
`

const HealthTrackCloudDescription = styled.p`
  position: absolute;
  left: 6.74vh;
  top: 9.9vh;
  right: 5.86vh;
  margin-top: 0.2vh;

  color: #0A323B;
  font-family: "HK Grotesk Medium";
  font-size: calc(0.2rem + 1.5vh);
  font-style: normal;
  font-weight: 500;
  line-height: 122.222%;
  letter-spacing: -0.1px;
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

const CommunityTrackTitle = styled.p`
  position: absolute;
  left: 611.02vh;
  top: 71.76vh;

  color: #F6FEFF;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 4.11vh;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.38px;
`

const EducationTrackTitle = styled.p`
  position: absolute;
  left: 676.51vh;
  top: 71.76vh;

  color: #F6FEFF;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 4.11vh;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.38px;
`

const HealthTrackTitle = styled.p`
  position: absolute;
  left: 735.83vh;
  top: 71.76vh;

  color: #F6FEFF;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 4.11vh;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.38px;
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

const MouseIcon = styled.img`
  position: absolute;
  left: 570.09vh;
  top: 37.05vh;
  width: 2.4vh;
  height: 1.71vh;
`

const Tracks = () => (
    <>
      <Anchor id="tracks" x="560" />
      <SectionTitle>Tracks</SectionTitle>
      <ExplanationLabel>Hover over each island to learn more!</ExplanationLabel>
      <MouseIcon src={MouseIconImage}/>

      {/* Community track */}
      <CommunityTrackIsland>
        <CommunityTrackCloud>
          <CloudImage src={CommyCloudImage}/>
          <CommunityTrackCloudTitle>Connect, Belong, and Thrive!</CommunityTrackCloudTitle>
          <CommunityTrackCloudDescription>Foster connections, promote belonging while prioritizing the safety and inclusion of marginalized groups. Your goal is to craft a space that empowers communities to connect, collaborate, and support each other.</CommunityTrackCloudDescription>
        </CommunityTrackCloud>
        <IslandImage src={CommyIslandImage}/>
      </CommunityTrackIsland>
      <CommunityTrackTitle>Community Building</CommunityTrackTitle>

      {/* Education track */}
      <EducationTrackIsland>
        <EducationTrackCloud>
          <CloudImage src={EduCloudImage}/>
          <EducationTrackCloudTitle>Empower Education for All!</EducationTrackCloudTitle>
          <EducationTrackCloudDescription>Shape the future of education by creating inclusive and accessible learning solutions. Your goal is to minimize barriers to learning and empower learners by enhancing accessibility and inclusivity within the education system.</EducationTrackCloudDescription>
        </EducationTrackCloud>
        <IslandImage src={EduIslandImage}/>
      </EducationTrackIsland>
      <EducationTrackTitle>Education Equity</EducationTrackTitle>

      {/* Health track */}
      <HealthTrackIsland>
        <HealthTrackCloud>
          <CloudImage src={HelthCloudImage}/>
          <HealthTrackCloudTitle>Innovate for Inclusive Healthcare!</HealthTrackCloudTitle>
          <HealthTrackCloudDescription>Leverage technology to address the persistent disparities in healthcare faced by minority groups. Your goal is to develop a solution that challenges biases, cultivates a sense of belonging, and constructs a more inclusive and equitable healthcare system.</HealthTrackCloudDescription>
        </HealthTrackCloud>
        <IslandImage src={HelthIslandImage}/>
      </HealthTrackIsland>
      <HealthTrackTitle>HealthTech for All</HealthTrackTitle>

      <Bridge src={BridgeImage}/>
    </>
);

export default Tracks;