import React, { useState } from 'react'
import styled from 'styled-components'
import ChevronLeft from '@assets/images/chevron_left.svg'

const PAGE_HEIGHT = 400
const PAGE_FRAC_MOBILE = 90 // width: ?vw for the carousel component on mobile
const PAGE_FRAC_DESKTOP = 50 // width: ?vw for the carousel component on desktop

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const ContentContainer = styled.div`
  max-width: 900px;
  width: ${PAGE_FRAC_DESKTOP}vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${p => p.theme.mediaQueries.mobile} {
    width: ${PAGE_FRAC_MOBILE}vw;
  }
`

const PagesContainer = styled.div`
  flex-grow: 1;
  min-height: ${PAGE_HEIGHT}px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  overflow: hidden;
  border-radius: 10px;
`

const PagesArrayD = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: fit-content;
  gap: 50px;
  transition: 500ms;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const PagesArrayM = styled.div`
  position: absolute;
  display: none;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: fit-content;
  gap: 50px;
  transition: 500ms;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
  }
`

const Page = styled.div`
  width: calc(${PAGE_FRAC_DESKTOP}vw - 6rem);
  height: 100%;
  padding: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(${PAGE_FRAC_MOBILE}vw - 6rem);
  }
`

const ActiveButton = styled.div`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

const BrickedButton = styled.div`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
`

const ChevronImg = styled.img`
  width: 0.5rem;
  height: 0.9rem;
`

const Carousel = ({ children }) => {
  const [viewing, setViewing] = useState(0)
  const LeftButton = viewing == 0 ? BrickedButton : ActiveButton
  const RightButton = viewing == children.length - 1 ? BrickedButton : ActiveButton

  return (
    <CarouselContainer>
      <ContentContainer>
        <LeftButton
          onClick={() => {
            setViewing(prev => Math.max(0, prev - 1))
          }}
        >
          <ChevronImg src={ChevronLeft} />
        </LeftButton>

        <PagesContainer>
          <PagesArrayD style={{ left: `calc(calc(calc(${PAGE_FRAC_DESKTOP}vw - 3rem) * -1) * ${viewing})` }}>
            {children.map(c => (
              <Page>{c}</Page>
            ))}
          </PagesArrayD>
          <PagesArrayM style={{ left: `calc(calc(calc(${PAGE_FRAC_MOBILE}vw - 3rem) * -1) * ${viewing})` }}>
            {children.map(c => (
              <Page>{c}</Page>
            ))}
          </PagesArrayM>
        </PagesContainer>

        <RightButton
          onClick={() => {
            setViewing(prev => Math.min(children.length - 1, prev + 1))
          }}
        >
          <ChevronImg src={ChevronLeft} style={{ transform: 'scaleX(-1)' }} />
        </RightButton>
      </ContentContainer>
    </CarouselContainer>
  )
}

export default Carousel
