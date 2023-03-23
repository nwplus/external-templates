import React from 'react'
import styled from 'styled-components'
/* eslint-disable react/no-danger */
import SVG from 'react-inlinesvg'
import Dish from '@components/Dish'
import Confidence from '@components/values/Confidence'
import SafeSpace from '@components/values/SafeSpace'
import Learning from '@components/values/Learning'

const DesktopContainer = styled.div`
  position: relative;
  margin-top: -1px;
  overflow: hidden;

  background: url('/assets/ValuesDesktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  width: 100%;
  height: 100%;
  aspect-ratio: 1440 / 1222;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileContainer = styled.div`
  width: 100vw;
  display: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
    margin-bottom: -1rem;
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  gap: 5%;

  width: 80%;
  max-width: 1200px;
  padding-bottom: 8%;
  margin: 0 auto;
`

const NotebookContainer = styled.div`

`
const PaperContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5%;
`

const Values = () => (
  <>
    <DesktopContainer>
      <Dish />
      <CardsContainer>
        <NotebookContainer>
          <Confidence />
        </NotebookContainer>
        <PaperContainer>
          <SafeSpace />
          <Learning />
        </PaperContainer>
      </CardsContainer>
    </DesktopContainer>
    <MobileContainer>
      <SVG src="/assets/MobileValues.svg" />
    </MobileContainer>

  </>
)

export default Values