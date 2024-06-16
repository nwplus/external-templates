import styled from "styled-components";
import Slide from "./Slide";

import SponsoredByBanner from '../../public/assets/misc/sponsored_by_banner.svg'

const Label = styled.h3`
  position: absolute;
  margin-top: 36.5vh;
  margin-left: 2rem;
  margin-right: 2rem;

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
  margin-left: 10vw;
  margin-right: 10vw;
`

const SponsoredBySlide = () => {
    const sponsoredByText = `cmd-f 2025
is sponsored
by...`;
    return (<Slide alignItems="center">
      <Banner src={SponsoredByBanner}/>
      <Label style={{ whiteSpace: 'pre-line' }}>{sponsoredByText}</Label>
    </Slide>
  )
}

export default SponsoredBySlide;