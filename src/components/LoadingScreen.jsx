import yellowDice from '@assets/images/yellowDice.svg'
import redDice from '@assets/images/redDice.svg'
import deer from '@assets/images/deer_top.svg'
import deerShadow from '@assets/images/deer_shadow.svg'
import bear from '@assets/images/bear_top.svg'
import bearShadow from '@assets/images/bear_shadow.svg'
import nugget from '@assets/images/nugget_top.svg'
import nuggetShadow from '@assets/images/nugget_shadow.svg'
import blueCard from '@assets/images/blueCard.svg'
import purpleCard from '@assets/images/purpleCard.svg'
import redCard from '@assets/images/redCard.svg'
import purpleHouse from '@assets/images/purple_house.svg'
import redHouse from '@assets/images/red_house.svg'
import styled, { keyframes } from 'styled-components'
import { Header1, Header3 } from './Typography'
// import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const CONTENT_SCALE = 1
const FADE_DELAY_S = 0.8
const FADE_DURATION_S = 1
const CARD_SLIDE_DELAY_S = 0.3
const CARD_SLIDE_DURATION_S = 1.2
const SUBHEADING = 'Loading'

// Animations
const BackgroundAnimation = keyframes`
  from {
    background-color: #000000;
  }
  to {
    background-color: #244556;
  }
`
const TitleAnimation = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow: -22.94px 18.53px 193.2px 0px #fff8cc80;
  }
`
const ShadowAnimation = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`
const BlueCardAnimation = keyframes`
  from {
    top: -100rem;
    right: -100rem;
    transform: rotate(-45deg)
  }
  to {
    top: -10rem;
    transform: rotate(45deg)
  }
`
const PurpleCardAnimation = keyframes`
  from {
    bottom: -100rem;
    right: -50rem;
  }
  to {
    right: -14rem;
    bottom: -9rem;
  }
`
const RedCardAnimation = keyframes`
  from {
    bottom: -100rem;
    right: -50rem;
  }
  to {
    right: -10rem;
    bottom: -14rem;
  }
`
const HeadingAnimation = keyframes`
  from {
    bottom: -10rem;
  }
  to {
    bottom: 0rem;
  }
`
const SubheadingAnimation = keyframes`
  from {
    opacity: 0%;
  }
  to {
    transform: opacity: 100%;
  }
`

// Structural Components
const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000000;
  animation: ${BackgroundAnimation};
  animation-delay: ${FADE_DELAY_S}s;
  animation-duration: ${FADE_DURATION_S}s;
  animation-fill-mode: forwards;
`
const Content = styled.div`
  position: relative;
  transform: scale(${CONTENT_SCALE});
`

// Title
const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding: 1.2rem;

  background-color: #70605a;
  border-bottom: solid #433f3f 0.3rem;
  border-radius: 0.5rem;
  z-index: 2;

  animation: ${TitleAnimation};
  animation-delay: ${FADE_DELAY_S}s;
  animation-duration: ${FADE_DURATION_S}s;
  animation-fill-mode: forwards;
`
const TitleContent = styled.div`
  height: fit-content;
  width: 489.78px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  padding: 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  border: solid #5b4f49 0.3rem;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
`
const Heading = styled(Header1)`
  position: relative;

  color: black;
  font-size: 6rem;
  font-weight: 800;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  animation: ${HeadingAnimation} 1s ease;
  animation-fill-mode: both;
`
const Subheading = styled.div`
  display: flex;
  flex-direction: row;
`
const SubheadingCharStatic = styled(Header3)`
  color: black;
  font-size: 2rem;
  font-weight: 700;

  animation: ${SubheadingAnimation} 1s ease;
  animation-fill-mode: both;
`
const SubheadingCharInf = styled(Header3)`
  color: black;
  font-size: 2rem;
  font-weight: 700;

  animation: ${SubheadingAnimation} 2s infinite;
  animation-fill-mode: both;
`

// Dice
const YellowDice = styled.img`
  width: 10rem;
  position: absolute;
  top: 0rem;
  left: -12rem;
`
const RedDice = styled.img`
  width: 7rem;
  position: absolute;
  bottom: -9rem;
  left: 50%;
`

// Houses
const PurpleHouse = styled.img`
  width: 7rem;
  position: absolute;
  bottom: -5rem;
  right: -13rem;
  z-index: 3;
`
const RedHouse = styled.img`
  width: 7rem;
  position: absolute;
  bottom: -10rem;
  right: -9rem;
  z-index: 3;
`

// Cards
const BlueCard = styled.img`
  width: 10rem;
  position: absolute;
  right: -10rem;
  top: -10rem;

  animation: ${BlueCardAnimation};
  animation-delay: ${CARD_SLIDE_DELAY_S}s;
  animation-duration: ${CARD_SLIDE_DURATION_S}s;
  animation-fill-mode: both;
  animation-timing-function: ease;
`
const PurpleCard = styled.img`
  width: 10rem;
  position: absolute;
  z-index: 2;
  transform: rotate(-15deg);

  animation: ${PurpleCardAnimation};
  animation-delay: ${CARD_SLIDE_DELAY_S + 0.1}s;
  animation-duration: ${CARD_SLIDE_DURATION_S}s;
  animation-fill-mode: both;
  animation-timing-function: ease;
`
const RedCard = styled.img`
  width: 10rem;
  position: absolute;
  transform: rotate(-45deg);

  animation: ${RedCardAnimation};
  animation-delay: ${CARD_SLIDE_DELAY_S}s;
  animation-duration: ${CARD_SLIDE_DURATION_S}s;
  animation-fill-mode: both;
  animation-timing-function: ease;
`

// Mascot Components
const DeerGroup = styled.div`
  width: 30rem;
  position: absolute;
  top: -8rem;
  left: -4rem;
  transform: rotate(45deg);
`
const Deer = styled.img`
  width: 15rem;
  position: absolute;
  z-index: 2;
`
const DeerShadow = styled.img`
  position: absolute;
  top: -62.5rem;
  left: -122.5rem;
  animation: ${ShadowAnimation};
  animation-delay: ${FADE_DELAY_S}s;
  animation-duration: ${FADE_DURATION_S}s;
  animation-fill-mode: both;
`

const NuggetGroup = styled.div`
  position: absolute;
  top: 2rem;
  right: -4rem;
  transform: rotate(230deg);
`
const Nugget = styled.img`
  width: 7rem;
  height: 7rem;
  position: absolute;
  z-index: 3;
`
const NuggetShadow = styled.img`
  position: absolute;
  top: -11rem;
  right: -48rem;
  transform: scale(0.8);

  animation: ${ShadowAnimation};
  animation-delay: ${FADE_DELAY_S}s;
  animation-duration: ${FADE_DURATION_S}s;
  animation-fill-mode: both;
`

const BearGroup = styled.div`
  position: absolute;
  bottom: 5rem;
  left: -12rem;
`
const Bear = styled.img`
  width: 18rem;
  position: absolute;
  transform: rotate(-30deg);
  z-index: 2;
`
const BearShadow = styled.img`
  position: absolute;
  bottom: -85rem;
  left: -121rem;
  transform: rotate(-15deg) scale(0.9);

  animation: ${ShadowAnimation};
  animation-delay: ${FADE_DELAY_S}s;
  animation-duration: ${FADE_DURATION_S}s;
  animation-fill-mode: both;
`

const LoadingScreen = () => (
  <LoadingScreenContainer>
    <Content>
      <YellowDice src={yellowDice} />
      <RedDice src={redDice} />
      <PurpleHouse src={purpleHouse} />
      <RedHouse src={redHouse} />

      <BlueCard src={blueCard} />
      <PurpleCard src={purpleCard} />
      <RedCard src={redCard} />

      <DeerGroup>
        <Deer src={deer} />
        <DeerShadow src={deerShadow} />
      </DeerGroup>

      <NuggetGroup>
        <Nugget src={nugget} />
        <NuggetShadow src={nuggetShadow} />
      </NuggetGroup>

      <BearGroup>
        <Bear src={bear} />
        <BearShadow src={bearShadow} />
      </BearGroup>

      <TitleContainer>
        <TitleContent>
          <Heading>nwHacks</Heading>
          <Subheading>
            {SUBHEADING.split('').map((c, i) => (
              <SubheadingCharStatic style={{ animationDelay: `calc(1s + calc(.1s * ${i}))` }}>{c}</SubheadingCharStatic>
            ))}
            {'...'.split('').map((c, i) => (
              <SubheadingCharInf style={{ animationDelay: `calc(1s + calc(.1s * ${SUBHEADING.length + i}))` }}>
                {c}
              </SubheadingCharInf>
            ))}
          </Subheading>
        </TitleContent>
      </TitleContainer>
    </Content>
  </LoadingScreenContainer>
)

export default LoadingScreen
