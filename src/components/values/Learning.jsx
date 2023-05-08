
import styled from 'styled-components'

const CardContainer = styled.div`
position: relative;

  height: 399.7px;
  width: 756.37px;

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
height: 399.7px;
width: 756.37px;
 
 background: url('/assets/valueCards/ipad.svg') transparent;
 background-fill: contain;
 background-clip: border-box;
`
const Anim = styled.div`
  position: absolute;
  height: 60px;
  width: 80px;

  bottom: 30px;
  right: 220px;
  z-index: 99;
 
  background: url('/assets/valueCards/heart.gif');
  background-size: contain;
  background-repeat: no-repeat;
`


const Learning = () => (
  <CardContainer>
    <Anim />
    <Card />
  </CardContainer>
)

export default Learning