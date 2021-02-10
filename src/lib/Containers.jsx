import styled from 'styled-components'
import { TABLET } from '@constants/measurements'

// Basic section container
export const SectionContainer = styled.div`
  color: #2F4246;
  font-family: 'DM Sans', sans-serif;
  width: ${p => p.width};
  margin: ${p => p.margin};
`
export const SectionContainerWithBackground = styled(SectionContainer)`
  background-color: #F9F6EF;
  background-image: url(${p => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${p => p.height};
`
export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${TABLET}) {
    flex-direction: column;
  }
`
export const Column = styled.div`
  width: 100%;
  margin: 0 2vw;
`
