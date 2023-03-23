
import styled from 'styled-components'

const CardContainer = styled.div`
position: relative;

  height: 496px;
  width: 435px;

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
height: 496px;
width: 435px;
 
 background: url('/assets/valueCards/paper.svg') transparent;
 background-fill: contain;
 background-clip: border-box;
`
const Anim = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;

  bottom: -2px;
  left: 50px;
  z-index: 99;
 
  background: url('/assets/valueCards/flower.gif');
  background-size: contain;
  background-repeat: no-repeat;
`


const SafeSpace = () => (
  <CardContainer>
    <Anim />
    <Card />
  </CardContainer>
)

export default SafeSpace