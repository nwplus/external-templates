import { React } from 'react'
import styled  from 'styled-components'

import Anchor from '@components/Anchor'
import MapImage from '../../public/assets/map/horizontal_map.svg'

const Map = styled.img`
  position: absolute;
  left: 219.01vh;
  top: 3.52vh;
  height: 90.69vh;
  width: 202.8vh;
`

const Title = styled.p`
  position: absolute;
  left: 228.72vh;
  top: 15.98vh;
  width: 55.29vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 5.49vh;
  font-style: normal;
  font-weight: 400;
  line-height: 5.49vh;
  letter-spacing: 0.4px;
`

const Description = styled.p`
  position: absolute;
  left: 228.72vh;
  top: 23.43vh;
  width: 58.13vh;

  color: #08363C;
  font-family: "HK Grotesk Medium";
  font-size: 1.96vh;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.1px;
`

// const getReturnValues = countDown => {
//   // calculate time left
//   const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
//   const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
//   const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

//   if (days < 0 || hours < 0 || seconds < 0) {
//     return [0, 0, 0, 0]
//   }

//   return [days, hours, minutes, seconds]
// }

// const useCountdown = targetDate => {
//   const countDownDate = new Date(targetDate).getTime()

//   const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown(countDownDate - new Date().getTime())
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [countDownDate])

//   return getReturnValues(countDown)
// }

const About = () => 
  // const countDownDate = new Date('2024-03-01T23:59:59-08:00').getTime()

   (<div>
    <Anchor id="about" x="220" />
    <Map src={MapImage}/>
    <Title>What is cmd-f?</Title>
    <Description style={{ whiteSpace: 'pre-line' }}>cmd-f is a <span style={{fontFamily: "HK Grotesk", fontWeight: "700"}}>24-hour hackathon</span> focused on addressing gender inequality in technology. Our main purpose is to create a safe and dedicated space for historically excluded genders to hack together. We’re trying to create access for people who have faced systemic barriers to inclusion on the basis of gender. We encourage participation from women, trans, non-binary, Two-Spirit and gender diverse people. <span style={{fontFamily: "HK Grotesk", fontWeight: "700"}}>Thus, cmd-f is only open to individuals who identify as a member of an underrepresented gender in technology.</span><br/><br/>We’re aware that gender is not the only inequality in technology. We appreciate allyship and recognize it is important in the community. <span style={{ fontFamily: "HK Grotesk", fontWeight: "700"}}>We invite allies to show their support by not hacking and instead contributing in other forms, such as volunteering or mentoring.</span> Please make sure your participation in this event is aligned with the intentions of the event. We also ask all participants who attend to trust that everyone attending is meant to be here.<br/><br/><span style={{fontFamily: "HK Grotesk", fontWeight: "700"}}>For more information on who is an underrepresented gender in technology, please email us at <a href="mailto:cmd-f@nwplus.io" style={{textDecoration: "underline", color: "#08363C"}}>cmd-f@nwplus.io</a>.</span></Description>
    {/* <DaysLabel>{countdown[0]} DAYS</DaysLabel>
    <HoursLabel>{countdown[1]} HOURS</HoursLabel>
    <MinutesLabel>{countdown[2]} MIN</MinutesLabel>
    <ApplicationsCloseInLabel>Applications close in:</ApplicationsCloseInLabel>
    <ApplicationsCloseFullLabel>Applications close Friday, March 1 @ 11:59PM PST</ApplicationsCloseFullLabel> */}
    </div>)


export default About
