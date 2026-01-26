import styled from 'styled-components'

const ShroomsContainer = styled.div`
  position: absolute;
  top: calc(100vw * (195 / 1920));
  right: calc(100vw * (-155 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (450 / 393));
  }
`

const ShroomsImg = styled.img`
  width: calc(100vw * (575 / 1920));
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (150 / 393));
  }
`

const MidRightShrooms = () => (
  <ShroomsContainer>
    <ShroomsImg src="/assets/images/mid_right_shrooms.svg" alt="" />
  </ShroomsContainer>
)

export default MidRightShrooms
