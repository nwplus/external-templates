import styled from "styled-components";
import Slide from "./Slide";

const DefaultLabel = styled.p`
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;

  color: white;
  font-weight: 600;
  font-size: 40px;
`

const BigSponsorsSlide = () => (
    <Slide alignItems="left">
      <DefaultLabel>Big sponsors slide</DefaultLabel>
    </Slide>
  )

export default BigSponsorsSlide;