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
  width: ${PAGE_FRAC_DESKTOP}vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
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

  ${p => p.theme.mediaQueries.mobile} {
    height: 550px;
  }
`

const PagesArrayD = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: fit-content;
  gap: 3rem;
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
  gap: 3rem;
  transition: 500ms;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
  }
`

const Page = styled.div`
  width: calc(${PAGE_FRAC_DESKTOP}vw - 6rem);
  height: 100%;
  padding: 2rem;
  overflow-y: auto;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(${PAGE_FRAC_MOBILE}vw - 6rem);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
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

const Dots = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`
const Dot = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: white;
  transition: 300ms;
  cursor: pointer;
`

const Carousel = ({ children }) => {
  const [viewing, setViewing] = useState(0)
  const LeftButton = viewing === 0 ? BrickedButton : ActiveButton
  const RightButton = viewing === children.length - 1 ? BrickedButton : ActiveButton

  return (
    <CarouselContainer>
      <ContentContainer>
        <TopContainer>
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
        </TopContainer>

        <Dots>
          {Array(children.length)
            .fill(null)
            .map((_, i) => (
              <Dot
                onClick={() => {
                  setViewing(i)
                }}
                style={{ opacity: i === viewing ? 1 : 0.2 }}
              />
            ))}
        </Dots>
      </ContentContainer>
    </CarouselContainer>
  )
}

export default Carousel
