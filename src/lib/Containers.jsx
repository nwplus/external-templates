import styled from 'styled-components'
import { TABLET } from '@constants/measurements'

// ================
// Remind team that we can modify dimensions and colors to these standard components
// ================

// Basic section container
export const SectionContainer = styled.div.attrs(props => ({
  id: props?.id,
}))`
  font-family: 'DM Sans', sans-serif;
  width: ${p => p.width};
  height: ${p => p.height};
  margin: ${p => p.margin};
  padding: ${p => p.padding};
`
export const SectionContainerWithBackground = styled(SectionContainer)`
  background-image: url(${p => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
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
`

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
