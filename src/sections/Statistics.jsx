import styled from 'styled-components';

const MainTitle = styled.h3`
  position: absolute;
  left: 905.29vh;
  top: 22.25vh;
  width: 54.41vh;

  color: #311E1E;
  text-align: center;
  font-family: "Yatra One";
  font-size: 5.49vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`;

const StatsContainer = styled.div`
  position: absolute;
  top: 29.9vh;
  left: 907.55vh;
  width: 48.23vh;
`

const SubTitle = styled.p`
  position: relative;

  color: #311E1E;
  text-align: center;
  font-family: "HK Grotesk";
  font-size: 4.9vh;
  font-style: normal;
  font-weight: 700;
  line-height: 112%;
  letter-spacing: 0.4px;
`;

const Statistics = () => {
  return (
    <>
        <MainTitle>Last year we had...</MainTitle>
        <StatsContainer>
          <SubTitle>189 hackers</SubTitle>
          <SubTitle style={{ marginTop: '2.05vh' }}>44 projects</SubTitle>
          <SubTitle style={{ marginTop: '1.37vh' }}>43 mentors</SubTitle>
        </StatsContainer>
    </>
  )
};

export default Statistics;