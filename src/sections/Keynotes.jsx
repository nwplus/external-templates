import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const KeynotesContainer = styled.div`
  aspect-ratio: 1512/920;
  height: 100%;
  position: relative;
  width: 100%;
  background: #94d2f500;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 900;
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (393 / 393));
    top: calc(100vw * (230 / 393));
    left: calc(100vw * (0 / 393));
  }
`

const HaveOneCookie = styled.img`
  position: absolute;
  width: calc(100vw * (300 / 1512));
  top: calc(100vw * (130 / 1512));
  left: calc(100vw * (80 / 1512));

  ${hoverJiggleStyles}

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (190 / 393));
    top: calc(100vw * (400 / 393));
    left: calc(100vw * (10 / 393));
    z-index: 1;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (200 / 393));
    top: calc(100vw * (250 / 393));
    left: calc(100vw * (180 / 393));
    z-index: 1;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (120 / 393));
    top: calc(100vw * (470 / 393));
    left: calc(100vw * (230 / 393));
    z-index: 1;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (133 / 393));
    top: calc(100vw * (700 / 393));
    left: calc(100vw * (210 / 393));
    z-index: 1;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (180 / 393));
    top: calc(100vw * (600 / 393));
    left: calc(100vw * (10 / 393));
    z-index: 1;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (420 / 393));
    top: calc(100vw * (600 / 393));
    left: calc(100vw * (-25 / 393));
  }
`

const TextContainer = styled.div`
  position: absolute;
  width: calc(100vw * (451 / 1512));
  top: calc(100vw * (260 / 1512));
  left: calc(100vw * (930 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (240 / 393));
    top: calc(100vw * (650 / 393));
    left: calc(100vw * (78 / 393));
    text-align: center;
  }
`

const Description = styled.p`
  font-family: 'Quicksand';
  font-size: calc(100vw * (18 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (10 / 393));
  }
`

const NavigationContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (20 / 1512));
  top: calc(100vw * (550 / 1512));
  left: calc(100vw * (1050 / 1512));
  width: calc(100vw * (200 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (830 / 393));
    left: calc(100vw * (25 / 393));
    width: calc(100vw * (347 / 393));
    z-index: 5;
    gap: calc(100vw * (90 / 393));
  }
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

const NavArrowLeft = styled.button`
  position: absolute;
  top: calc(100vw * (700 / 393));
  left: calc(100vw * (20 / 393));
  width: calc(100vw * (54 / 393));
  font-size: calc(100vw * (30 / 393));
  height: calc(100vw * (49 / 393));
  padding: calc(100vw * (10 / 393));
  border: none;
  border-radius: calc(100vw * (20 / 393));
  background: linear-gradient(272.85deg, #bbc0e9 -3.43%, #ffffff 98.51%);
  z-index: 5;
  cursor: pointer;
  color: #293a62;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 1.48px;
    background: #d3e9f4ff;
    border-radius: calc(100vw * (18.5 / 393));
    z-index: -1;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }
`

const NavArrowRight = styled.button`
  position: absolute;
  top: calc(100vw * (650 / 393));
  left: calc(100vw * (320 / 393));
  width: calc(100vw * (54 / 393));
  font-size: calc(100vw * (30 / 393));
  height: calc(100vw * (49 / 393));
  padding: calc(100vw * (10 / 393));
  border: none;
  border-radius: calc(100vw * (20 / 393));
  background: linear-gradient(272.85deg, #ffffff -3.43%, #bbc0e9 98.51%);
  z-index: 5;
  cursor: pointer;
  color: #293a62;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 1.48px;
    background: #d3e9f4ff;
    border-radius: calc(100vw * (18.5 / 393));
    z-index: -1;
  }

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

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (10 / 393));
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (10 / 393));
    height: calc(100vw * (10 / 393));
  }
`

// MOBILE SPECIFIC STUFF
const TitleMobile = styled.img`
  position: absolute;
  width: calc(100vw * (325 / 393));
  top: calc(100vw * (100 / 393));
  left: calc(100vw * (35 / 393));
`

const HaveOneUnselected = styled.img`
  position: absolute;
  width: calc(100vw * (120 / 393));
  top: calc(100vw * (250 / 393));
  left: calc(100vw * (30 / 393));
  z-index: 1;
`

const EatMeUnselected = styled.img`
  position: absolute;
  width: calc(100vw * (130 / 393));
  top: calc(100vw * (230 / 393));
  left: calc(100vw * (250 / 393));
  z-index: 1;
`

const TakeOneUnselected = styled.img`
  position: absolute;
  width: calc(100vw * (120 / 393));
  top: calc(100vw * (480 / 393));
  left: calc(100vw * (30 / 393));
  z-index: 1;
`

const TryMeUnselected = styled.img`
  position: absolute;
  width: calc(100vw * (85 / 393));
  top: calc(100vw * (500 / 393));
  left: calc(100vw * (280 / 393));
  z-index: 1;
`

const BottleUnselected = styled.img`
  position: absolute;
  width: calc(100vw * (80 / 393));
  top: calc(100vw * (480 / 393));
  left: calc(100vw * (280 / 393));
  z-index: 1;
`

const SparklesSelected = styled.img`
  position: absolute;
  width: calc(100vw * (393 / 393));
  top: calc(100vw * (110 / 393));
  left: calc(100vw * (0 / 393));
`

const BottleSelected = styled.img`
  position: absolute;
  width: calc(100vw * (200 / 393));
  top: calc(100vw * (260 / 393));
  left: calc(100vw * (120 / 393));
`

const EatMeSelected = styled.img`
  position: absolute;
  width: calc(100vw * (350 / 393));
  top: calc(100vw * (210 / 393));
  left: calc(100vw * (20 / 393));
`

const HaveOneSelected = styled.img`
  position: absolute;
  width: calc(100vw * (240 / 393));
  top: calc(100vw * (320 / 393));
  left: calc(100vw * (80 / 393));
`

const TakeOneSelected = styled.img`
  position: absolute;
  width: calc(100vw * (280 / 393));
  top: calc(100vw * (310 / 393));
  left: calc(100vw * (60 / 393));
`

const TryMeSelected = styled.img`
  position: absolute;
  width: calc(100vw * (212 / 393));
  top: calc(100vw * (310 / 393));
  left: calc(100vw * (92 / 393));
`

const TakeOneUnselectedTwo = styled.img`
  position: absolute;
  width: calc(100vw * (120 / 393));
  top: calc(100vw * (245 / 393));
  left: calc(100vw * (250 / 393));
  z-index: 1;
`

const TryMeUnselectedTwo = styled.img`
  position: absolute;
  width: calc(100vw * (90 / 393));
  top: calc(100vw * (485 / 393));
  left: calc(100vw * (40 / 393));
  z-index: 1;
`

const EatMeUnselectedTwo = styled.img`
  position: absolute;
  width: calc(100vw * (130 / 393));
  top: calc(100vw * (230 / 393));
  left: calc(100vw * (20 / 393));
  rotate: 330deg;
  z-index: 1;
`

const keynoteData = [
  {
    id: 'have-one-cookie',
    name: '',
    company: '',
    description:
      '**Swetha Moturu** is a Principal Software Engineer at Microsoft, based in Vancouver. With 10+ years in industry, she has led high scale, customer facing systems, scaling Android device usage from thousands to hundreds of thousands. Swetha is passionate about mentoring engineers, sharing real world industry lessons with students and helping students bridge academic learning with real world software engineering.',
  },
  {
    id: 'eat-me-cookie',
    name: '',
    company: '',
    description:
      '**Sasha Pang** is the Lead Product Manager on Voice Search at Google, with over 15 years of experience in the tech industry. Her previous work includes online learning platforms, patient-centered health applications, and fitness wearables. In addition to building products on the cutting edge of innovation, Sasha has established multiple programs that help individuals from underrepresented backgrounds thrive in tech. Outside of her professional life, she is a mom to two girls and marathoner. Sasha holds an MBA with High Distinction from Harvard Business School, and an A.B. in Government from Harvard College.',
  },
  {
    id: 'drink-me-bottle',
    name: '',
    company: '',
    description:
      '**Ariel Cao** is the Student Life Manager for Pre-University Programs at UBC Extended Learning, overseeing the planning, delivery, and evaluation of student life components of pre-university programs for Canadian and international high school students. With a BA in Visual Arts and Computer Science from UBC, an MPhil from Cambridge, and an EdM from Harvard, Ariel combines her academic expertise with a passion for inclusivity and access in education. Ariel is also the founder of Girls in STEAM, a nonprofit that merges art and STEM education to empower underrepresented groups and foster a more diverse tech community.',
  },
  {
    id: 'try-me-cookie',
    name: '',
    company: '',
    description:
      "**Kitty Lam** is a Senior Analytics Engineer at Aritzia, with over 15 years of experience building end-to-end data solutions. At Aritzia, she designs and builds data models that power Performance Marketing and eCommerce Analytics. Kitty holds a BSc in Computer Science and an MEng in Electrical Engineering, and previously served as the Workday Data Conversion Technical Lead for UBC's Integrated Renewal Program. She brings a deep passion for scalable data pipelines, thoughtful engineering, and mentoring the next generation of creators.",
  },
  {
    id: 'take-one-cookie',
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

  const renderDescription = text => {
    const parts = text.split(/\*\*(.*?)\*\*/g)
    return parts.map((part, index) => (index % 2 === 1 ? <strong key={`bold-${part}`}>{part}</strong> : part))
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
                {keynoteData.map((keynote, index) => (
                  <Dot key={keynote.id} active={selectedSpeaker === index} onClick={() => handleKeynoteClick(index)} />
                ))}
              </DotsContainer>
              <NavArrow onClick={handleNextSpeaker}>&gt;</NavArrow>
            </NavigationContainer>
          )}

          {selectedSpeaker !== null && (
            <TextContainer>
              <Description>{renderDescription(keynoteData[selectedSpeaker].description)}</Description>
            </TextContainer>
          )}

          {selectedSpeaker === null && <UnselectedCloud src="/assets/images/keynotes/unselected_cloud.svg" />}
        </>
      ) : (
        <>
          {selectedSpeaker === null && (
            <>
              <TitleMobile src="/assets/images/keynotes/mobile/title_unselected.svg" />
              <EatMeCookie
                onClick={() => handleKeynoteClick(1)}
                src="/assets/images/keynotes/mobile/eat_me_mobile.svg"
              />
              <HaveOneCookie
                onClick={() => handleKeynoteClick(0)}
                src="/assets/images/keynotes/mobile/have_one_mobile.svg"
              />
              <DrinkMeBottle
                onClick={() => handleKeynoteClick(2)}
                src="/assets/images/keynotes/mobile/bottle_mobile.svg"
              />
              <TakeOneCookie
                onClick={() => handleKeynoteClick(4)}
                src="/assets/images/keynotes/mobile/take_one_mobile.svg"
              />
              <TryMeCookie
                onClick={() => handleKeynoteClick(3)}
                src="/assets/images/keynotes/mobile/try_me_mobile.svg"
              />
              <Sparkles src="/assets/images/keynotes/mobile/sparkles.svg" />
            </>
          )}
          {selectedSpeaker !== null && (
            <>
              <TitleMobile src="/assets/images/keynotes/mobile/title_selected.svg" />
              <>
                <NavArrowLeft onClick={handlePreviousSpeaker}>&lt;</NavArrowLeft>
                <NavigationContainer>
                  <DotsContainer>
                    {keynoteData.map((keynote, index) => (
                      <Dot
                        key={keynote.id}
                        active={selectedSpeaker === index}
                        onClick={() => handleKeynoteClick(index)}
                      />
                    ))}
                  </DotsContainer>
                </NavigationContainer>
                <NavArrowRight onClick={handleNextSpeaker}>&gt;</NavArrowRight>
              </>
              {/* UNSELECTED STATES */}
              {selectedSpeaker !== 0 && (
                <HaveOneUnselected
                  onClick={() => handleKeynoteClick(0)}
                  src="/assets/images/keynotes/mobile/have_one_unselected.svg"
                />
              )}
              {selectedSpeaker >= 2 && (
                <EatMeUnselected
                  onClick={() => handleKeynoteClick(1)}
                  src="/assets/images/keynotes/mobile/eat_me_unselected.svg"
                />
              )}
              {selectedSpeaker !== 2 && (
                <BottleUnselected
                  onClick={() => handleKeynoteClick(2)}
                  src="/assets/images/keynotes/mobile/bottle_unselected.svg"
                />
              )}
              {(selectedSpeaker === 2 || selectedSpeaker === 3) && (
                <TakeOneUnselected
                  onClick={() => handleKeynoteClick(4)}
                  src="/assets/images/keynotes/mobile/take_one_unselected.svg"
                />
              )}
              {selectedSpeaker === 2 && (
                <TryMeUnselected
                  onClick={() => handleKeynoteClick(3)}
                  src="/assets/images/keynotes/mobile/try_me_unselected.svg"
                />
              )}
              {selectedSpeaker < 2 && (
                <TakeOneUnselectedTwo
                  onClick={() => handleKeynoteClick(4)}
                  src="/assets/images/keynotes/mobile/take_one_unselected.svg"
                />
              )}
              {(selectedSpeaker < 2 || selectedSpeaker === 4) && (
                <TryMeUnselectedTwo
                  onClick={() => handleKeynoteClick(3)}
                  src="/assets/images/keynotes/mobile/try_me_unselected.svg"
                />
              )}
              {selectedSpeaker === 0 && (
                <EatMeUnselectedTwo
                  onClick={() => handleKeynoteClick(1)}
                  src="/assets/images/keynotes/mobile/eat_me_unselected.svg"
                />
              )}
              {/* SELECTED STATES */}
              <SparklesSelected src="/assets/images/keynotes/mobile/sparkles_selected.svg" />
              {selectedSpeaker === 4 && (
                <TakeOneSelected
                  onClick={() => handleKeynoteClick(null)}
                  src="/assets/images/keynotes/mobile/take_one_selected.svg"
                />
              )}
              {selectedSpeaker === 3 && (
                <TryMeSelected
                  onClick={() => handleKeynoteClick(null)}
                  src="/assets/images/keynotes/mobile/try_me_selected.svg"
                />
              )}
              {selectedSpeaker === 2 && (
                <BottleSelected
                  onClick={() => handleKeynoteClick(null)}
                  src="/assets/images/keynotes/mobile/bottle_selected.svg"
                />
              )}
              {selectedSpeaker === 1 && (
                <EatMeSelected
                  onClick={() => handleKeynoteClick(null)}
                  src="/assets/images/keynotes/mobile/eat_me_selected.svg"
                />
              )}
              {selectedSpeaker === 0 && (
                <HaveOneSelected
                  onClick={() => handleKeynoteClick(null)}
                  src="/assets/images/keynotes/mobile/have_one_selected.svg"
                />
              )}
              <Smoke src="/assets/images/keynotes/smoke.svg" />
              <TextContainer>
                <Description>{renderDescription(keynoteData[selectedSpeaker].description)}</Description>
              </TextContainer>
            </>
          )}
        </>
      )}
    </KeynotesContainer>
  )
}

export default Keynotes
