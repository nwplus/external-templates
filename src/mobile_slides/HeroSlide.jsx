import styled from "styled-components";
import Slide from "./Slide";

import CmdFLogoImage from '../../public/assets/cmd-f-logo.svg'

const Logo = styled.img`
  margin-top: 100px;
  width: 93.5px;
  height: 77.8px;
`

const Title = styled.p`
  margin-top: 40px;
  width: 285px;

  color: #2E2E2E;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.38px;
`

const InfoLabel = styled.p`
  margin-top: 50px;
  width: 197px;

  color: #2E2E2E;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px; /* 55.556% */
  letter-spacing: -0.15px;
`

const ApplyLabel = styled.p`
  margin-top: 50px;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.15px;
`

const ApplyButtonsContainer = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const HackerButton = styled.a`
  display: flex;
  padding: 1.76vh 2.75vh;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #CC5A5A 15.65%, #DB7859 94.27%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.35vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
`

const MentorButton = styled.a`
  display: flex;
  padding: 1.76vh 2.89vh;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #E48D4D 16.91%, #E9B145 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.35vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
`

const VolunteerButton = styled.a`
  display: flex;
  padding: 1.76vh 2.06vh;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #49AAB3 9.37%, #67C2B7 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.35vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
`


const HeroSlide = () => (
    <Slide alignItems="center">
      <Logo src={CmdFLogoImage}/>
      <Title>Western Canada&apos;s largest hackathon <span style={{ color: '#B23C3C' }}>celebrating underrepresented genders in tech</span></Title>
      <InfoLabel>March 9-10, 2024 In-person @ UBC</InfoLabel>
      <ApplyLabel>Apply to be a:</ApplyLabel>
      <ApplyButtonsContainer>
        <HackerButton href="https://nwplus.io" target="_blank">Hacker</HackerButton>
        <MentorButton href="https://nwplus.io" target="_blank">Mentor</MentorButton>
        <VolunteerButton href="https://nwplus.io" target="_blank">Volunteer</VolunteerButton>
    </ApplyButtonsContainer>
    </Slide>
  )

export default HeroSlide;