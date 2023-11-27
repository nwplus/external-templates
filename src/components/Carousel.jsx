import React, { useState } from 'react'
import styled from 'styled-components'
import ChevronLeft from '@assets/images/chevron_left.svg'

const PAGE_WIDTH = 700
const PAGE_HEIGHT = 400
const BUTTON_WIDTH = 30
const SPACING = 20

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(1344 / 428) * 100vw);
    aspect-ratio: 428 / 1344;
    align-items: center;
  }
`

const ContentContainer = styled.div`
  min-width: ${PAGE_WIDTH + (BUTTON_WIDTH + SPACING) * 2}px;
  max-width: 900px;
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${SPACING}px;
`

const PagesContainer = styled.div`
  width: ${PAGE_WIDTH}px;
  min-height: ${PAGE_HEIGHT}px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  overflow: hidden;
`

const PagesArray = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: fit-content;
  gap: 50px;
  transition: 500ms;
`

const Page = styled.div`
  width: ${PAGE_WIDTH}px;
  height: 100%;
  padding: 2rem;
`

const Button = styled.div`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  width: ${BUTTON_WIDTH}px;
  height: ${BUTTON_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

const ChevronImg = styled.img`
  width: 0.5rem;
  height: 0.9rem;
`

const Carousel = ({ children }) => {
  const [viewing, setViewing] = useState(0)

  return (
    <CarouselContainer>
      <ContentContainer>
        <Button
          onClick={() => {
            setViewing(prev => Math.max(0, prev - 1))
          }}
        >
          <ChevronImg src={ChevronLeft} />
        </Button>

        <PagesContainer>
          <PagesArray style={{ left: `${-(PAGE_WIDTH + 50) * viewing}px` }}>
            {children.map(c => (
              <Page>{c}</Page>
            ))}
          </PagesArray>
        </PagesContainer>

        <Button
          onClick={() => {
            setViewing(prev => Math.min(children.length - 1, prev + 1))
          }}
        >
          <ChevronImg src={ChevronLeft} style={{ transform: 'scaleX(-1)' }} />
        </Button>
      </ContentContainer>
    </CarouselContainer>
  )
}

export default Carousel
