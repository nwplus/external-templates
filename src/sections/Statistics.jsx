import styled from 'styled-components'

const StatisticsSection = styled.div`
  
  min-height: calc(calc(1396 / 1440) * 100vw);
  background-image: url("/assets/statistics/desktopBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;

  ${p => p.theme.mediaQueries.mobile} {
    // Height calculation ratio should be the aspect ratio of the background image
    min-height: calc(calc(1071 / 428) * 100vw);
    background-image: url("/assets/statistics/mobileBackground.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const Statistics = () => (
    <div id="hackathon">
      <StatisticsSection />
    </div>
)


export default Statistics
