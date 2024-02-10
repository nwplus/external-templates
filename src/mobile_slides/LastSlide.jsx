import styled from "styled-components";
import Team from "@components/MobileTeam";
import Slide from "./Slide";

const MeetMindsLabel = styled.p`
  margin-top: 67svh;
  margin-left: 2rem;
  margin-right: 2rem;

  color: #F6FEFF;
  text-align: center;
  font-family: "Yatra One";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.169px;
`

const SmallText = styled.div`
  margin-top: 10vh;

  user-select: none;
  padding-top: 3.92vh;
  text-align: center;
  div {
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
`

const LastSlide = () => (
    <Slide alignItems="left">
      <Team />
      <MeetMindsLabel>Meet the minds behind cmd-f</MeetMindsLabel>
      <SmallText>
        <div>Organized and held by nwPlus</div>
        <div>Copyright &copy; cmd-f 2024</div>
      </SmallText>
    </Slide>
  )

export default LastSlide;