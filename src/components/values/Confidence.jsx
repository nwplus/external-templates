
import styled from 'styled-components'

const CardContainer = styled.div`
position: relative;

  height: 336px;
  width: 568px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Card = styled.div`
position: relative;
z-index: 1;
height: 336px;
width: 568px;
 
 background: url('/assets/valueCards/Notebook.svg') transparent;
 background-fill: contain;
 background-clip: border-box;
`
const Anim = styled.div`
  position: absolute;
  height: 81px;
  width: 66px;

  right: 15px;
  top: 20px;
  z-index: 99;
 
  background: url('/assets/valueCards/smiley.gif');
  background-size: contain;
  background-repeat: no-repeat;
`


const Confidence = () => (
  <CardContainer>
  <Anim />
    <Card />
  </CardContainer>
)

export default Confidence