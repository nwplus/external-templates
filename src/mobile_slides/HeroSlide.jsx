import styled, { keyframes } from "styled-components";
import Slide from "./Slide";

import CmdFLogoImage from '../../public/assets/logos/cmd-f-logo.svg'
import TooltipImage from '../../public/assets/misc/scroll_tooltip.svg'

const Logo = styled.img`
  margin-top: 3rem;
  width: 93.5px;
  height: 77.8px;
`

const Title = styled.p`
  margin-top: 40px;
  margin-left: 2rem;
  margin-right: 2rem;

  color: #2E2E2E;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.38px;
`

const InfoLabel = styled.p`
  margin-top: 1.4rem;
  margin-left: 2rem;
  margin-right: 2rem;

  color: #2E2E2E;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.15px;
`

const ApplyLabel = styled.p`
  margin-top: 1.4rem;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.15px;
`

const ApplyButtonsContainer = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const HackerButton = styled.a`
  display: flex;
  padding: 0.93rem 1.45rem;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #CC5A5A 15.65%, #DB7859 94.27%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
`

const MentorButton = styled.a`
  display: flex;
  padding: 0.93rem 1.53rem;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #E48D4D 16.91%, #E9B145 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
`

const VolunteerButton = styled.a`
  display: flex;
  padding: 0.93rem 1.09rem;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #49AAB3 9.37%, #67C2B7 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 30svh;
  width: 70vw;
  height: 100vw;
  background: linear-gradient(146deg, rgba(219, 212, 203, 0.90) -3.75%, rgba(255, 250, 243, 0.90) -3.74%, rgba(255, 247, 242, 0.90) 103.97%, rgba(255, 241, 234, 0.90) 103.97%);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeOut} 2s ease-in-out 0.65s forwards;
`

const TooltipLabel = styled.p`
  margin-top: 6rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  color: #2E2E2E;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px; /* 115% */
  letter-spacing: -0.15px;
`

const TooltipIcon = styled.img`
  position: relative;
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
`

const HeroSlide = () => {
  const infoLabel = `March 9-10, 2024
In-person @ UBC
Life Sciences Institute`

  return (
    <Slide alignItems="center">
      <Tooltip>
        <TooltipLabel>Scroll sideways to view pages!</TooltipLabel>
        <TooltipIcon src={TooltipImage}/>
      </Tooltip>
      <Logo src={CmdFLogoImage}/>
      <Title>Western Canada&apos;s largest hackathon <span style={{ color: '#B23C3C' }}>celebrating underrepresented genders in tech</span></Title>
      <InfoLabel style={{ whiteSpace: 'pre-line' }}>{infoLabel}</InfoLabel>
      <ApplyLabel>Apply to be a:</ApplyLabel>
      <ApplyButtonsContainer>
        <HackerButton href="https://portal.nwplus.io" target="_blank">Hacker</HackerButton>
        <MentorButton href="https://forms.gle/LiZjuFU8G8deVXzf9" target="_blank">Mentor</MentorButton>
        <VolunteerButton href="https://forms.gle/X4dFhZ9wuYGzHpZK8" target="_blank">Volunteer</VolunteerButton>
    </ApplyButtonsContainer>
    </Slide>
  )
}

export default HeroSlide;