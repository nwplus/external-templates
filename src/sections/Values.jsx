import React from 'react'
import styled from 'styled-components'
/* eslint-disable react/no-danger */
import SVG from 'react-inlinesvg'

const DesktopContainer = styled.div`
  width: 100vw;
  z-index: 1;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileContainer = styled.div`
  width: 100vw;
  display: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const Values = () => (
  <>
    <DesktopContainer>
      <SVG src="/assets/Values.svg" />
    </DesktopContainer>
    <MobileContainer>
      <SVG src="/assets/MobileValues.svg" />
    </MobileContainer>

  </>
)

export default Values