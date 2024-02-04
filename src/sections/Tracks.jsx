import styled from 'styled-components';

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

const Tracks = () => (
    <>
      <SectionTitle>Tracks</SectionTitle>
      <ExplanationLabel>Hover over each island to learn more!</ExplanationLabel>
      <CommunityTrackTitle>Community Building</CommunityTrackTitle>
      <EducationTrackTitle>Education Equity</EducationTrackTitle>
      <HealthTrackTitle>HealthTech for All</HealthTrackTitle>
    </>
);

export default Tracks;