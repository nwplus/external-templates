import styled from 'styled-components';

const StatisticsSection = styled.div`
  position: absolute;
  left: 910vh;
  top: 20vh;
  text-align: center;
`;

const MainTitle = styled.h3`
  font-family: 'Yatra One', sans-serif;
  font-size: 42px;
  font-weight: normal;
  color: #311E1E;
  margin: 0;
  padding: 0;
`;

const SubTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #311E1E;
  margin: 8px 0;
  padding: 0;
`;

const Statistics = () => (
    <div id="statistics">
      {/* <StatisticsSection>
        <MainTitle>Last year we had...</MainTitle>
        <SubTitle>189 hackers</SubTitle>
        <SubTitle>44 projects</SubTitle>
        <SubTitle>43 mentors</SubTitle>
      </StatisticsSection> */}
    </div>
);

export default Statistics;