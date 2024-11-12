import styled from 'styled-components'

const Floor = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  margin: 0 auto;

  background-image: url(/assets/images/floor.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  aspect-ratio: 1280 / 156;
  bottom: calc(100vw * (-20 / 1280));
`

export default Floor
