import styled from 'styled-components';

const SectionTitle = styled.h2`
  position: absolute;
  left: 570vh;
  top: 20vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 93.333% */
  letter-spacing: 0.4px;
`

const CommunityTrackTitle = styled.h3`
  position: absolute;
  left: 610vh;
  top: 70vh;

  color: #F6FEFF;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 58.8px */
  letter-spacing: 0.38px;
`

const EducationTrackTitle = styled.h3`
  position: absolute;
  left: 676vh;
  top: 70vh;

  color: #F6FEFF;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 58.8px */
  letter-spacing: 0.38px;
`

const HealthTrackTitle = styled.h3`
  position: absolute;
  left: 733vh;
  top: 70vh;

  color: #F6FEFF;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 58.8px */
  letter-spacing: 0.38px;
`

const ExplanationLabel = styled.p`
  position: absolute;
  left: 572vh;
  top: 25vh;

  color: #185A62;
  font-feature-settings: 'liga' off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
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