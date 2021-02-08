import styled from 'styled-components'
import { TABLET } from '@constants/measurements'

// Basic section container
export const SectionContainer = styled.div`
  width: ${p => p.width};
  height: ${p => p.height};
  margin: ${p => p.margin};
`
export const SectionContainerWithBackground = styled(SectionContainer)`
  background-color: #f9f6ef;
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
