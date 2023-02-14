/* eslint-disable react/no-danger */
import SVG from 'react-inlinesvg'
import styled from 'styled-components'

const StatisticsMobile = styled.div`
  margin-bottom: -10px;
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
`
const StatisticsSection = styled.div`
  margin-bottom: -10px;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Statistics = () => {
  return (
    <>
      <StatisticsMobile>
        <SVG src="/assets/statistics-mobile.svg" />
      </StatisticsMobile>
      <StatisticsSection>
        <SVG src="/assets/statistics.svg" />
      </StatisticsSection>
    </>
  )
 
}


export default Statistics
