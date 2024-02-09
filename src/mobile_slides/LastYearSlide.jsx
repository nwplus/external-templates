import styled from "styled-components";
import Slide from "./Slide";

const Label = styled.h3`
  margin-top: 42vh;
  margin-left: 2rem;
  margin-right: 4rem;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 2rem;
  font-style: normal;
  text-align: center;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`;

const LastYearSlide = () => {
  const lastYearText = `Last year
we had...`;
   return (<Slide alignItems="center">
      <Label style={{ whiteSpace: 'pre-line' }}>{lastYearText}</Label>
    </Slide>
  )
}

export default LastYearSlide;