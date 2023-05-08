
import styled from 'styled-components'

const PlateContainer = styled.div`

  position: absolute;

  right: -200px;
  top: 0;
  height: 607px;
  width: 648px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Plate = styled.div`
height: 607px;
width: 648px;
 
 background: url('/assets/plate/animated-ne.gif') transparent;
 background-fill: contain;
 background-clip: border-box;
`

const Dish = () => (
  <PlateContainer>
    <Plate />
  </PlateContainer>
)

export default Dish