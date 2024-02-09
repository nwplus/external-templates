import styled from "styled-components";
import Slide from "./Slide";

const StatsLabel = styled.p`
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;

  color: #311E1E;
  text-align: center;
  font-feature-settings: 'liga' off;

  font-family: "HK Grotesk";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 78.571% */
  letter-spacing: 0.2px;
`

const SmallLabel = styled.p`
  margin-top: 1.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;

  color: #311E1E;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 14.801px; /* 78.571% */
  letter-spacing: 0.135px;
  opacity: 0.5;
`

const StatisticsSlide = () => (
    <Slide alignItems="left">
      <StatsLabel style={{ marginTop: "33vh" }}>189 hackers</StatsLabel>
      <StatsLabel style={{ marginTop: "1.5rem" }}>44 projects</StatsLabel>
      <StatsLabel style={{ marginTop: "1.5rem" }}>43 mentors</StatsLabel>
      <SmallLabel>at cmd-f 2023</SmallLabel>
    </Slide>
  )

export default StatisticsSlide;