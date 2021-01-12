import styled from 'styled-components'

// Basic section container
export const SectionContainer = styled.div`
  width: ${p => p.width};
  margin: ${p => p.margin};
`
export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  width: 100%;
  margin: 0 2vw;
`
