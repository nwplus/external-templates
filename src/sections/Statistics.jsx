import styled from 'styled-components';
import { useEffect } from 'react';

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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stats = window.document.querySelector('.stats')
      const renderCountAnimation = () => {
        const valueDisplays = window.document.querySelectorAll('.num')
        const interval = 2000

        valueDisplays.forEach((valueDisplay) => {
          const endValue = parseInt(valueDisplay.getAttribute('data-val'), 10)
          const id = valueDisplay.getAttribute('id')
          let startValue = 0
          const duration = Math.floor(interval / endValue)
          let progress = 0;

          const counter = setInterval(() => {
            progress += duration / interval;
            startValue = endValue * (1 - ((1 - progress) ** 5)); // cubic ease-out
            if (progress >= 1) progress = 1;
            let unitsLabel = "";
            switch (id) {
              case "hackers_count":
                unitsLabel = "hackers";
                break;
              case "projects_count":
                unitsLabel = "projects";
                break;
              case "mentors_count":
                unitsLabel = "mentors";
                break;
              default:
                unitsLabel = "units";
                break;
            }
            const displayedValue = valueDisplay
            displayedValue.textContent = `${Math.round(startValue)} ${unitsLabel}`;
            if (startValue >= endValue) {
              // ensure setting to end value
              displayedValue.textContent = `${endValue} ${unitsLabel}`;
              clearInterval(counter);
            }
          }, duration);
        });
      };

      const observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          renderCountAnimation();
        }
      });
      observer.observe(stats);
    }
  });

  return (
    <>
        <MainTitle>Last year we had...</MainTitle>
        <StatsContainer className='stats'>
          <SubTitle className='num' data-val="189" id="hackers_count">0 hackers</SubTitle>
          <SubTitle className='num' data-val="44" style={{ marginTop: '2.05vh' }} id="projects_count">0 projects</SubTitle>
          <SubTitle className='num' data-val="43" style={{ marginTop: '1.37vh' }} id="mentors_count">0 mentors</SubTitle>
        </StatsContainer>
    </>
  )
};

export default Statistics;