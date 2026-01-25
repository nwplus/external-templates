import styled from 'styled-components'

const ShroomsContainer = styled.div`
  position: absolute;
  top: calc(100vw * (195 / 1920));
  right: calc(100vw * (-155 / 1920));
`

const ShroomsImg = styled.img`
  width: calc(100vw * (575 / 1920));
  pointer-events: none;
`

const MidRightShrooms = () => (
  <ShroomsContainer>
    <ShroomsImg src="/assets/images/mid_right_shrooms.svg" alt="" />
  </ShroomsContainer>
)

export default MidRightShrooms
