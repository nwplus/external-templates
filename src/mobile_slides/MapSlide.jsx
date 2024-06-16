import styled from "styled-components";
import Slide from "./Slide";

import VerticalMapImage from '../../public/assets/map/vertical_map.svg'

const MapContainer = styled.div`
  position: relative;
  margin-top: 10vw;
  margin-left: 10vw;
  margin-right: 10vw;
`

const MapImage = styled.img`
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

const MapSlide = () => (
    <Slide alignItems="center">
      <MapContainer>
        <MapImage src={VerticalMapImage} />
        {/* <CloseInLabel style={{ whiteSpace: 'pre-line'}}>{appsCloseText}</CloseInLabel>
        <DaysLabel>{countdown[0]} DAYS</DaysLabel>
        <HoursLabel>{countdown[1]} HOURS</HoursLabel>
        <MinutesLabel>{countdown[2]} MIN</MinutesLabel> */}
      </MapContainer>
    </Slide>
  )

export default MapSlide;