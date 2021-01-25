import styled from 'styled-components'
import { MOBILE_WIDTH } from '@constants/measurements'

// Basic section container
export const SectionContainer = styled.div`
  width: ${p => p.width};
  height: ${p => p.height};
  margin: ${p => p.margin};
`
export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  width: 100%;
  margin: 0 2vw;
`
