import styled from "styled-components";
import Slide from "./Slide";

const Label = styled.h3`
  margin-top: 31vh;
  margin-left: 8rem;
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

const SponsoredBySlide = () => {
    const sponsoredByText = `nwHacks 2024
is sponsored
by...`;
    return (<Slide alignItems="center">
      <Label style={{ whiteSpace: 'pre-line' }}>{sponsoredByText}</Label>
    </Slide>
  )
}

export default SponsoredBySlide;