import styled from "styled-components";
import Slide from "./Slide";

import LastYearBanner from '../../public/assets/misc/last_year_banner.svg'

const Label = styled.p`
  position: absolute;
  margin-top: 38vh;
  margin-left: 10vw;
  margin-right: 20vw;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 2rem;
  font-style: normal;
  text-align: center;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`;

const Banner = styled.img`
position: absolute;
  margin-top: 32vh;
  margin-left: 20vw;
  margin-right: 10vw;
`

const LastYearSlide = () => {
  const lastYearText = `Last year
we had...`;
   return (<Slide alignItems="center">
      <Banner src={LastYearBanner}/>
      <Label style={{ whiteSpace: 'pre-line' }}>{lastYearText}</Label>
    </Slide>
  )
}

export default LastYearSlide;