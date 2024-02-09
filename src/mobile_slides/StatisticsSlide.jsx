import styled from "styled-components";
import { useEffect } from "react";
import Slide from "./Slide";

const StatsLabel = styled.p`
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;

  color: #311E1E;
  text-align: center;
  font-feature-settings: 'liga' off;

  font-family: "HK Grotesk";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 78.571% */
  letter-spacing: 0.2px;
`

const SmallLabel = styled.p`
  margin-top: 1.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;

  color: #311E1E;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 14.801px; /* 78.571% */
  letter-spacing: 0.135px;
  opacity: 0.5;
`

const StatisticsSlide = () => {
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
            startValue = endValue * (1 - ((1 - progress) ** 3)); // cubic ease-out
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
    <Slide className="stats" alignItems="left">
      <StatsLabel className='num' style={{ marginTop: "33vh" }} data-val="189" id="hackers_count">0 hackers</StatsLabel>
      <StatsLabel className='num' style={{ marginTop: "1.5rem" }} data-val="44" id="hackers_count">0 projects</StatsLabel>
      <StatsLabel className='num' style={{ marginTop: "1.5rem" }} data-val="43" id="hackers_count">0 mentors</StatsLabel>
      <SmallLabel>at cmd-f 2023</SmallLabel>
    </Slide>
  )
}

export default StatisticsSlide;