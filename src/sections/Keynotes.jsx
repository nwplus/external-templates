import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const KeynotesContainer = styled.div`
  aspect-ratio: 1512/1200;
  height: 100%;
  position: relative;
  width: 100%;
  background: #94d2f500;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1200;
  }
`

const hoverJiggle = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.06) rotate(1deg);
  }
  50% {
    transform: scale(1.06) rotate(-1deg);
  }
  75% {
    transform: scale(1.06) rotate(0.5deg);
  }
  100% {
    transform: scale(1.06) rotate(0deg);
  }
`

const hoverJiggleStyles = css`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.06);
    animation: ${hoverJiggle} 0.35s ease-in-out 1;
  }
`

const Title = styled.p`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (60 / 1512));
  font-weight: 400;
  position: absolute;
  left: calc(100vw * (110 / 1512));
`

const Sparkles = styled.img`
  position: absolute;
  width: calc(100vw * (1020 / 1512));
  top: calc(100vw * (80 / 1512));
  left: calc(100vw * (50 / 1512));
`

const HaveOneCookie = styled.img`
  position: absolute;
  width: calc(100vw * (300 / 1512));
  top: calc(100vw * (130 / 1512));
  left: calc(100vw * (80 / 1512));

  ${hoverJiggleStyles}
`

const SelectedHaveOneCookie = styled.img`
  position: absolute;
  width: calc(100vw * (400 / 1512));
  top: calc(100vw * (70 / 1512));
  left: calc(100vw * (30 / 1512));

  ${hoverJiggleStyles}
`

const EatMeCookie = styled.img`
  position: absolute;
  width: calc(100vw * (380 / 1512));
  top: calc(100vw * (55 / 1512));
  left: calc(100vw * (500 / 1512));

  ${hoverJiggleStyles}
`

const SelectedEatMeCookie = styled.img`
  position: absolute;
  width: calc(100vw * (450 / 1512));
  top: calc(100vw * (20 / 1512));
  left: calc(100vw * (450 / 1512));

  ${hoverJiggleStyles}
`

const DrinkMeBottle = styled.img`
  position: absolute;
  width: calc(100vw * (186 / 1512));
  top: calc(100vw * (300 / 1512));
  left: calc(100vw * (380 / 1512));

  ${hoverJiggleStyles}
`

const SelectedDrinkMeBottle = styled.img`
  position: absolute;
  width: calc(100vw * (290 / 1512));
  top: calc(100vw * (220 / 1512));
  left: calc(100vw * (340 / 1512));

  ${hoverJiggleStyles}
`

const TryMeCookie = styled.img`
  position: absolute;
  width: calc(100vw * (218 / 1512));
  top: calc(100vw * (540 / 1512));
  left: calc(100vw * (150 / 1512));

  ${hoverJiggleStyles}
`

const SelectedTryMeCookie = styled.img`
  position: absolute;
  width: calc(100vw * (311 / 1512));
  top: calc(100vw * (500 / 1512));
  left: calc(100vw * (100 / 1512));

  ${hoverJiggleStyles}
`

const TakeOneCookie = styled.img`
  position: absolute;
  width: calc(100vw * (300 / 1512));
  top: calc(100vw * (540 / 1512));
  left: calc(100vw * (520 / 1512));

  ${hoverJiggleStyles}
`

const SelectedTakeOneCookie = styled.img`
  position: absolute;
  width: calc(100vw * (400 / 1512));
  top: calc(100vw * (480 / 1512));
  left: calc(100vw * (480 / 1512));

  ${hoverJiggleStyles}
`

const UnselectedCloud = styled.img`
  position: absolute;
  width: calc(100vw * (663 / 1512));
  top: calc(100vw * (170 / 1512));
  left: calc(100vw * (770 / 1512));
`

const Smoke = styled.img`
  position: absolute;
  width: calc(100vw * (715 / 1512));
  top: calc(100vw * (170 / 1512));
  left: calc(100vw * (770 / 1512));
`

const TextContainer = styled.div`
  position: absolute;
  width: calc(100vw * (451 / 1512));
  top: calc(100vw * (390 / 1512));
  left: calc(100vw * (990 / 1512));
`

const Description = styled.p`
  font-family: 'Quicksand';
  font-size: calc(100vw * (32 / 1512));
  font-weight: 600;
`

const NavigationContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (20 / 1512));
  top: calc(100vw * (540 / 1512));
  left: calc(100vw * (1050 / 1512));
  width: calc(100vw * (200 / 1512));
`

const NavArrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(100vw * (20 / 1512));
  color: #18338d;
  width: calc(100vw * (40 / 1512));
  height: calc(100vw * (40 / 1512));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }
`

const DotsContainer = styled.div`
  display: flex;
  gap: calc(100vw * (8 / 1512));
  align-items: center;
`

const Dot = styled.div`
  width: calc(100vw * (12 / 1512));
  height: calc(100vw * (12 / 1512));
  border-radius: 50%;
  background-color: ${props => (props.active ? '#293A62' : '#FFFFFF')};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.3);
  }
`

const keynoteData = [
  {
    name: '',
    company: '',
    description: 'Details coming soon...',
  },
  {
    name: '',
    company: '',
    description: 'Details coming soon...',
  },
  {
    name: '',
    company: '',
    description: 'Details coming soon...',
  },
  {
    name: '',
    company: '',
    description: 'Details coming soon...',
  },
  {
    name: '',
    company: '',
    description: 'Details coming soon...',
  },
]

const Keynotes = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const handleKeynoteClick = entry => {
    setSelectedSpeaker(entry)
  }

  const handlePreviousSpeaker = () => {
    if (selectedSpeaker === null) {
      setSelectedSpeaker(keynoteData.length - 1)
    } else if (selectedSpeaker > 0) {
      setSelectedSpeaker(selectedSpeaker - 1)
    } else {
      setSelectedSpeaker(keynoteData.length - 1)
    }
  }

  const handleNextSpeaker = () => {
    if (selectedSpeaker === null) {
      setSelectedSpeaker(0)
    } else if (selectedSpeaker < keynoteData.length - 1) {
      setSelectedSpeaker(selectedSpeaker + 1)
    } else {
      setSelectedSpeaker(0)
    }
  }

  return (
    <KeynotesContainer id="testimonials">
      {!isMobile ? (
        <>
          <Title>Keynote Speakers</Title>
          <Sparkles src="/assets/images/keynotes/sparkles.svg" />

          {selectedSpeaker === 0 ? (
            <SelectedHaveOneCookie
              onClick={() => handleKeynoteClick(null)}
              src="/assets/images/keynotes/selected_have_one_cookie.svg"
            />
          ) : (
            <HaveOneCookie onClick={() => handleKeynoteClick(0)} src="/assets/images/keynotes/have_one_cookie.svg" />
          )}

          {selectedSpeaker === 1 ? (
            <SelectedEatMeCookie
              onClick={() => handleKeynoteClick(null)}
              src="/assets/images/keynotes/selected_eat_me_cookie.svg"
            />
          ) : (
            <EatMeCookie onClick={() => handleKeynoteClick(1)} src="/assets/images/keynotes/eat_me_cookie.svg" />
          )}

          {selectedSpeaker === 2 ? (
            <SelectedDrinkMeBottle
              onClick={() => handleKeynoteClick(null)}
              src="/assets/images/keynotes/selected_drink_me_bottle.svg"
            />
          ) : (
            <DrinkMeBottle onClick={() => handleKeynoteClick(2)} src="/assets/images/keynotes/drink_me_bottle.svg" />
          )}

          {selectedSpeaker === 3 ? (
            <SelectedTryMeCookie
              onClick={() => handleKeynoteClick(null)}
              src="/assets/images/keynotes/selected_try_me_cookie.svg"
            />
          ) : (
            <TryMeCookie onClick={() => handleKeynoteClick(3)} src="/assets/images/keynotes/try_me_cookie.svg" />
          )}

          {selectedSpeaker === 4 ? (
            <SelectedTakeOneCookie
              onClick={() => handleKeynoteClick(null)}
              src="/assets/images/keynotes/selected_take_one_cookie.svg"
            />
          ) : (
            <TakeOneCookie onClick={() => handleKeynoteClick(4)} src="/assets/images/keynotes/take_one_cookie.svg" />
          )}

          <Smoke src="/assets/images/keynotes/smoke.svg" />

          {selectedSpeaker !== null && (
            <NavigationContainer>
              <NavArrow onClick={handlePreviousSpeaker}>&lt;</NavArrow>
              <DotsContainer>
                {keynoteData.map((_, index) => (
                  <Dot key={index} active={selectedSpeaker === index} onClick={() => handleKeynoteClick(index)} />
                ))}
              </DotsContainer>
              <NavArrow onClick={handleNextSpeaker}>&gt;</NavArrow>
            </NavigationContainer>
          )}

          {selectedSpeaker !== null && (
            <TextContainer>
              <Description>{keynoteData[selectedSpeaker].description}</Description>
            </TextContainer>
          )}

          {selectedSpeaker === null && <UnselectedCloud src="/assets/images/keynotes/unselected_cloud.svg" />}
        </>
      ) : (
        <></>
      )}
    </KeynotesContainer>
  )
}

export default Keynotes
